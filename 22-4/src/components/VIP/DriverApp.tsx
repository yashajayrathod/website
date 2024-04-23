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
            
            src="/images/vip/PerformanceMonitoring.jpg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
          Performance Monitoring
            </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
        Monitor driver performance metrics such as punctuality, professionalism  and customer satisfaction ratings, providing feedback and coaching for continuous improvement.
        </p>
      </div>
      {/* Card 2 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
              width={30}
              height={30}
            
            src="/images/vip/In-App Navigation.jpg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
          In-App Navigation
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
        Provide drivers with built-in navigation tools and real-time traffic updates to optimize routes, minimize delays  and ensure efficient trip completion.
        </p>
      </div>
      {/* Card 3 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
          width={30}
          height={30}

            className="mr-2"
            src="/images/vip/VehicleInspectionChecklist.jpg"
            alt="Location Icon"
            
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
          Vehicle Inspection Checklist
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
        Implement a digital checklist for pre-trip vehicle inspections, ensuring that drivers conduct thorough checks on essential safety features and equipment before each journey.
        </p>
      </div>
      {/* Card 4 */}
      
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
          width={30}
          height={30}

            
            src="/images/vip/DriverAssistance.jpg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
          Driver Assistance
              </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
        Offer driver assistance features such as roadside assistance, emergency contacts  and support hotlines to provide immediate help and support in case of emergencies or breakdowns.        </p>
      </div>

      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
          width={30}
          height={30}

            
            src="/images/vip/TrainingResources.jpg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
          Training Resources
              </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
        Provide access to training materials, resources  and quizzes for drivers to enhance their skills, knowledge  and compliance with safety regulations and best practices.

        </p>
        </div>
    </div>
  );
}

export default DriverApp;
