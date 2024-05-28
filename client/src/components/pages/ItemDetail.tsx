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
      {product && <DetailedCard product={product} />}
    </main>
  );
};

export default ItemDetail;
