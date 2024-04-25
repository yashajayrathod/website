import React from "react";
import Image from "next/image";

function AdminApp() {
  return (
    <div className="m-10  grid grid-cols-1 justify-center gap-4 sm:grid-cols-3">
      {/* Card 1 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image 
          width={30}
            height={30}

            
            src="/images/carpool/feedm.jpg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
          Feedback Management{" "}
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
        Monitor and respond to user feedback and inquiries promptly, addressing concerns and maintaining high levels of user satisfaction.
        </p>
      </div>
      {/* Card 2 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image 
          width={30}
            height={30}

            
            src="/images/carpool/driverscreening.jpg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
          Driver Screening
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
        Implement rigorous driver screening processes, including background checks and license verification, to ensure driver eligibility and safety compliance.
{" "}
        </p>
      </div>
      {/* Card 3 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image 
          width={30}
            height={30}

            
            src="/images/carpool/realmonetring.jpg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
          Real-Time Monitoring
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
        Monitor carpooling activities and user interactions in real-time, enabling proactive intervention and resolution of issues as they arise.
        </p>
      </div>
      {/* Card 4 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image 
          width={30}
            height={30}

            
            src="/images/carpool/marketingcam.jpg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
          Marketing Campaigns
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
        Launch targeted marketing campaigns and promotions to attract new users, increase engagement and grow the carpooling community.

        </p>
      </div>
      {/* Card 5 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image 
          width={30}
            height={30}

            
            src="/images/carpool/customizablep.jpg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
          Customizable Policies
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
        Establish customizable policies and rules governing carpooling operations, ensuring alignment with organizational objectives and regulatory requirements.{" "}
        </p>
      </div>


    
    </div>
  );
}

export default AdminApp;
