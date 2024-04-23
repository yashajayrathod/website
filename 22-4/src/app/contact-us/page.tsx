import React from 'react';
import Contact from '@/components/Contact/contact';
import Script from 'next/script';
import { Metadata } from 'next';


export const metadata: Metadata = {
  title: "Contact Us",
  description: "Begin Right. Build Right.",
  // other metadata
};
function page() {
  return (
    <>
    <div>
      <Contact/>
    </div>
   
    </>
  )
}

export default page
