import React from "react";
import Image from "next/image";
import Details from "@/components/Trucking/Details";
import FecCard from "@/components/Trucking/fec";
import Talk from "@/components/Trucking/talk";
import FeatureMain from "@/components/Trucking/FeatureMain";
import Brands from "@/components/Brands";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Trucking",
  description: "Begin Right. Build Right.",
  // other metadata
};

function PropertyDetails() {
  return (
  
    <section>
      <div className="relative min-h-screen px-0 py-16 md:py-20 lg:py-28">
        <div className="relative h-full w-full">
          <Image
            src="/images/Trucking/truck1.webp"
            alt="taxi"
            layout="responsive"
            width={1920}
            height={600}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-80"></div>
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform text-center text-white">
            <h1 className="w-screen pb-4 text-4xl font-bold">
            Trucking Management Platform Development Solution
          </h1>
            <p className="text-xl">
            Revolutionary Transportation Solution for Shippers, Drivers, and Transporters - Making Every Journey Convenient and Hassle-Free         
              </p> 
            <a href="#Solution" className="mt-4 inline-flex items-center px-3 py-2 text-xl font-medium text-center text-white bg-blue-700 rounded-full hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ml-8">
            Solution Insights
             <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>

            </svg>
            </a>
            </div>
        </div>
      </div>

      <div id="Solution" className="md-20 mt-0 text-center">
        <h2 className="pb-5 text-4xl font-bold md:text-5xl">
          Solution Insights{" "}
        </h2>
        <p className="text-lg text-gray-600 md:text-xl ">
        Streamline logistics, improve efficiency, and boost productivity with tailored software that meets your specific needs. Drive your business forward with our expert development services today!
                </p>
      </div>

      <Details />
      <div className=" mt-0 flex justify-center text-xl font-bold">
        <a
          href="#FeatureMain"
          className="flex items-center text-blue-600 hover:text-blue-700 "
        >
          View Additional Information{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="ml-1 h-5 w-5 text-xl font-bold"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M9.219 4.469a.75.75 0 1 0-1.061 1.062L12.938 10l-4.78 4.469a.75.75 0 0 0 1.06 1.062l5.25-4.907a.75.75 0 0 0 0-1.062l-5.25-4.907z"
            />
          </svg>
        </a>
      </div>
      <Talk />
      <FecCard />
      <div id="FeatureMain"></div>
      <FeatureMain />
      <Brands/>
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-6ZB1SSZHDM"></Script>
      
      <Script id="google-analytics" strategy="afterInteractive">
    {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-6ZB1SSZHDM');
    `}
</Script>
    </section>

      

  );
}

export default PropertyDetails;
