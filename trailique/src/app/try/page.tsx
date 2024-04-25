// Page.js
import React from "react";
import Image from "next/image"; // Import Image component from Next.js
import "./Page.css"; // Import CSS file for styling

function AboutCard() {
  return (
    <div className="card-container ">
      <div className="card dark:border border-gray-500 ">
        <div className="card-inner">
          <div
            className="card-front"
            style={{
              backgroundImage: 'url("/images/about/Finalvision.png")',
              // boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.5)",
            }}
          >
            {/* Place the heading above the image */}
            <div className="heading-wrapper">
              <h1
                style={{
                  marginTop: "-170px",
                  fontWeight: "700",
                  color: "#2D78EB",
                  
                }}
              >
                Vision
              </h1>
            </div>
          </div>

          <div
            className="card-back"
            style={{
              backgroundImage: 'url("/images/about/vission22.jpg")',
              backdropFilter: "blur(5px)",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              padding: "20px",
            }}
          >
            <p style={{ color: "white", fontWeight: "700" }}>
              Our vision at Trailique is to lead the IT industry by prioritizing
              innovation and delivering user-centric solutions. We aim to be the
              trailblazers shaping the digital future, helping businesses start
              and grow successfully.
            </p>
          </div>
        </div>
      </div>
      <div className="card dark:border border-gray-500 ">
        <div className="card-inner">
          <div
            className="card-front"
            style={{
              backgroundImage: 'url("/images/about/Finalmission.png")',
              // boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.7)",
            }}
          >
            {/* Place the heading above the image */}
            <div className="heading-wrapper ">
              <h2
                style={{
                  marginTop: "-170px",
                  fontWeight: "700",
                  color: "#2D78EB",
                }}
              >
                Mission
              </h2>
            </div>
          </div>
          <div
            className="card-back"
            style={{
              backgroundImage: 'url("/images/about/mission22.jpg")',
            }}
          >
            <p style={{ color: "white", fontWeight: "700" }}>
              <span className="text-blue-500">Trail</span>ique aims to redefine
              IT excellence by infusing high{" "}
              <span className="text-blue-500">IQ</span> and a commitment to
              supreme quality into every project, all underpinned by a
              dedication to unparalleled{" "}
              <span className="text-blue-500">U</span>ser{" "}
              <span className="text-blue-500">E</span>xperience.
            </p>
          </div>
        </div>
      </div>
      <div className="card dark:border border-gray-500 ">
        <div className="card-inner">
          <div
            className="card-front"
            style={{
              backgroundImage: 'url("/images/about/Finalvaluestatement.png")',
              // boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.7)",
            }}
          >
            {/* Place the heading above the image */}
            <div className="heading-wrapper">
              <h2
                style={{
                  marginTop: "-170px",
                  fontWeight: "700",
                  color: "#2D78EB",
                }}
              >
                Value 
              </h2>
            </div>
            {/* Use Image component as an icon */}
          </div>
          <div
            className="card-back"
            style={{
              backgroundImage: 'url("/images/about/value22.jpg")',
            }}
          >
            <p style={{ color: "white", fontWeight: "700" }}>
              Empowering our clients success is at the heart of Trailique. With
              unwavering transparency from day one, we pave the path for growth,
              ensuring businesses thrive in a collaborative and trustworthy
              partnership.
            </p>
          </div>
        </div>
      </div>
      {/* Repeat the same structure for other cards */}
    </div>
  );
}

export default AboutCard;
