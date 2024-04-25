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
            
            src="/images/crew/DriverPerformanceMetrics.jpg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
          Driver Performance Metrics
            </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
        Monitor driver performance metrics such as punctuality, professionalism  and customer satisfaction ratings to ensure high-quality service.
        </p>
      </div>
      {/* Card 2 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
              width={30}
              height={30}
            
            src="/images/crew/VehicleInspectionChecklist.jpg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
          Vehicle Inspection Checklist
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
        Utilize digital checklists for pre-trip vehicle inspections, ensuring vehicles are safe and ready for crew transport.
        </p>
      </div>
      {/* Card 3 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
          width={30}
          height={30}

            className="mr-2"
            src="/images/crew/CrewAssistance.jpg"
            alt="Location Icon"
            
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
          Crew Assistance
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
        Provide assistance to crew members as needed, including loading/unloading luggage, providing directions  and offering support during transit.
        </p>
      </div>
      {/* Card 4 */}
      
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
          width={30}
          height={30}

            
            src="/images/crew/TravelCoordinationTools.jpg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
          Travel Coordination Tools
              </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
        Access tools for coordinating with crew members, dispatchers  and administrators to ensure smooth pickups, drop-offs  and route adjustments.

</p>      </div>

      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
          width={30}
          height={30}

            
            src="/images/crew/DriverTrainingResources.jpg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
          Driver Training Resources
              </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
        Provide access to training materials and resources to enhance driver skills and professionalism, improving overall service quality.

        </p>
        </div>
    </div>
  );
}

export default DriverApp;
