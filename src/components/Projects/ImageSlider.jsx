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
      className="w-full px-4 mt-8 mb-4 xl:px-10 xl:mt-4 xl:w-3/5 h-fit"
      {...settings}
    >
      {images.map((image) => (
        <img
          className="mb-2 rounded-xl"
          key={image.alt}
          src={image.src}
          alt={image.alt}
        />
      ))}
    </Slider>
  );
}
