export default function LinkButton({ text, link, imageSrc, addClasses }) {
  return (
    <a
      className={`${addClasses} rounded-lg font-semibold py-2 px-2 border border-color-1 duration-300 text-color-1`}
      href={link}
      target="_blank"
    >
      <div className="flex">
        <img className="w-6 mr-2 md:w-8" src={imageSrc} alt={text} />
        {text}
      </div>
    </a>
  );
}
