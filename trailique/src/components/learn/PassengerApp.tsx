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

            
            src="/images/learn/mobileofflineac.jpg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
          Mobile Offline Access
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
        Enable offline access to course content for learning on-the-go.

        </p>
      </div>
      {/* Card 2 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image 
          width={30}
            height={30}

            
            src="/images/learn/personalizedrecommend.jpg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white ">Personalized Recommendations</h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
        Provide course recommendations based on learner preferences.



        </p>
      </div>
      {/* Card 3 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image 
          width={30}
            height={30}

            
            src="/images/learn/sociallearningco.jpg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">Social Learning Communities</h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
        Facilitate social learning through community forums.



        </p>
      </div>
      {/* Card 4 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image 
          width={30}
            height={30}

            
            src="/images/learn/microlearning.jpg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">Microlearning Modules</h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
        Offer bite-sized learning modules for quick skill development.
        </p>
      </div>
     
  {/* Card 4 */}
  <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image 
          width={30}
            height={30}

            
            src="/images/learn/vr.jpg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">Virtual Reality (VR) Training</h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
        Integrate VR simulations for immersive learning experiences.



        </p>
      </div>
     

      
      
    </div>
  );
}

export default PassengerApp;
