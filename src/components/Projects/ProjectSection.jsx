import Project from "./Project";
import { PROJECTS } from "../../InfoAsData";

export default function ProjectSection() {
  return (
    <section
      className="pt-16 mb-16 rounded-2xl bg-color-4"
      id="projects-section"
    >
      <h1 className="pl-8 md:pl-12">PROJECTS</h1>
      {PROJECTS.map((project) => (
        <Project key={project.name} project={project} />
      ))}
    </section>
  );
}
