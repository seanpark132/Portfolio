export default function ProjectTechStackItem({ fileName, name, alt }) {
  return (
    <div className="mx-auto p-2 flex flex-col text-center items-center w-fit">
      <img className="w-12 md:w-16" src={`/tech_stack/${fileName}`} alt={alt} />
      <p className="mt-2 font-semibold text-sm xl:text-base">{name}</p>
    </div>
  );
}
