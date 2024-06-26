import LinkButton from "../LinkButton";

export default function ContactSection() {
  return (
    <section
      className="px-8 py-12 rounded-2xl bg-color-4 mb-16 md:py-16"
      id="contact-section"
    >
      <h1 className="underline">CONTACT</h1>
      <div className="flex items-center mt-8">
        <img src="/email.png" className="mr-4 w-8 md:w-10" />
        <p>seanpark132@gmail.com</p>
      </div>
      <div className="flex items-center mt-6">
        <img src="/phone.png" className="mr-4 w-8 md:w-10" />
        <p>647-892-5935</p>
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
