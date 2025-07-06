"use client";

import { DownloadIcon } from "lucide-react";
import { Button } from "./ui/button";

declare global {
  interface Window {
    umami?: {
      track: (event: string) => void;
    };
  }
}

export default function DownloadResume() {
  return (
    <Button variant="default" asChild>
      <a
        href="/Prayag_K_Senior_Frontend_Developer_Resume.pdf"
        download
        onClick={() => window.umami?.track("download_resume")}
      >
        Download My Resume <DownloadIcon />
      </a>
    </Button>
  );
}
