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
          My experience lies in building full-stack web applications using a
          wide range of technologies, and serving thousands of users with useful
          tools and solutions. I focus on designing intuitive, responsive
          interfaces, and effectively using technologies to optimize server-side
          and client-side performance.
          <br />
          <br />
          I am looking for an opportunity to apply my skills in a professional
          setting and contribute to large-scale projects.
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
