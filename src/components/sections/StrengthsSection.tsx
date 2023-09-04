import React from "react";
import Image from "next/image";
export default function StrengthsSection() {
  const contentItems = [
    {
      icon: "https://via.placeholder.com/200x200",
      title: "Feature 1",
      description:
        "Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi.",
    },
    {
      icon: "https://via.placeholder.com/200x200",
      title: "Feature 2",
      description:
        "Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi.",
    },
    {
      icon: "https://via.placeholder.com/200x200",
      title: "Feature 3",
      description:
        "Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi.",
    },
    {
      icon: "https://via.placeholder.com/200x200",
      title: "Feature 4",
      description:
        "Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi.",
    },
    {
      icon: "https://via.placeholder.com/200x200",
      title: "Feature 5",
      description:
        "Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi.",
    },
    {
      icon: "https://via.placeholder.com/200x200",
      title: "Feature 6",
      description:
        "Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi.",
    },
  ];

  return (
    <div className="grid lg:grid-cols-3 grid-cols-2 gap-6 lg:p-6 p-3">
      {contentItems.map((item, index) => (
        <div key={index} className="p-4">
          <div className="flex items-center  my-3 ">
            <Image
              src={item.icon}
              alt={`Icon for ${item.title}`}
              className="w-10 h-10"
              width={100}
              height={100}
            />
            <h2 className="lg:text-xl text-md font-semibold  ml-2 flex items-center">
              {" "}
              {/* Added 'flex' and 'items-center' class */}
              {item.title}
            </h2>
          </div>
          <p className="text-gray-600 lg:text-sm text-xs">{item.description}</p>
        </div>
      ))}
    </div>
  );
}
