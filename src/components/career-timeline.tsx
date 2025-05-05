// components/CareerTimeline.tsx
"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const timeline = [
  {
    company: "Harman",
    role: "Senior Front-end Engineer",
    period: "Nov 2022 - till now",
    tech: ["React", "Remix", "TypeScript"],
  },
  {
    company: "Quest Global",
    role: "Senior Software Engineer",
    period: "Feb 2021 - Nov 2022",
    tech: ["React", "Redux", "Chart.js"],
  },
  {
    company: "Cybrosys",
    role: "Blockchain Developer",
    period: "Jun 2019 - Jan 2021",
    tech: ["Python", "Solidity"],
  },
];

export function CareerTimeline() {
  return (
    <div className="border-l-2 border-gray-300 pl-6 space-y-5">
      {timeline.map((item, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: idx * 0.2 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* <span className="absolute -left-[14px] top-2 w-3 h-3 bg-primary rounded-full border-2 border-white" /> */}
          <Card>
            <CardContent>
              <h3 className="text-lg font-semibold">
                {item.role} @ {item.company}
              </h3>
              <p className="text-sm text-muted-foreground">{item.period}</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {item.tech.map((tech, i) => (
                  <Badge key={i}>{tech}</Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}
