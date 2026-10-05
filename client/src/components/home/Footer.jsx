import { ArrowRight, Mail, MapPin } from "lucide-react";

import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-white/5 bg-[#0B0F0C] text-[#F3F7F4]">
      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link
              to="/"
              className="inline-block text-2xl font-bold tracking-tight"
            >
              Shop<span className="text-[#86EFAC]">Now</span>
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-7 text-[#A8B3AB]">
              Discover products you'll love, with a simple shopping experience
              built around quality, convenience, and value.
            </p>

            {/* Social Links */}
            <div className="mt-7 flex items-center gap-3">
              <a
                href="#"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-[#151B17] text-[#A8B3AB] transition hover:border-[#86EFAC]/40 hover:bg-[#1A211C] hover:text-[#86EFAC]"
              >
                <FaFacebookF size={15} />
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-[#151B17] text-[#A8B3AB] transition hover:border-[#86EFAC]/40 hover:bg-[#1A211C] hover:text-[#86EFAC]"
              >
                <FaInstagram size={16} />
              </a>

              <a
                href="#"
                aria-label="X"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-[#151B17] text-[#A8B3AB] transition hover:border-[#86EFAC]/40 hover:bg-[#1A211C] hover:text-[#86EFAC]"
              >
                <FaXTwitter size={15} />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Shop
            </h3>

            <ul className="mt-5 space-y-3">
              <li>
                <a
                  href="/products"
                  className="text-sm text-[#A8B3AB] transition hover:text-[#86EFAC]"
                >
                  All Products
                </a>
              </li>

              <li>
                <Link
                  to="/categories"
                  className="text-sm text-[#A8B3AB] transition hover:text-[#86EFAC]"
                >
                  Categories
                </Link>
              </li>

              <li>
                <Link
                  to="/products?featured=true"
                  className="text-sm text-[#A8B3AB] transition hover:text-[#86EFAC]"
                >
                  Featured
                </Link>
              </li>

              <li>
                <Link
                  to="/products?new=true"
                  className="text-sm text-[#A8B3AB] transition hover:text-[#86EFAC]"
                >
                  New Arrivals
                </Link>
              </li>
            </ul>
          </div>

          {/* Account */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Account
            </h3>

            <ul className="mt-5 space-y-3">
              <li>
                <Link
                  to="/account"
                  className="text-sm text-[#A8B3AB] transition hover:text-[#86EFAC]"
                >
                  My Account
                </Link>
              </li>

              <li>
                <Link
                  to="/cart"
                  className="text-sm text-[#A8B3AB] transition hover:text-[#86EFAC]"
                >
                  Cart
                </Link>
              </li>

              <li>
                <Link
                  to="/orders"
                  className="text-sm text-[#A8B3AB] transition hover:text-[#86EFAC]"
                >
                  My Orders
                </Link>
              </li>

              <li>
                <Link
                  to="/login"
                  className="text-sm text-[#A8B3AB] transition hover:text-[#86EFAC]"
                >
                  Login
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Stay Updated
            </h3>

            <p className="mt-5 text-sm leading-6 text-[#A8B3AB]">
              Subscribe for new products, special offers, and the latest updates
              from ShopNow.
            </p>

            <form className="mt-5">
              <div className="flex items-center overflow-hidden rounded-xl border border-white/10 bg-[#151B17] focus-within:border-[#86EFAC]/50">
                <Mail size={18} className="ml-4 shrink-0 text-[#737D76]" />

                <input
                  type="email"
                  placeholder="Your email"
                  className="min-w-0 flex-1 bg-transparent px-3 py-3.5 text-sm text-white outline-none placeholder:text-[#737D76]"
                />

                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="mr-1.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-r from-[#A7F3D0] to-[#4ADE80] text-[#0B120E] transition hover:scale-105"
                >
                  <ArrowRight size={18} />
                </button>
              </div>
            </form>

            {/* Location */}
            <div className="mt-6 flex items-start gap-3">
              <MapPin size={18} className="mt-0.5 shrink-0 text-[#86EFAC]" />

              <p className="text-sm leading-6 text-[#A8B3AB]">
                Online shopping, delivered wherever you are.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-6 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-12">
          <p className="text-sm text-[#737D76]">
            © {new Date().getFullYear()} ShopNow. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <a
              href="/privacy"
              className="text-sm text-[#737D76] transition hover:text-[#86EFAC]"
            >
              Privacy
            </a>

            <a
              href="/terms"
              className="text-sm text-[#737D76] transition hover:text-[#86EFAC]"
            >
              Terms
            </a>

            <a
              href="/contact"
              className="text-sm text-[#737D76] transition hover:text-[#86EFAC]"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
