import React from "react";

export default function TestimonialSection() {
  return (
    <div className="container my-24 mx-auto md:px-6">
      <section className="mb-32 text-center">
        <div className="lg:flex">
          {userCard()}
          {userCard()}
          {userCard()}
        </div>
      </section>
    </div>
  );
}

function userCard() {
  return (
    <div className="mb-12 md:mb-0">
      <div className="mb-6 flex justify-center items-center">
        <img
          src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).jpg"
          className="w-10 h-10 rounded-full shadow-lg dark:shadow-black/20"
        />
        <div className="ml-4 ">
          <h5 className="text-lg font-bold">Maria Smantha</h5>
          <h6 className="font-medium text-primary dark:text-primary-400">
            Web Developer
          </h6>
        </div>
      </div>

      <p className="mb-4 lg:ma-w-1/2 lg:text-sm max-w-1/4 text-sm">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id
        officiis hic tenetur quae quaerat ad velit ab hic.
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
