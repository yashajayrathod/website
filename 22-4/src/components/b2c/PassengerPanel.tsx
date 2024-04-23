import React, { useState, useEffect } from "react";
import Image from "next/image";

function BBPassengerPanel() {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    setImageLoaded(true);
  }, []);

  return (
    <section className="ml-4 mt-5 px-4 py-8 sm:px-10 md:ml-12 md:px-20 md:py-10 lg:ml-28 lg:py-16">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="order-2 m-0 pt-0 lg:order-1 lg:w-1/2">
            <div className="mb-6">
              {/* Title */}
              <h2 className="mb-4 text-center text-xl font-bold md:text-left md:text-3xl lg:text-4xl dark:text-white">
                User-Friendly B2C E-Commerce Customer App!
              </h2>
              {/* Content */}
              <p className="text-center text-sm md:text-left md:text-base lg:text-lg dark:text-white">
                Elevate Your Online Shopping Experience with Our B2C E-Commerce
                Customer Application - Explore a User-Friendly Platform that
                Simplifies Shopping!
              </p>
              {/* Sliders */}
              <div className="mt-6 grid grid-cols-1 justify-center gap-4 sm:grid-cols-2">
                <div className="rounded-md border p-4">
                  <h3 className="mb-2 text-center text-lg font-medium text-gray-800 lg:text-left dark:text-white">
                    Product Discovery
                  </h3>
                  <p className="text-center text-sm text-gray-600 lg:text-left dark:text-white">
                    Easily browse and search through a wide range of products
                    with intuitive navigation and filtering options{" "}
                  </p>
                </div>
                {/* Other sliders */}
                <div className="rounded-md border p-4">
                  <h3 className="mb-2 text-center text-lg font-medium text-gray-800 lg:text-left dark:text-white">
                    Seamless Checkout Process
                  </h3>
                  <p className="text-center text-sm text-gray-600 lg:text-left dark:text-white">
                    Enjoy a frictionless checkout experience with multiple
                    payment options, guest checkout and order tracking.{" "}
                  </p>
                </div>
                <div className="rounded-md border p-4">
                  <h3 className="mb-2 text-center text-lg font-medium text-gray-800 lg:text-left dark:text-white">
                    Personalized Recommendations
                  </h3>
                  <p className="text-center text-sm text-gray-600 lg:text-left dark:text-white">
                    Receive tailored product recommendations based on browsing
                    history, purchase behavior and preferences..{" "}
                  </p>
                </div>
                <div className="rounded-md border p-4">
                  <h3 className="mb-2 text-center text-lg font-medium text-gray-800 lg:text-left dark:text-white">
                    Customer Support
                  </h3>
                  <p className="text-center text-sm text-gray-600 lg:text-left dark:text-white">
                    Access prompt and responsive customer support through
                    various channels, including live chat, email and phone.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 w-full px-4 text-right lg:order-2 lg:w-1/2">
            {" "}
            {/* Add or replace text-center with text-right for right alignment */}
            <div
              className="relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
              style={{
                opacity: imageLoaded ? 1 : 0,
                transform: imageLoaded ? "translateY(0)" : "translateY(-20px)",
                transition:
                  "opacity 0.9s ease-in-out, transform 0.9s ease-in-out",
              }}
            >
              <Image
                src="/images/b2c/b2c1.png"
                alt="Passenger"
                width={555}
                height={506}
                onLoad={() => setImageLoaded(true)}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BBPassengerPanel;
