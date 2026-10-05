import { User, Mail, Phone, Settings, LogOut } from "lucide-react";
import { useAuth } from "../context/AuthProvider";
import { useState } from "react";
import ErrorMessage from "../components/ErrorMessage";
import { useNavigate } from "react-router-dom";

const Account = () => {
  // Replace this with AuthContext later
  const { user, logout01 } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const handleLogout = async (e) => {
    setError("");
    try {
      setLoading(true);
      await logout01();
      navigate("/login");
    } catch (err) {
      setError(err?.response?.data?.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <main className="min-h-screen bg-[#101512] text-[#F3F7F4]">
      <div className="mx-auto max-w-4xl px-6 py-12 sm:px-8 lg:py-16">
        {/* Header */}
        <div className="mb-10">
          <p className="text-sm font-medium text-[#86EFAC]">Account</p>

          <h1 className="mt-2 text-3xl font-bold tracking-tight">My Account</h1>

          <p className="mt-2 text-sm text-[#A8B3AB]">
            Manage your account information.
          </p>
        </div>
        <ErrorMessage />
        <div className="grid gap-6 md:grid-cols-3">
          {/* Profile */}
          <div className="md:col-span-2 rounded-2xl border border-white/5 bg-[#151B17] p-6">
            <div className="flex items-center gap-4 border-b border-white/5 pb-6">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#A7F3D0] to-[#4ADE80] text-lg font-bold text-[#0B120E]">
                {user.name
                  .split(" ")
                  .map((name) => name[0])
                  .join("")
                  .slice(0, 2)}
              </div>

              <div>
                <h2 className="text-lg font-semibold">{user.name}</h2>

                <p className="mt-1 text-sm text-[#737D76]">{user.email}</p>
              </div>
            </div>

            <div className="mt-6 space-y-5">
              <div className="flex items-center gap-4">
                <Mail size={19} className="text-[#86EFAC]" />

                <div>
                  <p className="text-xs text-[#737D76]">Email</p>

                  <p className="mt-1 text-sm">{user.email}</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Phone size={19} className="text-[#86EFAC]" />

                <div>
                  <p className="text-xs text-[#737D76]">Phone</p>

                  <p className="mt-1 text-sm">{user.phone}</p>
                </div>
              </div>
            </div>

            <button
              type="button"
              className="mt-7 flex items-center gap-2 rounded-xl border border-white/10 bg-[#1A211C] px-5 py-3 text-sm font-medium transition hover:border-[#86EFAC]/40 hover:bg-[#222B25]"
            >
              <Settings size={17} />
              Account Settings
            </button>
          </div>

          {/* Actions */}
          <div className="rounded-2xl border border-white/5 bg-[#151B17] p-6">
            <h2 className="font-semibold">Account</h2>

            <div className="mt-5 space-y-3">
              <button
                type="button"
                className="flex w-full items-center gap-3 rounded-xl border border-white/5 bg-[#1A211C] px-4 py-3 text-left text-sm text-[#A8B3AB] transition hover:bg-[#222B25] hover:text-white"
              >
                <User size={17} />
                Profile
              </button>

              <button
                disabled={loading}
                onClick={handleLogout}
                className="flex w-full items-center gap-3 rounded-xl border border-red-500/10 bg-red-500/5 px-4 py-3 text-left text-sm text-red-400 transition hover:bg-red-500/10"
              >
                <LogOut size={17} />
                {loading ? "logging out...." : "Sign Out"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Account;
