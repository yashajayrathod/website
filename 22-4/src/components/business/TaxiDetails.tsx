"use client";
import React, { useState } from "react";
import PassengerPanel from "./PassengerPanel";
import DriverPanel from "./DriverPanel";
import AdminPanel from "./AdminPanel";
import Image from "next/image";
function BuTaxi() {
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
            marginRight: "20px",
            borderBottom:
              activePanel === "passenger" ? "2px solid blue" : "none",
            paddingBottom: "5px",
            fontSize: "1.2rem",
          }}
          onClick={() => setActivePanel("passenger")}
        >
          <Image
            src="/images/business/businessicon.jpg"
            alt="Passenger Icon"
            width={90} // Adjust width and height as needed
            height={90}
            className="mx-auto mb-1 ml-3 h-20 w-20 rounded-full border border-gray-400 p-1" // Adjust styling as needed
          />
          Businesses
        </button>
        <button
          style={{
            marginRight: "20px",
            borderBottom: activePanel === "driver" ? "2px solid blue" : "none",
            paddingBottom: "5px",
            fontSize: "1.2rem",
          }}
          onClick={() => setActivePanel("driver")}
        >
          <Image
            src="/images/business/consumericon.jpg"
            alt="Passenger Icon"
            width={90} // Adjust width and height as needed
            height={90}
            className="mx-auto mb-1 ml-2 h-20 w-20 rounded-full border border-gray-400 p-1" // Adjust styling as needed
          />
          Consumers
        </button>
        <button
          style={{
            borderBottom: activePanel === "admin" ? "2px solid blue" : "none",
            paddingBottom: "2px",
            fontSize: "1.2rem",
          }}
          onClick={() => setActivePanel("admin")}
        >
          <Image
            src="/images/business/both.jpg"
            alt="Passenger Icon"
            width={90} // Adjust width and height as needed
            height={0}
            className="mx-auto mb-1 ml-1 h-20 w-25 rounded-full border border-gray-400 p-1" // Adjust styling as needed
          />
          B2B & B2C
        </button>
        {/* Add buttons for other panels */}
      </div>
      {/* Render active panel */}
      <div>{renderPanel()}</div>
    </section>
  );
}

export default BuTaxi;
