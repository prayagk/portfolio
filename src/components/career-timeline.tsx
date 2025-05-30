"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { WorkExperience } from "@/types/work-experience";
import timeline from "@/data/work-experience.json";

const typedTimeline: WorkExperience[] = timeline;

export function CareerTimeline() {
  return (
    <div className="space-y-5 max-w-xl">
      {typedTimeline.map((item, idx) => (
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
              <div className="flex flex-wrap items-center">
                <h3 className="text-base md:text-lg font-semibold">
                  {item.role}
                </h3>
                <p className="text-muted-foreground sm:whitespace-pre">{` @ ${item.company}`}</p>
              </div>
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
