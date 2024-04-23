"use client";
import React, { useState } from "react";
import PassengerApp from "./PassengerApp";
import DriverApp from "./DriverApp";
import AdminApp from "./AdminApp";
import Image from "next/image";
import MaintenanceApp from "./MaintenanceApp";
import "./Details.css";
import FDApp from "./FDApp";
import LSApp from "./lSApp";
import BillApp from "./BillApp";
import PApp from "./PApp";
import IAApp from "./IAApp";

function FeatureMain() {
 const [activePanel, setActivePanel] = useState("passenger");
  const [selectedCard, setSelectedCard] = useState(0); // State for selected card index

  const renderPanel = () => {
    switch (activePanel) {
      case "passenger":
        return <PassengerApp />;
      case "driver":
        return <DriverApp />;
        case "fd":
          return <FDApp />;
        case "ls":
            return <LSApp />;
        case "p":
            return <PApp />;
        case "bill":
           return <BillApp />;
           case "ia":
            return <IAApp />
      case "admin":
        return <AdminApp />;
      // Add more cases for other panels if needed
      default:
        return null;
    }
  };

  const nameArray = [
    "hm Manager",
    "Tenant",
    "Maintenance Staff/Vendor",
    "Admin",
  ];

  const detailsArray = [
    {
      name: "Doctor",
      imgSrc: "/images/hm/doctor.jpg",
      panel: "passenger",
    },
    {
      name: "Nurse",
      imgSrc: "/images/hm/nurse.jpg",
      panel: "driver",
    },
    {
      name: "Front Desk Staff/Reception",
      imgSrc: "/images/hm/receptionist.jpg",
      panel: "fd",
    },
    {
      name: "Laboratory Staff",
      imgSrc: "/images/hm/laboratorystaff.jpg",
      panel: "ls",
    },
    {
      name: "Pharmacist",
      imgSrc: "/images/hm/pharmacist.jpg",
      panel: "p",
    },
    {
      name: "Billing",
      imgSrc: "/images/hm/billingdepart.jpg",
      panel: "bill",
    },
    {
      name: "Insurance Agent",
      imgSrc: "/images/hm/insurence.jpg",
      panel: "ia",
    },
    {
      name: "Admin",
      imgSrc: "/images/property/admin.jpg",
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
