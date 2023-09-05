import React from "react";
import Image from "next/image";

export default function FeatureSection() {
  return (
    <div className="z-1 md:flex-row items-center justify-center lg:h-screen ">
      <div className="flex justify-center space-x-6 my-9 md:mx-0 mx-5">
        {renderCard(
          "md:min-w-7xl min-w-[320px] md:h-[300px] h-[300px]",
          "/images/landing/ZenGarden1280.jpg",
          1280,
          300
        )}
      </div>
      <div className="lg:flex lg:space-x-9 md:mx-0 mx-5 md:space-y-0 space-y-6 justify-center items-center ">
        {renderCard(
          "md:min-w-[800px] min-w-[320px] md:h-[300px] h-[300px]",
          "/images/landing/ZenGarden800.webp",
          800,
          300
        )}

        {renderCard(
          "md:min-w-96 min-w-[320px] md:h-[300px] h-[300px]",
          "/images/landing/ZenGarden380.webp",
          380,
          300
        )}
      </div>
    </div>
  );
}

function renderCard(
  width: string,
  imageSrc: string,
  imgWidth: number,
  imgHeight: number
) {
  return (
    <div className={`z-1 card ${width} bg-base-100 shadow-l image-full `}>
      <figure>
        <Image
          src={imageSrc}
          alt="Shoes"
          className={width}
          width={imgWidth}
          height={imgHeight}
        />
      </figure>
      <div className="card-body">
        <h1 className="card-title">Shoes!</h1>
        <p>If a dog chews shoes, whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          
        </div>
      </div>
    </div>
  );
}
