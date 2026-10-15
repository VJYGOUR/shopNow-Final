import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const image = product.images?.[0];

  return (
    <Link
      to={`/products/${product._id}`}
      className="group overflow-hidden rounded-2xl border border-gray-200 bg-white transition hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="aspect-square overflow-hidden bg-gray-100">
        {image ? (
          <img
            src={image}
            alt={product.name}
            className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-gray-400">
            No image
          </div>
        )}
      </div>

      <div className="p-4">
        <p className="mb-2 text-xs uppercase tracking-wider text-gray-500">
          {product.category?.name}
        </p>

        <h3 className="line-clamp-2 font-semibold text-gray-900">
          {product.name}
        </h3>

        <div className="mt-3 flex items-center justify-between">
          <p className="text-lg font-bold text-gray-950">
            ₹{product.price.toLocaleString("en-IN")}
          </p>

          <span className="text-sm text-gray-500">View product →</span>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
