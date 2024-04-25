"use client";
import React, { useState } from "react";
import PassengerPanel from "./CarPassengerPanel";
import DriverPanel from "./CarDriverPanel";
import AdminPanel from "./CarAdminPanel";
import Image from "next/image";
import "./Details.css";

function CarTaxi() {
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
      name: "Customer",
      imgSrc: "/images/carwash/carwash.jpg",
      
      panel: "passenger",
    },
    {
      name: "Service Provider",
      imgSrc: "/images/babysitter/service provider.jpeg",
      panel: "driver",
    },
    {
      name: "Admin Panel",
      imgSrc: "/images/property/admin.jpg",
      panel: "admin",
    },
    
  ];

  return (
    <section>
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

export default CarTaxi;
