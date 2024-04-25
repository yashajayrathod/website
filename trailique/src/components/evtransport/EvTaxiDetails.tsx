"use client";
import React, { useState } from "react";
import PassengerPanel from "./EvPassengerPanel";
import DriverPanel from "./EvDriverPanel";
import AdminPanel from "./EvAdminPanel";
import Image from "next/image";
import "./Details.css";

function EvTaxi() {
  const [activePanel, setActivePanel] = useState("passenger");
  const [selectedCard, setSelectedCard] = useState(0); // State for selected card index

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

  const nameArray = [
    "Passenger",
    "Driver",
    "Admin Panel",
    
  ];

  const detailsArray = [
    {
      name: "Passenger",
      imgSrc: "/images/taxi/passenger.png",
      
      panel: "passenger",
    },
    {
      name: "Driver",
      imgSrc: "/images/taxi/driver.png",
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

export default EvTaxi;
