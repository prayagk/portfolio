import Image from "next/image";
import React from "react";

const expertise = [
  { img: "js.png", name: "JavaScript" },
  {
    img: "react.png",
    name: "React.js",
  },
  {
    img: "ts.png",
    name: "TypeScript",
  },
];

export default function ExpertiseCard() {
  return (
    <div className="flex flex-col">
      <div>
        <h2>My expertise are in </h2>
      </div>
      <div className="flex gap-2">
        {expertise.map((item) => (
          <Image
            key={item.name}
            alt={`Logo of ${item.name}`}
            src={`/logos/${item.img}`}
            width={40}
            height={40}
          />
        ))}
      </div>
    </div>
  );
}
