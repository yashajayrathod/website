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
            
            src="/images/hm/prescriptionmanage.jpg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg dark:text-white font-medium text-gray-800">
          Prescription Management
          </h3>
        </div>
        <p className="text-sm dark:text-white text-gray-600">
        Generate and manage electronic prescriptions for patients.
        </p>
      </div>
      {/* Card 2 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            width={30}
            height={30}
            
            src="/images/hm/clinicalnotes.jpg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg dark:text-white font-medium text-gray-800">
          Clinical Notes and Documentation
          </h3>
        </div>
        <p className="text-sm dark:text-white text-gray-600">
        Capture and document patient encounters efficiently.
                </p>
        </div>
      {/* Card 3 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            width={30}
            height={30}
            
            src="/images/hm/ordermanage.jpg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg dark:text-white font-medium text-gray-800">
          Order Management
          </h3>
        </div>
        <p className="text-sm dark:text-white text-gray-600">
        Place orders for diagnostic tests, medications and procedures electronically.
</p>
      </div>
      {/* Card 4 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            width={30}
            height={30}
            
            src="/images/hm/interdisciplinarycollaboration.jpg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg dark:text-white font-medium text-gray-800">
          Interdisciplinary Collaboration
           </h3>
        </div>
        <p className="text-sm dark:text-white text-gray-600">
        Collaborate with other healthcare providers to coordinate patient care.
        </p>
      </div>

      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            width={30}
            height={30}
            
            src="/images/hm/clinicalresearch.jpg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg dark:text-white font-medium text-gray-800">
          Clinical Research Integration
           </h3>
        </div>
        <p className="text-sm dark:text-white text-gray-600">
        Participate in clinical research studies and trials through integrated systems.

        </p>
      </div>
      
      
      
      
    </div>
  );
}

export default PassengerApp;
