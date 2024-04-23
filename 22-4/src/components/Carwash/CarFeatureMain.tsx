"use client";
import React, { useState } from "react";
import PassengerApp from "./CarPassengerApp";
import DriverApp from "./CarDriverApp";
import AdminApp from "./CarAdminApp";
import Image from "next/image";
function CarFeatureMain() {
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
      <div className="center sticky top-0 z-10 mb-4 ml-20 mr-20 mt-10 bg-white text-center text-4xl font-bold dark:bg-slate-900">
        <h1>ADDITIONAL FEATURES </h1>
      </div>

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
            className="mx-auto mb-6 ml-2 h-20 w-20 rounded-full border border-gray-400 p-1" // Adjust styling as needed
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

export default CarFeatureMain;
