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

            
            src="/images/school/behavem.jpg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">Behavior Monitoring</h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
        Monitor student behavior and discipline on school buses, recording incidents or disruptions and providing feedback to school administrators for intervention and resolution.


        </p>
      </div>
      {/* Card 2 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image 
          width={30}
            height={30}

            
            src="/images/school/drivertrain.jpg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
          Driver Training Resources
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
        Provide access to training materials, resources and quizzes for drivers to enhance their skills, knowledge and compliance with safety regulations and best practices.


        </p>
      </div>
      {/* Card 3 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image 
          width={30}
            height={30}

            
            src="/images/school/performanceeval.jpg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white ">
          Performance Evaluation
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
        Conduct regular performance evaluations and assessments for drivers based on factors such as punctuality, adherence to routes and customer service, promoting accountability and professionalism.
        </p>
      </div>
      {/* Card 4 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image 
          width={30}
            height={30}

            
            src="/images/school/driverecognization.jpg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
          Driver Recognition Program
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
        Implement a driver recognition program to acknowledge and reward exceptional performance, reliability and commitment to student safety during school transportation.{" "}
        </p>
      </div>


     


      
    </div>
  );
}

export default DriverApp;
