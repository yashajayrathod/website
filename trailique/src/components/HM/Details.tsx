
"use client";
import React, { useState } from "react";
import PassengerPanel from "./PassengerPanel";
import DriverPanel from "./DriverPanel";
import AdminPanel from "./AdminPanel";
import Image from "next/image";
import MaintancePanel from "./MaintenancePanel";
import "./Details.css";
import FD from "./FD";
import LS from "./LS";
import Bill from "./Bill";
import P from "./P";
import IA from "./IA";

function Details() {
  const [activePanel, setActivePanel] = useState("passenger");
  const [selectedCard, setSelectedCard] = useState(0); // Initialize selectedCard state with 0 for the first panel

  const renderPanel = () => {
    switch (activePanel) {
      case "passenger":
        return <PassengerPanel />;
      case "driver":
        return <DriverPanel />;
      case "fd":
        return <FD />;
      case "ls":
          return <LS />;
      case "p":
          return <P />;
      case "bill":
         return <Bill />;
         case "ia":
          return <IA />;
      case "admin":
        return <AdminPanel />;
      default:
        return null;
    }
  };

  const nameArray = [
    "hm Manager",
    "Tenant",
    "Maintenance Staff/ Vendor",
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
      name: "Front Desk Staff/ Reception",
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

export default Details;





















// "use client";
// import React, { useState } from "react";
// import PassengerPanel from "./PassengerPanel";
// import DriverPanel from "./DriverPanel";
// import AdminPanel from "./AdminPanel";
// import Image from "next/image";
// import MaintancePanel from "./MaintenancePanel";

// function Details() {
//   const [activePanel, setActivePanel] = useState("passenger");
//   const [selectedCard, setSelectedCard] = useState(null); // State for selected card index
  
//   const renderPanel = () => {
//     switch (activePanel) {
//       case "passenger":
//         return <PassengerPanel />;
//       case "driver":
//         return <DriverPanel />;
//       case "maintenance":
//         return <MaintancePanel />;
//       case "admin":
//         return <AdminPanel />;
//       default:
//         return null;
//     }
//   };

//   const nameArray = [
//     "Residents",
//     "Management Committee",
//     "Security Personnel",
//     "Admin",
//   ];

//   const detailsArray = [
//     {
//       name: "Residents",
//       imgSrc: "/images/hm/hmManager.jpg",
      
//       panel: "passenger",
//     },
//     {
//       name: "Management Committee",
//       imgSrc: "/images/hm/Tenant.jpg",
//       panel: "driver",
//     },
//     {
//       name: "Security Personnel",
//       imgSrc: "/images/hm/Manage.jpg",
//       panel: "maintenance",
//     },
//     {
//       name: "Admin",
//       imgSrc: "/images/event/user-account.png",
//       panel: "admin",
//     },
//   ];


//   return (
//     <section>
//       <div className="App">
//         <div className="card-container">
//           {detailsArray.map((arrObj, index) => (
//             <div
//               className={`card ${
//                 selectedCard === index ? "selected" : ""
//               }`}
//               key={index}
//               onClick={() => {
//                 setActivePanel(arrObj.panel);
//                 setSelectedCard(index); // Set selected card index on click
//               }}
//             >
//               <div className="card-image-container">
//                 <Image
//                   src={arrObj.imgSrc}
//                   className="card-image"
//                   width="90"
//                   height="90"
//                   alt=""
//                 />
//               </div>
//               <div className="card-text">
//                 <p>{arrObj.name}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//       {renderPanel()}
//     </section>
//   );
// }

// export default Details;
