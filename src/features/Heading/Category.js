import { Link } from "react-router-dom";

import "./_category.scss";

const Category = () => {
  return (
    <nav>
      <ul className="container">
        <li>
          <Link>Charging</Link>
        </li>
        <li>
          <Link>Vehicle Accessories</Link>
        </li>
        <li>
          <Link>Apparel</Link>
        </li>
        <li>
          <Link>Lifestyle</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Category;
