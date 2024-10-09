import ProjectTechStackItem from "./ProjectTechStackItem";
import { TECH_STACK } from "../../InfoAsData";
import TechStackItem from "../About/TechStackItem";

export default function ProjectTechStack({ techItems }) {
  return (
    <div className="grid gap-2 grid-cols-4 py-4 sm:grid-cols-5 xl:mr-12 xl:grid-cols-3">
      {techItems &&
        techItems.map((name) => {
          const techStackObj = TECH_STACK.find((obj) => obj.name === name);

          return (
            <TechStackItem
              key={techStackObj.name}
              fileName={techStackObj.fileName}
              name={techStackObj.name}
              alt={techStackObj.name}
            />
          );
        })}
    </div>
  );
}
