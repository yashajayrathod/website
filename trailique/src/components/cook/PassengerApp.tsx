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

            
            src="/images/cook/menuplan.jpg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
          Menu Planning Assistance
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
        Receive personalized menu planning assistance from chefs based on dietary preferences, seasonal ingredients and special occasions.


        </p>
      </div>
      {/* Card 2 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image 
          width={30}
            height={30}

            
            src="/images/cook/cookingclass.jpg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">Cooking Classes</h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
        Access cooking classes and tutorials conducted by chefs to learn new recipes, techniques and culinary skills.


        </p>
      </div>
      {/* Card 3 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image 
          width={30}
            height={30}

            
            src="/images/cook/specialeventscatering.jpg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">Special Events Catering</h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
        Arrange catering services for special events, parties and gatherings with customized menus and chef staffing options.


        </p>
      </div>
      {/* Card 4 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image 
          width={30}
            height={30}

            
            src="/images/cook/kitchenequip.jpg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">Kitchen Equipment Rental</h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
        Rent kitchen equipment and utensils for meal preparation, ensuring access to necessary tools for home cooking.


        </p>
      </div>
     


      
      
    </div>
  );
}

export default PassengerApp;
