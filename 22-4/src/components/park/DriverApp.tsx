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
            src="/images/park/feedbacknrating.jpg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
            Feedback and Ratings
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
          Feedback and rating system to provide insights into parking
          experiences and improve service quality.
        </p>
      </div>
      {/* Card 2 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            width={30}
            height={30}
            src="/images/park/reservationmanage.jpg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
            Reservation Management
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
          Management of parking reservations including modifications,
          cancellations and refunds.
        </p>
      </div>
      {/* Card 3 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            width={30}
            height={30}
            src="/images/park/parkingspace.jpg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
            Parking Space Filtering
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
          Filtering options to find parking spaces based on preferences like
          location, price and amenities.
        </p>
      </div>
      {/* Card 4 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            width={30}
            height={30}
            src="/images/park/multiplatformac.jpg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
            Multi-platform Access
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
          Access to parking services through multiple platforms including web,
          mobile app and kiosks.{" "}
        </p>
      </div>
    </div>
  );
}

export default DriverApp;
