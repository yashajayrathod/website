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
            width={300}
            height={300}
            src="/images/event/traveler.png"
            alt="Passenger Icon"
            className="mx-auto mb-1 ml-2 h-20 w-20 rounded-full border border-gray-400 p-1" // Adjust styling as needed
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
            width={300}
            height={300}
            src="/images/event/driver.png"
            alt="Passenger Icon"
            className="mx-auto mb-1 ml-2 h-20 w-20 rounded-full border border-gray-400 p-1" // Adjust styling as needed
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
            width={300}
            height={300}
            src="/images/event/user-account.png"
            alt="Passenger Icon"
            className="mx-auto mb-1 ml-5 h-20 w-20 rounded-full border border-gray-400 p-1" // Adjust styling as needed
          />
          Admin Panel
        </button>
        {/* Add buttons for other panels */}
      </div>
      {/* Render active panel */}
      <div>{renderPanel()}</div>
      <style jsx>{`
        .navigation-bar {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          margin: 10px;
        }
        .panel-button {
          margin-bottom: 10px;
          padding: 5px;
          font-size: 1.2rem;
          transition: border-bottom 0.3s ease-in-out;
        }
        .panel-button.active {
          border-bottom: 2px solid blue;
        }
        .icon {
          margin: 0 auto 5px;
          width: 90px;
          height: 90px;
          border: 2px solid #ccc;
          border-radius: 50%;
          padding: 5px;
        }
        @media (max-width: 768px) {
          .navigation-bar {
            flex-direction: column;
          }
          .panel-button {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
}

export default FeatureMain;
