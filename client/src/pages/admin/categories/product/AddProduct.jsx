import { useNavigate, Link } from "react-router-dom";
import { useProductMutation } from "../../../../hooks/useProduct";
import ProductForm from "../../../../components/product/ProductForm";

function AddProduct() {
  const navigate = useNavigate();
  const mutation = useProductMutation("createProduct");
  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      <Link to="/admin/products" className="text-sm text-gray-500">
        ← Back to products
      </Link>

      <h1 className="my-6 text-2xl font-bold">Add Product</h1>

      <ProductForm
        buttonText={mutation.isPending ? "Saving..." : "Create Product"}
        onSubmit={async (product) => {
          await mutation.mutateAsync(product);
          navigate("/admin/products");
        }}
      />

      {mutation.isError && (
        <p className="mt-4 text-sm text-red-600">
          {mutation.error.response?.data?.message ||
            "Failed to create product."}
        </p>
      )}
    </div>
  );
}

export default AddProduct;
