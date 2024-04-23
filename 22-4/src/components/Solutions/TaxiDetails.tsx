"use client";
import React, { useState } from "react";
import PassengerPanel from "./PassengerPanel";
import DriverPanel from "./DriverPanel";
import AdminPanel from "./AdminPanel";
import Image from "next/image";

function Taxi() {
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
      <div className="top-0 z-10 mx-1 mb-4 mt-10 flex flex-wrap justify-between bg-white text-4xl font-bold dark:bg-slate-900">
        <button
          style={{
            marginRight: "10px",
            marginBottom: "10px",
            borderBottom:
              activePanel === "passenger" ? "2px solid blue" : "none",
            paddingBottom: "5px",
            fontSize: "1rem",
          }}
          onClick={() => setActivePanel("passenger")}
        >
          <Image
            src="/images/taxi/passenger.png"
            alt="Passenger Icon"
            width={90}
            height={90}
            className="mx-auto mb-1 h-20 w-20 rounded-full border border-gray-400 p-1"
          />
          Passenger
        </button>
        <button
          style={{
            marginRight: "5px", // Adjusted margin
            marginBottom: "10px",
            borderBottom: activePanel === "driver" ? "2px solid blue" : "none",
            paddingBottom: "5px",
            fontSize: "1rem",
          }}
          onClick={() => setActivePanel("driver")}
        >
          <Image
            src="/images/taxi/driver.png"
            alt="Driver Icon"
            width={90}
            height={90}
            className="mx-auto mb-1 h-20 w-20 rounded-full border border-gray-400 p-1"
          />
          Driver
        </button>
        <button
          style={{
            marginRight: "5px", // Adjusted margin
            marginBottom: "10px",
            borderBottom: activePanel === "admin" ? "2px solid blue" : "none",
            paddingBottom: "5px",
            fontSize: "1rem",
          }}
          onClick={() => setActivePanel("admin")}
        >
          <Image
            src="/images/taxi/admin.png"
            alt="Admin Icon"
            width={90}
            height={90}
            className="mx-auto mb-1 h-20 w-20 rounded-full border border-gray-400 p-1"
          />
          Admin Panel
        </button>
        {/* Add buttons for other panels */}
      </div>
      {/* Render active panel */}
      <div>{renderPanel()}</div>
    </section>
  );
}

export default Taxi;
