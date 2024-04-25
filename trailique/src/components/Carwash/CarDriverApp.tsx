import React from "react";
import Image from "next/image";

function CarDriverApp() {
  return (
    <div className="m-10  grid grid-cols-1 justify-center gap-4 sm:grid-cols-3">
      {/* Card 1 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image 
          width={90}
          height={90}

            
            src="/images/carwash/Task Scheduling Optimization.jpeg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">Task Scheduling Optimization</h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
          Optimize task schedules based on location, service typeand service provider availability to maximize productivity and efficiency.
        </p>
      </div>
      {/* Card 2 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image 
          width={90}
          height={90}

            
            src="/images/carwash/Inventory Restocking Alerts.jpeg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
          Inventory Restocking Alerts
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
        Receive automatic alerts for low inventory levels and reorder supplies as needed to prevent service disruptions.
        </p>
      </div>
      {/* Card 3 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image 
          width={90}
          height={90}

            
            src="/images/carwash/Training Resources.jpeg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
          Training Resources
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
        Access training materials, tutorialsand best practices guides to enhance service skills and stay updated on industry trends.
        </p>
      </div>
      {/* Card 4 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image 
          width={90}
          height={90}
            src="/images/carwash/Performance Incentives.jpeg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
          Performance Incentives
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
        Implement performance-based incentives and rewards programs to motivate service providers and improve service quality.{" "}
        </p>
      </div>
      {/* Card 5 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image 
          width={90}
          height={90}

            
            src="/images/carwash/Route Optimization.jpeg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">Route Optimization</h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
        Utilize GPS and route optimization algorithms to plan efficient service routes, minimizing travel time and fuel consumption.
        </p>
      </div>
      {/* Card 6 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image 
          width={90}
          height={90}

            
            src="/images/carwash/Dynamic Staff Allocation.jpeg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
          Dynamic Staff Allocation{" "}
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
        Dynamically allocate staff resources based on real-time demand fluctuations and service requirements for optimal workforce management.
        </p>
      </div>
      {/* Card 7 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image 
          width={90}
          height={90}

            
            src="/images/carwash/Customer Feedback Analysis.jpeg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
          Customer Feedback Analysis
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
        Analyze customer feedback trends and sentiment analysis to identify areas for service improvement and address any recurring issues proactively.
        </p>
      </div>
      {/* Card 8 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image 
          width={90}
          height={90}

            
            src="/images/carwash/weather Forecast Integration.jpeg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
          Weather Forecast Integration
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
        Integrate weather forecast data to anticipate demand fluctuations and adjust service schedules accordingly, optimizing resource utilization.

        </p>
      </div>
    </div>
  );
}

export default CarDriverApp;
