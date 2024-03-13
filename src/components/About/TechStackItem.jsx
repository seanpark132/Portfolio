export default function TechStackItem({ fileName, name, alt }) {
  return (
    <div className="mx-auto flex flex-col text-center w-14 md:w-24">
      <img src={`/tech_stack/${fileName}`} alt={alt} />
      <p className="mt-4 font-semibold text-xs md:text-lg">{name}</p>
    </div>
  );
}
