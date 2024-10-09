import Slider from "react-slick";
import TechStackItem from "./TechStackItem";
import { TECH_STACK } from "../../InfoAsData";

export default function TechStackSlider() {
  const settings = {
    infinite: false,
    dots: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    accessibility: true,
    speed: 1000,
  };

  const settingsLarge = {
    infinite: false,
    dots: true,
    slidesToShow: 6,
    slidesToScroll: 6,
    accessibility: true,
    speed: 1000,
  };

  return (
    <div className="py-4">
      <Slider className="mx-2 px-2 pb-4 xl:hidden" {...settings}>
        {TECH_STACK.map((item) => (
          <TechStackItem
            key={item.name}
            fileName={item.fileName}
            name={item.name}
            alt={item.name}
          />
        ))}
      </Slider>
      <Slider className="hidden pb-4 xl:block" {...settingsLarge}>
        {TECH_STACK.map((item) => (
          <TechStackItem
            key={item.name}
            fileName={item.fileName}
            name={item.name}
            alt={item.name}
          />
        ))}
      </Slider>
    </div>
  );
}
