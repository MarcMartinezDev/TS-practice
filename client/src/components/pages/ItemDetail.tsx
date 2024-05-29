import { findItem } from "../../api/requests";
import { useAppContext } from "../../context/ContextProvider";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import DetailedCard from "../DetailedCard";
import Search from "../Search";

const ItemDetail = () => {
  const { id } = useParams();
  const { product, setProduct } = useAppContext();
  const navigate = useNavigate();

  useEffect(() => {
    setProduct(null);
    const getItem = async () => {
      const res = await findItem(id ? id : "0");
      if (!res.id) return navigate("/");
      setProduct(res);
    };
    getItem();
  }, []);

  return (
    <main>
      <Search />
      {product !== null ? (
        <DetailedCard product={product} />
      ) : (
        <p className="text-lg font-semibold">Loading...</p>
      )}
    </main>
  );
};

export default ItemDetail;
