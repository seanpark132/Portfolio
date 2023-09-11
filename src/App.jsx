import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./css/App.scss";
import Navbar from "./components/Navbar";
import AboutSection from "./components/About/AboutSection";
import ProjectSection from "./components/Projects/ProjectSection";
import ContactSection from "./components/Contact/ContactSection";

export default function App() {
	return (
		<div>
			<Navbar />
			<main className="main-padding bg-color-3 flex flex-col justify-center align-middle">
				<AboutSection />
				<ProjectSection />
				<ContactSection />
			</main>
		</div>
	);
}
