"use client";
import React, { useState } from "react";
import PassengerPanel from "./PassengerPanel";
import DriverPanel from "./DriverPanel";
import AdminPanel from "./AdminPanel";
import Image from "next/image";
import MaintancePanel from "./MaintenancePanel";
import "./Details.css";

function Details() {
  const [activePanel, setActivePanel] = useState("passenger");
  const [selectedCard, setSelectedCard] = useState(0); // State for selected card index

  const renderPanel = () => {
    switch (activePanel) {
      case "passenger":
        return <PassengerPanel />;
      case "driver":
        return <DriverPanel />;
      case "maintenance":
        return <MaintancePanel />;
      case "admin":
        return <AdminPanel />;
      default:
        return null;
    }
  };

  const nameArray = [
    "Residents",
    "Management Committee",
    "Security Personnel",
    "Admin",
  ];

  const detailsArray = [
    {
      name: "Residents",
      imgSrc: "/images/society/Residents.jpg",
      
      panel: "passenger",
    },
    {
      name: "Management Committee",
      imgSrc: "/images/society/ManagementCommittee.jpg",
      panel: "driver",
    },
    {
      name: "Security Personnel",
      imgSrc: "/images/society/SecurityGuards.jpg",
      panel: "maintenance",
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
// import "./Details.css";

// function Details() {
//   const [activePanel, setActivePanel] = useState("passenger");

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
//       // Add more cases for other panels if needed
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
//       name:"Residents",
//       imgSrc:"/images/society/Residents.jpg",
//       panel:"passenger"
//     },
//     {
//       name:"Management Committee",
//       imgSrc:"/images/society/ManagementCommittee.jpg",
//       panel:"driver"
//     },
//     {
//       name:"Security Personnel",
//       imgSrc:"/images/society/SecurityGuards.jpg",
//       panel:"maintenance"
//     },
//     {
//       name:"Admin",
//       imgSrc:"/images/event/user-account.png",
//       panel:"admin"
//     },
//   ]

//   return (
//     <section>
//       {/* Navigation bar */}
//       {/* <div className=" top-0 z-10 mb-4 ml-1 mr-1 mt-10 flex justify-center bg-white text-4xl font-bold  dark:bg-slate-900">
//         <button
//           style={{
//             marginRight: "20px",
//             borderBottom:
//               activePanel === "passenger" ? "2px solid blue" : "none",
//             paddingBottom: "5px",
//             fontSize: "1.2rem",
//           }}
//           onClick={() => setActivePanel("passenger")}
//         >
//           <Image
//             width={80}
//             height={90}
//             src="/images/society/Residents.jpg"
//             alt="Passenger Icon"
//             className="mx-auto mb-1 ml-3 h-20 w-16 rounded-full border border-gray-400 p-1" // Adjust styling as needed
//           />
//           Residents
//         </button>
//         <button
//           style={{
//             marginRight: "20px",
//             borderBottom: activePanel === "driver" ? "2px solid blue" : "none",
//             paddingBottom: "5px",
//             fontSize: "1.2rem",
//           }}
//           onClick={() => setActivePanel("driver")}
//         >
//           <Image
//             width={80}
//             height={90}
//             src="/images/society/ManagementCommittee.jpg"
//             alt="Passenger Icon"
//             className="mx-auto mb-2 ml-3 h-20 w-16 rounded-full border border-gray-400 p-1" // Adjust styling as needed
//           />
//           Management Committee
//         </button>

//         <button
//           style={{
//             borderBottom:
//               activePanel === "maintenance" ? "2px solid blue" : "none",
//             paddingBottom: "5px",
//             fontSize: "1.2rem",
//           }}
//           onClick={() => setActivePanel("maintenance")}
//         >
//           <Image
//             width={90}
//             height={90}
//             src="/images/society/SecurityGuards.jpg"
//             alt="Passenger Icon"
//             className="mx-auto mb-1 ml-1 h-20 w-16 rounded-full border border-gray-400 p-1" // Adjust styling as needed
//           />
//           Security Personnel
//         </button>

//         <button
//           style={{
//             borderBottom: activePanel === "admin" ? "2px solid blue" : "none",
//             paddingBottom: "5px",
//             fontSize: "1.2rem",
//           }}
//           onClick={() => setActivePanel("admin")}
//         >
//           <Image
//             width={90}
//             height={90}
//             src="/images/event/user-account.png"
//             alt="Passenger Icon"
//             className="mx-auto mb-1 ml-2 h-20 w-16 rounded-full border border-gray-400 p-1" // Adjust styling as needed
//           />
//           Admin
//         </button> */}
//         {/* Add buttons for other panels */}
//       {/* </div> */}
//       {/* Render active panel */}
//       {/* <div>{renderPanel()}</div> */}
//       <div className="App">
//         <div className="card-container">
//           {detailsArray.map((arrObj, index) => (
//             <div className="card" key={index} onClick={()=> setActivePanel(arrObj.panel)}>
//               <div className="card-image-container">
//                 <img src={arrObj.imgSrc} className="card-image" alt="" />
//               </div>
//               <div className="card-text">
//                 <p>{arrObj.name}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
      
//     </section>
//   );
// }

// export default Details;
