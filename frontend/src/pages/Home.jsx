import React, { useState, useRef, useEffect } from "react";
import "./Home.css";
import "./BookNow.css";

/* ============================================================
      HEAVY DISTORTION CAPTCHA HOOK (inserted after imports)
   ============================================================ */

const useHeavyCaptcha = () => {
  const [captchaCode, setCaptchaCode] = useState("");
  const canvasRef = useRef(null);

  const generateCaptchaText = () => {
    const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
    let t = "";
    for (let i = 0; i < 5; i++)
      t += chars[Math.floor(Math.random() * chars.length)];
    return t;
  };

  const drawCaptcha = (text) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    const w = 150;
    const h = 50;

    canvas.width = w;
    canvas.height = h;

    // Background
    ctx.fillStyle = "#f0f0f0";
    ctx.fillRect(0, 0, w, h);

    // Background noise dots
    for (let i = 0; i < 60; i++) {
      ctx.fillStyle = `rgba(0,0,0,${Math.random() * 0.15})`;
      ctx.beginPath();
      ctx.arc(
        Math.random() * w,
        Math.random() * h,
        Math.random() * 2,
        0,
        Math.PI * 2
      );
      ctx.fill();
    }

    // Characters
    ctx.font = "28px Arial";
    ctx.textBaseline = "middle";

    for (let i = 0; i < text.length; i++) {
      const char = text[i];
      ctx.save();

      let angle = (Math.random() * 50 - 25) * (Math.PI / 180);
      ctx.translate(25 + i * 25, 25);
      ctx.rotate(angle);

      ctx.fillStyle = `rgb(${100 + Math.random() * 100}, ${
        50 + Math.random() * 150
      }, ${100 + Math.random() * 150})`;
      ctx.fillText(char, -8, 0);

      ctx.restore();
    }

    // Strike-through lines
    for (let i = 0; i < 3; i++) {
      ctx.strokeStyle = `rgba(0,0,0,${0.3 + Math.random() * 0.4})`;
      ctx.lineWidth = 2 + Math.random() * 2;
      ctx.beginPath();
      ctx.moveTo(0, Math.random() * h);
      ctx.lineTo(w, Math.random() * h);
      ctx.stroke();
    }

    // Extra noise lines
    for (let i = 0; i < 6; i++) {
      ctx.strokeStyle = `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${
        Math.random() * 255
      }, 0.3)`;
      ctx.beginPath();
      ctx.moveTo(Math.random() * w, Math.random() * h);
      ctx.lineTo(Math.random() * w, Math.random() * h);
      ctx.stroke();
    }
  };

  const refreshCaptcha = () => {
    const newText = generateCaptchaText();
    setCaptchaCode(newText);
    setTimeout(() => drawCaptcha(newText), 30);
  };

  useEffect(() => {
    refreshCaptcha();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { captchaCode, canvasRef, refreshCaptcha };
};

/* ============================================================
                        HOME COMPONENT
   ============================================================ */

function Home() {
  /* Form states */
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    countryCode: "+65",
    phone: "",
    cleaningSubService: "",
    marineSubService: "",
    message: "",
  });

  const [selectedTop, setSelectedTop] = useState({
    cleaning: false,
    marine: false,
  });

  /* CAPTCHA STATES */
  const { captchaCode, canvasRef, refreshCaptcha } = useHeavyCaptcha();
  const [captchaInput, setCaptchaInput] = useState("");
  const [captchaError, setCaptchaError] = useState("");

  const cleaningOptions = [
    { value: "office_building", label: "Office & Building Cleaning" },
    { value: "residential", label: "Condominium & Residential Cleaning" },
    { value: "post_renovation", label: "Post-Renovation & Deep Cleaning" },
    { value: "floor_polishing", label: "Floor Polishing" },
    { value: "carpet_cleaning", label: "Carpet Cleaning" },
  ];

  const marineOptions = [
    { value: "piers", label: "Piers" },
    { value: "docks", label: "Docks" },
    { value: "harbours", label: "Harbours" },
    { value: "wharves", label: "Wharves" },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
  };

  const toggleTop = (key) => {
    setSelectedTop((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));

    // reset dependent select when toggled off
    if (key === "cleaning" && selectedTop.cleaning) {
      setFormData((p) => ({ ...p, cleaningSubService: "" }));
    }
    if (key === "marine" && selectedTop.marine) {
      setFormData((p) => ({ ...p, marineSubService: "" }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    /* CAPTCHA VALIDATION */
    if (captchaInput.trim().toUpperCase() !== captchaCode.toUpperCase()) {
      setCaptchaError("Captcha does not match. Please try again.");
      refreshCaptcha();
      return;
    }
    setCaptchaError("");

    if (!selectedTop.cleaning && !selectedTop.marine) {
      alert("Please choose at least one service category.");
      return;
    }
    if (selectedTop.cleaning && !formData.cleaningSubService) {
      alert("Please select a Cleaning sub-service.");
      return;
    }
    if (selectedTop.marine && !formData.marineSubService) {
      alert("Please select a Marine & Construction sub-service.");
      return;
    }
    if (!formData.name || !formData.email || !formData.phone) {
      alert("Please fill in name, email and phone.");
      return;
    }

    const chosen = [];
    if (selectedTop.cleaning) {
      chosen.push(
        `Cleaning: ${
          cleaningOptions.find((o) => o.value === formData.cleaningSubService)
            ?.label
        }`
      );
    }
    if (selectedTop.marine) {
      chosen.push(
        `Marine & Construction: ${
          marineOptions.find((o) => o.value === formData.marineSubService)
            ?.label
        }`
      );
    }

    const payload = {
      name: formData.name,
      email: formData.email,
      phone: `${formData.countryCode} ${formData.phone}`,
      services: chosen,
      message: formData.message,
    };

    console.log("Submitting booking:", payload);
    alert(`Thank you, ${formData.name}! Your booking has been received.`);

    setFormData({
      name: "",
      email: "",
      countryCode: "+65",
      phone: "",
      cleaningSubService: "",
      marineSubService: "",
      message: "",
    });
    setSelectedTop({ cleaning: false, marine: false });
    setCaptchaInput("");
    refreshCaptcha();
  };

  /* RETURN UI */
  return (
    <section className="home-cont bg-black text-lightgray min-h-screen flex flex-col justify-center items-center text-center px-6 ">
      <div className="title-container">
        <div className="title-sub-cont-1">
          <div className="max-w-3xl">
            <img
              src="/logo.png"
              alt="Golden Eagle Logo"
              className="logo mx-auto mb-4"
            />

            <div className="text-center mb-6">
              <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-wide">
                GOLDEN EAGLE{" "}
                <span className="block text-2xl md:text-3xl text-gray-300 font-semibold mt-1">
                  SOLUTIONS
                </span>
              </h2>
              <p className="text-gold font-semibold mt-2 text-lg md:text-xl tracking-wider">
                EXCELLENCE IN EVERY TASK
              </p>
            </div>
          </div>
        </div>

        <div className="title-sub-cont-2">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gold">
            Welcome to Golden Eagle Solutions
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8">
            Premium cleaning and maintenance services ensuring lasting quality,
            safety, and excellence.
          </p>

          <div className="text-center btn-cont">
            <a href="#booknow-section" className="booknow-btn text-center">
              Book a Service
            </a>
          </div>
        </div>
      </div>

      <div className="mt-10 mid-img">
        <img
          src="/home-img.jpg"
          alt="Golden Eagle Cleaning Team"
          className="rounded-xl shadow-lg mx-auto mid-img-el"
        />
      </div>

      {/* Intro Section */}
      <div className="intro-cont flex justify-center px-4 md:px-0">
        <div className="intro-wrapper mt-20 p-6 text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-gold mb-6 text-center md:text-left">
            Your Trusted Cleaning Partner in Singapore
          </h2>

          <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
            Golden Eagle Cleaning Solution delivers{" "}
            <span className="text-gold font-semibold">
              professional, reliable, and high-quality
            </span>{" "}
            cleaning services across Singapore — ensuring spotless, safe, and
            hygienic environments.
          </p>

          <p className="text-gray-400 mt-4 text-base md:text-lg">
            From commercial offices and residential properties to industrial and
            marine facilities, our experienced team ensures excellence, trust,
            and consistency in every task.
          </p>

          <div className="points-cont mt-6 space-y-2">
            <p>
              <span className="point-icon">🟊</span> Office & commercial cleaning
            </p>
            <p>
              <span className="point-icon">🟊</span> Residential & condominium
              cleaning
            </p>
            <p>
              <span className="point-icon">🟊</span> Industrial & marine
              maintenance
            </p>
            <p>
              <span className="point-icon">🟊</span> Deep cleaning &
              post-renovation care
            </p>
          </div>
        </div>
      </div>

      <div className="mid-container">
        {/* Service cards */}
        <div className="mid-cont-1">
          <div className=" grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6 rounded-xl hover:border-gold transition">
              <h3 className="text-2xl font-semibold text-gold mb-2">
                Professional Staff
              </h3>
              <p className="text-gray-400">
                Our trained team ensures top-quality service.
              </p>
            </div>

            <div className="p-6 rounded-xl hover:border-gold transition">
              <h3 className="text-2xl font-semibold text-gold mb-2">
                Reliable Service
              </h3>
              <p className="text-gray-400">
                We deliver on time with consistent results.
              </p>
            </div>

            <div className="p-6 rounded-xl hover:border-gold transition">
              <h3 className="text-2xl font-semibold text-gold mb-2">
                Affordable Pricing
              </h3>
              <p className="text-gray-400">
                High-quality cleaning at great value.
              </p>
            </div>
          </div>
        </div>

        {/* BOOK NOW SECTION */}
        <div className="mid-cont-2">
          <div
            id="booknow-section"
            className="mt-20 w-full flex justify-center mb-20 px-4 md:px-6"
          >
            <div className="booknow-container">
              <h2 className="booknow-title">Book a Service</h2>

              <form className="booknow-form" onSubmit={handleSubmit}>
                {/* Name */}
                <div className="form-group-left">
                  <label>Name:</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Email */}
                <div className="form-group-left">
                  <label>Email:</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Phone */}
                <div className="form-group-left">
                  <label>Phone:</label>
                  <div className="phone-wrapper">
                    <select
                      name="countryCode"
                      value={formData.countryCode}
                      onChange={handleChange}
                    >
                      <option value="+65">+65</option>
                      <option value="+91">+91</option>
                      <option value="+1">+1</option>
                      <option value="+44">+44</option>
                      <option value="+61">+61</option>
                    </select>

                    <input
                      type="tel"
                      name="phone"
                      placeholder="Enter phone number"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                {/* Category Buttons */}
                <div className="form-group">
                  <label>Service category:</label>
                  <div className="top-toggle-row">
                    <button
                      type="button"
                      className={`top-toggle ${
                        selectedTop.cleaning ? "active" : ""
                      }`}
                      onClick={() => toggleTop("cleaning")}
                    >
                      Cleaning Services
                    </button>

                    <button
                      type="button"
                      className={`top-toggle ${
                        selectedTop.marine ? "active" : ""
                      }`}
                      onClick={() => toggleTop("marine")}
                    >
                      Marine & Construction
                    </button>
                  </div>
                </div>

                {/* Cleaning dropdown */}
                {selectedTop.cleaning && (
                  <div className="form-group-left">
                    <label>Cleaning - Select service:</label>
                    <select
                      name="cleaningSubService"
                      value={formData.cleaningSubService}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select a cleaning service</option>
                      {cleaningOptions.map((o) => (
                        <option key={o.value} value={o.value}>
                          {o.label}
                        </option>
                      ))}
                    </select>
                  </div>
                )}

                {/* Marine dropdown */}
                {selectedTop.marine && (
                  <div className="form-group-left">
                    <label>Marine & Construction - Select service:</label>
                    <select
                      name="marineSubService"
                      value={formData.marineSubService}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select a marine service</option>
                      {marineOptions.map((o) => (
                        <option key={o.value} value={o.value}>
                          {o.label}
                        </option>
                      ))}
                    </select>
                  </div>
                )}

                {/* Message */}
                <div className="form-group-left">
                  <label>Message:</label>
                  <textarea
                    name="message"
                    placeholder="Additional details or requests"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                  />
                </div>

                {/* ===== CAPTCHA UI (UPDATED WITH TOP-RIGHT REDO BUTTON) ===== */}
                <div className="form-group captcha-wrapper">
                  <label>Captcha Verification:</label>

                  <div className="captcha-box">
                    <canvas ref={canvasRef} className="captcha-canvas"></canvas>

                    <button
                      type="button"
                      className="captcha-redo-btn"
                      onClick={refreshCaptcha}
                      title="Refresh Captcha"
                    >
                      ↻
                    </button>
                  </div>
                  <div className="captcha-field">
                    <input
                      type="text"
                      className="captcha-input"
                      placeholder="Enter captcha text"
                      value={captchaInput}
                      onChange={(e) => setCaptchaInput(e.target.value)}
                      required
                    />
                  </div>

                  {captchaError && (
                    <p className="captcha-error">{captchaError}</p>
                  )}
                </div>

                {/* Submit */}
                <button type="submit" className="book-btn">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
