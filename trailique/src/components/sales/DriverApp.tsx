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

            
            src="/images/sales/performancecoaching.jpg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">Performance Coaching</h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
        Provide personalized coaching and feedback to individual sales reps based on their performance metrics.

        </p>
      </div>
      {/* Card 2 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image 
          width={30}
            height={30}

            
            src="/images/sales/competitoranalysis.jpg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
          Competitor Analysis
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
        Monitor competitor activities and market trends to develop effective sales strategies and countermeasures.

        </p>
      </div>
      {/* Card 3 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image 
          width={30}
            height={30}

            
            src="/images/sales/salesterritory.jpg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
          Sales Territory Mapping
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
        Visualize sales territories on maps to identify opportunities and allocate resources effectively.

        </p>
      </div>
      {/* Card 4 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image 
          width={30}
            height={30}

            
            src="/images/sales/pipelinemanage.jpg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
          Pipeline Management
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
        Monitor and manage the sales pipeline, ensuring opportunities progress smoothly through each stage.
{" "}
        </p>
      </div>
      


      
    </div>
  );
}

export default DriverApp;
