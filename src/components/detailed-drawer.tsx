import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { LinkIcon, WrenchIcon } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { Badge } from "@/components/ui/badge";
import { Project } from "@/types/project";

const DetailedDrawer = ({
  project,
  isOpen,
  setIsOpen,
}: {
  project: Project | null;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}) => {
  return (
    <Drawer open={isOpen} onOpenChange={setIsOpen}>
      {!!project && (
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
              <DrawerDescription className="md:w-1/2 mx-auto text-left">
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

              {project.demo && (
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
              )}
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
            <DrawerClose className="underline cursor-pointer">Back</DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      )}
    </Drawer>
  );
};

export default DetailedDrawer;
