import { useRef, useEffect } from "react";
import { useAppContext } from "../context/ContextProvider";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const input = useRef<HTMLInputElement>(null);
  const { search, setSearch, setMessage } = useAppContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (search === null) {
      return;
    } else {
      navigate(`/items?search=${search}`);
      setSearch(null);
    }
  }, [search]);

  const handleButton = () => {
    setMessage(null);
    const inputVal = input.current ? input.current.value : null;
    inputVal === ""
      ? setMessage("Introduce un valor de búsqueda.")
      : setSearch(inputVal);
  };

  return (
    <div className="flex flex-col gap-4">
      <input type="text" ref={input} />
      <button onClick={handleButton}>Buscar</button>
    </div>
  );
};

export default Search;
