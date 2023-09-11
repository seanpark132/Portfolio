import ImageSlider from "./ImageSlider";

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
						<a
							className="mr-6 font-semibold rounded-lg bg-lime-300 py-3 px-3"
							href={websiteLink}
							target="_blank"
						>
							<div className="flex">
								<img
									src="/website-icon.png"
									className="w-6 mr-2 md:w-8"
								/>
								WEBSITE
							</div>
						</a>
					)}
					<a
						className="rounded-lg font-semibold bg-teal-300 py-3 px-3"
						href={githubLink}
						target="_blank"
					>
						<div className="flex">
							<img
								src="/github-mark.png"
								className="w-6 mr-2 md:w-8"
							/>
							GITHUB CODE
						</div>
					</a>
				</div>
			</div>
		</article>
	);
}
