import Button from "../UI/Button";
import "./_hero.scss";

import { Autoplay, Pagination, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

// temporary imports will change later for fetching from db
import slide1 from "../../assets/hero-slide-pics/wall-connector-slide1.png";
import slide2 from "../../assets/hero-slide-pics/chill-collection-slide2.png";
import slide3 from "../../assets/hero-slide-pics/model-y-all-weather-interior-line-slide3.png";

const sliderPics = [
  {
    id: 1,
    name: "wall connector",
    description: "the most convenient way to charge at home",
    src: slide1,
  },
  {
    id: 2,
    name: "chill connection",
    description: "premium comfort for any reason",
    src: slide2,
  },
  {
    id: 3,
    name: "model y all-weather interior liners",
    description: "for maximum protection and durability",
    src: slide3,
  },
];

const Hero = () => {
  const content = sliderPics.map((data) => (
    <SwiperSlide key={data.id}>
      <div className="slider">
        <img src={data.src} alt={data.name} />
        <div className="hero-slide-content">
          <h1>{data.name}</h1>
          <h3>{data.description}</h3>
          <Button />
        </div>
      </div>
    </SwiperSlide>
  ));

  return (
    <div className="hero-section">
      <Swiper
        // install Swiper modules
        modules={[Autoplay, Pagination, A11y]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {content}
      </Swiper>
    </div>
  );
};

export default Hero;
