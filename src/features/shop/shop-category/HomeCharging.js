import Button from "../../UI/Button";
import "./_homeCharging.scss";
import chargingPic from "../../../assets/home-categories-pics/charging.png";
import { LazyLoadImage } from "react-lazy-load-image-component";

const HomeCharging = () => {
  return (
    <div className="home-charging-section">
      <div className="home-charging-img-section">
        <LazyLoadImage effect="blur" src={chargingPic} alt="charging" />
      </div>
      <div className="home-charging-content">
        <h1>charging</h1>
        <Button to="/category/charging" />
      </div>
    </div>
  );
};

export default HomeCharging;
