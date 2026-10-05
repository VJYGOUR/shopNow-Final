import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-white/[0.08] bg-[#101512]">
      {/* Atmospheric Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 -top-24 h-96 w-96 rounded-full bg-[#A7F3D0]/15 blur-[120px]" />

        <div className="absolute -right-24 top-10 h-96 w-96 rounded-full bg-[#86EFAC]/10 blur-[120px]" />

        <div className="absolute bottom-[-180px] left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-[#A7F3D0]/10 blur-[120px]" />
      </div>

      <div className="relative mx-auto grid min-h-[calc(100vh-5rem)] max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 md:py-20 lg:grid-cols-2 lg:gap-8 lg:px-8 lg:py-20">
        {/* LEFT CONTENT */}
        <div className="max-w-2xl">
          {/* Eyebrow */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#A7F3D0]/25 bg-[#A7F3D0]/10 px-4 py-2 text-xs font-semibold text-[#A7F3D0]">
            <Sparkles className="h-3.5 w-3.5" />
            New season is here
          </div>

          {/* Heading */}
          <h1 className="text-4xl font-bold leading-[1.05] tracking-tight text-[#F3F7F4] sm:text-5xl md:text-6xl lg:text-7xl">
            Everything you want.
            <span className="mt-2 block bg-gradient-to-r from-[#D1FAE5] via-[#86EFAC] to-[#4ADE80] bg-clip-text text-transparent">
              All in one place.
            </span>
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-xl text-base leading-7 text-[#A8B3AB] sm:text-lg">
            Discover premium products, fresh collections, and everyday
            essentials — carefully selected for a better shopping experience.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/shop"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#A7F3D0] to-[#4ADE80] px-7 py-3.5 font-semibold text-[#0B120E] shadow-[0_8px_24px_rgba(74,222,128,0.18)] transition-all duration-200 hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A7F3D0] focus-visible:ring-offset-2 focus-visible:ring-offset-[#101512]"
            >
              Shop Now
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>

            <Link
              to="/categories"
              className="inline-flex items-center justify-center rounded-full border border-white/[0.12] bg-[#1A211C] px-7 py-3.5 font-semibold text-[#F3F7F4] transition-all duration-200 hover:border-[#A7F3D0]/30 hover:bg-[#222B25] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A7F3D0]"
            >
              Explore Collections
            </Link>
          </div>

          {/* Trust Points */}
          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-[#A8B3AB]">
            <span className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#86EFAC]" />
              Premium products
            </span>

            <span className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#4ADE80]" />
              Fast delivery
            </span>

            <span className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#A7F3D0]" />
              Secure checkout
            </span>
          </div>
        </div>

        {/* RIGHT VISUAL */}
        <div className="relative mx-auto w-full max-w-2xl lg:max-w-3xl">
          {/* Product Glow */}
          <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#86EFAC]/15 blur-[120px]" />

          {/* Main Card */}
          <div className="relative flex min-h-[500px] items-center justify-center overflow-hidden rounded-[2rem] border border-white/[0.10] bg-gradient-to-br from-[#1C251F] via-[#182019] to-[#141A16] shadow-[0_20px_50px_rgba(0,0,0,0.35)] sm:min-h-[600px] lg:min-h-[680px]">
            {/* Subtle Grid */}
            <div
              className="absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
                backgroundSize: "48px 48px",
              }}
            />

            {/* Center Product Area */}
            <div className="absolute inset-6 flex items-center justify-center rounded-[1.5rem] border border-white/[0.08] bg-[#151B17] sm:inset-10 lg:inset-12">
              {/* LARGE PRODUCT IMAGE */}
              <div className="relative flex h-[440px] w-full items-center justify-center sm:h-[540px] lg:h-[620px]">
                <img
                  src="/images/hero-product.jpg"
                  alt="Featured ShopNow product"
                  className="h-full w-full object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.45)] transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>

            {/* Price Card */}
            <div className="absolute right-4 top-4 rounded-2xl border border-white/[0.10] bg-[#222B25]/90 px-4 py-3 backdrop-blur-xl shadow-[0_8px_24px_rgba(0,0,0,0.25)] sm:right-6 sm:top-6">
              <p className="text-xs text-[#A8B3AB]">Starting from</p>

              <p className="mt-1 text-lg font-bold text-[#F3F7F4]">₹999</p>
            </div>

            {/* Collection Badge */}
            <div className="absolute bottom-4 left-4 rounded-full border border-[#86EFAC]/25 bg-[#86EFAC]/10 px-4 py-2 text-xs font-semibold text-[#A7F3D0] backdrop-blur-xl sm:bottom-6 sm:left-6">
              Curated collection
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
