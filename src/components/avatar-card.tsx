import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export default function AvatarCard() {
  return (
    <div className="mx-10 mt-10 mb-5 flex flex-col gap-2">
      <Avatar className=" h-36 w-36">
        <AvatarImage
          alt="Avatar Image"
          sizes="100px"
          src="/images/avatar-min.png"
        />
        <AvatarFallback>PK</AvatarFallback>
      </Avatar>
      <div className="flex">
        <p className="mx-auto font-mono text-xl">prayag</p>
      </div>
    </div>
  );
}
