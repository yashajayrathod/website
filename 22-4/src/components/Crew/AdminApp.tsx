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
            
            src="/images/crew/DataAnalyticsDashboard.jpg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
          Data Analytics Dashboard         </h3>
          </div>
        <p className="text-sm text-gray-600 dark:text-white">
        Generate reports and analytics on transportation metrics such as trip volume, vehicle utilization  and crew satisfaction ratings, providing insights for optimization.
        </p>      </div>
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
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
          Customizable Reporting         </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
        Customize reports and data exports based on specific requirements, allowing for tailored insights and analysis.
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
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
          Document Management System          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
        Manage digital documents and records related to crew transportation, including contracts, waivers  and driver certifications, for compliance and record-keeping.
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
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
          Integration with HR Systems.
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
        Integrate with HR systems to streamline crew management processes, including employee scheduling, payroll integration  and compliance checks.
        </p>
      </div>

      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            width={30}
            height={30}
            
            src="/images/crew/VehicleMaintenanceHistory.jpg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
          Vehicle Maintenance History
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
        Access comprehensive records of vehicle maintenance history, including service logs, repairs  and inspections, for proactive maintenance planning and compliance assurance.
        </p>
      </div>
    </div>
  );
}

export default AdminApp;
