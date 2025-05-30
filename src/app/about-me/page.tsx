import { CareerTimeline } from "@/components/career-timeline";
import { Badge } from "@/components/ui/badge";
import { Skill } from "@/types/skill";
import React from "react";
import skills from "@/data/skills.json";

const typedSkills: Skill[] = skills;
export default function AboutMe() {
  return (
    <div className="flex flex-col gap-5 bg-gray-200 h-full">
      <div className="flex flex-col w-full mx-auto p-10 bg-gray-300">
        <div className="mb-3">
          <h2 className="text-5xl font-bold">Prayag K</h2>
          <h3 className="text-2xl mt-6 font-extralight">
            Senior front-end engineer
          </h3>
        </div>
        <div>
          <p className="text-justify max-w-xl">
            7+ years of front-end experience building scalable, accessible React
            apps with reusable components andoptimized performance. Skilled in
            Next.js, Remix, Tailwind CSS, and state management with Redux
            andZustand. Familiar with Node.js and MongoDB.
          </p>
        </div>
      </div>
      <div className="px-10">
        <div className="mb-2">
          <h4 className="text-2xl font-bold">Skills</h4>
        </div>
        <div className="flex flex-wrap gap-2">
          {typedSkills.map((skill) => (
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
      <div className="px-10 mb-5">
        <div className="mb-2">
          <h4 className="text-2xl font-bold">Work Experience</h4>
        </div>
        <CareerTimeline />
      </div>

      {/* <div className="px-10">
        <div className="mb-2">
          <h4 className="text-2xl font-bold">Projects</h4>
        </div>
      </div> */}
    </div>
  );
}
