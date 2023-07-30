import { useEffect, useRef, useState } from "react";
import "./_search.scss";
import SearchButton from "./SearchButton";
import { createSearchParams, useNavigate } from "react-router-dom";

const Search = () => {
  const [screenSize, setScreenSize] = useState(getCurrentDimension());

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

    return () => {
      window.removeEventListener("resize", updateDimension);
    };
  }, [screenSize]);

  const [inputStyle, setInputStyle] = useState({
    width: "0",
    opacity: "0",
  });
  // const [inputValue, setInputValue] = useState(undefined);
  // console.log(inputValue);

  const inputRef = useRef();

  const navigate = useNavigate();

  const onMouseLeaveHandler = () => {
    setInputStyle({
      width: "0",
      opacity: "0",
    });
  };

  const onMouseOverHandler = (e) => {
    setInputStyle({
      width: "250px",
      opacity: "1",
    });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    const inputRefValue = inputRef.current.value;
    // console.log(inputRefValue);

    if (inputRefValue) {
      navigate(
        {
          // state: { inputValue },
          pathname: "search",
          search: createSearchParams({
            searchTerm: inputRefValue,
          }).toString(),
        },
        { state: { inputRefValue } }
      );
    }
  };

  return (
    <>
      {screenSize.width > 940 ? (
        <section className="search-section" onMouseOver={onMouseOverHandler}>
          <form className="input-form" onSubmit={onSubmitHandler}>
            <input
              style={inputStyle}
              className="input-search"
              type="search"
              placeholder="Search"
              onMouseLeave={onMouseLeaveHandler}
              ref={inputRef}
            />
          </form>
          <SearchButton />
        </section>
      ) : (
        <section className="search-section-smaller-vp">
          <form className="input-form-smaller-vp" onSubmit={onSubmitHandler}>
            <input
              className="input-search-smaller-vp"
              type="search"
              placeholder="Search"
              ref={inputRef}
            />
          </form>
          <SearchButton />
        </section>
      )}
    </>
  );
};

export default Search;
