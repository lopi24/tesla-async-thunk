import { NavLink } from "react-router-dom";

import "./_categoryNav.scss";

const CategoryNav = () => {
  return (
    <nav>
      <ul className="container">
        <li>
          <NavLink
            className={(navData) => (navData.isActive ? "active" : "")}
            to="/category/charging"
          >
            Charging
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/category/vehicle_accessories"
            className={(navData) => (navData.isActive ? "active" : "")}
          >
            Vehicle Accessories
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/category/apparel"
            className={(navData) => (navData.isActive ? "active" : "")}
          >
            Apparel
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/category/lifestyle"
            className={(navData) => (navData.isActive ? "active" : "")}
          >
            Lifestyle
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default CategoryNav;
