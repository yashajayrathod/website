import React from "react";
import Image from "next/image";

function IAApp() {
  return (
    <div className="m-10  grid grid-cols-1 justify-center gap-4 sm:grid-cols-3">
      {/* Card 1 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            width={30}
            height={30}
            
            src="/images/hm/policyenrollment.jpg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg dark:text-white font-medium text-gray-800">
          Policy Enrollment Support
          </h3>
        </div>
        <p className="text-sm dark:text-white text-gray-600">
        Assist patients with enrolling in health insurance plans and understanding policy benefits.
        </p>
      </div>
      {/* Card 2 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            width={30}
            height={30}
            
            src="/images/hm/claimadvocacy.jpg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg dark:text-white font-medium text-gray-800">
          Claims Advocacy
          </h3>
        </div>
        <p className="text-sm dark:text-white text-gray-600">
        Advocate on behalf of patients to resolve insurance
         claim disputes and issues.

        </p>
        </div>
      {/* Card 3 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            width={30}
            height={30}
            
            src="/images/hm/insurenceeducation.jpg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg dark:text-white font-medium text-gray-800">
          Insurance Education
          </h3>
        </div>
        <p className="text-sm dark:text-white text-gray-600">
        Educate patients about their insurance options, including Medicare, Medicaid and private health insurance plans.
</p>
      </div>
      {/* Card 4 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            width={30}
            height={30}
            
            src="/images/hm/coordinateofbenefits.jpg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg dark:text-white font-medium text-gray-800">
          Coordination of Benefits
           </h3>
        </div>
        <p className="text-sm dark:text-white text-gray-600">
        Coordinate benefits between multiple insurance plans to maximize coverage and minimize out-of-pocket costs for patients.        </p>
      </div>

      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            width={30}
            height={30}
            
            src="/images/hm/cr.jpg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg dark:text-white font-medium text-gray-800">
          Claims Reimbursement Assistance
           </h3>
        </div>
        <p className="text-sm dark:text-white text-gray-600">
        Assist patients with tracking and reconciling insurance claim 
        payments and reimbursements.
        </p>
      </div>
      
      
      
      
    </div>
  );
}

export default IAApp;
