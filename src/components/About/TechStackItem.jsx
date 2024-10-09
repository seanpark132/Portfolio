export default function TechStackItem({ fileName, name, alt }) {
  return (
    <div className="mx-auto flex w-14 flex-col items-center px-2 text-center md:w-20 xl:w-24">
      <div className="flex h-20 items-center justify-center md:h-24 xl:h-32">
        <img
          src={`/tech_stack/${fileName}`}
          alt={alt}
          className="h-full object-contain"
        />
      </div>
      <p className="mt-2 text-xs font-semibold md:text-base">{name}</p>
    </div>
  );
}
