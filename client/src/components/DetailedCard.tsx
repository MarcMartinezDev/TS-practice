import { Product } from "../types";

const DetailedCard: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <div className="flex flex-col items-center text-center gap-5">
      <h2 className="font-bold">{product.category.toUpperCase()}</h2>
      <img
        src={`/${product.category}.png`}
        alt={product.title}
        width={150}
        height={150}
      />
      <div>
        <h1>{product.title}</h1>
        <small>{product.brand}</small>
      </div>
      <p>{product.description}</p>
      <div className="flex flex-col">
        <p className="mb-4">
          Only Now{" "}
          <span className="font-semibold">
            -{product.discountPercentage.toFixed(0)}%
          </span>{" "}
          !
        </p>
        <span className="line-through decoration-red-600 decoration-1">
          {(
            (product.discountPercentage / 100) * product.price +
            product.price
          ).toFixed(0)}
          ,00€
        </span>
        <span className="font-bold text-xl">{product.price},00€</span>
        <p className="text-red-600 font-semibold mt-4">
          Only {product.stock} left !
        </p>
      </div>
    </div>
  );
};

export default DetailedCard;
