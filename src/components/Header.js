import { useEffect, useState } from "react";
import CategoryNav from "../features/Heading/CategoryNav";
import CartButton from "../features/cart/CartButton";
import Search from "../features/Heading/utility/Search";
import { BiX } from "react-icons/bi";
import "./_header.scss";
import { NavLink } from "react-router-dom";

// for testing
// import { useDispatch, useSelector } from "react-redux";
// import { increaseCount, getCount } from "../features/products/productsSlice";
// for testing

const Header = () => {
  // for testing rendering
  // const dispatch = useDispatch();
  // const count = useSelector(getCount);
  // for testing rendering

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
        zIndex: "99",
        padding: "0 1.75rem",
        right: "0",
      });
    } else if (toggleMenu && screenSize.width > 425) {
      setMenuStyle({
        width: "50vh",
        opacity: "1",
        zIndex: "99",
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
      <NavLink
        to="/"
        className={(navData) => (navData.isActive ? "logo active" : "logo")}
      >
        tesla.<span>shop</span>
      </NavLink>

      {screenSize.width > 940 && (
        <div className="category">{<CategoryNav />}</div>
      )}

      <div className="utility">
        {screenSize.width > 940 && (
          <div className="search-box">
            <Search />
          </div>
        )}

        <div className="cart-box">
          <CartButton />
        </div>

        {screenSize.width <= 940 && (
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
              <CategoryNav />
            </div>
          </div>
        )}
      </div>
      {/* testing */}
      {/* <button
        className="sample-button"
        onClick={() => dispatch(increaseCount())}
      >
        {count}
      </button> */}
      {/* testing */}
    </header>
  );
};

export default Header;
