import { useState } from "react";

const CategoryForm = ({
  initialData = { name: "", image: "" },
  onSubmit,
  submitLabel = "Save",
  isPending = false,
}) => {
  const [name, setName] = useState(initialData.name || "");
  const [image, setImage] = useState(initialData.image || "");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name: name.trim(), image: image.trim() });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 rounded-2xl border border-[#E5E5E8] bg-white p-6 shadow-sm sm:p-8"
    >
      {/* Category Name */}
      <div className="space-y-2">
        <label
          htmlFor="name"
          className="block text-sm font-semibold text-[#171719]"
        >
          Category Name
          <span className="ml-1 text-red-500">*</span>
        </label>

        <input
          id="name"
          name="name"
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter category name"
          className="w-full rounded-xl border border-[#D1D1D6] bg-white px-4 py-3 text-sm text-[#171719] outline-none transition placeholder:text-[#85858D] hover:border-[#A1A1AA] focus:border-[#171719] focus:ring-2 focus:ring-[#171719]/10 disabled:cursor-not-allowed disabled:bg-[#F5F5F7]"
          disabled={isPending}
        />

        <p className="text-xs text-[#85858D]">
          Choose a clear name for your product category.
        </p>
      </div>

      {/* Image URL */}
      <div className="space-y-2">
        <label
          htmlFor="image"
          className="block text-sm font-semibold text-[#171719]"
        >
          Image URL
          <span className="ml-1 text-xs font-normal text-[#85858D]">
            (Optional)
          </span>
        </label>

        <input
          id="image"
          name="image"
          type="url"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          placeholder="https://example.com/category-image.jpg"
          className="w-full rounded-xl border border-[#D1D1D6] bg-white px-4 py-3 text-sm text-[#171719] outline-none transition placeholder:text-[#85858D] hover:border-[#A1A1AA] focus:border-[#171719] focus:ring-2 focus:ring-[#171719]/10 disabled:cursor-not-allowed disabled:bg-[#F5F5F7]"
          disabled={isPending}
        />

        <p className="text-xs text-[#85858D]">
          Provide a publicly accessible image URL for this category.
        </p>

        {/* Image Preview */}
        {image.trim() && (
          <div className="pt-2">
            <p className="mb-2 text-xs font-medium text-[#66666F]">
              Image Preview
            </p>

            <div className="flex h-36 w-36 items-center justify-center overflow-hidden rounded-xl border border-[#E5E5E8] bg-[#F5F5F7]">
              <img
                src={image.trim()}
                alt="Category preview"
                className="h-full w-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
                onLoad={(e) => {
                  e.currentTarget.style.display = "block";
                }}
              />
            </div>
          </div>
        )}
      </div>

      {/* Submit Button */}
      <div className="border-t border-[#E5E5E8] pt-5">
        <button
          type="submit"
          disabled={isPending || !name.trim()}
          className="inline-flex w-full items-center justify-center rounded-xl bg-[#171719] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#333338] focus:outline-none focus:ring-2 focus:ring-[#171719] focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
        >
          {isPending ? (
            <span className="flex items-center gap-2">
              <svg
                className="h-4 w-4 animate-spin"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                />
              </svg>
              Saving...
            </span>
          ) : (
            submitLabel
          )}
        </button>
      </div>
    </form>
  );
};

export default CategoryForm;
