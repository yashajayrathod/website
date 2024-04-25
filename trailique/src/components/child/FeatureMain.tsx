"use client";
import React, { useState } from "react";
import PassengerApp from "./PassengerApp";
import DriverApp from "./DriverApp";
import AdminApp from "./AdminApp";
import Image from "next/image";
import "./Details.css";

function FeatureMain() {
  const [activePanel, setActivePanel] = useState("passenger");
  const [selectedCard, setSelectedCard] = useState(0); 

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

  const nameArray = [
    "Passenger",
    "Driver",
    "Admin",
  ];

  const detailsArray = [
    {
      name: "Parent",
      imgSrc: "/images/child/parent.jpg",
      
      panel: "passenger",
    },
    {
      name: "Caregiver",
      imgSrc: "/images/child/caregiver.jpg",
      panel: "driver",
    },
   
    {
      name: "Admin Panel",
      imgSrc: "/images/taxi/admin.png",
      panel: "admin",
    },
  ];

  return (
    <section>
      <div className="center sticky top-0 z-10 mb-4 ml-20 mr-20 mt-10 bg-white text-center text-4xl font-bold dark:bg-slate-900">
        <h1>ADDITIONAL FEATURES</h1>
      </div>

      {/* Navigation bar */}
      <div className="App">
        <div className="card-container">
          {detailsArray.map((arrObj, index) => (
            <div
              className={`card ${
                selectedCard === index ? "selected" : ""
              }`}
              key={index}
              onClick={() => {
                setActivePanel(arrObj.panel);
                setSelectedCard(index); // Set selected card index on click
              }}
            >
              <div className="card-image-container">
                <Image
                  src={arrObj.imgSrc}
                  className="mx-auto mb-1 h-20 w-20 rounded-full border border-gray-400 p-1"
                  width="50"
                  height="50"
                  alt=""
                />
              </div>
              <div className="card-text">
                <p>{arrObj.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {renderPanel()}
    </section>
  );
}

export default FeatureMain;
