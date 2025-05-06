import Link from "next/link";
import { FaEnvelope } from "react-icons/fa";

export default function Home() {
  return (
    <div className="flex flex-col w-full h-full items-center justify-center gap-2">
      <div className="flex flex-col gap-2">
        <h1 className="text-4xl text-center">{"Hi, I'm Prayag"}</h1>
        <h2 className="font-extralight">
          Frontend developer. React. TypeScript. Fast UI
        </h2>
      </div>
      <div className="flex gap-5">
        <Link className="hover:underline" href={"/about-me"}>
          About Me
        </Link>
        <Link className="hover:underline" href={"/projects"}>
          Projects
        </Link>
      </div>
      <div className="flex gap-1 ">
        <p>Reach me at</p>
        <div className="flex items-center gap-1">
          <FaEnvelope />
          <span className="underline italic">hello@prayagk.dev</span>
        </div>
      </div>
    </div>
  );
}
