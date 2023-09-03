import React from "react";

export default function TestimonialSection() {
  return (
    <div className="container my-24 mx-auto md:px-6">
      <section className="mb-32 text-center">
        <div className="grid gap-x-6 md:grid-cols-3 lg:gap-x-12">
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

      <p className="mb-4">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id
        officiis hic tenetur quae quaerat ad velit ab hic.
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 96 960 960"
          className="inline-block w-6"
        >
          <path
            fill="currentColor"
            d="M580 556h160V396H580v160Zm-360 0h160V396H220v160Zm406 220 80-160H520V336h280v288l-76 152h-98Zm-360 0 80-160H160V336h280v288l-76 152h-98Zm34-300Zm360 0Z"
          />
        </svg>
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
