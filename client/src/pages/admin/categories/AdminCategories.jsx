import { Link } from "react-router-dom";
import { useCategories, useDeleteCategoy } from "../../../hooks/useCategory";

const AdminCategories = () => {
  const { data, isError, isPending, error } = useCategories();
  const {
    mutate: deleteCategory,
    isError: isDeleteError,
    isPending: isDeletePending,
    error: deleteError,
  } = useDeleteCategoy();
  const categories = data?.categories ?? [];
  if (isPending) {
    return (
      <section className="min-h-screen bg-[#F5F5F7] px-4 py-8 text-[#171719] sm:px-6 lg:px-8">
        <p className="text-sm text-[#66666F]">Loading categories...</p>
      </section>
    );
  }

  if (isError) {
    return (
      <section className="min-h-screen bg-[#F5F5F7] px-4 py-8 text-[#171719] sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-xl border border-red-200 bg-white p-6">
          <p className="text-sm text-red-600">Error: {error.message}</p>
        </div>
      </section>
    );
  }
  const handleDelete = (id) => {
    deleteCategory(id, {
      onSuccess: () => {
        console.log("category delete successfully");
      },
    });
  };
  return (
    <section className="min-h-screen bg-[#F5F5F7] px-4 py-8 text-[#171719] sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Page Header */}
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
          <div>
            <p className="text-sm text-[#85858D]">Admin / Catalog</p>

            <h1 className="mt-2 text-2xl font-bold tracking-tight text-[#171719] sm:text-3xl">
              Categories
            </h1>

            <p className="mt-2 text-sm text-[#66666F]">
              Manage your store categories and organize your products.
            </p>
          </div>

          <Link
            to="/admin/create-category/"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#171719] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#333338] focus:outline-none focus:ring-2 focus:ring-[#171719] focus:ring-offset-2"
          >
            <span className="text-lg leading-none">+</span>
            Add Category
          </Link>
        </div>

        {/* Categories Panel */}
        <div className="mt-8 overflow-hidden rounded-2xl border border-[#E5E5E8] bg-white shadow-sm">
          {/* Panel Header */}
          <div className="flex flex-col gap-3 border-b border-[#E5E5E8] px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-6">
            <div>
              <h2 className="text-base font-semibold text-[#171719]">
                All Categories
              </h2>

              <p className="mt-1 text-sm text-[#66666F]">
                View and manage your product catalog.
              </p>
            </div>

            <span className="inline-flex w-fit items-center rounded-full border border-[#E5E5E8] bg-[#F5F5F7] px-3 py-1 text-xs font-medium text-[#55555E]">
              {categories.length}{" "}
              {categories.length === 1 ? "category" : "categories"}
            </span>
          </div>

          {isDeleteError && (
            <div
              role="alert"
              className="border-b border-red-200 bg-red-50 px-5 py-3 text-sm text-red-600"
            >
              {deleteError?.message ||
                "Failed to delete category. Please try again."}
            </div>
          )}

          {/* Empty State */}
          {categories.length === 0 ? (
            <div className="px-6 py-16 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-[#E5E5E8] bg-[#F5F5F7] text-[#66666F]">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="h-7 w-7"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 5.5A1.5 1.5 0 0 1 5.5 4h4L12 7h6.5A1.5 1.5 0 0 1 20 8.5v10a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 18.5z"
                  />
                </svg>
              </div>

              <h3 className="mt-4 font-semibold text-[#171719]">
                No categories yet
              </h3>

              <p className="mx-auto mt-2 max-w-sm text-sm leading-6 text-[#66666F]">
                Create your first category to organize products and make your
                store easier to browse.
              </p>

              <Link
                to="/admin/create-category"
                className="mt-6 inline-flex items-center justify-center rounded-xl bg-[#171719] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#333338] focus:outline-none focus:ring-2 focus:ring-[#171719] focus:ring-offset-2"
              >
                Create Category
              </Link>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full min-w-[640px] text-left">
                <thead className="border-b border-[#E5E5E8] bg-[#F5F5F7]">
                  <tr>
                    <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wider text-[#66666F] sm:px-6">
                      Category
                    </th>

                    <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wider text-[#66666F]">
                      Slug
                    </th>

                    <th className="px-5 py-4 text-right text-xs font-semibold uppercase tracking-wider text-[#66666F] sm:px-6">
                      Actions
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-[#E5E5E8]">
                  {categories.map((category) => (
                    <tr
                      key={category._id}
                      className="transition-colors hover:bg-[#F9F9FA]"
                    >
                      {/* Category */}
                      <td className="px-5 py-4 sm:px-6">
                        <div className="flex items-center gap-3">
                          <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-[#E5E5E8] bg-[#F5F5F7]">
                            {category.image ? (
                              <img
                                src={category.image}
                                alt={category.name}
                                className="h-full w-full object-cover"
                              />
                            ) : (
                              <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                className="h-5 w-5 text-[#85858D]"
                                aria-hidden="true"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M4 5.5A1.5 1.5 0 0 1 5.5 4h4L12 7h6.5A1.5 1.5 0 0 1 20 8.5v10a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 18.5z"
                                />
                              </svg>
                            )}
                          </div>

                          <div className="min-w-0">
                            <p className="font-medium text-[#171719]">
                              {category.name}
                            </p>

                            <p className="mt-1 text-xs text-[#85858D]">
                              Product category
                            </p>
                          </div>
                        </div>
                      </td>

                      {/* Slug */}
                      <td className="px-5 py-4">
                        <span className="inline-flex rounded-lg border border-[#E5E5E8] bg-[#F5F5F7] px-2.5 py-1 font-mono text-xs text-[#55555E]">
                          {category.slug}
                        </span>
                      </td>

                      {/* Actions */}
                      <td className="px-5 py-4 sm:px-6">
                        <div className="flex items-center justify-end gap-4">
                          <Link
                            to={`/admin/categories/${category._id}/edit`}
                            className="text-sm font-semibold text-[#171719] transition hover:text-[#66666F] focus:outline-none focus:underline"
                          >
                            Edit
                          </Link>

                          <button
                            type="button"
                            onClick={() => handleDelete(category._id)}
                            disabled={isDeletePending}
                            className="text-sm font-medium text-red-600 transition hover:text-red-700 disabled:cursor-not-allowed disabled:opacity-50"
                          >
                            {isDeletePending ? "Deleting..." : "Delete"}
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="mt-5 flex flex-col gap-2 text-sm text-[#85858D] sm:flex-row sm:items-center sm:justify-between">
          <p>
            Showing
            <span className="font-medium text-[#171719]">
              {categories.length}
            </span>{" "}
            {categories.length === 1 ? "category" : "categories"}
          </p>

          <p>
            ShopNow <span className="text-[#55555E]">/ Catalog Management</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default AdminCategories;
