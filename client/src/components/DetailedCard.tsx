import { Product } from "../types";

const DetailedCard: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <article className="flex flex-col items-center text-center gap-5 shadow-[0px_0px_2px_black] p-4 rounded-md">
      <h2 className="font-bold">{product.category.toUpperCase()}</h2>
      <img
        src={`/${product.category}.png`}
        alt={product.title}
        width={150}
        height={150}
      />
      <div>
        <h1>{product.title}</h1>
        <span className="text-sm">{product.brand}</span>
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
      <button>Add to Chart</button>
    </article>
  );
};

export default DetailedCard;
