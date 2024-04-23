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
            src="/images/babysitter/Emergency Alerts.jpeg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
            Emergency Alerts
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
          Set up emergency alerts and notifications to receive immediate updates
          in case of emergencies during babysitting sessions.
        </p>
      </div>
      {/* Card 2 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            width={30}
            height={30}
            src="/images/babysitter/Schedule Reminders.jpeg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
            Schedule Reminders
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
          Receive reminders and notifications for upcoming babysitting
          appointments to help stay organized and prepared.
        </p>
      </div>
      {/* Card 3 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            width={30}
            height={30}
            src="/images/babysitter/Video Monitoring.jpeg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
            Video Monitoring
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
          Access live video feeds or recorded footage of babysitting sessions
          for added peace of mind and security.
        </p>
      </div>
      {/* Card 4 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            width={30}
            height={30}
            src="/images/babysitter/Parent Community Forum.jpeg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
            Parent Community Forum
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
          Join a community forum or discussion board to connect with other
          parents, share tipsand exchange recommendations for babysitters.
        </p>
      </div>
      {/* Card 5 */}
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            width={30}
            height={30}
            src="/images/babysitter/Customized Profiles.jpeg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
            Customized Profiles
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
          Create profiles for each child with specific preferences, allergies
          and medical information for babysitters to access.
        </p>
      </div>
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            width={30}
            height={30}
            src="/images/babysitter/Multi-Child Booking.jpeg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
            Multi-Child Booking
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
          Book babysitters for multiple children simultaneously with the option
          to specify different caregivers for each child.
        </p>
      </div>
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            width={30}
            height={30}
            src="/images/babysitter/Event Sitting.jpeg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">Event Sitting</h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
          Arrange for babysitters to attend special events or occasions such as
          weddings or parties to provide child care services.
        </p>
      </div>
      <div className="rounded-md border p-4">
        <div className="mb-2 flex items-center">
          <Image
            width={30}
            height={30}
            src="/images/babysitter/Child Development Resources.jpeg"
            alt="Location Icon"
            className="mr-2 h-6 w-6"
          />{" "}
          {/* Use your icon or image here */}
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
            Child Development Resources
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-white">
          Access resources and articles on child development parenting tipsand
          educational activities to support child care needs.
        </p>
      </div>
    </div>
  );
}

export default PassengerApp;
