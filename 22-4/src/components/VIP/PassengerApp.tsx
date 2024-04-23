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
            
            src="/images/vip/BookingOptions.jpg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800  dark:text-white">
          Booking Options
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
        Provide passengers with multiple booking options, including single trips, recurring schedules  and group bookings, catering to diverse travel needs and preferences.
</p>
      </div>
      {/* Card 2 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            width={30}
            height={30}
            
            src="/images/vip/PaymentIntegration.jpg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">Payment Integration</h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
        Integrate payment gateways to facilitate secure and convenient payment processing for passengers, supporting various payment methods such as credit/debit cards, mobile wallets  and digital payments.</p>
              </div>
      {/* Card 3 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            width={30}
            height={30}
            
            src="/images/vip/AccessibilityFeatures.jpg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">Accessibility Features</h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
        Implement accessibility features such as wheelchair-accessible vehicles, visual/audio assistance  and language translation support to ensure inclusivity and equal access to transportation services.
        </p>
      </div>
      {/* Card 4 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            width={30}
            height={30}
            
            src="/images/vip/FeedbackMechanism.jpg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
            Feedback Mechanism
           </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
        Enable passengers to provide feedback and ratings for trips and drivers, fostering transparency, accountability  and continuous improvement in service quality.
        </p>
      </div>
      {/* Card 5 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            width={30}
            height={30}
            
            src="/images/vip/Rewards Program.jpg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
          Rewards Program
           </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
        Implement a rewards program to incentivize passenger loyalty and engagement, offering perks such as discounts, loyalty points  and exclusive offers for frequent travelers.
        </p>
      </div>
      
      
      
    </div>
  );
}

export default PassengerApp;
