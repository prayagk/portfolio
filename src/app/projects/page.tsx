"use client";

import React, { useState } from "react";
import projects from "@/data/projects.json";
import {
  Card,
  // CardContent,
  CardDescription,
  CardFooter,
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
        <div className="grid md:grid-cols-2 gap-10">
          {typedProjects.map((project) => (
            <Card
              className="cursor-pointer flex flex-col justify-between rounded-xl md:py-6 bg-white shadow-md transition hover:shadow-[0_0_15px_rgba(34,197,94,0.6)] hover:scale-102 duration-300"
              key={project.slug}
              onClick={() => onClickHandler(project)}
            >
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>
                  <div className="flex gap-3 my-3">
                    {project.shortDescription}
                    <Image
                      width={100}
                      height={100}
                      src={project.image}
                      alt={project.altText}
                    />
                  </div>
                </CardDescription>
              </CardHeader>
              {/* <CardContent></CardContent> */}
              <CardFooter></CardFooter>
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
