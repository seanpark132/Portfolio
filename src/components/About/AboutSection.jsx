import TechStackSlider from "./TechStackSlider";

export default function AboutSection() {
  return (
    <section
      className="mb-16 rounded-b-2xl bg-color-4 px-8 py-12 xl:px-12 xl:py-16"
      id="about-section"
    >
      <div>
        <h1>SEAN PARK</h1>
        <h4 className="mb-8">
          <em>Front-end Developer</em>
        </h4>
        <p className="mb-8">
          I'm passionate about building scalable, high-performance web
          applications using React and TypeScript, and always eager to learn new
          ways to improve performance and user experience. With experience in
          integrating cloud services such as AWS into my applications, I've
          scaled my projects to tens of thousands of active users. On the
          frontend, I am focused on writing high-quality, maintainable code by
          using modular components and custom hooks.
          <br />
          <br />
          I am eager to contribute to impactful projects and use my skillset to
          solve real-world challenges.
          <br />
          <br />
          <strong>
            Education: Bachelor of Applied Science, University of Waterloo
          </strong>
        </p>
        <h5 className="mb-4">My Tech Stack:</h5>
      </div>
      <TechStackSlider />
    </section>
  );
}
