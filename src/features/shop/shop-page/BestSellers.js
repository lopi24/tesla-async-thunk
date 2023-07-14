import { Link } from "react-router-dom";

import "./_best-sellers.scss";

import { Navigation, Pagination, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

// temporary imports will change later for fetching from db
import slide1 from "../../../assets/best-seller-pics/wall-connector.png";
import slide2 from "../../../assets/best-seller-pics/model-3y-center-console-trays.png";
import slide3 from "../../../assets/best-seller-pics/sae-j1772-charging-adapter.png";
import slide4 from "../../../assets/best-seller-pics/model-y-all-weather-interior-liners.png";
import slide5 from "../../../assets/best-seller-pics/model-y-all-weather-rear-cargo-liner.png";
import slide6 from "../../../assets/best-seller-pics/model-y-mud-flaps.png";
import slide7 from "../../../assets/best-seller-pics/model-3-all-weather-interior-liners.png";
import slide8 from "../../../assets/best-seller-pics/tire-repair-kit.png";
import slide9 from "../../../assets/best-seller-pics/model-3y-key-fob.png";
import slide10 from "../../../assets/best-seller-pics/model-s3y-pet-liner.png";

const sliderPics = [
  {
    id: 1,
    name: "wall connector",
    src: slide1,
  },
  {
    id: 2,
    name: "model-3y-center-console-trays",
    src: slide2,
  },
  {
    id: 3,
    name: "sae-j1772-charging-adapter",
    src: slide3,
  },
  {
    id: 4,
    name: "model-y-all-weather-interior-liners",
    src: slide4,
  },
  {
    id: 5,
    name: "model-y-all-weather-rear-cargo-liner",
    src: slide5,
  },
  {
    id: 6,
    name: "model-y-mud-flaps",
    src: slide6,
  },
  {
    id: 7,
    name: "model-3-all-weather-interior-liners",
    src: slide7,
  },
  {
    id: 8,
    name: "tire-repair-kit",
    src: slide8,
  },
  {
    id: 9,
    name: "model-3y-key-fob",
    src: slide9,
  },
  {
    id: 10,
    name: "model-s3y-pet-liner",
    src: slide10,
  },
];

const BestSellers = () => {
  const content = sliderPics.map((data) => (
    <SwiperSlide key={data.id}>
      <Link to="#" className="slider">
        <img src={data.src} alt={data.name} />
        <div className="best-sellers-slide-content">
          <p>{data.name}</p>
        </div>
      </Link>
    </SwiperSlide>
  ));

  return (
    <section className="best-sellers-section">
      <div className="heading">
        <h1>best sellers</h1>
      </div>
      <div className="content">
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={25}
          slidesPerView={3}
          navigation
          loop={true}
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 5,
            },
            481: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
            841: {
              slidesPerView: 3,
              spaceBetween: 25,
            },
          }}
        >
          {content}
        </Swiper>
      </div>
    </section>
  );
};

export default BestSellers;
