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
            
            src="/images/property/CommunityAmenities.jpg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg dark:text-white font-medium text-gray-800">
          Community Amenities
            </h3>
        </div>
        <p className="text-sm dark:text-white text-gray-600">
        Access information about available amenities and community events.
        </p>
        </div>
      {/* Card 2 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
              width={30}
              height={30}
            
            src="/images/property/EmergencyAssistance.jpg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg dark:text-white font-medium text-gray-800">
          Emergency Assistance
          </h3>
        </div>
        <p className="text-sm dark:text-white text-gray-600">
        Quickly access emergency contact information and procedures.
        </p>
        </div>
      {/* Card 3 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
          width={30}
          height={30}

            className="mr-2"
            src="/images/property/RentReminders.jpg"
            alt="Location Icon"
            
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg dark:text-white font-medium text-gray-800">
          Rent Reminders
          </h3>
        </div>
        <p className="text-sm dark:text-white text-gray-600">
        Receive automated reminders for upcoming rent payments.
        </p>
        </div>
      {/* Card 4 */}
      
      

      
    </div>
  );
}

export default DriverApp;
