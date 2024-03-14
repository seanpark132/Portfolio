export default function TechStackItem({ fileName, name, alt }) {
  return (
    <div className="mx-auto flex flex-col text-center items-center w-14 md:w-20 xl:w-24 px-2">
      <img src={`/tech_stack/${fileName}`} alt={alt} />
      <p className="mt-2 font-semibold text-sm md:text-base">{name}</p>
    </div>
  );
}
