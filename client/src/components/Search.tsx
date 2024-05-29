import { useAppContext } from "../context/ContextProvider";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { useRef } from "react";

const Search = () => {
  const input = useRef<HTMLInputElement>(null);
  const { setSearch } = useAppContext();
  const navigate = useNavigate();
  const location = useLocation();

  const handleButton = () => {
    if (input.current) {
      const newSearch = input.current.value;
      setSearch(newSearch);
      navigate(`/items?search=${newSearch}`);
    }
  };

  return (
    <div className="static top-0 w-full">
      {location.pathname !== "/" && (
        <div className="w-fit m-auto mb-4 min-h-[80px]">
          <Link to={"/"}>
            <img
              src="/shop.png"
              alt="bazar online logo"
              width={80}
              className="drop-shadow-md"
            />
          </Link>
        </div>
      )}
      <div
        className={`w-full flex gap-4 justify-center items-center ${
          location.pathname === "/items" || "/items/" ? "flex-row" : "flex-col"
        }`}
      >
        <input
          type="text"
          ref={input}
          placeholder="laptop, iphone, perfume..."
          className="w-full lg:w-1/2 p-1"
        />
        <button
          onClick={handleButton}
          className={`${
            location.pathname === "/items" || "/items/" ? "w-fit" : "w-full lg:w-1/2 m-auto"
          }`}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default Search;
