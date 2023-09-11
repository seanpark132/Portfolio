import Slider from "react-slick";

export default function ImageSlider({ images }) {
	const settings = {
		infinite: false,
		dots: true,
		slidesToShow: 1,
		slidesToScroll: 1,
	};

	return (
		<Slider
			className="ml-2 mr-4 pl-2 md:pl-4 xl:mr-8 xl:mt-4 xl:w-1/2"
			{...settings}
		>
			{images.map((image) => (
				<img
					className="pb-2"
					key={image.alt}
					src={image.src}
					alt={image.alt}
				/>
			))}
		</Slider>
	);
}
