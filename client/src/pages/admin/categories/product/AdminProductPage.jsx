import { useProductMutation, useProducts } from "../../../../hooks/useProduct";
import { Link } from "react-router-dom";
function AdminProductPage() {
  const { data, isPending, isError } = useProducts(true);
  const deleteMutation = useProductMutation("deleteProduct");
  const products = data?.products || [];
  if (isPending) return <p className="p-8">Loading products...</p>;
  if (isError)
    return <p className="p-8 text-red-600">Failed to load products.</p>;

  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Products</h1>
        <Link
          to="/admin/products/add"
          className="rounded-lg bg-gray-900 px-4 py-2 text-white"
        >
          Add Product
        </Link>
      </div>

      <div className="space-y-3">
        {products.map((product) => (
          <div
            key={product._id}
            className="flex flex-wrap items-center justify-between gap-4 rounded-xl border bg-white p-4"
          >
            <div>
              <h2 className="font-semibold">{product.name}</h2>
              <p className="text-sm text-gray-500">
                ₹{product.price} · Stock: {product.stock}
              </p>
            </div>

            <div className="flex gap-4">
              <Link
                to={`/admin/products/${product._id}/edit`}
                className="text-sm underline"
              >
                Edit
              </Link>
              <button
                onClick={() => {
                  if (window.confirm("Delete this product?")) {
                    deleteMutation.mutate(product._id);
                  }
                }}
                className="text-sm text-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        ))}

        {products.length === 0 && (
          <p className="py-10 text-center text-gray-500">No products yet.</p>
        )}
      </div>
    </div>
  );
}

export default AdminProductPage;
