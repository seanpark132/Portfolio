import LinkButton from "../LinkButton";
import ImageSlider from "./ImageSlider";

export default function Project({ project }) {
  return (
    <article className="px-8 py-12 border-b-2 border-color-3 md:px-12">
      <div className="xl:flex">
        <div className="xl:w-2/5">
          <h2>{project.name}</h2>
          <p>{project.description}</p>
          <div className="flex pt-4 xl:pt-8">
            {project.websiteLink && (
              <LinkButton
                text={"Website"}
                link={project.websiteLink}
                imageSrc={"/website-icon.png"}
                addClasses="mr-6"
              />
            )}
            <LinkButton
              text={"Code"}
              link={project.githubLink}
              imageSrc={"/github.png"}
            />
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
