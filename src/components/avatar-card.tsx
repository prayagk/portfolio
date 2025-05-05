import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export default function AvatarCard() {
  return (
    <div>
      <Avatar className="m-10 h-36 w-36">
        <AvatarImage sizes="100px" src="/images/avatar.png" />
        <AvatarFallback>PK</AvatarFallback>
      </Avatar>
    </div>
  );
}
