import React from "react";
import Image from "next/image";

function AdminApp() {
  return (
    <div className="m-10  grid grid-cols-1 justify-center gap-4 sm:grid-cols-3">
      {/* Card 1 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image 
          width={30}
            height={30}

            
            src="/images/handyman/taskalloalgo.jpg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
          Task Allocation Algorithm{" "}
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
        Implement an intelligent algorithm to match service requests with the most suitable providers based on expertise, ratings, and availability.


        </p>
      </div>
      {/* Card 2 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image 
          width={30}
            height={30}

            
            src="/images/handyman/promotionalcamp.jpg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
          Promotional Campaign Management
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
        Create and manage promotional campaigns to attract new users and service providers and stimulate platform engagement.

{" "}
        </p>
      </div>
      {/* Card 3 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image 
          width={30}
            height={30}

            
            src="/images/handyman/customersupportint.jpg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
          Customer Support Integration
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
        Integrate customer support channels, including live chat and ticketing systems, to address user queries and issues promptly.
        </p>
      </div>
      {/* Card 4 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image 
          width={30}
            height={30}

            
            src="/images/handyman/localization feature.jpg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
          Localization Features
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
        Customize the platform interface and content to cater to different regions, languages, and cultural preferences, enhancing user experience and accessibility.


        </p>
      </div>
      {/* Card 5 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image 
          width={30}
            height={30}

            
            src="/images/handyman/dynamicpricemanage.jpg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
          Dynamic Pricing Management
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
        Implement dynamic pricing algorithms based on demand, supply, and market trends to maximize revenue generation.
{" "}
        </p>
      </div>


    
    </div>
  );
}

export default AdminApp;
