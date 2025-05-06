import React from "react";
import projects from "@/data/projects.json";
import {
  Card,
  // CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import Image from "next/image";
import { Project } from "@/types/project";
import { LinkIcon, WrenchIcon } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { Badge } from "@/components/ui/badge";

const DetailedDrawer = ({ project }: { project: Project }) => {
  return (
    <Drawer>
      <DrawerTrigger className="cursor-pointer hover:underline text-muted-foreground hover:text-black">
        {"Know more"}
      </DrawerTrigger>
      <DrawerContent className="px-5 md:px-20">
        <DrawerHeader className="text-center">
          <DrawerTitle>
            {project.title}{" "}
            {project.ongoing && (
              <Badge variant="default" className="bg-emerald-600">
                WIP <WrenchIcon />
              </Badge>
            )}
          </DrawerTitle>
          <div className="w-full text-center">
            <DrawerDescription className="md:w-1/2 mx-auto text-justify">
              {project.description}
            </DrawerDescription>
          </div>
        </DrawerHeader>
        <div className="flex flex-col md:flex-row justify-between gap-5">
          <div className="flex flex-col">
            <div className="flex gap-2 items-center">
              <label>
                <FaGithub />
              </label>
              <a
                className="text-blue-600 hover:underline hover:text-blue-800 text-sm"
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                {project.github}
              </a>
            </div>

            <div className="flex gap-2 items-center">
              <label>
                <LinkIcon size={15} />
              </label>
              <a
                className="text-blue-600 hover:underline hover:text-blue-800 text-sm"
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
              >
                {project.demo}
              </a>
            </div>
          </div>

          <div className="flex flex-col">
            <h5 className="text-lg">Tech Stack</h5>
            <div className="flex gap-2 flex-wrap">
              {project.tech.map((item) => (
                <Badge key={item}>{item}</Badge>
              ))}
            </div>
          </div>
        </div>

        <DrawerFooter>
          <DrawerClose>Back</DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};
const typedProjects: Project[] = projects;

export default function Projects() {
  return (
    <div className="flex flex-col p-10 gap-10">
      <div>
        <h2 className="text-center text-3xl font-bold">Projects</h2>
      </div>
      <div className="grid md:grid-cols-2 gap-10">
        {typedProjects.map((project) => (
          <Card
            className="rounded-xl p-6 bg-white shadow-md transition hover:shadow-[0_0_15px_rgba(34,197,94,0.6)] hover:scale-105 duration-300"
            key={project.slug}
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
            <CardFooter>
              <DetailedDrawer project={project} />
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
