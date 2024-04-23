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
      <div className=" top-0 z-10 mb-4 ml-1 mr-1 mt-10 flex justify-between bg-white text-4xl font-bold  dark:bg-slate-900">
        <button
          style={{
            marginBottom: "10px",
            marginRight: "10px",
            borderBottom:
              activePanel === "passenger" ? "2px solid blue" : "none",
            paddingBottom: "5px",
            fontSize: "1.2rem",
          }}
          onClick={() => setActivePanel("passenger")}
        >
          <Image
            width={300}
            height={300}
            src="/images/babysitter/parent.jpeg"
            alt="Passenger Icon"
            className="center mb-1 ml-3 h-20 w-20 rounded-full border border-gray-400 p-1 "
          />
          Parent
        </button>
        <button
          style={{
            marginBottom: "10px",
            marginRight: "10px",
            borderBottom: activePanel === "driver" ? "2px solid blue" : "none",
            paddingBottom: "5px",
            fontSize: "1.2rem",
          }}
          onClick={() => setActivePanel("driver")}
        >
          <Image
            width={300}
            height={300}
            src="/images/babysitter/babysitter.jpeg"
            alt="Driver Icon"
            className="center mb-1 ml-3 h-20 w-20 rounded-full border border-gray-400 p-1 "
          />
          Babysitter
        </button>
        <button
          style={{
            marginBottom: "10px",
            borderBottom: activePanel === "admin" ? "2px solid blue" : "none",
            paddingBottom: "5px",
            fontSize: "1.2rem",
          }}
          onClick={() => setActivePanel("admin")}
        >
          <Image
            width={300}
            height={300}
            src="/images/babysitter/service provider.jpeg"
            alt="Admin Icon"
            className="center mb-1 ml-6 mt-6 h-20 w-20 rounded-full border border-gray-400 p-1 "
          />
          Admin Dashboard
        </button>
        {/* Add buttons for other panels */}
      </div>
      {/* Render active panel */}
      <div>{renderPanel()}</div>
    </section>
  );
}

export default Event;
