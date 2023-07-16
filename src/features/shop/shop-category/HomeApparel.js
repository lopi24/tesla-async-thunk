import Button from "../../UI/Button";
import "./_homeApparel.scss";
import apparelMen from "../../../assets/home-categories-pics/apparel-men.png";
import apparelWomen from "../../../assets/home-categories-pics/apparel-women.png";
import apparelKids from "../../../assets/home-categories-pics/apparel-kids.png";

const apparelPics = [
  {
    id: 1,
    src: apparelMen,
    category: "men",
    alt: "men's apparel",
  },
  {
    id: 2,
    src: apparelWomen,
    category: "women",
    alt: "women's apparel",
  },
  {
    id: 3,
    src: apparelKids,
    category: "kids",
    alt: "kids' apparel",
  },
];

const HomeApparel = () => {
  const content = apparelPics.map((data) => (
    <div className="home-apparel-container" key={data.id}>
      <div className="home-apparel-img-section">
        <img src={data.src} alt={data.alt} />
      </div>
      <div className="home-apparel-content">
        <h1>{data.alt}</h1>
        {/* make this filter life apparel=? */}
        <Button to={`/category/apparel/${data.category}`} />
      </div>
    </div>
  ));
  return <div className="home-apparel-section">{content}</div>;
};

export default HomeApparel;
