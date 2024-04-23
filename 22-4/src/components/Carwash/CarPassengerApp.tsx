import React from "react";
import Image from "next/image";

function CarPassengerApp() {
  return (
    <div className="m-10  grid grid-cols-1 justify-center gap-4 sm:grid-cols-3">
      {/* Card 1 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image 
          width={90}
            height={90}

            
            src="/images/carwash/Vehicle Profile Management.jpeg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
          Vehicle Profile Management
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
        Store and manage vehicle details, preferencesand service histories for quick and personalized booking experiences.
        </p>
      </div>
      {/* Card 2 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image 
          width={90}
height={90}

            
            src="/images/carwash/Promotional offers.jpeg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">Promotional Offers</h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
        Receive notifications about special promotions, discountsand loyalty programs to incentivize repeat bookings and customer loyalty.
        </p>
      </div>
      {/* Card 3 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image 
          width={90}
          height={90}

            
            src="/images/carwash/Loation-Based Services.jpeg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">Location-Based Services</h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
        Access location-based recommendations and offers for nearby car wash facilities, enhancing convenience and accessibility.
        </p>
      </div>
      {/* Card 4 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image 
          width={90}
height={90}

            
            src="/images/carwash/Social Sharing.jpeg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">Social Sharing</h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
        Share service experiences and promotions on social media platforms to engage with friends and earn referral rewards.
        </p>
      </div>
      {/* Card 5 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image 
          width={90}
height={90}

            
            src="/images/carwash/Subscription Services.jpeg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">Subscription Services:</h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
        Offer subscription-based car wash plans with recurring payments and discounted rates for loyal customers..
        </p>
      </div>
      {/* Card 6 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image 
          width={90}
height={90}

            
            src="/images/carwash/VIP Priority Booking.jpeg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
          VIP Priority Booking
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
        Provide priority booking slots and express services for VIP customers or premium membership holders.
        </p>
      </div>
      {/* Card 7 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image 
          width={90}
height={90}

            
            src="/images/carwash/Custom Service Packeage.jpeg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">Custom Service Packages</h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
        Customize service packages based on individual customer preferences, such as interior detailing, waxing, or eco-friendly wash options.
        </p>
      </div>
      {/* Card 8 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image 
          width={90}
height={90}

            
            src="/images/carwash/In-App Assistance.jpeg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">In-App Assistance</h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
        Access a built-in chatbot or virtual assistant for quick answers to common queries, troubleshooting assistanceand service recommendations.
        </p>
      </div>
    </div>
  );
}

export default CarPassengerApp;
