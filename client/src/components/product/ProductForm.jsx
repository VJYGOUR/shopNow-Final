import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getCategories } from "../../services/categoryService";

const ProductForm = ({ initialData, onSubmit, buttonText }) => {
  const { data } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
  });

  const [form, setForm] = useState({
    name: "",
    description: "",
    sku: "",
    price: "",
    stock: "0",
    category: "",
    image: "",
  });

  useEffect(() => {
    if (initialData) {
      setForm({
        name: initialData.name || "",
        description: initialData.description || "",
        sku: initialData.sku || "",
        price: initialData.price ?? "",
        stock: initialData.stock ?? 0,
        category: initialData.category?._id || initialData.category || "",
        image: initialData.images?.[0] || "",
      });
    }
  }, [initialData]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit({
      ...form,
      price: Number(form.price),
      stock: Number(form.stock),
      images: form.image ? [form.image] : [],
    });
  };

  const inputClass = "w-full rounded-lg border border-gray-300 p-3";

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl space-y-4">
      {[
        ["name", "Product name"],
        ["sku", "SKU"],
        ["price", "Price"],
        ["stock", "Stock"],
        ["image", "Image URL"],
      ].map(([name, label]) => (
        <input
          key={name}
          name={name}
          type={["price", "stock"].includes(name) ? "number" : "text"}
          min={["price", "stock"].includes(name) ? 0 : undefined}
          step={name === "price" ? "0.01" : "1"}
          required={name !== "image"}
          placeholder={label}
          value={form[name]}
          onChange={handleChange}
          className={inputClass}
        />
      ))}

      <textarea
        name="description"
        required
        placeholder="Product description"
        value={form.description}
        onChange={handleChange}
        className={inputClass}
      />

      <select
        name="category"
        required
        value={form.category}
        onChange={handleChange}
        className={inputClass}
      >
        <option value="">Select category</option>
        {(data?.categories || []).map((category) => (
          <option key={category._id} value={category._id}>
            {category.name}
          </option>
        ))}
      </select>

      <button className="rounded-lg bg-gray-900 px-5 py-3 text-white">
        {buttonText}
      </button>
    </form>
  );
};

export default ProductForm;
