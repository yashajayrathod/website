"use client";
import React, { useState } from "react";
import PassengerApp from "./PassengerApp";
import DriverApp from "./DriverApp";
import AdminApp from "./AdminApp";
import Image from "next/image";
import MaintenanceApp from "./MaintenanceApp";
function FeatureMain() {
  const [activePanel, setActivePanel] = useState("passenger");

  const renderPanel = () => {
    switch (activePanel) {
      case "passenger":
        return <PassengerApp />;
      case "driver":
        return <DriverApp />;
      case "maintenance":
        return<MaintenanceApp/>
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
        <h1>ADDITIONAL FEATURES</h1>
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
            
            src="/images/trucking/Shipper.jpeg"
            alt="Passenger Icon"
            className="mx-auto mb-1 ml-15 h-20 w-20 rounded-full border border-gray-400 p-1" // Adjust styling as needed
          />
          Shipper
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
            
            src="/images/trucking/Transporter.jpeg"
            alt="Passenger Icon"
            className="mx-auto mb-1 ml-5 h-20 w-20 rounded-full border border-gray-400 p-1" // Adjust styling as needed
          />
          Transporter
        </button>

        <button
          style={{
            borderBottom: activePanel === "maintenance" ? "2px solid blue" : "none",
            paddingBottom: "5px",
            fontSize: "1.2rem",
          }}
          onClick={() => setActivePanel("maintenance")}
        >
          <Image
            width={90}
            height={90}
            
            src="/images/trucking/Driver.jpeg"
            alt="Passenger Icon"
            className="mx-auto mb-1 ml-15 h-20 w-20 rounded-full border border-gray-400 p-1" // Adjust styling as needed
          />
          Driver
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
            
            src="/images/b2c/Admin.jpeg"
            alt="Passenger Icon"
            className="mx-auto mb-1 ml-0 h-20 w-20 rounded-full border border-gray-400 p-1" // Adjust styling as needed
          />
          Admin
        </button>
        {/* Add buttons for other panels */}
      </div>
      {/* Render active panel */}
      <div>{renderPanel()}</div>
    </section>
  );
}

export default FeatureMain;
