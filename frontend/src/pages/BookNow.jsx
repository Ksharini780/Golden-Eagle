import { useState } from "react";

function BookNow() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    service: "Cleaning",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    alert("Your booking request has been sent to the owner!");
    // Later you’ll integrate backend + email sending
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
      <h2 className="text-3xl font-bold mb-6">Book a Service</h2>
      <form
        onSubmit={handleSubmit}
        className="bg-gray-900 p-6 rounded-lg shadow-lg w-96 space-y-4"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="w-full p-2 rounded bg-gray-800 text-white"
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          className="w-full p-2 rounded bg-gray-800 text-white"
          onChange={handleChange}
          required
        />
        <textarea
          name="address"
          placeholder="Address"
          className="w-full p-2 rounded bg-gray-800 text-white"
          onChange={handleChange}
          required
        ></textarea>
        <select
          name="service"
          className="w-full p-2 rounded bg-gray-800 text-white"
          onChange={handleChange}
        >
          <option>Cleaning</option>
          <option>Maintenance</option>
          <option>Pest Control</option>
          <option>Electrical Work</option>
        </select>
        <button
          type="submit"
          className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-2 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default BookNow;
