import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { findItem } from "../../api/requests";
import { useAppContext } from "../../context/ContextProvider";
import { useNavigate } from "react-router-dom";

const ItemDetail = () => {
  const { id } = useParams();
  const { product, setProduct } = useAppContext();
  const navigate = useNavigate();

  useEffect(() => {
    const getItem = async () => {
      const res = await findItem(id ? id : "1");
      if (!res.id) return navigate("/");
      setProduct(res);
    };
    getItem();
  }, []);

  return (
    <div>
      <p>{product?.title}</p>
      <p>{product?.category}</p>
    </div>
  );
};

export default ItemDetail;
