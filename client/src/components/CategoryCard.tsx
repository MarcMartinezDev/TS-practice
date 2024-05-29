import { type Category } from "../types";

const CategoryCard: React.FC<{ category: Category }> = ({ category }) => {
  return (
    <span className="flex h-fit gap-2 p-2 shadow-md rounded-md font-semibold items-center bg-gradient-to-r from-slate-200 via-slate-100 to-slate-200">
      <img
        src={`/${category.name.toLowerCase()}.png`}
        alt={`${category.name} icon`}
        width={25}
        height={25}
      />
      {category.name === "home-decoration" ? "Home" : category.name} (
      {category.count})
    </span>
  );
};

export default CategoryCard;
