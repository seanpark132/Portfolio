import Project from "./Project";

export default function ProjectSection() {
	const projects = [
		{
			name: "FaveBattles",
			description:
				"A single-page app developed using React, where users can create and play tournament-like games to test their preferences on trendy topics. Users can discover popular choices for topics of interest, play with friends to see where opinions differ, and look at the rankings to see where their favourite lands. Check out the website in the link below!",
			websiteLink: "https://favebattles.com/",
			githubLink: "https://github.com/seanpark132/FaveBattles",
			images: [
				{
					src: "/projects/favebattles/1.JPG",
					alt: "Favebattles image 1",
				},
				{
					src: "/projects/favebattles/2.JPG",
					alt: "Favebattles image 2",
				},
				{
					src: "/projects/favebattles/3.JPG",
					alt: "Favebattles image 3",
				},
				{
					src: "/projects/favebattles/4.JPG",
					alt: "Favebattles image 4",
				},
				{
					src: "/projects/favebattles/5.JPG",
					alt: "Favebattles image 5",
				},
				{
					src: "/projects/favebattles/6.JPG",
					alt: "Favebattles image 6",
				},
			],
		},
		{
			name: "Robot or Not",
			description: `A multiplayer single-page app developed using Next.js, where users need to guess
			if a response to a question is AI-generated or made by another user. A fun game to play with friends that uses OpenAI's API to create unique experiences. Check out the website in the link below!`,
			websiteLink: "https://robot-or-not.vercel.app/",
			githubLink: "https://github.com/seanpark132/Robot-or-Not",
			images: [
				{
					src: "/projects/robot_or_not/1.JPG",
					alt: "Robot or not image 1",
				},
				{
					src: "/projects/robot_or_not/2.JPG",
					alt: "Robot or not image 2",
				},
				{
					src: "/projects/robot_or_not/3.JPG",
					alt: "Robot or not image 3",
				},
				{
					src: "/projects/robot_or_not/4.JPG",
					alt: "Robot or not image 4",
				},
				{
					src: "/projects/robot_or_not/5.JPG",
					alt: "Robot or not image 5",
				},
				{
					src: "/projects/robot_or_not/6.JPG",
					alt: "Robot or not image 6",
				},
				{
					src: "/projects/robot_or_not/7.JPG",
					alt: "Robot or not image 7",
				},
			],
		},
		{
			name: "Faster Snake Game",
			description:
				"A faster-paced version of the classic snake game, developed using Python. Unique features include: additional food that is created every 10 seconds, food deletion after 10 seconds, and an in-game timer. These features were added to provide users with a new, dynamic experience.",
			githubLink: "https://github.com/seanpark132/Faster-snake-game",
			images: [
				{
					src: "/projects/snake/1.JPG",
					alt: "Snake image 1",
				},
				{
					src: "/projects/snake/2.JPG",
					alt: "Snake image 2",
				},
				{
					src: "/projects/snake/3.JPG",
					alt: "Snake image 3",
				},
			],
		},
		{
			name: "Python Syntax Flash Cards",
			description:
				"A flash cards/quiz app built on Python using the tkinter GUI module. The app displays lines of python code, and the user must enter the correct output to the code within a time limit. After pressing the FLIP button, the correct output, the user's answer, and the definition are shown.",
			githubLink:
				"https://github.com/seanpark132/Python-Syntax-Flash-Cards-Quiz-App",
			images: [
				{
					src: "/projects/flash_cards/1.JPG",
					alt: "Flash cards image 1",
				},
				{
					src: "/projects/flash_cards/2.JPG",
					alt: "Flash cards image 2",
				},
				{
					src: "/projects/flash_cards/3.JPG",
					alt: "Flash cards image 3",
				},
			],
		},
	];

	return (
		<section className="pt-12 mb-16 rounded-2xl bg-color-4 md:pt-24">
			<h1 className="px-8">PROJECTS</h1>
			{projects.map((project) => (
				<Project key={project.name} project={project} />
			))}
		</section>
	);
}
