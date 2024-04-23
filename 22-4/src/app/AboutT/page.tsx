import React from 'react';

function AboutT() {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center h-screen mb-10">
      {/* Left Side */}
      <div className="w-full lg:w-1/2 p-8"> {/* Adjusted width for larger screens */}
        <h1 className="text-3xl font-bold mb-4">About Us</h1>
        <p className="mt-5 text-base lg:text-lg">
          Welcome to Trailique - where youth meets experience, passion meets expertise, and innovation reshapes the IT landscape. With over 40 years of collective experience and a dynamic team, we are committed to revolutionizing the tech industry. Founded by industry experts, Trailique specializes in providing services, expert consultation, custom app development, and driving traffic and revenue. Our expert team thrives on collaboration and creativity to deliver tailored solutions for impactful results. Join us on this transformative journey now!
        </p>
      </div>

      {/* Right Side */}
      <div className="w-full lg:w-1/2 p-8"> {/* Adjusted width for larger screens */}
        {/* Video */}
        <div className="relative" style={{ paddingTop: "56.25%", height: "0", width: "100%" }}> {/* Adjusted aspect ratio for responsive video */}
          <iframe 
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/bOAE6OcUmn4?si=XjqbJz4EICRwigqL" 
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin" 
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default AboutT;
