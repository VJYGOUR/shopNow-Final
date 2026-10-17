import { useCart, useCartMutation } from "../hooks/useCart";
import { Link } from "react-router-dom";
const Cart = () => {
  const { data, isPending, isError } = useCart();
  const updateMutation = useCartMutation("updateCartItem");
  const removeMutation = useCartMutation("removeCartItem");
  const updateQuantity = updateMutation.mutate;
  const removeFromCart = removeMutation.mutate;
  const isUpdating = updateMutation.isPending || removeMutation.isPending;

  const mutationError = updateMutation.error || removeMutation.error;
  if (isPending) {
    return (
      <p className="p-10 text-center text-gray-500">Loading your cart...</p>
    );
  }

  if (isError) {
    return (
      <p className="p-10 text-center text-gray-600">
        Please log in to view your cart.
      </p>
    );
  }
  const cart = data?.cart;
  const items = cart?.items || [];
  const subtotal = items.reduce(
    (total, item) => total + (item.product?.price || 0) * item.quantity,
    0,
  );
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
        <div className="mb-8">
          <p className="text-sm uppercase tracking-widest text-gray-500">
            ShopNow
          </p>
          <h1 className="mt-2 text-3xl font-bold text-gray-950">
            Your shopping cart
          </h1>
          <p className="mt-2 text-gray-500">
            {items.length} {items.length === 1 ? "item" : "items"} in your cart
          </p>
        </div>

        {mutationError && (
          <p className="mb-5 rounded-xl bg-red-50 p-4 text-sm text-red-700">
            {mutationError.response?.data?.message || "Could not update cart."}
          </p>
        )}

        {items.length === 0 ? (
          <div className="rounded-2xl border border-gray-200 bg-white px-6 py-20 text-center">
            <h2 className="text-xl font-semibold">Your cart is empty</h2>
            <p className="mt-2 text-gray-500">
              Discover something you'll love.
            </p>
            <Link
              to="/products"
              className="mt-6 inline-block rounded-xl bg-gray-950 px-6 py-3 font-medium text-white hover:bg-gray-800"
            >
              Explore products
            </Link>
          </div>
        ) : (
          <div className="grid items-start gap-8 lg:grid-cols-[1fr_340px]">
            <section className="space-y-4">
              {items.map((item) => {
                const product = item.product;

                if (!product) return null;

                return (
                  <article
                    key={product._id}
                    className="flex gap-4 rounded-2xl border border-gray-200 bg-white p-4 sm:gap-6 sm:p-6"
                  >
                    <div className="h-28 w-28 shrink-0 overflow-hidden rounded-xl bg-gray-100 sm:h-36 sm:w-36">
                      {product.images?.[0] && (
                        <img
                          src={product.images[0]}
                          alt={product.name}
                          className="h-full w-full object-cover"
                        />
                      )}
                    </div>

                    <div className="flex min-w-0 flex-1 flex-col">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <h2 className="font-semibold text-gray-950">
                            {product.name}
                          </h2>
                          <p className="mt-1 text-lg font-bold">
                            ₹{product.price.toLocaleString("en-IN")}
                          </p>
                        </div>

                        <button
                          disabled={isUpdating}
                          onClick={() => removeFromCart(product._id)}
                          className="text-sm text-gray-500 hover:text-red-600 disabled:opacity-50"
                        >
                          Remove
                        </button>
                      </div>

                      <div className="mt-auto flex flex-wrap items-center justify-between gap-3 pt-4">
                        <div className="flex items-center rounded-lg border border-gray-300">
                          <button
                            disabled={isUpdating || item.quantity <= 1}
                            onClick={() =>
                              updateQuantity({
                                productId: product._id,
                                quantity: item.quantity - 1,
                              })
                            }
                            className="px-3 py-2 disabled:opacity-30"
                          >
                            −
                          </button>

                          <span className="min-w-8 text-center text-sm">
                            {item.quantity}
                          </span>

                          <button
                            disabled={
                              isUpdating || item.quantity >= product.stock
                            }
                            onClick={() =>
                              updateQuantity({
                                productId: product._id,
                                quantity: item.quantity + 1,
                              })
                            }
                            className="px-3 py-2 disabled:opacity-30"
                          >
                            +
                          </button>
                        </div>

                        <p className="font-semibold text-gray-900">
                          ₹
                          {(product.price * item.quantity).toLocaleString(
                            "en-IN",
                          )}
                        </p>
                      </div>
                    </div>
                  </article>
                );
              })}
            </section>

            <aside className="rounded-2xl border border-gray-200 bg-white p-6 lg:sticky lg:top-6">
              <h2 className="text-lg font-semibold">Order summary</h2>

              <div className="mt-6 flex justify-between text-sm text-gray-600">
                <span>Subtotal</span>
                <span>₹{subtotal.toLocaleString("en-IN")}</span>
              </div>

              <div className="mt-3 flex justify-between text-sm text-gray-600">
                <span>Shipping</span>
                <span>Calculated at checkout</span>
              </div>

              <div className="my-5 border-t border-gray-200" />

              <div className="flex justify-between text-lg font-bold">
                <span>Total</span>
                <span>₹{subtotal.toLocaleString("en-IN")}</span>
              </div>

              <button
                disabled
                className="mt-6 w-full cursor-not-allowed rounded-xl bg-gray-300 px-5 py-3 font-semibold text-gray-600"
              >
                Checkout coming soon
              </button>

              <Link
                to="/products"
                className="mt-4 block text-center text-sm text-gray-600 hover:text-black"
              >
                Continue shopping →
              </Link>
            </aside>
          </div>
        )}
      </div>
    </main>
  );
};
export default Cart;
