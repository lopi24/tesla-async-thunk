import { Autoplay, Pagination, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import "./_slide.scss";

import slide1 from "../../../assets/hero-slide-pics/wall-connector-slide1.png";
import slide2 from "../../../assets/hero-slide-pics/chill-collection-slide2.png";
import slide3 from "../../../assets/hero-slide-pics/model-y-all-weather-interior-line-slide3.png";
import { Link } from "react-router-dom";

const Slider = () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Autoplay, Pagination, A11y]}
      spaceBetween={0}
      slidesPerView={1}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      <SwiperSlide>
        <img src={slide1} alt="wall-connector" />
        <div className="slide-content">
          <h1>wall connector</h1>
          <h3>the most convenient way to charge at home</h3>
          <Link>shop now</Link>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide2} alt="chill-collection" />
        <div className="slide-content">
          <h1>chill connection</h1>
          <h3>premium comfort for any reason</h3>
          <Link>shop now</Link>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide3} alt="model-y-all-weather-interior-line" />
        <div className="slide-content">
          <h1>model y all-weather interior liners</h1>
          <h3>for maximum protection and durability</h3>
          <Link>shop now</Link>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
