import { useSearchParams } from "react-router-dom";
import { useProducts } from "../hooks/useProduct";
import { useCategories } from "../hooks/useCategory";
import ProductCard from "../components/product/ProductCard";

const Products = () => {
  const [params, setParams] = useSearchParams();
  const search = params.get("search") || "";
  const category = params.get("category") || "";
  const { data, isPending, isError } = useProducts(false, { search, category });
  const { data: categoryData } = useCategories();
  const products = data?.products || [];
  const categories = categoryData?.categories || [];
  const updateFilter = (key, value) => {
    const next = new URLSearchParams(params);
    if (value) next.set(key, value);
    else next.delete(key);
    setParams(next);
  };
  return (
    <main className="min-h-screen bg-gray-50">
      <section className="border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
          <p className="text-sm font-medium uppercase tracking-widest text-gray-500">
            ShopNow Collection
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-950 sm:text-4xl">
            Find your next favourite
          </h1>
          <p className="mt-3 text-gray-500">
            Explore our latest products, selected for you.
          </p>

          <div className="mt-7 grid gap-3 sm:grid-cols-[1fr_240px]">
            <input
              value={search}
              onChange={(e) => updateFilter("search", e.target.value)}
              placeholder="Search products..."
              className="rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 outline-none focus:border-gray-900"
            />

            <select
              value={category}
              onChange={(e) => updateFilter("category", e.target.value)}
              className="rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 outline-none focus:border-gray-900"
            >
              <option value="">All categories</option>
              {categories.map((item) => (
                <option key={item._id} value={item._id}>
                  {item.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-900">All products</h2>
          <p className="text-sm text-gray-500">{products.length} products</p>
        </div>

        {isPending ? (
          <p className="py-20 text-center text-gray-500">Loading products...</p>
        ) : isError ? (
          <p className="py-20 text-center text-red-600">
            Could not load products. Please try again.
          </p>
        ) : products.length ? (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {products.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-gray-300 bg-white px-6 py-20 text-center">
            <h3 className="text-lg font-semibold">No products found</h3>
            <p className="mt-2 text-sm text-gray-500">
              Try another search or category.
            </p>
            <button
              onClick={() => setParams({})}
              className="mt-5 rounded-lg bg-gray-950 px-5 py-2.5 text-sm text-white"
            >
              Clear filters
            </button>
          </div>
        )}
      </section>
    </main>
  );
};
export default Products;
