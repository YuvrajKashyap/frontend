import { Archive } from "@/components/archive";
import { projects } from "@/lib/projects";

export default function Home() {
  return <Archive projects={projects} />;
}
