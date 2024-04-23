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
      default:
        return null;
    }
  };

  return (
    <section>
      <div className="center sticky top-0 z-10 mx-4 mb-4 mt-10 bg-white text-center text-4xl font-bold dark:bg-slate-900">
        <h1>ADDITIONAL FEATURES</h1>
      </div>

      {/* Navigation bar */}
      <div className=" top-0 z-10 mx-1 mb-4 mt-10 flex flex-wrap justify-between bg-white text-4xl font-bold dark:bg-slate-900">
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
            marginRight: "10px",
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

export default FeatureMain;
