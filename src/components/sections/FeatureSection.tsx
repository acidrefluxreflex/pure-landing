import React from "react";

export default function FeatureSection() {
  return (
    <div className="z-1 md:flex-row items-center justify-center h-screen">
      <div className="flex justify-center space-x-6 my-9">
        {renderCard("w-7xl", "https://via.placeholder.com/1280x300")}
      </div>
      <div className="flex justify-center space-x-9">
        {renderCard("w-4xl", "https://via.placeholder.com/800x300")}
        {renderCard("w-96", "https://via.placeholder.com/380x300")}
      </div>
    </div>
  );
}

function renderCard(width: string, imageSrc: string) {
  return (
    <div className={`z-1 card ${width} bg-base-100 shadow-l image-full`}>
      <figure>
        <img src={imageSrc} alt="Shoes" />
      </figure>
      <div className="card-body ">
        <h2 className="card-title">Shoes!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
}
