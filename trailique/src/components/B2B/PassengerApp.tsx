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
            
            src="/images/b2b/RFQManagement.jpg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
          RFQ Management
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
        Request and manage quotes for custom products or bulk purchases.
</p>
      </div>
      {/* Card 2 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            width={30}
            height={30}
            
            src="/images/b2b/SupplierManagement.jpg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
            Supplier Management
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
        Maintain relationships with preferred suppliers and manage supplier contracts.
        </p>
        </div>
      {/* Card 3 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            width={30}
            height={30}
            
            src="/images/b2b/PurchaseApprovalWorkflow.jpg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
          Purchase Approval Workflow
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
        Implement approval workflows for purchase requests to ensure compliance with company policies.        </p>
      </div>
      {/* Card 4 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            width={30}
            height={30}
            
            src="/images/b2b/BudgetManagement.jpg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
          Budget Management
           </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
        Set and track spending limits, allocate budgets to different departments and monitor expenses in real-time.
        </p>
      </div>
      
      
      
      
    </div>
  );
}

export default PassengerApp;
