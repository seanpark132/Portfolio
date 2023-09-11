export default function ContactSection() {
	return (
		<section className="px-8 py-12 rounded-2xl bg-color-4 mb-16 md:py-24">
			<h1>CONTACT</h1>
			<h4>Email: seanpark132@gmail.com</h4>
			<h4>Phone: 647-892-5935</h4>
			<div className="flex">
				<a
					className="rounded-lg font-semibold bg-teal-300 py-3 px-4"
					href="https://github.com/seanpark132"
					target="_blank"
				>
					<div className="flex">
						<img src="/github-mark.png" className="w-8 mr-2" />
						GitHub
					</div>
				</a>
			</div>
		</section>
	);
}
