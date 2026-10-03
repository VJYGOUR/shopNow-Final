import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";
import Error from "../components/ErrorMessage";
import ErrorMessage from "../components/ErrorMessage";
const Register = () => {
  const { register01 } = useAuth();
  const navigate = useNavigate();
  const [formData, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    setForm({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (formData.password.length < 6) {
      setError("password must be atleast 6 character");
      return;
    }
    try {
      setLoading(true);
      const userData = await register01({
        name: formData.name,
        email: formData.email,
        password: formData.password,
      });
      console.log("user data is", userData);
      navigate("/login");
    } catch (err) {
      setError(
        err?.response?.data?.message || err?.message || "Registeration Failed",
      );
    } finally {
      setLoading(false);
    }
  };
  return (
    <main className="min-h-screen bg-gray-200 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl overflow-hidden rounded-2xl border border-gray-300 bg-white shadow-sm lg:grid-cols-2">
        {/* Left */}
        <div className="hidden bg-gray-900 p-10 text-white lg:flex lg:flex-col lg:justify-between">
          <div>
            <span className="rounded-full bg-gray-800 px-3 py-1 text-xs text-gray-300">
              MYAPP
            </span>

            <h1 className="mt-8 max-w-md text-4xl font-bold leading-tight">
              Create your account and get started.
            </h1>

            <p className="mt-5 max-w-md text-gray-400">
              Join our platform and manage everything from one simple,
              responsive dashboard.
            </p>
          </div>

          <p className="text-sm text-gray-500">Simple. Secure. Responsive.</p>
        </div>

        {/* Form */}
        <div className="flex items-center justify-center p-6 sm:p-10">
          <div className="w-full max-w-md">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900">
                Create account
              </h2>

              <p className="mt-2 text-sm text-gray-500">
                Enter your information to create your account.
              </p>
            </div>
            <ErrorMessage message={error} />
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Full name
                </label>

                <input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  type="text"
                  placeholder="John Doe"
                  required
                  className="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 text-sm outline-none placeholder:text-gray-400 focus:border-gray-700 focus:bg-white focus:ring-2 focus:ring-gray-200"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Email address
                </label>

                <input
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  type="email"
                  placeholder="you@example.com"
                  required
                  className="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 text-sm outline-none placeholder:text-gray-400 focus:border-gray-700 focus:bg-white focus:ring-2 focus:ring-gray-200"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Password
                </label>

                <input
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  type="password"
                  placeholder="••••••••"
                  required
                  className="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 text-sm outline-none placeholder:text-gray-400 focus:border-gray-700 focus:bg-white focus:ring-2 focus:ring-gray-200"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-lg bg-gray-900 px-4 py-3 text-sm font-semibold text-white hover:bg-gray-700"
              >
                {loading ? "creating account..." : "Create Account"}
              </button>
            </form>

            <p className="mt-6 text-center text-sm text-gray-500">
              Already have an account?{" "}
              <Link
                to="/login"
                className="font-semibold text-gray-900 hover:underline"
              >
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Register;
