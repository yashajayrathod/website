import React from "react";
import Image from "next/image";

function DriverApp() {
  return (
    <div className="m-10  grid grid-cols-1 justify-center gap-4 sm:grid-cols-3">
      {/* Card 1 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image 
          width={30}
            height={30}

            
            src="/images/carpool/paym.jpg"  
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">Payment Management</h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
        Manage earnings, track payments and receive timely payouts for completed rides, ensuring financial transparency and stability for drivers.

        </p>
      </div>
      {/* Card 2 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image 
          width={30}
            height={30}

            
            src="/images/carpool/navi.jpg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
          Navigation Integration
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
        Integrate with navigation tools for seamless route guidance and navigation to pick-up and drop-off locations, optimizing driver efficiency.

        </p>
      </div>
      {/* Card 3 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image 
          width={30}
            height={30}

            
            src="/images/carpool/vehii.jpg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
          Vehicle Inspection
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
        Conduct pre-ride vehicle inspections and maintenance checks to ensure vehicle safety and reliability for passengers
        </p>
      </div>
      {/* Card 4 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image 
          width={30}
            height={30}

            
            src="/images/carpool/rideh.jpg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
          Ride History
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
        Maintain a record of past rides, including trip details and passenger feedback, for reference and performance analysis.{" "}
        </p>
      </div>
      {/* Card 5 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image 
          width={30}
            height={30}

            
            src="/images/carpool/carpmatch.jpg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">Carpool Matching Preferences</h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
        Set preferences for carpool matching criteria, such as preferred routes and passenger profiles, to customize ride experiences and optimize driver satisfaction.

        </p>
      </div>



      
    </div>
  );
}

export default DriverApp;
