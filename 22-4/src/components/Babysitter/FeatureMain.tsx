"use client";
import React, { useState } from "react";
import PassengerApp from "./PassengerApp";
import DriverApp from "./DriverApp";
import AdminApp from "./AdminApp";
import Image from "next/image";

function FeatureMain() {
  const [activePanel, setActivePanel] = useState("passenger");

  const renderPanel = () => {
    switch (activePanel) {
      case "passenger":
        return <PassengerApp />;
      case "driver":
        return <DriverApp />;
      case "admin":
        return <AdminApp />;
      // Add more cases for other panels if needed
      default:
        return null;
    }
  };

  return (
    <section>
      <div className="center sticky top-0 z-10 mb-4 ml-4 mr-4 mt-10 bg-white text-center text-2xl font-bold dark:bg-slate-900 md:ml-20 md:mr-20 md:text-4xl">
        <h1>ADDITIONAL FEATURES </h1>
      </div>

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
            className="center mb-1 ml-1 h-20 w-20 rounded-full border border-gray-400 p-1 "
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
            className="center mb-1 ml-5 h-20 w-20 rounded-full border border-gray-400 p-1 "
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

export default FeatureMain;
