import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";
import ErrorMessage from "../components/ErrorMessage";
const Login = () => {
  const { login01 } = useAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      setLoading(true);
      const data = await login01(formData);
      navigate("/");
    } catch (error) {
      setError(error?.response?.data?.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <main className="min-h-screen bg-gray-200 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl overflow-hidden rounded-2xl border border-gray-300 bg-white shadow-sm lg:grid-cols-2">
        {/* Form */}
        <div className="flex items-center justify-center p-6 sm:p-10">
          <div className="w-full max-w-md">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900">Welcome back</h1>

              <p className="mt-2 text-sm text-gray-500">
                Login to your account to continue.
              </p>
            </div>
            <ErrorMessage message={error} />
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Email address
                </label>

                <input
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  type="email"
                  placeholder="you@example.com"
                  className="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 text-sm outline-none placeholder:text-gray-400 focus:border-gray-700 focus:bg-white focus:ring-2 focus:ring-gray-200"
                />
              </div>

              <div>
                <div className="mb-2 flex items-center justify-between">
                  <label className="text-sm font-medium text-gray-700">
                    Password
                  </label>

                  <Link
                    href="/forgot-password"
                    className="text-xs text-gray-500 hover:text-gray-900"
                  >
                    Forgot password?
                  </Link>
                </div>

                <input
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  type="password"
                  placeholder="••••••••"
                  className="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 text-sm outline-none placeholder:text-gray-400 focus:border-gray-700 focus:bg-white focus:ring-2 focus:ring-gray-200"
                />
              </div>

              <label className="flex items-center gap-3">
                <input
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300"
                />

                <span className="text-sm text-gray-600">Remember me</span>
              </label>

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-lg bg-gray-900 px-4 py-3 text-sm font-semibold text-white hover:bg-gray-700"
              >
                {loading ? "Logging in ......." : "Login in"}
              </button>
            </form>

            <p className="mt-6 text-center text-sm text-gray-500">
              Don't have an account?{" "}
              <Link
                href="/register"
                className="font-semibold text-gray-900 hover:underline"
              >
                Create account
              </Link>
            </p>
          </div>
        </div>

        {/* Right */}
        <div className="hidden bg-gray-900 p-10 text-white lg:flex lg:flex-col lg:justify-between">
          <div>
            <span className="rounded-full bg-gray-800 px-3 py-1 text-xs text-gray-300">
              ShopNow
            </span>

            <h2 className="mt-8 max-w-md text-4xl font-bold leading-tight">
              Everything you need in one place.
            </h2>

            <p className="mt-5 max-w-md text-gray-400">
              Sign in to access your account and continue where you left off.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-xl border border-gray-800 bg-gray-950 p-5">
              <p className="text-2xl font-bold">01</p>
              <p className="mt-1 text-sm text-gray-500">Simple</p>
            </div>

            <div className="rounded-xl border border-gray-800 bg-gray-950 p-5">
              <p className="text-2xl font-bold">02</p>
              <p className="mt-1 text-sm text-gray-500">Secure</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;
