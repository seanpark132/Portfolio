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
			<div className="pt-4">
				<h2 className="pb-8">{name}</h2>
				<ImageSlider images={images} />
				<p className="pt-4">{description}</p>
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
		</article>
	);
}
