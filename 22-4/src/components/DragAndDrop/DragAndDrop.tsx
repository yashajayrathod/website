"use client";
import React, { useState } from "react";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import ReactDOMServer from "react-dom/server";
//import GeneratePage from "../last/GeneratePage1";
//import Contact from "@/app/contact/page";

const DragAndDrop: React.FC = () => {
  const [dragging, setDragging] = useState(false);
  const [droppedComponents, setDroppedComponents] = useState<JSX.Element[]>([]);
  const maxDrops = 4;
  const [showContactForm, setShowContactForm] = useState(false);

  const handleDragStart = (
    e: React.DragEvent<HTMLDivElement>,
    component: JSX.Element,
  ) => {
    setDragging(true);
    e.dataTransfer.setData("text/plain", component.key?.toString());
  };

  const handleDragEnd = () => {
    setDragging(false);
  };

  const handleDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (droppedComponents.length < maxDrops) {
      setDragging(false);
      const componentKey = e.dataTransfer.getData("text/plain");
      const component = findComponentByKey(componentKey);
      if (component) {
        setDroppedComponents((prevComponents) => [
          ...prevComponents,
          component,
        ]);
      }
    } else {
      const confirmMessage = (
        <>
          You have reached the maximum limit for drag and drop. For more contact
          our sales team.
        </>
      );

      const confirmString = ReactDOMServer.renderToString(confirmMessage);
      if (window.confirm(confirmString)) {
        setShowContactForm(true);
      }
    }
  };

  const handleRemoveComponent = (index: number) => {
    setDroppedComponents((prevComponents) =>
      prevComponents.filter((_, i) => i !== index),
    );
  };

  const findComponentByKey = (key: string): JSX.Element | undefined => {
    switch (key) {
      case "navbar":
        return <div key="navbar">Navbar</div>;
      case "login":
        return <div key="login">Login Form</div>;
      case "footer":
        return <div key="footer">Footer</div>;
      default:
        return undefined;
    }
  };

  return (
   
      <div style={{ display: "flex", margin: "200px", marginLeft: "350px" }}>
        <div style={{ width: "400px", padding: "10px", background: "#f0f0f0" }}>
          <div
            draggable
            onDragStart={(e) =>
              handleDragStart(e, <div key="navbar">Navbar</div>)
            }
            onDragEnd={handleDragEnd}
            style={{
              width: "300px",
              marginBottom: "10px",
              cursor: "move",
              background: "white",
              padding: "8px",
              border: "1px solid #ddd",
              borderRadius: "4px",
            }}
          >
            Navbar
          </div>
          <div
            draggable
            onDragStart={(e) =>
              handleDragStart(e, <div key="login">Login Form</div>)
            }
            onDragEnd={handleDragEnd}
            style={{
              width: "300px",
              marginBottom: "10px",
              cursor: "move",
              background: "white",
              padding: "8px",
              border: "1px solid #ddd",
              borderRadius: "4px",
            }}
          >
            Login Form
          </div>
          <div
            draggable
            onDragStart={(e) =>
              handleDragStart(e, <div key="footer">Footer</div>)
            }
            onDragEnd={handleDragEnd}
            style={{
              width: "300px",
              marginBottom: "10px",
              cursor: "move",
              background: "white",
              padding: "8px",
              border: "1px solid #ddd",
              borderRadius: "4px",
            }}
          >
            Footer
          </div>
        </div>
        <div
          className={`dropzone ${dragging ? "dragging" : ""}`}
          onDragEnter={handleDragEnter}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          style={{
            width: "500px",
            height: "500px",
            border: "2px dashed #aaa",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center", // Center vertically
            alignItems: "center", // Center horizontally
            position: "relative",
            background: "#f9f9f9",
            padding: "20px",
          }}
        >
          {droppedComponents.map((component, index) => (
            <div
              key={index}
              style={{
                marginBottom: "5px",
                position: "relative",
                display: "flex",
                alignItems: "center",
              }}
            >
              <div style={{ flex: "1" }}>{component}</div>
              <span
                style={{
                  marginLeft: "5px",
                  cursor: "pointer",
                  fontSize: "0.8em",
                  color: "red",
                }}
                onClick={() => handleRemoveComponent(index)}
              >
                X
              </span>
            </div>
          ))}
          {!droppedComponents.length && dragging && <p>Drop here</p>}
          {!droppedComponents.length && !dragging && (
            <p>Drag a component here</p>
          )}
          {showContactForm && (
            <div className="contact-form">{/* Contact form component */}</div>
          )}
          <a href="/contact-us" style={{ marginTop: "20px" }}>
            <button
              style={{
                padding: "10px",
                backgroundColor: "blue",
                color: "white",
                border: "none",
                borderRadius: "5px",
              }}
            >
              Contact Us
            </button>
          </a>
          <a href={droppedComponents.length >= 2 ? "/generate " : ""}>
            <button
              style={{
                marginTop: "10px",
                padding: "10px",
                backgroundColor:
                  droppedComponents.length >= 2 ? "green" : "gray",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor:
                  droppedComponents.length >= 2 ? "pointer" : "not-allowed",
              }}
              disabled={droppedComponents.length < 2}
            >
              Generate
            </button>
          </a>
        </div>
      </div>
     
  );
};

const ContactPage = () => {
  return <div>Contact Page</div>;
};

export default DragAndDrop;
