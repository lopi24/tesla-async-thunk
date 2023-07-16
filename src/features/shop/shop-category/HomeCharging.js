import Button from "../../UI/Button";
import "./_homeCharging.scss";
import chargingPic from "../../../assets/home-categories-pics/charging.png";

const HomeCharging = () => {
  return (
    <div className="home-charging-section">
      <div className="home-charging-img-section">
        <img src={chargingPic} alt="charging" />
      </div>
      <div className="home-charging-content">
        <h1>charging</h1>
        <Button to="/category/charging" />
      </div>
    </div>
  );
};

export default HomeCharging;
