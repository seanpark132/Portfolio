import TechStackSlider from "./TechStackSlider";

export default function AboutSection() {
  return (
    <section
      className="px-8 py-12 rounded-b-2xl bg-color-4 mb-16 xl:py-16 xl:px-12"
      id="about-section"
    >
      <div>
        <h1>SEAN PARK</h1>
        <h4 className="mb-8">
          <em>Full-Stack Web Developer</em>
        </h4>
        <p className="mb-8 2xl:pr-24">
          As a full-stack web developer, I am driven by a passion for
          transforming solutions into maintainable web applications that
          prioritize an exceptional user experience. To achieve this, my focus
          is on designing intuitive, responsive interfaces and optimizing
          performance in both the client and the server.
          <br />
          <br />I am looking for a new opportunity to apply my skills to work on
          complex, larger-scale projects.
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
