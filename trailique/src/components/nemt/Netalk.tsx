"use client";
import React, { useState } from "react";

function NeTalk() {
  const [showContactForm, setShowContactForm] = useState(false);

  const toggleContactForm = () => {
    setShowContactForm(!showContactForm);
  };

  return (
    <div className="min-h-30 bg-cyan-950">
      <div className="mt-10 flex justify-center gap-8">
        {/* Title and Subtitle */}
        <div className="mb-10 mt-20 text-center">
          <h2 className="text-4xl font-bold text-white">Talk to an expert</h2>
          <p className="mt-3 text-lg text-white">
            Connect with us to start transforming the impact, speed and delivery
            of IT.
          </p>
          {/* Button with anchor tag */}
          <a href="/contact-us">
            <button className="mt-4 rounded bg-green-500 px-6 py-2 text-white transition-colors duration-300 hover:bg-blue-600">
              Contact Us
            </button>
          </a>
        </div>
      </div>

      {/* Contact Form */}
      {showContactForm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="rounded-lg bg-white p-8 shadow-lg">
            <h2 className="mb-4 text-xl font-semibold">Contact Form</h2>
            {/* Your contact form component or content */}
            <form>
              {/* Form fields go here */}
              <button
                type="button"
                className="mt-4 rounded bg-blue-500 px-6 py-2 text-white transition-colors duration-300 hover:bg-blue-600"
                onClick={toggleContactForm}
              >
                Close
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default NeTalk;
