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
            
            src="/images/society/CCTVIntegration.jpg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg dark:text-white font-medium text-gray-800">
          CCTV Integration
          </h3>
          </div>
        <p className="text-sm dark:text-white text-gray-600">
        Monitor CCTV cameras installed within the community premises directly from the application for enhanced surveillance.
                </p>
        </div>
      {/* Card 2 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            width={30}
            height={30}
            
            src="/images/society/VisitorRegistration.jpg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg dark:text-white font-medium text-gray-800">
          Visitor Registration
          </h3>
        </div>
        <p className="text-sm dark:text-white text-gray-600">
        Capture visitor details and issue temporary access passes for smooth entry and exit of guests.
        </p>
        </div>
     
      {/* Card 3 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            width={30}
            height={30}
            
            src="/images/society/EmergencyContactList.jpg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg dark:text-white font-medium text-gray-800">
          Emergency Contact List
          </h3>
        </div>
        <p className="text-sm dark:text-white text-gray-600">
        Access a comprehensive list of emergency contacts, including local authorities and medical services, for quick response during emergencies.
        </p>
      </div>
      {/* Card 4 */}

      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            width={30}
            height={30}
            
            src="/images/society/ShiftScheduling.jpg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg dark:text-white font-medium text-gray-800">
          Shift Scheduling
          </h3>
        </div>
        <p className="text-sm dark:text-white text-gray-600">
        Plan and manage security staff shifts efficiently to ensure round-the-clock coverage.
    </p>
      </div>

      
    </div>
  );
}

export default MaintenanceApp;
