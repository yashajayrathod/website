import { FC } from 'react';
import { Feature } from '@/types/feature';
import Image from 'next/image';

interface SingleFeatureProps {
  feature: Feature;
}

const SingleFeature: FC<SingleFeatureProps> = ({ feature }) => {
  const { image, title, paragraph } = feature;

  return (
    <div className="w-full">
      <div className="wow fadeInUp" data-wow-delay=".15s">
        <div className="mb-5 flex items-center">
          {/* Increased the size of the circle */}
          <div className="mr-5 flex h-[100px] w-[100px] items-center justify-center ">
            {/* Utilized Next.js Image Component for optimized image loading */}
            <Image src={image} alt={title} width={80} height={80}  />
          </div>
          <h3 className="text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
            {title}
          </h3>
        </div>
        <p className="pr-[10px] text-lg font-medium leading-relaxed text-body-color">
          {/* Implemented a fade-in effect for paragraph */}
          <span className="fade-in">{paragraph}</span>
        </p>
      </div>
    </div>
  );
};

export default SingleFeature;
