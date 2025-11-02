// Updated Home.jsx with BookNow form injected below Affordable Pricing section
import React from "react";
import BookNow from "./BookNow";

function Home() {
  return (
    <section className="bg-black text-lightgray min-h-screen flex flex-col justify-center items-center text-center px-6 ">
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

        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gold">
          Welcome to Golden Eagle Solutions
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-8">
          Premium cleaning and maintenance solutions delivered with excellence.
        </p>
        <a
          href="#booknow-section"
          className="bg-gold text-black font-semibold py-3 px-8 rounded-lg hover:bg-yellow-400 transition"
        >
          Book a Service
        </a>

        <div className="mt-10">
          <img
            src="/cleaning-team.png"
            alt="Golden Eagle Cleaning Team"
            className="rounded-xl shadow-lg mx-auto w-full max-w-4xl"
          />
        </div>
      </div>

      <div className="mt-20 grid md:grid-cols-3 gap-8 text-center">
        <div className="p-6 border border-gray-700 rounded-xl hover:border-gold transition">
          <h3 className="text-2xl font-semibold text-gold mb-2">
            Professional Staff
          </h3>
          <p className="text-gray-400">
            Our trained team ensures top-quality service and satisfaction.
          </p>
        </div>
        <div className="p-6 border border-gray-700 rounded-xl hover:border-gold transition">
          <h3 className="text-2xl font-semibold text-gold mb-2">
            Reliable Service
          </h3>
          <p className="text-gray-400">
            We deliver on time with consistent and trustworthy results.
          </p>
        </div>
        <div className="p-6 border border-gray-700 rounded-xl hover:border-gold transition">
          <h3 className="text-2xl font-semibold text-gold mb-2">
            Affordable Pricing
          </h3>
          <p className="text-gray-400">
            High-quality cleaning at rates that suit every budget.
          </p>
        </div>
      </div>

      {/* Book Now section here */}
      <div
        id="booknow-section"
        className="mt-20 w-full flex justify-center mb-20"
      >
        <BookNow />
      </div>
    </section>
  );
}

export default Home;
