import React from "react";
import Image from "next/image";
import Details from "@/components/Employee/Details";
import FecCard from "@/components/Employee/fec";
import Talk from "@/components/Employee/talk";
import FeatureMain from "@/components/Employee/FeatureMain";
import Brands from "@/components/Brands";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Employee",
  description: "Begin Right. Build Right.",
  // other metadata
};

function PropertyDetails() {
  return (
    <section>
      <div className="custom tq-t-20 tq-h-600 relative left-0 top-0 px-0 py-0 pt-16 sm:top-4 sm:pt-10 md:pt-10 lg:pt-12 mt-9 mb-5 ">
        <div className="relative h-full w-full">
          <Image
            src="/images/employee/emp t.webp"
            alt="taxi"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-black opacity-75"></div>
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform text-center text-white">
            <h1 className="mt-3 w-screen pb-4 text-4xl font-bold">
              Employee Transportation Platform Development Solution
            </h1>
            <p className="mb-0 text-xl  ">
              Revolutionize your employee transportation with our cutting-edge
              platform development solution. Streamline routes, enhance
              scheduling and elevate employee experience. Maximize efficiency
              and convenience with our tailored solution today!
            </p>
            <a
              href="#Solution"
              className="mb-0 ml-8 mt-4 inline-flex items-center rounded-full bg-blue-700 px-3 py-2 text-center text-xl font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Solution Insights
              <svg
                className="ms-2 h-3.5 w-3.5 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div id="Solution" className="md-20 mt-0 text-center">
        <h2 className="pb-5 text-4xl font-bold md:text-5xl mt-20">
          Solution Insights{" "}
        </h2>
        <p className="text-lg text-gray-600 md:text-xl ">
          Safely transport your employees with ease using our secure and
          hassle-free transportation services.
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
      <Brands />
    </section>
  );
}

export default PropertyDetails;