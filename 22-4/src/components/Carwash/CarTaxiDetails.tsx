"use client";
import React, { useState } from "react";
import PassengerPanel from "./CarPassengerPanel";
import DriverPanel from "./CarDriverPanel";
import AdminPanel from "./CarAdminPanel";
import Image from "next/image";

function CarTaxi() {
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
            width={90}
            height={90}
            src="/images/carwash/carwash.jpg"
            alt="Passenger Icon"
            className="mx-auto mb-6 ml-3 h-20 w-20  rounded-full border border-gray-400 p-1" // Adjust styling as needed
          />
          Customer
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
            width={90}
            height={90}
            src="/images/babysitter/service provider.jpeg"
            alt="Passenger Icon"
            className="mx-auto mb-1 ml-3 h-20 w-20 rounded-full border border-gray-400 p-1" // Adjust styling as needed
          />
          Service Provider
        </button>
        <button
          style={{
            borderBottom: activePanel === "admin" ? "2px solid blue" : "none",
            paddingBottom: "5px",
            fontSize: "1.2rem",
          }}
          onClick={() => setActivePanel("admin")}
        >
          <Image
            width={90}
            height={90}
            src="/images/property/admin.jpg"
            alt="Passenger Icon"
            className="mx-auto mb-1 ml-3 h-20 w-20 rounded-full border border-gray-400 p-1" // Adjust styling as needed
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

export default CarTaxi;
