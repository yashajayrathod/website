import React from "react";
import Image from "next/image";

function MaintenanceApp() {
  return (
    <div className="m-10  grid grid-cols-1 justify-center gap-4 sm:grid-cols-3">
      {/* Card 1 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            width={30}
            height={30}
            
            src="/images/crew/DataAnalyticsDashboard.jpg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg dark:text-white font-medium text-gray-800">
          Feedback System
          </h3>
          </div>
        <p className="text-sm dark:text-white text-gray-600">
        Provide feedback on completed maintenance tasks to improve service quality.
                </p>
        </div>
      {/* Card 2 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            width={30}
            height={30}
            
            src="/images/crew/CustomizableReporting.jpg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg dark:text-white font-medium text-gray-800">
          Vehicle Maintenance:
          </h3>
        </div>
        <p className="text-sm dark:text-white text-gray-600">
        Track maintenance schedules for service vehicles to ensure reliability.
        </p>
        </div>
     
      {/* Card 3 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            width={30}
            height={30}
            
            src="/images/crew/DocumentManagementSystem.jpg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg dark:text-white font-medium text-gray-800">
          Quality Assurance
          </h3>
        </div>
        <p className="text-sm dark:text-white text-gray-600">
        Implement checks to ensure completed tasks meet quality standards.
        </p>
      </div>
      {/* Card 4 */}

      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            width={30}
            height={30}
            
            src="/images/crew/IntegrationwithHRSystems.jpg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg dark:text-white font-medium text-gray-800">
          Mobile Access
          </h3>
        </div>
        <p className="text-sm dark:text-white text-gray-600">
        Access work orders and update task statuses on-the-go via mobile devices.
    </p>
      </div>

      
    </div>
  );
}

export default MaintenanceApp;
