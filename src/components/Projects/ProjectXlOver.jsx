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
				<h2 className="mb-4">{name}</h2>
				<p>{description}</p>
				<div className="flex mt-12">
					{websiteLink && (
						<a
							className="mr-8 font-semibold rounded-lg bg-lime-300 py-3 px-4"
							href={websiteLink}
							target="_blank"
						>
							<div className="flex">
								<img
									src="/website-icon.png"
									className="w-8 mr-2"
								/>
								WEBSITE
							</div>
						</a>
					)}
					<a
						className="rounded-lg font-semibold bg-teal-300 py-3 px-4"
						href={githubLink}
						target="_blank"
					>
						<div className="flex">
							<img src="/github-mark.png" className="w-8 mr-2" />
							GITHUB CODE
						</div>
					</a>
				</div>
			</div>
			<ImageSlider images={images} />
		</article>
	);
}
