import React from "react";
import Image from "next/image";

function FecCard() {
  return (
    <div className="mt-20 flex flex-wrap justify-center gap-8">
      {/* Title and Subtitle */}
      <div className="mb-10 w-full text-center">
        <h2 className="text-4xl font-bold">PLATFORMS AVAILABLE</h2>
        <p className="text-lg text-gray-600">
          Empowering every platform, one code at a time.
        </p>
      </div>
      {/* iOS Card */}
      <div className="mb-8 w-full overflow-hidden rounded shadow-lg md:w-1/3 lg:w-72">
        <Image
          className="h-48 w-full object-cover"
          src="/images/taxi/ios.webp"
          alt="iOS"
          width={400}
          height={200}
        />
        <div className="px-6 py-4 text-center">
          {" "}
          {/* Updated this line */}
          <div className="mb-2 text-xl font-bold">iOS App </div>
          <div className="mb-2 text-xl font-bold">(for iPhone)</div>
        </div>
      </div>

      {/* Android Card */}
      <div className="mb-8 w-full overflow-hidden rounded shadow-lg md:w-1/3 lg:w-72">
        <Image
          className="h-48 w-full object-cover"
          src="/images/taxi/android.webp"
          alt="Android"
          width={400}
          height={200}
        />
        <div className="px-6 py-4 text-center">
          {" "}
          {/* Updated this line */}
          <div className="mb-2 text-xl font-bold">Android App</div>
          <div className="mb-2 text-xl font-bold">(for Android Phone)</div>
        </div>
      </div>

      {/* Website Card */}
      <div className="mb-8 w-full overflow-hidden rounded shadow-lg md:w-1/3 lg:w-72">
        <Image
          className="h-48 w-full object-cover"
          src="/images/taxi/web.webp"
          alt="Website"
          width={400}
          height={200}
        />
        <div className="px-6 py-4 text-center">
          {" "}
          {/* Updated this line */}
          <div className="mb-2 text-xl font-bold">Web App </div>
          <div className="mb-2 text-xl font-bold">(for Admin)</div>
        </div>
      </div>
    </div>
  );
}

export default FecCard;
