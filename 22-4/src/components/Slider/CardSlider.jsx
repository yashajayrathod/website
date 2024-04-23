import React from "react";

export default function VideoCard() {
  return (
    <>
      {/*<!-- Component: Video Card --> */}
      <div className="relative w-full mt-32 overflow-hidden bg-white rounded  glide-06 ">
        {/*    <!-- Video --> */}
        <div className="overflow-hidden">
          <iframe 
            width="100%" 
            height="300px" 
            src="https://www.youtube.com/embed/bOAE6OcUmn4?si=XjqbJz4EICRwigqL" 
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerpolicy="strict-origin-when-cross-origin" 
            allowfullscreen
          ></iframe>
        </div>
        {/*    <!-- Controls --> */}
        {/* Include controls for the video if needed */}
      </div>
      {/*<!-- End Video Card --> */}
    </>
  );
}
