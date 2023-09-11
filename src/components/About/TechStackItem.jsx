export default function TechStackItem({ src, name, alt }) {
	return (
		<div className="mx-auto flex flex-col text-center w-14 md:w-24">
			<img src={src} alt={alt} />
			<p className="mt-4 font-semibold text-xs md:text-lg">{name}</p>
		</div>
	);
}
