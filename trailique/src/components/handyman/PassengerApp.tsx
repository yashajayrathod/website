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

            
            src="/images/handyman/multiservicereq.jpg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
          Multi-Service Requests
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
        Submit multiple service requests simultaneously for different tasks or locations.

        </p>
      </div>
      {/* Card 2 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image 
          width={30}
            height={30}

            
            src="/images/handyman/servicehistory.jpg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">Service History</h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
        Access a detailed history of past service requests, including task descriptions, service providers, and ratings.

        </p>
      </div>
      {/* Card 3 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image 
          width={30}
            height={30}

            
            src="/images/handyman/taskschedule.jpg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">Task Scheduling</h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
        Schedule recurring tasks or set reminders for future service needs, enhancing convenience and organization.

        </p>
      </div>
      {/* Card 4 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image 
          width={30}
            height={30}

            
            src="/images/handyman/emergencyserv.jpg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">Emergency Services</h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
        Access emergency assistance for urgent tasks requiring immediate attention, such as plumbing or electrical issues.

        </p>
      </div>
      {/* Card 5 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image 
          width={30}
            height={30}

            
            src="/images/handyman/advancesearch.jpg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">Advanced Search Filters</h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
        Refine search results based on service provider ratings, experience level, and proximity to optimize selection.

        </p>
      </div>


      {/* Card 5 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image 
          width={30}
            height={30}

            
            src="/images/handyman/taskremain.jpg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">Task Reminder Notifications</h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
        Receive reminders for upcoming task appointments to ensure timely preparation and attendance.

        </p>
      </div>



 {/* Card 5 */}
 <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image 
          width={30}
            height={30}

            
            src="/images/handyman/integratedreview.jpg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">Integrated Reviews</h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
        Access and contribute to service provider reviews directly within the app to foster transparency and accountability.


        </p>
      </div>


       {/* Card 5 */}
 <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image 
          width={30}
            height={30}

            
            src="/images/handyman/taskcatrgory.jpg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">Task Categorization</h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
        Categorize tasks into different service types (e.g., plumbing, electrical, landscaping) for easier navigation and organization.



        </p>
      </div>




      
      
    </div>
  );
}

export default PassengerApp;
