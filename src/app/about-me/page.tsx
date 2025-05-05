import { CareerTimeline } from "@/components/career-timeline";
import { Badge } from "@/components/ui/badge";
import React from "react";

const skills: { name: string; percentage: number; description: string }[] = [
  {
    name: "Javascript",
    percentage: 100,
    description: "",
  },
  {
    name: "TypeScript",
    percentage: 100,
    description: "",
  },
  {
    name: "React",
    percentage: 100,
    description: "",
  },
  {
    name: "Next.js",
    percentage: 100,
    description: "",
  },
  {
    name: "Remix",
    percentage: 100,
    description: "",
  },
  {
    name: "Redux",
    percentage: 100,
    description: "",
  },
  {
    name: "Tailwind CSS",
    percentage: 100,
    description: "",
  },
  {
    name: "Jest",
    percentage: 100,
    description: "",
  },
  {
    name: "React Testing Library",
    percentage: 100,
    description: "",
  },
  {
    name: "Node.js",
    percentage: 100,
    description: "",
  },
  {
    name: "Mongodb",
    percentage: 100,
    description: "",
  },
  {
    name: "Express.js",
    percentage: 100,
    description: "",
  },
];
export default function AboutMe() {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col mx-auto p-10 bg-gray-100">
        <div className="mb-3">
          <h2 className="text-5xl font-bold">Prayag K</h2>
          <h3 className="text-2xl mt-6 font-extralight">
            Senior front-end engineer
          </h3>
        </div>
        <div>
          <p>
            Experienced front-end developer with 7+ years of expertise in
            crafting high-performance, user-friendly web applications using
            React.js, TypeScript, and modern front-end technologies. Skilled in
            building scalable architectures, reusable UI components, and
            optimizing application performance for seamless user experiences.
            Proficient in SSR frameworks like Remix and Next.js with a strong
            focus on accessibility, responsiveness, and cross-browser
            compatibility. Familiar with Node.js and MongoDB.
          </p>
        </div>
      </div>
      <div className="px-10 w-4/5">
        <div className="mb-2">
          <h4 className="text-2xl font-bold">Skills</h4>
        </div>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            // <HoverCard key={skill.name}>
            //   <HoverCardTrigger>
            //     <div className="border-1 p-2">{skill.name} </div>
            //   </HoverCardTrigger>
            //   <HoverCardContent>{skill.percentage}</HoverCardContent>
            // </HoverCard>
            <Badge className="px-2 py-1" key={skill.name}>
              {skill.name}
            </Badge>
          ))}
        </div>
      </div>
      <div className="px-10">
        <div className="mb-2">
          <h4 className="text-2xl font-bold">Work Experience</h4>
        </div>
        <CareerTimeline />
      </div>

      <div className="px-10">
        <div className="mb-2">
          <h4 className="text-2xl font-bold">Projects</h4>
        </div>
      </div>
    </div>
  );
}
