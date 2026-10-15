import { useParams } from "react-router-dom";
import { useProduct } from "../hooks/useProduct";
import { Link } from "react-router-dom";
const ProductDetails = () => {
  const { id } = useParams();
  const { data, isPending, isError } = useProduct(id);
  if (isPending) {
    return <p className="p-10 text-center text-gray-500">Loading product...</p>;
  }

  if (isError || !data?.product) {
    return <p className="p-10 text-center">Product not found.</p>;
  }
  const product = data?.product || [];
  const image = product?.images?.[0];
  return (
    <main className="min-h-screen bg-white">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
        <Link to="/shop" className="text-sm text-gray-500 hover:text-black">
          ← Back to products
        </Link>

        <div className="mt-8 grid gap-10 md:grid-cols-2 md:gap-16">
          <div className="flex aspect-square items-center justify-center overflow-hidden rounded-3xl bg-gray-100">
            {image ? (
              <img
                src={image}
                alt={product.name}
                className="h-full w-full object-contain"
              />
            ) : (
              <span className="text-gray-400">No image available</span>
            )}
          </div>

          <div className="flex flex-col justify-center">
            <p className="text-sm uppercase tracking-widest text-gray-500">
              {product.category?.name}
            </p>

            <h1 className="mt-3 text-3xl font-bold tracking-tight text-gray-950 sm:text-4xl">
              {product.name}
            </h1>

            <p className="mt-5 text-3xl font-bold">
              ₹{product.price.toLocaleString("en-IN")}
            </p>

            <p className="mt-6 leading-7 text-gray-600">
              {product.description}
            </p>

            <p
              className={`mt-6 text-sm ${product.stock > 0 ? "text-green-700" : "text-red-600"}`}
            >
              {product.stock > 0
                ? `${product.stock} available in stock`
                : "Out of stock"}
            </p>

            {product.stock > 0 && (
              <div className="mt-6 flex items-center gap-4">
                <label htmlFor="quantity" className="text-sm font-medium">
                  Quantity
                </label>
                {/* <input
                id="quantity"
                type="number"
                min="1"
                max={product.stock}
                value={quantity}
                onChange={(e) =>
                  setQuantity(
                    Math.max(
                      1,
                      Math.min(product.stock, Number(e.target.value) || 1),
                    ),
                  )
                }
                className="w-20 rounded-lg border border-gray-300 px-3 py-2"
              /> */}
              </div>
            )}

            {/* <button
            disabled={product.stock < 1}
            onClick={() => addToCart(product._id, quantity)}
            className="mt-7 w-full rounded-xl bg-gray-950 px-6 py-4 font-semibold text-white transition hover:bg-gray-800 disabled:cursor-not-allowed disabled:bg-gray-300 sm:w-auto"
          >
            {product.stock > 0 ? "Add to cart" : "Out of stock"}
          </button> */}

            <div className="mt-6 border-t border-gray-200 pt-5 text-sm text-gray-500">
              Secure checkout · Quality products · Easy shopping
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
export default ProductDetails;
