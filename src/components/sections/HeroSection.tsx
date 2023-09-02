import Image from "next/image";
import React from "react";


export default function HeroSection() {
  return (
    <div className="hero min-h-screen ">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <Image
          src="/images/sample/sample2.png"
          alt="Eveki"
          className="max-w-sm rounded-lg shadow-2xl"
          height={500}
          width={500}
        />
        <div>
          <h1 className="text-5xl font-bold">Block Sexual Content</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
}
