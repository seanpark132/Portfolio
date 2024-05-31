import LinkButton from "../LinkButton";
import ImageSlider from "./ImageSlider";
import ProjectTechStack from "./ProjectTechStack";

export default function Project({ project }) {
  return (
    <article className="px-8 py-12 border-b-2 border-color-3 md:px-12">
      <div className="xl:flex">
        <div className="xl:w-2/5 xl:pr-8">
          <h2 className="mb-2">{project.name}</h2>
          <p>{project.description}</p>
          <ProjectTechStack techItems={project.techItems} />
          <div className="flex py-4">
            {project.websiteLink && (
              <LinkButton
                text={"Website"}
                link={project.websiteLink}
                imageSrc={"/website-icon.png"}
                addClasses="mr-6"
              />
            )}
            {project.githubLink && (
              <LinkButton
                text={"Code"}
                link={project.githubLink}
                imageSrc={"/github.png"}
              />
            )}
          </div>
        </div>
        <ImageSlider
          images={project.images}
          projectName={project.projectName}
        />
      </div>
    </article>
  );
}
