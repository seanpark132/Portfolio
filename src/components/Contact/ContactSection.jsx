import LinkButton from "../LinkButton";

export default function ContactSection() {
	return (
		<section
			className="px-8 py-12 rounded-2xl bg-color-4 mb-16 md:py-24"
			id="contact-section"
		>
			<h1>CONTACT</h1>
			<div className="flex items-center mt-12">
				<img src="/email.png" className="mr-4 w-8 md:w-10" />
				<h5>seanpark132@gmail.com</h5>
			</div>
			<div className="flex items-center mt-6">
				<img src="/phone.png" className="mr-4 w-8 md:w-10" />
				<h5>647-892-5935</h5>
			</div>

			<div className="flex mt-8 mb-4">
				<LinkButton
					text={"GitHub"}
					link={"https://github.com/seanpark132"}
					imageSrc={"/github.png"}
					addClasses={"mr-6"}
				/>
				<LinkButton
					text={"LinkedIn"}
					link={"https://www.linkedin.com/in/seanpark132/"}
					imageSrc={"/linkedin.png"}
				/>
			</div>
		</section>
	);
}
