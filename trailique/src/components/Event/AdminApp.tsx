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
            
            src="/images/event/EventTransportCustomization.jpg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
          Event Transport Customization
          </h3>
          </div>
        <p className="text-sm text-gray-600 dark:text-white">
        Customize event transport services to meet the specific needs and preferences of event organizers and attendees.
        </p>
      </div>
      {/* Card 2 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            width={30}
            height={30}
            
            src="/images/event/EventFeedbackCollection.jpg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
          Event Feedback Collection
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
        Collect feedback from event organizers and attendees to improve event transport services and enhance overall satisfaction.        </p>
      </div>
      {/* Card 3 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            width={30}
            height={30}
            
            src="/images/event/EventTransportIntegration.jpg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
          Event Transport Integration
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
        Integrate event transport services with event management platforms, ticketing systems and other event-related services for seamless coordination.
        </p>
      </div>
      {/* Card 4 */}

      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            width={30}
            height={30}
            
            src="/images/event/EventMarketingSupport.jpg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
          Event Marketing Support
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
        Provide marketing support for event transport services, including promotional campaigns, event sponsorships and partnership opportunities.
        </p>
      </div>
    </div>
  );
}

export default AdminApp;
