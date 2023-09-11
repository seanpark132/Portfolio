import Slider from "react-slick";
import TechStackItem from "./TechStackItem";

export default function TechStackSlider() {
	const techStack = [
		{ src: "/tech_stack/javascript.png", name: "JavaScript" },
		{ src: "/tech_stack/typescript.png", name: "TypeScript" },
		{ src: "/tech_stack/python.png", name: "Python" },
		{ src: "/tech_stack/react.png", name: "React" },
		{ src: "/tech_stack/nextjs.png", name: "Next.js" },
		{ src: "/tech_stack/nodejs.png", name: "Node.js" },
		{ src: "/tech_stack/html5.png", name: "HTML5" },
		{ src: "/tech_stack/css3.png", name: "CSS3" },
		{ src: "/tech_stack/firebase.png", name: "Firebase" },
		{ src: "/tech_stack/mysql.png", name: "MySQL" },
	];

	const settings = {
		infinite: false,
		dots: true,
		slidesToShow: 4,
		slidesToScroll: 4,
		accessibility: true,
		speed: 1000,
	};

	const settingsLarge = {
		infinite: false,
		dots: true,
		slidesToShow: 5,
		slidesToScroll: 5,
		accessibility: true,
		speed: 1000,
	};

	return (
		<div className="py-8">
			<Slider className="pl-2 pb-4 ml-4 mr-6 xl:hidden" {...settings}>
				{techStack.map((item) => (
					<TechStackItem
						key={item.name}
						src={item.src}
						name={item.name}
						alt={item.name}
					/>
				))}
			</Slider>
			<Slider
				className="hidden pb-4 ml-6 mr-10 xl:block"
				{...settingsLarge}
			>
				{techStack.map((item) => (
					<TechStackItem
						key={item.name}
						src={item.src}
						name={item.name}
						alt={item.name}
					/>
				))}
			</Slider>
		</div>
	);
}
