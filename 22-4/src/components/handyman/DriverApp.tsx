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

            
            src="/images/handyman/portfolioshow.jpg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">Portfolio Showcase</h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
        Showcase previous work, certifications, and client reviews to attract potential customers and build credibility.


        </p>
      </div>
      {/* Card 2 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image 
          width={30}
            height={30}

            
            src="/images/handyman/serviceareac.jpg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
          Service Area Customization
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
        Define service areas and availability zones to receive task requests within preferred locations.


        </p>
      </div>
      {/* Card 3 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image 
          width={30}
            height={30}

            
            src="/images/handyman/taskcompletionpic.jpg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
          Task Completion Photos
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
        Capture and upload photos of completed tasks for client verification and documentation purposes.

        </p>
      </div>
      {/* Card 4 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image 
          width={30}
            height={30}

            
            src="/images/handyman/inventorymanagement.jpg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
          Inventory Management
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
        Maintain an inventory of tools, equipment, and supplies needed for service provision and replenishment.
{" "}
        </p>
      </div>
      {/* Card 5 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image 
          width={30}
            height={30}

            
            src="/images/handyman/inventorymanagement.jpg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">Customized Pricing</h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
        Set flexible pricing structures for different services or task complexities to cater to varying customer budgets.


        </p>
      </div>


 {/* Card 5 */}
 <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image 
          width={30}
            height={30}

            
            src="/images/handyman/clientpref.jpg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">Client Preferences</h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
        Capture and save client preferences, such as preferred time slots and service specifications, for personalized service delivery.



        </p>
      </div>


      {/* Card 5 */}
 <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image 
          width={30}
            height={30}

            
            src="/images/handyman/resourcesharing.jpg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">Resource Sharing</h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
        Collaborate with other service providers to share tools, equipment, and expertise, enabling efficient resource utilization.

        </p>
      </div>


        {/* Card 5 */}
 <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image 
          width={30}
            height={30}

            
            src="/images/handyman/taskperformanceanalytics.jpg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">Task Performance Analytics</h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
        Analyze task completion times, customer satisfaction ratings, and repeat business rates to optimize service delivery strategies.


        </p>
      </div>


      
    </div>
  );
}

export default DriverApp;
