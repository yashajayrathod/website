import React from "react";
import DragAndDrop from "@/components/DragAndDrop/DragAndDrop";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Drag&Drop",
    description: "Begin Right. Build Right.",
    // other metadata
  };

function page() {
  return (
    <div className="App">
      <DragAndDrop />
    </div>
  );
}

export default page;