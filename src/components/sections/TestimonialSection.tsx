import React from "react";
import Image from "next/image";

export default function TestimonialSection() {
  return (
    <div className="container my-24 mx-auto md:px-6">
      <section className="mb-32 text-center">
        <div className="lg:flex ">
          {userCard(
            "Emily",
            "Teacher",
            "I've been using 'zeboot' for a while now, and it's been a game-changer for me. As a teacher, maintaining focus and a healthy online environment is crucial. ",
            "/images/sample/sample1.png"
          )}
           {userCard(
            "David",
            "Software Developer",
            "'zeboot' has become an essential part of my digital life. As a software developer, I spend a lot of time online, and it's easy to get distracted.",
            "/images/sample/sample1.png"
          )}
           {userCard(
            "Sarah",
            "Marketing Manager",
            "I can't thank 'zeboot' enough for keeping me productive and safeguarding my online experience. As a marketing manager, I need a clear mind to come up with creative ideas. ",
            "/images/sample/sample1.png"
          )}
          
        </div>
      </section>
    </div>
  );
}

function userCard(
  name: string,
  job: string,
  comment: string,
  imageSrc: string
) {
  return (
    <div className="mb-12 md:mb-0">
      <div className="mb-6 flex justify-center items-center">
        <Image
          src={imageSrc}
          className="w-10 h-10 rounded-full shadow-lg dark:shadow-black/20"
          alt={name}
          width={200}
          height={200}
        />
        <div className="ml-4 ">
          <h3 className="text-lg font-bold">{name}</h3>
          <h3 className="font-medium text-primary dark:text-primary-400">
            {job}
          </h3>
        </div>
      </div>

      <p className="mb-4 lg:max-w-1/2 lg:text-sm max-w-1/4 text-sm">
        {comment}
      </p>
      <div className="rating">
        <input type="radio" name="rating-1" className="mask mask-star" />
        <input
          type="radio"
          name="rating-1"
          className="mask mask-star"
          checked
        />
        <input type="radio" name="rating-1" className="mask mask-star" />
        <input type="radio" name="rating-1" className="mask mask-star" />
        <input type="radio" name="rating-1" className="mask mask-star" />
      </div>
    </div>
  );
}
