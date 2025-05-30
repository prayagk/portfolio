"use client";

import React, { useState } from "react";
import projects from "@/data/projects.json";
import {
  Card,
  // CardContent,
  CardDescription,
  // CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import Image from "next/image";
import { Project } from "@/types/project";
import DetailedDrawer from "@/components/detailed-drawer";

const typedProjects: Project[] = projects;

export default function Projects() {
  const [currentProject, setCurrentProject] = useState<Project | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const onClickHandler = (project: Project) => {
    setCurrentProject(project);
    setIsOpen(true);
  };

  return (
    <>
      <div className="flex flex-col p-10 gap-10">
        <div>
          <h2 className="text-center text-3xl font-bold">Projects</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-5 w-full max-w-3xl mx-auto">
          {typedProjects.map((project) => (
            <Card
              className="cursor-pointer flex flex-col rounded-xl md:py-6 bg-white shadow-md transition hover:shadow-[0_0_15px_rgba(0,128,128,0.6)] hover:scale-102 duration-300"
              key={project.slug}
              onClick={() => onClickHandler(project)}
            >
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>
                  <div className="flex gap-3 my-3">
                    <div className="flex-1 text-left md:text-justify ">
                      {project.shortDescription}
                    </div>
                    <div className="relative w-1/3 md:w-1/4 aspect-square">
                      <Image
                        quality={100}
                        className="rounded-md"
                        width={80}
                        height={80}
                        src={project.image}
                        alt={project.altText}
                      />
                    </div>
                  </div>
                </CardDescription>
              </CardHeader>
              {/* <CardContent></CardContent> */}
              {/* <CardFooter></CardFooter> */}
            </Card>
          ))}
        </div>
      </div>
      <DetailedDrawer
        project={currentProject}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
    </>
  );
}
