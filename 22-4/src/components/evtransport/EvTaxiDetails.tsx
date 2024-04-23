"use client";
import React, { useState } from "react";
import PassengerPanel from "./EvPassengerPanel";
import DriverPanel from "./EvDriverPanel";
import AdminPanel from "./EvAdminPanel";
import Image from "next/image";
function EvTaxi() {
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
            src="/images/taxi/passenger.png"
            alt="Passenger Icon"
            width={90} // Adjust width and height as needed
            height={90}
            className="mx-auto mb-1 ml-3 h-20 w-20 rounded-full border border-gray-400 p-1" // Adjust styling as needed
          />
          Passenger 
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
            src="/images/taxi/driver.png"
            alt="Passenger Icon"
            width={90} // Adjust width and height as needed
            height={90}
            className="mx-auto mb-1 ml-1 h-20 w-20 rounded-full border border-gray-400 p-1" // Adjust styling as needed
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
            src="/images/taxi/admin.png"
            alt="Passenger Icon"
            width={90} // Adjust width and height as needed
            height={90}
            className="mx-auto mb-1 ml-5 h-20 w-20 rounded-full border border-gray-400 p-1" // Adjust styling as needed
          />
          Admin Panel
        </button>
        {/* Add buttons for other panels */}
      </div>
      {/* Render active panel */}
      <div>{renderPanel()}</div>
      <style jsx>{`
        .panel-button {
          margin-right: 10px;
          margin-bottom: 10px;
          padding-bottom: 5px;
          font-size: 1rem;
          transition: border-bottom 0.3s ease-in-out;
        }
        .panel-button.active {
          border-bottom: 2px solid blue;
        }
        @media (max-width: 768px) {
          .panel-button {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
}

export default EvTaxi;
