import { Product } from "../types";
import { useNavigate } from "react-router-dom";

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const image = product.category == "smartphones" ? "phone" : null;
  const navigate = useNavigate();
  return (
    <div
      className="flex justify-between items-center shadow-[0px_0px_1px_black] my-2 p-4 rounded-md"
      onClick={() => {
        navigate(`/item/${product.id}`);
      }}
    >
      <div className="min-w-[100px] max-w-[100px]">
        <img src={`/${image}.png`} alt={product.title} />
      </div>
      <div className="flex flex-col px-2 rounded-md gap-2">
        <div className="flex gap-2 items-start justify-between">
          <div>
            <h4 className="text-lg font-semibold">{product.title}</h4>
            <small>{product.brand}</small>
          </div>
          <small>{product.category}</small>
        </div>
        <p>{product.description}</p>
        <div className="flex justify-between">
          <span className="text-lg font-semibold">{product.price}€</span>
          {product.rating > 4 ? (
            <p className="text-yellow-500">&#9733;&#9733;&#9733;&#9733;</p>
          ) : (
            <p className="text-yellow-500">&#9733;&#9733;&#9733;</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
