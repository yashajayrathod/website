"use client";
import React, { useState } from "react";
import NePassengerPanel from "./NePassengerPanel";
import NeDriverPanel from "./NeDriverPanel";
import NeAdminPanel from "./NeAdminPanel";
import Image from "next/image";
function NeTaxi() {
  const [activePanel, setActivePanel] = useState("Patient");

  const renderPanel = () => {
    switch (activePanel) {
      case "Patient":
        return <NePassengerPanel />;
      case "driver":
        return <NeDriverPanel />;
      case "admin":
        return <NeAdminPanel />;
      // Add more cases for other panels if needed
      default:
        return null;
    }
  };

  return (
    <section>
      {/* Navigation bar */}
      <div className=" top-0 z-10 mb-4 ml-1 mr-1 mt-10 flex flex-wrap justify-between bg-white text-4xl font-bold dark:bg-slate-900">
        <button
          className={`panel-button ${
            activePanel === "Patient" ? "active" : ""
          }`}
          onClick={() => setActivePanel("Patient")}
        >
          <Image
            src="/images/nemt/patient.png"
            alt="Passenger Icon"
            width={90} // Adjust width and height as needed
            height={90}
            className="mx-auto mb-1 ml-3 h-20 w-20 rounded-full border border-gray-400 p-1" // Adjust styling as needed
          />
          Patient
        </button>
        <button
          className={`panel-button ${activePanel === "driver" ? "active" : ""}`}
          onClick={() => setActivePanel("driver")}
        >
          <Image
            src="/images/taxi/driver.png"
            alt="Driver Icon"
            width={90} // Adjust width and height as needed
            height={90}
            className="mx-auto mb-1 ml-3 h-20 w-20 rounded-full border border-gray-400 p-1" // Adjust styling as needed
          />
          Driver
        </button>
        <button
          className={`panel-button ${activePanel === "admin" ? "active" : ""}`}
          onClick={() => setActivePanel("admin")}
        >
          <Image
            src="/images/taxi/admin.png"
            alt="Admin Icon"
            width={90} // Adjust width and height as needed
            height={90}
            className="mx-auto mb-1 ml-5 h-20 w-20 rounded-full border border-gray-400 p-1" // Adjust styling as needed
          />
          Admin Panel
        </button>
      </div>
      {/* Render active panel */}
      <div>{renderPanel()}</div>

      <style jsx>{`
        .panel-button {
          margin-right: 20px;
          border-bottom: none;
          padding-bottom: 5px;
          font-size: 1.2rem;
          transition: border-bottom 0.3s ease-in-out;
        }
        .panel-button.active {
          border-bottom: 2px solid blue;
        }
      `}</style>
    </section>
  );
}

export default NeTaxi;
