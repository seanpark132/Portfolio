import ImageSlider from "./ImageSlider";
import LinkButton from "../LinkButton";

export default function ProjectXlUnder({
	name,
	description,
	githubLink,
	websiteLink,
	images,
}) {
	return (
		<article className="flex flex-col px-8 py-12 border-b-2 border-color-3 xl:hidden">
			<ImageSlider images={images} />
			<div className="mt-8">
				<h2>{name}</h2>
				<p className="mt-4">{description}</p>
				<div className="flex mt-12">
					{websiteLink && (
						<LinkButton
							text={"Website"}
							link={websiteLink}
							imageSrc={"/website-icon.png"}
							addClasses="mr-6"
						/>
					)}
					<LinkButton
						text={"GitHub Code"}
						link={githubLink}
						imageSrc={"/github.png"}
					/>
				</div>
			</div>
		</article>
	);
}
