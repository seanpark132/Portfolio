import ProjectXlOver from "./ProjectXlOver";
import ProjectXlUnder from "./ProjectXlUnder";

export default function Project({ project }) {
	return (
		<>
			<ProjectXlOver
				name={project.name}
				description={project.description}
				githubLink={project.githubLink}
				websiteLink={project.websiteLink}
				images={project.images}
			/>
			<ProjectXlUnder
				name={project.name}
				description={project.description}
				githubLink={project.githubLink}
				websiteLink={project.websiteLink}
				images={project.images}
			/>
		</>
	);
}
