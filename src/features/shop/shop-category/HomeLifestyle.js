import Button from "../../UI/Button";
import "./_homeLifestyle.scss";
import lifestylePic from "./../../../assets/home-categories-pics/lifestyle.png";
import { LazyLoadImage } from "react-lazy-load-image-component";

const HomeLifestyle = () => {
  return (
    <div className="home-lifestyle-section">
      <div className="home-lifestyle-img-section">
        <LazyLoadImage effect="blur" src={lifestylePic} alt="lifestyle" />
      </div>
      <div className="home-lifestyle-content">
        <h1>lifestyle</h1>
        <Button to="category/lifestyle" />
      </div>
    </div>
  );
};

export default HomeLifestyle;
