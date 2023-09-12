export default function Navbar() {
	function handleScrollToSection(sectionId) {
		const section = document.getElementById(sectionId);

		if (section) {
			section.scrollIntoView({ behavior: "smooth" });
		}
	}

	return (
		<nav className="bg-color-2 text-color-4 font-bold">
			<a href="/">Sean Park</a>
			<div>
				<button
					className="mx-6"
					onClick={() =>
						window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
					}
				>
					About
				</button>
				<button
					className="mr-6"
					onClick={() => handleScrollToSection("projects-section")}
				>
					Projects
				</button>
				<button
					onClick={() => handleScrollToSection("contact-section")}
				>
					Contact
				</button>
			</div>
		</nav>
	);
}
