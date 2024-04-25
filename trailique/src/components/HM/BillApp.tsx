import React from "react";
import Image from "next/image";

function BillApp() {
  return (
    <div className="m-10  grid grid-cols-1 justify-center gap-4 sm:grid-cols-3">
      {/* Card 1 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            width={30}
            height={30}
            
            src="/images/hm/denialmanage.jpg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg dark:text-white font-medium text-gray-800">
          Denial Management
          </h3>
        </div>
        <p className="text-sm dark:text-white text-gray-600">
        Investigate and appeal claim denials to maximize reimbursement and reduce revenue loss.
</p>
      </div>
      {/* Card 2 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            width={30}
            height={30}
            
            src="/images/hm/claimfollow.jpg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg dark:text-white font-medium text-gray-800">
          Claims Follow-Up
          </h3>
        </div>
        <p className="text-sm dark:text-white text-gray-600">
        Follow up on outstanding insurance claims and resolve claim discrepancies and issues.
        </p>
        </div>
      {/* Card 3 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            width={30}
            height={30}
            
            src="/images/hm/pricetransparency.jpg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg dark:text-white font-medium text-gray-800">
          Price Transparency
          </h3>
        </div>
        <p className="text-sm dark:text-white text-gray-600">
        Provide patients with estimates of out-of-pocket costs for healthcare services and procedures.
</p>
      </div>
      {/* Card 4 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            width={30}
            height={30}
            
            src="/images/hm/charitymanagement.jpg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg dark:text-white font-medium text-gray-800">
          Charity Care Management
           </h3>
        </div>
        <p className="text-sm dark:text-white text-gray-600">
        Evaluate and approve charity care applications for eligible patients in need of financial assistance.
        </p>
      </div>

      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            width={30}
            height={30}
            
            src="/images/hm/thirtpartymanage.jpg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg dark:text-white font-medium text-gray-800">
          Third-Party Billing
           </h3>
        </div>
        <p className="text-sm dark:text-white text-gray-600">
        Bill third-party payers, such as workers' compensation and auto insurance, for patient services rendered.
        </p>
      </div>
      
      
      
      
    </div>
  );
}

export default BillApp;
