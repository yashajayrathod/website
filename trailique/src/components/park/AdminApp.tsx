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

            
            src="/images/park/datasecurity.jpg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
          Data Security{" "}
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
        Robust data security measures to protect user information and transactional data.

        </p>
      </div>
      {/* Card 2 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image 
          width={30}
            height={30}

            
            src="/images/park/parkinglotoptimize.jpg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
          Parking Lot Optimization
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
        Optimization tools to maximize parking lot utilization and revenue generation.

{" "}
        </p>
      </div>
      {/* Card 3 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image 
          width={30}
            height={30}

            
            src="/images/park/integrationwiot.jpg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
          Integration with IoT
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
        Integration with IoT devices for smart parking solutions like sensors and smart meters.

        </p>
      </div>
      {/* Card 4 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image 
          width={30}
            height={30}

            
            src="/images/park/performancemonitor.jpg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
          Performance Monitoring
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
        Performance monitoring tools to track system performance and ensure smooth operations.

        </p>
      </div>
      

    
    </div>
  );
}

export default AdminApp;
