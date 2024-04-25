"use client";
import React, { useState } from "react";
import PassengerPanel from "./PassengerPanel";
import DriverPanel from "./DriverPanel";
import AdminPanel from "./AdminPanel";
import Image from "next/image";

function Event() {
  const [activePanel, setActivePanel] = useState("passenger");

  const renderPanel = () => {
    switch (activePanel) {
      case "passenger":
        return <PassengerPanel />;
      case "driver":
        return <DriverPanel />;
      case "admin":
        return <AdminPanel />;
      // Add more cases for other panels if needed
      default:
        return null;
    }
  };

  return (
    <section>
      {/* Navigation bar */}
      <div className="sticky top-0 z-10 mb-4 ml-10 mr-10 mt-10 flex flex-wrap justify-between bg-white text-4xl font-bold dark:bg-slate-900">
        <button
          className={`panel-button ${
            activePanel === "passenger" ? "active" : ""
          }`}
          onClick={() => setActivePanel("passenger")}
        >
          <Image
            width={300}
            height={300}
            src="/images/digital/Customer.jpeg"
            
            alt="Passenger Icon"
            className="center mb-1 ml-7 h-20 w-20 rounded-full p-1 "
          />
          Customer App
        </button>
        <button
          className={`panel-button ${activePanel === "driver" ? "active" : ""}`}
          onClick={() => setActivePanel("driver")}
        >
          <Image
            width={300}
            height={300}
            
            src="/images/digital/Pharma.jpeg"
            alt="Driver Icon"
            className="mb-1 ml-3 h-20 w-20 rounded-full p-1"
          />
          Pharmacist App
        </button>
        <button
          className={`panel-button ${activePanel === "admin" ? "active" : ""}`}
          onClick={() => setActivePanel("admin")}
        >
          <Image
            width={300}
            height={300}
            src="/images/digital/admin.jpeg"
            
            alt="Admin Icon"
            className="mb-1 ml-5 h-20 w-20 rounded-full p-1"
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

export default Event;
