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
            src="/images/employee/Employee Management.jpeg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
            Employee Management
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
          Manage employee profiles, preferences and permissions within the
          transport system, ensuring accurate and up-to-date user information.
        </p>
      </div>
      {/* Card 2 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            width={30}
            height={30}
            src="/images/employee/Cost Allocation.jpeg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">Cost Allocation</h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
          Track and allocate transportation costs to departments or cost
          centers, facilitating budget management and financial reporting.
        </p>
      </div>
      {/* Card 3 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            width={30}
            height={30}
            src="/images/employee/Vendor Management.jpeg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
            Vendor Management
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
          Manage relationships with transportation service providers, including
          contract negotiations, performance evaluations and service level
          agreements.
        </p>
      </div>
      {/* Card 4 */}

      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            width={30}
            height={30}
            src="/images/employee/Integration Capabilities.jpeg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
            Integration Capabilities
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
          Integrate with existing HR, payroll or ERP systems to streamline data
          exchange and facilitate seamless employee transport management.
        </p>
      </div>
    </div>
  );
}

export default AdminApp;
