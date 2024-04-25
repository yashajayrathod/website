"use client";

import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";

const Video = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <section className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="We Are Ready To Help"
          paragraph="Let Us Guide You - Watch Our Support Video for Solutions!"
          center
          mb="80px"
        />

        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div
              className="mx-auto max-w-[770px] overflow-hidden rounded-md"
              data-wow-delay=".15s"
            >
              <div className="relative aspect-[77/40] items-center justify-center">
                {/* <iframe
                  src="/videos/video.mp4"
                  title="video player"
                  className="h-full w-full object-cover"
                  autoFocus={false}
                  allowFullScreen

                ></iframe> */}
                <video
                  // width="320" height="240"
                  controls
                  className="h-full w-full object-cover"
                >
                  <source src="/videos/video.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-[-1] h-full w-full bg-[url(/images/video/shape.svg)] bg-cover bg-center bg-no-repeat"></div>
    </section>
  );
};

export default Video;