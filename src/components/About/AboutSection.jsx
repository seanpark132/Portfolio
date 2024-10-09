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
        <p className="mb-8">
          I am a passionate developer with hands-on experience in building
          scalable web applications that serve thousands of users. My focus is
          on designing intuitive, responsive interfaces, and effectively using a
          wide range of technologies to optimize server-side and client-side
          performance.
          <br />
          <br />
          I am eager to contribute to impactful projects and using my skillset
          to solve real-world challenges.
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
