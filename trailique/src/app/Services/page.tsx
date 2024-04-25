import React from 'react';
import Script from 'next/script';
import { Metadata } from 'next';
import Features from "@/components/Features";


export const metadata: Metadata = {
  title: "Services",
  description: "Begin Right. Build Right.",
  // other metadata
};
function Services() {
  return (
    <>
    <div>
    <Features />
    </div>
    
    </>
  )
}

export default Services
