import Slider from "react-slick";

export default function ImageSlider({ images, projectName }) {
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
      {images.map((number) => (
        <img
          className="mb-2 rounded-xl"
          key={number}
          src={`/projects/${projectName}/${number}.webp`}
          alt={`${projectName} Image ${number}`}
        />
      ))}
    </Slider>
  );
}
