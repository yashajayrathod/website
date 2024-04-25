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
            
            src="/images/hm/carecoordination.jpg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg dark:text-white font-medium text-gray-800">
          Care Coordination
            </h3>
        </div>
        <p className="text-sm dark:text-white text-gray-600">
        Coordinate care transitions and follow-up appointments for patients.
        </p>
        </div>
      {/* Card 2 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
              width={30}
              height={30}
            
            src="/images/hm/nursingworkflow.jpg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg dark:text-white font-medium text-gray-800">
          Nursing Workflow Automation
          </h3>
        </div>
        <p className="text-sm dark:text-white text-gray-600">
        Streamline nursing tasks and workflows to improve efficiency.
        </p>
        </div>
      {/* Card 3 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
          width={30}
          height={30}

            className="mr-2"
            src="/images/hm/patienteducation.jpg"
            alt="Location Icon"
            
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg dark:text-white font-medium text-gray-800">
          Patient Education
          </h3>
        </div>
        <p className="text-sm dark:text-white text-gray-600">
        Provide patients with personalized education based on their health conditions.
        </p>
        </div>
      {/* Card 4 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
          width={30}
          height={30}

            className="mr-2"
            src="/images/hm/woundcareManage.jpg"
            alt="Location Icon"
            
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg dark:text-white font-medium text-gray-800">
          Wound Care Management
          </h3>
        </div>
        <p className="text-sm dark:text-white text-gray-600">
        Track wound healing progress and manage wound care interventions.
        </p>
        </div>

        <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
          width={30}
          height={30}

            className="mr-2"
            src="/images/hm/infectioncontrol.jpg"
            alt="Location Icon"
            
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg dark:text-white font-medium text-gray-800">
          Infection Control Monitoring
          </h3>
        </div>
        <p className="text-sm dark:text-white text-gray-600">
        Monitor and track infection control measures to prevent healthcare-associated infections.        </p>
        </div>
      

      
    </div>
  );
}

export default DriverApp;
