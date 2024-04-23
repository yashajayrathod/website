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
            
            src="/images/event/EventTraffiAlerts.jpg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">Event Traffic Alerts</h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
        Receive real-time event traffic alerts and alternative route suggestions to avoid traffic congestion and ensure timely arrivals.        </p>
      </div>
      {/* Card 2 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
              width={30}
              height={30}
            
            src="/images/event/EventLogisticsSupport.jpg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
          Event Logistics Support
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
        Provide logistics support for event setup, breakdown and transportation coordination, facilitating smooth event operations.
        </p>
      </div>
      {/* Card 3 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
          width={30}
          height={30}

            className="mr-2"
            src="/images/event/EventPaymentFlexibility.jpg"
            alt="Location Icon"
            
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
          Event Payment Flexibility
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
        Offer flexible payment options for event transport services, including cashless payments, split payments and advance bookings.</p>
      </div>
      {/* Card 4 */}
      
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
          width={30}
          height={30}

            
            src="/images/event/EventTransportPartnerNetwork.jpg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">Event Transport Partner Network</h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
        Collaborate with event organizers to establish a network of transport partners, ensuring sufficient coverage and capacity for events of all sizes.
        </p>
      </div>
    </div>
  );
}

export default DriverApp;
