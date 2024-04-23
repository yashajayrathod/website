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
            src="/images/sales/mobilecrmaccess.jpg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
          Mobile CRM Access
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
        Access to CRM data and customer information on mobile devices for on-the-go sales activities.

        </p>
      </div>
      {/* Card 2 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image 
          width={30}
            height={30}

            
            src="/images/sales/offlinemode.jpg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">Offline Mode</h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
        Ability to work offline and sync data when an internet connection is available, ensuring productivity even in remote areas.

        </p>
      </div>
      {/* Card 3 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image 
          width={30}
            height={30}

            
            src="/images/sales/appointmentschedule.jpg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">Appointment Scheduling</h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
        Schedule appointments with prospects and receive reminders for upcoming meetings.

        </p>
      </div>
      {/* Card 4 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image 
          width={30}
            height={30}

            
            src="/images/sales/salespresentationto.jpg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">Sales Presentation Tools</h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
        Access to presentation materials, product catalogs and pricing information to deliver compelling sales pitches.


        </p>
      </div>
     


      
      
    </div>
  );
}

export default PassengerApp;
