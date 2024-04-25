import React from "react";
import Image from "next/image";

function FDApp() {
  return (
    <div className="m-10  grid grid-cols-1 justify-center gap-4 sm:grid-cols-3">
      {/* Card 1 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            width={30}
            height={30}
            
            src="/images/hm/queuemanage.jpg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg dark:text-white font-medium text-gray-800">
          Queue Management
          </h3>
        </div>
        <p className="text-sm dark:text-white text-gray-600">
        Manage patient flow efficiently, minimize wait times and optimize resource utilization.

</p>
      </div>
      {/* Card 2 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            width={30}
            height={30}
            
            src="/images/hm/insurenceverification.jpg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg dark:text-white font-medium text-gray-800">
          Insurance Verification
          </h3>
        </div>
        <p className="text-sm dark:text-white text-gray-600">
        Verify patient insurance coverage, eligibility and benefits.
        </p>
        </div>
      {/* Card 3 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            width={30}
            height={30}
            
            src="/images/hm/patientintakeforms.jpg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg dark:text-white font-medium text-gray-800">
          Patient Intake Forms
          </h3>
        </div>
        <p className="text-sm dark:text-white text-gray-600">
        Collect patient information and consent forms electronically for streamlined registration.
</p>
      </div>
      {/* Card 4 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            width={30}
            height={30}
            
            src="/images/hm/refferealamange.jpg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg dark:text-white font-medium text-gray-800">
          Referral Management
           </h3>
        </div>
        <p className="text-sm dark:text-white text-gray-600">
        Coordinate patient referrals to specialists and other healthcare facilities.
        </p>
      </div>

      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            width={30}
            height={30}
            
            src="/images/hm/multilingual.jpg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg dark:text-white font-medium text-gray-800">
          Multilingual Support
           </h3>
        </div>
        <p className="text-sm dark:text-white text-gray-600">
        Provide language interpretation services for patients with limited English proficiency.
        </p>
      </div>
      
      
      
      
    </div>
  );
}

export default FDApp;
