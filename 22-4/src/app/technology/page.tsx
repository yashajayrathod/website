import React from 'react';
import Script from 'next/script';
import { Metadata } from 'next';
import TFeatures from "@/components/techlo";

export const metadata: Metadata = {
  title: "Services",
  description: "Begin Right. Build Right.",
  // other metadata
};
function Services() {
  return (
    <>
    <div>
    <TFeatures />
    </div>
    
    </>
  )
}

export default Services
