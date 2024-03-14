import Project from "./Project";
import { PROJECTS } from "../../InfoAsData";

export default function ProjectSection() {
  return (
    <section
      className="pt-12 mb-16 rounded-2xl bg-color-4 md:pt-16"
      id="projects-section"
    >
      <h1 className="pl-8 md:pl-12 underline">PROJECTS</h1>

      {PROJECTS.map((project) => (
        <Project key={project.name} project={project} />
      ))}
    </section>
  );
}
