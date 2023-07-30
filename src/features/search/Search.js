import { useRef, useState } from "react";
import "./_search.scss";
import SearchButton from "./SearchButton";
import { createSearchParams, useNavigate } from "react-router-dom";

const Search = () => {
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
  );
};

export default Search;
