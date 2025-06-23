"use client"; //TODO

import React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "./ui/sidebar";
import { Home, SettingsIcon, User } from "lucide-react";
import Link from "next/link";
// import { Switch } from "./ui/switch";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import AvatarCard from "./avatar-card";
import { Separator } from "./ui/separator";

// Menu items.
const items = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "About Me",
    url: "/about-me",
    icon: User,
  },
  {
    title: "Projects",
    url: "/projects",
    icon: SettingsIcon,
  },
];

const links = [
  {
    name: "linkedIn",
    ariaLabel: "LinkedIn Link",
    url: "https://linkedin.com/in/prayag-k",
    icon: <FaLinkedin className="w-5 h-5" />,
  },
  {
    name: "github",
    ariaLabel: "GitHub Link",
    url: "https://github.com/prayagk",
    icon: <FaGithub className="w-5 h-5" />,
  },
  {
    name: "email",
    ariaLabel: "Email",
    url: "mailto:hello@prayagk.dev",
    icon: <FaEnvelope className="w-5 h-5" />,
  },
];

export default function AppSidebar() {
  const { isMobile, setOpenMobile } = useSidebar();
  const closeToggle = () => setOpenMobile(false);

  return (
    <>
      <Sidebar role="navigation" collapsible="offcanvas">
        <SidebarHeader className="flex flex-col items-center w-full">
          <Link href={"/"}>
            <AvatarCard />
          </Link>
        </SidebarHeader>
        <SidebarContent>
          <div className="flex flex-col items-center w-full gap-5">
            <SidebarGroup>
              <div className="flex mx-auto gap-4">
                {links.map((item) => (
                  <a
                    aria-label={item.ariaLabel}
                    key={item.name}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gray-700 transition-colors"
                  >
                    {item.icon}
                  </a>
                ))}
              </div>
            </SidebarGroup>
            <Separator />
            <SidebarGroup>
              <div className="flex flex-col mx-auto">
                <SidebarMenu className="gap-3">
                  {items.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton asChild>
                        <Link onClick={closeToggle} href={item.url}>
                          <item.icon />
                          <span className="text-lg">{item.title}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </div>
            </SidebarGroup>
          </div>
        </SidebarContent>
        <SidebarFooter>
          <div className="mx-auto">{/* <Switch onToggle={() => {}} /> */}</div>
        </SidebarFooter>
      </Sidebar>
      {isMobile && <SidebarTrigger />}
    </>
  );
}
