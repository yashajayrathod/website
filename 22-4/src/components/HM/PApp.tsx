import React from "react";
import Image from "next/image";

function PApp() {
  return (
    <div className="m-10  grid grid-cols-1 justify-center gap-4 sm:grid-cols-3">
      {/* Card 1 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            width={30}
            height={30}
            
            src="/images/crew/GroupBookings.jpg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg dark:text-white font-medium text-gray-800">
          Medication Therapy Management
          </h3>
        </div>
        <p className="text-sm dark:text-white text-gray-600">
        Conduct medication reviews and optimize therapy regimens for patients.
</p>
      </div>
      {/* Card 2 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            width={30}
            height={30}
            
            src="/images/property/PropertyInspections.jpg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg dark:text-white font-medium text-gray-800">
          Compounding and Specialty Pharmacy Services
          </h3>
        </div>
        <p className="text-sm dark:text-white text-gray-600">
        Prepare customized medications and provide specialized pharmaceutical services.
        </p>
        </div>
      {/* Card 3 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            width={30}
            height={30}
            
            src="/images/property/LegalCompliance.jpg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg dark:text-white font-medium text-gray-800">
          Medication Adherence Monitoring
          </h3>
        </div>
        <p className="text-sm dark:text-white text-gray-600">
        Monitor patient medication adherence and provide interventions as needed.
        </p>
      </div>
      {/* Card 4 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            width={30}
            height={30}
            
            src="/images/property/PropertyMarketing.jpg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg dark:text-white font-medium text-gray-800">
          Medication Reconciliation
           </h3>
        </div>
        <p className="text-sm dark:text-white text-gray-600">
        Review and reconcile patient medication lists to ensure accuracy and safety.
        </p>
      </div>

      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            width={30}
            height={30}
            
            src="/images/property/PropertyMarketing.jpg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg dark:text-white font-medium text-gray-800">
          Regulatory Compliance
           </h3>
        </div>
        <p className="text-sm dark:text-white text-gray-600">
        Ensure compliance with pharmacy laws, regulations and best practices.

        </p>
      </div>
      
      
      
      
    </div>
  );
}

export default PApp;
