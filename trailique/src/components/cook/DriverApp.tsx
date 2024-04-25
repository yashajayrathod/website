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

            
            src="/images/cook/ingredients.jpg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">Ingredient Sourcing Support</h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
        Receive support for ingredient sourcing, including supplier recommendations, bulk ordering assistance and delivery coordination.

        </p>
      </div>
      {/* Card 2 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image 
          width={30}
            height={30}

            
            src="/images/cook/kitchenprep.jpg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
          Kitchen Prep Assistance
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
        Access assistance with kitchen prep tasks, such as ingredient prepping, meal assembly and equipment setup.


        </p>
      </div>
      {/* Card 3 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image 
          width={30}
            height={30}

            
            src="/images/cook/clientrelation.jpg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
          Client Relationship Management
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
        Manage client relationships, including communication, follow-ups and client satisfaction monitoring
        </p>
      </div>
      {/* Card 4 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image 
          width={30}
            height={30}

            
            src="/images/cook/receipedevlopment.jpg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
          Recipe Development Services
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
        Offer recipe development services to clients, creating custom recipes tailored to their preferences, dietary needs and taste preferences.
{" "}
        </p>
      </div>
     


      
    </div>
  );
}

export default DriverApp;
