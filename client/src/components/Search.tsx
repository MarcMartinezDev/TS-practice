import { useRef, useEffect } from "react";
import { useAppContext } from "../context/ContextProvider";
import { useNavigate, useLocation, Link } from "react-router-dom";

const Search = () => {
  const input = useRef<HTMLInputElement>(null);
  const { search, setSearch } = useAppContext();
  const navigate = useNavigate();
  const location = useLocation();
  const searchParam = new URLSearchParams(location.search);
  const param = searchParam.get("search");

  useEffect(() => {
    if (param) setSearch(param);
  }, [param]);

  const handleButton = () => {
    navigate(`/items?search=${search}`);
  };

  return (
    <div className="w-full flex flex-col gap-4">
      {location.pathname !== "/" && (
        <Link to={"/"} className="w-fit m-auto">
          <img
            src="/shop.png"
            alt="bazar online logo"
            width={80}
            className="drop-shadow-md"
          />
        </Link>
      )}
      <input
        type="text"
        ref={input}
        onChange={() => {
          if (input.current) {
            setSearch(input.current.value);
          }
        }}
        placeholder="laptop, iphone, perfume..."
        className="w-full lg:w-1/2 lg:m-auto"
        value={search ? search : ""}
      />
      {location.pathname !== "/items" && (
        <button onClick={handleButton} className="lg:w-1/2 lg:m-auto">Search</button>
      )}
    </div>
  );
};

export default Search;
