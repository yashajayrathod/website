"use client";
import React, { useState } from "react";
import PassengerPanel from "./PassengerPanel";
import DriverPanel from "./DriverPanel";
import AdminPanel from "./AdminPanel";
import Image from "next/image";

function Details() {
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
            src="/images/b2b/buyer.jpg"
            alt="Passenger Icon"
            className="mx-auto mb-1 ml-2 h-20 w-20 rounded-full border border-gray-400 p-1" // Adjust styling as needed
          />
          Buyer
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
            src="/images/b2b/seller.jpg"
            alt="Passenger Icon"
            className="mx-auto mb-1 ml-2 h-20 w-20 rounded-full border border-gray-400 p-1" // Adjust styling as needed
          />
          Seller
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
            className="mx-auto mb-1 ml-2 h-20 w-20 rounded-full border border-gray-400 p-1" // Adjust styling as needed
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

export default Details;
