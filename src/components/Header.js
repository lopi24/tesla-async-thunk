import { useEffect, useState } from "react";
import Category from "../features/Heading/Category";
import Cart from "../features/Heading/utility/Cart";
import Search from "../features/Heading/utility/Search";
import { BiX } from "react-icons/bi";
import "./_header.scss";
import { Link } from "react-router-dom";

const Header = () => {
  const [screenSize, setScreenSize] = useState(getCurrentDimension());

  const [menuStyle, setMenuStyle] = useState({
    width: "0",
    opacity: "0",
    zIndex: "0",
    padding: "0",
  });

  const [toggleMenu, setToggleMenu] = useState(false);

  function getCurrentDimension() {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  }

  useEffect(() => {
    const updateDimension = () => {
      setScreenSize(getCurrentDimension());
    };
    window.addEventListener("resize", updateDimension);

    if (toggleMenu && screenSize.width <= 425) {
      setMenuStyle({
        width: "100%",
        opacity: "1",
        zIndex: "1",
        padding: "0 1.75rem",
        right: "0",
      });
    } else if (toggleMenu && screenSize.width > 425) {
      setMenuStyle({
        width: "60vh",
        opacity: "1",
        zIndex: "1",
        padding: "0 1.75rem",
        right: "0",
      });
    } else if (!toggleMenu) {
      setMenuStyle({
        width: "0",
        opacity: "0",
        zIndex: "0",
        padding: "0",
      });
    }

    return () => {
      window.removeEventListener("resize", updateDimension);
    };
  }, [screenSize, toggleMenu]);

  const setMenuStyleHandler = () => {
    setToggleMenu((e) => !e);
  };

  return (
    <header className="header">
      <Link to="/">
        tesla.<span>shop</span>
      </Link>
      {screenSize.width > 768 && <div className="category">{<Category />}</div>}

      <div className="utility">
        {screenSize.width > 768 && (
          <div className="search-box">
            <Search />
          </div>
        )}

        <div className="cart-box">
          <Cart />
        </div>

        {screenSize.width <= 768 && (
          <div className="menu">
            <div className="menu-btn" onClick={setMenuStyleHandler}>
              menu
            </div>

            <div className="md-screen-nav" style={menuStyle}>
              <div className="exit-container">
                <BiX onClick={setMenuStyleHandler} />
              </div>
              <div className="search-container">
                <Search />
                <input placeholder="Search" />
              </div>
              <Category />
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
