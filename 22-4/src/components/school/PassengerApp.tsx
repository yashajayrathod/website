import React from "react";
import Image from "next/image";

function PassengerApp() {
  return (
    <div className="m-10  grid grid-cols-1 justify-center gap-4 sm:grid-cols-3">
      {/* Card 1 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image 
          width={30}
            height={30}

            
            src="/images/school/buscapm.jpg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
          Bus Capacity Monitoring
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
        Provide real-time updates on bus capacity and seat availability to prevent overcrowding and maintain social distancing protocols during transit.

        </p>
      </div>
      {/* Card 2 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image 
          width={30}
            height={30}

            
            src="/images/school/spcnacc.jpg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">Special Needs Accommodations</h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
        Enable parents to request special accommodations for students with disabilities or medical conditions, ensuring their safety and comfort during transportation.

        </p>
      </div>
      {/* Card 3 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image 
          width={30}
            height={30}

            
            src="/images/school/incident.jpg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">Incident Reporting</h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
        Allow passengers to report incidents or concerns directly through the app, facilitating quick resolution and follow-up actions by school administrators.


        </p>
      </div>
      



      
      
    </div>
  );
}

export default PassengerApp;
