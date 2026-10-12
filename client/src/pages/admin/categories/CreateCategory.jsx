import { Link, useNavigate } from "react-router-dom";
import CategoryForm from "../../../components/categories/CategoryForm";
import { useCreateCategory } from "../../../hooks/useCategory";

const CreateCategory = () => {
  const navigate = useNavigate();

  const {
    mutate: createCategory,
    isPending,
    isError,
    error,
  } = useCreateCategory();

  const handleCreate = (categoryData) => {
    createCategory(categoryData, {
      onSuccess: () => {
        navigate("/admin/categories");
      },
    });
  };

  return (
    <section className="min-h-screen bg-[#F5F5F7] px-4 py-8 text-[#171719] sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        {/* Breadcrumb */}
        <div className="mb-6 flex items-center gap-2 text-sm">
          <Link
            to="/admin/categories"
            className="text-[#66666F] transition hover:text-[#171719]"
          >
            Categories
          </Link>

          <span className="text-[#B5B5BC]">/</span>

          <span className="font-medium text-[#171719]">Create Category</span>
        </div>

        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold tracking-tight text-[#171719] sm:text-3xl">
            Create Category
          </h1>

          <p className="mt-2 text-sm leading-6 text-[#66666F]">
            Add a new category to organize products in your ShopNow store.
          </p>
        </div>

        {/* Error Message */}
        {isError && (
          <div
            role="alert"
            className="mb-6 rounded-xl border border-red-200 bg-red-50 px-4 py-3"
          >
            <p className="text-sm font-medium text-red-700">
              {error?.response?.data?.message ||
                error?.message ||
                "Failed to create category. Please try again."}
            </p>
          </div>
        )}

        {/* Form */}
        <div className="rounded-2xl border border-[#E5E5E8] bg-white p-5 shadow-sm sm:p-8">
          <div className="mb-6 border-b border-[#E5E5E8] pb-5">
            <h2 className="text-base font-semibold text-[#171719]">
              Category Information
            </h2>

            <p className="mt-1 text-sm text-[#85858D]">
              Enter the category details below.
            </p>
          </div>

          <CategoryForm
            onSubmit={handleCreate}
            submitLabel="Create Category"
            isPending={isPending}
          />

          {/* Cancel Action */}
          <div className="mt-4">
            <button
              type="button"
              disabled={isPending}
              onClick={() => navigate("/admin/categories")}
              className="rounded-lg px-4 py-2 text-sm font-medium text-[#66666F] transition hover:bg-[#F5F5F7] hover:text-[#171719] disabled:cursor-not-allowed disabled:opacity-50"
            >
              Cancel
            </button>
          </div>
        </div>

        {/* Footer */}
        <p className="mt-5 text-xs text-[#85858D]">
          ShopNow / Catalog Management
        </p>
      </div>
    </section>
  );
};

export default CreateCategory;
