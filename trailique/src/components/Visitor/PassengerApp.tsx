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
            
            src="/images/visitor/SelfserviceKiosks.jpg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
          Self-service Kiosks
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
        Self-service kiosks for quick and convenient check-in/out, reducing reliance on staff assistance.
</p>
      </div>
      {/* Card 2 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            width={30}
            height={30}
            
            src="/images/visitor/VisitorBadgesLabel.jpg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
          Visitor Badges/Labels
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
        Provision of visitor badges or labels for easy identification and security purposes.
        </p>
        </div>
      {/* Card 3 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            width={30}
            height={30}
            
            src="/images/visitor/DigitalWaiversAgreements.jpg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
          Digital Waivers/Agreements
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
        Digital waivers or agreements for visitors to sign electronically, streamlining legal processes.
</p>
      </div>
      {/* Card 4 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            width={30}
            height={30}
            
            src="/images/visitor/EmergencyEvacuationProcedures.jpg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
          Emergency Evacuation Procedures
           </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
        Information and instructions on emergency evacuation procedures for visitor safety.
        </p>
      </div>
      
      
      
      
    </div>
  );
}

export default PassengerApp;
