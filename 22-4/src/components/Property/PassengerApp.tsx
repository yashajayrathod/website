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
            
            src="/images/crew/GroupBookings.jpg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg dark:text-white font-medium text-gray-800">
          Tenant Screening
          </h3>
        </div>
        <p className="text-sm dark:text-white text-gray-600">
        Conduct thorough background checks on prospective tenants.
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
          Property Inspections
          </h3>
        </div>
        <p className="text-sm dark:text-white text-gray-600">
        Schedule and conduct regular property inspections for maintenance standards.
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
          Legal Compliance
          </h3>
        </div>
        <p className="text-sm dark:text-white text-gray-600">
        Remain compliant with rental laws and regulations, with automated reminders.
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
          Property Marketing
           </h3>
        </div>
        <p className="text-sm dark:text-white text-gray-600">
        List available properties on rental platforms and manage inquiries.
        </p>
      </div>
      
      
      
      
    </div>
  );
}

export default PassengerApp;
