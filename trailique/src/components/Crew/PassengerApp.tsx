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
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
          Group Bookings
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
        Arrange transportation for large crews or teams with group booking options, streamlining coordination and scheduling.
</p>
      </div>
      {/* Card 2 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            width={30}
            height={30}
            
            src="/images/crew/SpecialRequestsHandling.jpg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">Special Requests Handling</h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
        Accommodate special requests such as equipment transport, luggage storage, or catering arrangements for crew comfort and convenience.

</p>              </div>
      {/* Card 3 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            width={30}
            height={30}
            
            src="/images/crew/CustomizedNotifications.jpg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">Customized Notifications</h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
        Receive customized notifications and alerts for trip updates, delays, or changes to ensure crew members are informed and prepared.
        </p>
      </div>
      {/* Card 4 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            width={30}
            height={30}
            
            src="/images/crew/ExpenseTracking.jpg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
          Expense Tracking 
           </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
        Track transportation expenses for crew members, including fare breakdowns, reimbursement options  and budget management features.
        </p>
      </div>
      {/* Card 5 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            width={30}
            height={30}
            
            src="/images/crew/FeedbackCollection.jpg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
          Feedback Collection
           </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
        Collect feedback from passengers to improve service quality and address any concerns or issues promptly.
        </p>
      </div>
      
      
      
    </div>
  );
}

export default PassengerApp;
