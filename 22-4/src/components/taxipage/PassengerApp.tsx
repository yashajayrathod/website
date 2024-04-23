import React from "react";
import Image from "next/image";

function PassengerApp() {
  return (
    <div className="m-10  grid grid-cols-1 justify-center gap-4 sm:grid-cols-3">
      {/* Card 1 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            src="/images/taxi/passengericon.png"
            alt="Location Icon"
            width={30}
            height={30}
            className="mr-2 dark:bg-white"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
            Passenger Profile
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
          Maintain personalized user profiles for tailored services.
        </p>
      </div>
      {/* Card 2 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            src="/images/taxi/sos.png"
            alt="Location Icon"
            width={30}
            height={30}
            className="mr-2 dark:bg-white"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">SOS Alerts</h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
          Access in-app emergency button for immediate assistance.
        </p>
      </div>
      {/* Card 3 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            src="/images/taxi/ride.png"
            alt="Location Icon"
            width={30}
            height={30}
            className="mr-2 dark:bg-white"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">Ride Now</h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
          Instantly book rides for immediate transportation needs.
        </p>
      </div>
      {/* Card 4 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            src="/images/taxi/schedule.png"
            alt="Location Icon"
            width={30}
            height={30}
            className="mr-2 dark:bg-white"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">Schedule Ride</h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
          Pre-book rides for future journeys.
        </p>
      </div>
      {/* Card 5 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            src="/images/taxi/real.png"
            alt="Location Icon"
            width={30}
            height={30}
            className="mr-2 dark:bg-white"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">Real-Time ETA</h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
          Receive live updates on driver arrival times.
        </p>
      </div>
      {/* Card 6 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            src="/images/taxi/payment.png"
            alt="Location Icon"
            width={30}
            height={30}
            className="mr-2 dark:bg-white"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
            Multiple Payment Options
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
          Choose from various payment methods for convenience.
        </p>
      </div>
      {/* Card 7 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            src="/images/taxi/drivericon.png"
            alt="Location Icon"
            width={30}
            height={30}
            className="mr-2 dark:bg-white"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">Driver Tracking</h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
          Monitor driver location and progress.
        </p>
      </div>
      {/* Card 8 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            src="/images/taxi/promo.png"
            alt="Location Icon"
            width={30}
            height={30}
            className="mr-2 dark:bg-white"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">Promo Codes</h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
          Redeem discounts and promotions for rides.
        </p>
      </div>
      {/* Card 9 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            src="/images/taxi/rate.png"
            alt="Location Icon"
            width={30}
            height={30}
            className="mr-2 dark:bg-white "
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">Ride Ratings</h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
          Provide feedback and ratings for ride experiences.
        </p>
      </div>
      {/* Card 10 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            src="/images/taxi/trip.png"
            alt="Location Icon"
            width={30}
            height={30}
            className="mr-2 dark:bg-white"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">Trip History</h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
          Access detailed records of past rides.
        </p>
      </div>
      {/* Card 11 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            src="/images/taxi/favorite.png"
            alt="Location Icon"
            width={30}
            height={30}
            className="mr-2 dark:bg-white"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
            Favorite Locations
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
          Save frequently visited destinations for quick bookings.
        </p>
      </div>
    </div>
  );
}

export default PassengerApp;
