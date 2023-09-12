import TechStackSlider from "./TechStackSlider";

export default function AboutSection() {
	return (
		<section className="px-8 py-12 rounded-b-2xl bg-color-4 mb-16 md:py-24">
			<div>
				<h1>SEAN PARK</h1>
				<h4 className="mb-8">
					<em>Front-end Web Developer</em>
				</h4>
				<p className="mb-8">
					I'm a front-end developer with a passion to transform
					valuable ideas and solutions into web applications. <br />
					My focus is on developing websites with responsive
					interfaces and optimized performance.
					<br />
					<br />I am looking for a new opportunity to apply my skills
					to work on complex, larger-scale projects.
					<br />
					<br />
					<strong>
						Education: Bachelor of Applied Science, University of
						Waterloo
					</strong>
				</p>
				<h5 className="mb-4">My Tech Stack:</h5>
			</div>
			<TechStackSlider />
		</section>
	);
}
