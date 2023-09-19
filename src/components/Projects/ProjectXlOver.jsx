import LinkButton from "../LinkButton";
import ImageSlider from "./ImageSlider";

export default function ProjectXlOver({
	name,
	description,
	githubLink,
	websiteLink,
	images,
}) {
	return (
		<article className="hidden px-8 py-16 border-b-2 border-color-3 xl:flex">
			<div className="w-1/2 pr-4">
				<h2 className="pb-4">{name}</h2>
				<p>{description}</p>
				<div className="flex pt-12">
					{websiteLink && (
						<LinkButton
							text={"Website"}
							link={websiteLink}
							imageSrc={"/website-icon.png"}
							addClasses="mr-6"
						/>
					)}
					<LinkButton
						text={"Code"}
						link={githubLink}
						imageSrc={"/github.png"}
					/>
				</div>
			</div>
			<ImageSlider images={images} />
		</article>
	);
}
