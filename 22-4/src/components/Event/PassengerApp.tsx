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
            
            src="/images/event/EventShuttleServices.jpg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
          Event Shuttle Services
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
        Provide shuttle services for large events, offering convenient and efficient transport options for attendees.        </p>
      </div>
      {/* Card 2 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            width={30}
            height={30}
            
            src="/images/event/EventInformationIntegration.jpg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">Event Information Integration</h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
        Integrate event information such as schedules, venues and ticketing details within the app for easy access and reference.        </p>
      </div>
      {/* Card 3 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            width={30}
            height={30}
            
            src="/images/event/PersonalizedRecommendations.jpg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">Personalized Recommendations</h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
        Offer personalized event transport recommendations based on user preferences, location and past bookings.
        </p>
      </div>
      {/* Card 4 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            width={30}
            height={30}
            
            src="/images/event/EventSafetyMeasures.jpg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">Event Safety Measures </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
        Implement safety measures such as emergency contacts, SOS buttons and real-time location sharing for enhanced event security.
        </p>
      </div>
      {/* Card 5 */}
      
      
      
    </div>
  );
}

export default PassengerApp;
