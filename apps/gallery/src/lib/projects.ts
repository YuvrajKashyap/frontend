import type { ComponentType } from "react";
import { KineticType } from "@frontend/kinetic-type";
import kineticTypeMeta from "../../../../projects/kinetic-type/project.json";

export type Project = {
  slug: string;
  index: string;
  name: string;
  description: string;
  year: number;
  tags: string[];
  component: ComponentType<{ compact?: boolean }>;
};

export const projects: Project[] = [
  {
    ...kineticTypeMeta,
    index: "001",
    component: KineticType,
  },
];
