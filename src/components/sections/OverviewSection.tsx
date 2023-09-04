import Image from "next/image";
import React from "react";


export default function OverviewSection() {
  return (
    <div className="lg:flex flex-col md:flex-row md:items-center md:justify-center lg:h-screen">
      <div className="md:w-1/3 lg:w-1/2 m-5">
        <h1 className="text-4xl font-bold mb-4">Peace and Wellbeing</h1>
        <p className="lg:text-lg text-sm text-gray-600">
          At Zeboot, we&apos;re on a mission to create a digital world that&apos;s safe and enjoyable for everyone. 
          <br />
          Our cutting-edge app is designed to provide you with a powerful tool to filter out explicit and adult content, ensuring a secure online environment for you and your loved ones.
        </p>
      </div>

      <div className="md:w-1/2 flex justify-center">
        <Image
          src="https://via.placeholder.com/500x500"
          alt="アプリケーションの画像"
          className="lg:w-full w-[200px] h-auto"
          width={400}
          height={400}
        />
      </div>
    </div>
  );
}