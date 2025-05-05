import { WrenchIcon } from "lucide-react";
import React from "react";

export default function Projects() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="flex items-end gap-2">
        <h2 className="text-center text-muted-foreground text-2xl">
          Work in progress
        </h2>
        <WrenchIcon />
      </div>
    </div>
  );
}
