import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { PackageSearch, CreditCard, ArrowRight, Star, Search, ShoppingCart, ChevronDown, Menu, Truck, RotateCcw, Headset } from 'lucide-react';

// Static Data for Categories and Testimonials
const categories = [
  { name: 'Smart Cameras', image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop' },
  { name: 'Desk Lamps', image: 'https://images.unsplash.com/photo-1543512214-318c7553f230?q=80&w=800&auto=format&fit=crop' },
  { name: 'Solar Lights', image: 'https://images.unsplash.com/photo-1494994301519-2e60cd092872?q=80&w=800&auto=format&fit=crop' },
  { name: 'Premium Audio', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=800&auto=format&fit=crop' },
];

const testimonials = [
  { name: 'Usman Ali — Lahore', quote: 'The camera quality is excellent, delivery was super fast, and the order flow was smooth from start to finish.', rating: 5 },
  { name: 'Ayesha Khan — Karachi', quote: 'I ordered a desk lamp and a power bank. Everything arrived as promised and the product quality exceeded expectations.', rating: 5 },
  { name: 'Bilal Ahmed — Islamabad', quote: 'The COD experience feels premium and safe. The product catalog is easy to use and very polished.', rating: 5 },
];

export default function Home(): JSX.Element {
  const cartCount = 2;

  return (
    <main className="min-h-screen bg-slate-900 text-slate-100 antialiased">

      {/* Top Announcement Bar */}
      <div className="bg-gradient-to-r from-purple-600 via-indigo-700 to-indigo-800 text-white text-xs text-center py-2 font-semibold">
        FREE DELIVERY • CASH ON DELIVERY • TRUSTED GADGETS
      </div>

      {/* Sticky Header Navbar */}
      <header className="sticky top-0 z-40 backdrop-blur bg-slate-900/60 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            <Link href="#" className="flex items-center gap-3">
              <div className="w-9 h-9 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold">N</div>
              <div className="leading-tight">
                <div className="text-lg font-extrabold">NextGen</div>
                <div className="text-xs text-slate-400 -mt-1">MARKETPLACE</div>
              </div>
            </Link>

            <nav className="hidden md:flex items-center gap-6 text-sm text-slate-300">
              <Link href="#">Home</Link>
              <Link href="#" className="flex items-center gap-1">Shop <ChevronDown size={14} /></Link>
              <Link href="#">Features</Link>
              <Link href="#">Reviews</Link>
              <Link href="#">Contact</Link>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <label className="relative hidden sm:block">
              <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input aria-label="Search" className="w-64 pl-10 pr-4 py-2 rounded-full bg-slate-800 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-600" placeholder="Search smart gadgets" />
            </label>

            <button aria-label="Cart" className="relative p-2 rounded-full hover:bg-slate-800 transition">
              <ShoppingCart size={22} className="text-slate-200" />
              <span className="absolute -top-1 -right-1 bg-purple-600 text-xs w-5 h-5 rounded-full flex items-center justify-center font-semibold text-white">{cartCount}</span>
            </button>

            <button className="p-2 rounded-md md:hidden hover:bg-slate-800 transition"><Menu className="text-slate-300" /></button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2 bg-slate-800/60 text-indigo-200 text-xs font-medium px-3 py-1 rounded-full">
            <PackageSearch size={14} /> TRUSTED BY 10,000+ SHOPPERS
          </div>

          <h1 className="mt-6 text-4xl md:text-6xl font-extrabold leading-tight">
            Smart tech for a <span className="text-purple-400">smarter life</span>
          </h1>

          <p className="mt-4 text-slate-300 text-lg max-w-xl">Discover premium electronics, smart home essentials, and lifestyle upgrades with nationwide COD and lightning-fast fulfillment.</p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link href="#" className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:opacity-95">Shop Now</Link>
            <Link href="#" className="inline-flex items-center gap-2 border border-slate-700 px-6 py-3 rounded-full text-slate-200 hover:bg-slate-800">Why choose us</Link>
          </div>

          <div className="mt-10 flex gap-8 text-slate-300">
            <div>
              <div className="text-2xl font-bold text-white">30+</div>
              <div className="text-sm">Products</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white">4.9/5</div>
              <div className="text-sm">Rating</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white">COD</div>
              <div className="text-sm">Nationwide</div>
            </div>
          </div>
        </div>

        <div className="rounded-3xl overflow-hidden bg-slate-800/40 p-3 border border-slate-700 shadow-2xl">
          <div className="relative w-full h-64 md:h-80 lg:h-96">
            <Image src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop" alt="Circuit art" fill className="object-cover rounded-2xl" />
          </div>
        </div>
      </section>

      {/* Benefits Bar */}
      <section className="py-6 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-sm text-slate-300">
          <div className="flex items-center gap-3"><Truck className="text-purple-400" /> <div><div className="font-medium">Free delivery</div><div className="text-xs text-slate-500">Above PKR 999</div></div></div>
          <div className="flex items-center gap-3"><CreditCard className="text-purple-400" /> <div><div className="font-medium">Secure checkout</div><div className="text-xs text-slate-500">COD available</div></div></div>
          <div className="flex items-center gap-3"><RotateCcw className="text-purple-400" /> <div><div className="font-medium">Easy returns</div><div className="text-xs text-slate-500">7-day policy</div></div></div>
          <div className="flex items-center gap-3"><Headset className="text-purple-400" /> <div><div className="font-medium">24/7 support</div><div className="text-xs text-slate-500">Always available</div></div></div>
        </div>
      </section>

      {/* Popular Categories */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold">Popular categories</h2>
          <Link href="#" className="text-purple-400 text-sm font-medium flex items-center gap-1">Browse all products <ArrowRight size={16} /></Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <Link key={cat.name} href="#" className="group block rounded-2xl overflow-hidden border border-slate-700 bg-slate-800/30 shadow-lg">
              <div className="relative w-full h-40 md:h-48">
                <Image src={cat.image} alt={cat.name} fill className="object-cover transform group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg text-slate-100">{cat.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Limited Offer Banner */}
      <section className="max-w-7xl mx-auto px-6 py-10">
        <div className="rounded-3xl p-8 md:p-12 grid md:grid-cols-2 items-center gap-6 border border-slate-700 shadow-2xl bg-gradient-to-r from-indigo-900 to-purple-700">
          <div>
            <div className="text-sm text-indigo-200 mb-2">LIMITED OFFER</div>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-3">Smart home bundle with 60% savings</h3>
            <p className="text-slate-200 mb-6">Secure your home with premium motion sensors, lights, and smart automation essentials at an exclusive launch price.</p>
            <Link href="#" className="inline-block bg-white text-purple-700 px-6 py-3 rounded-full font-semibold shadow">Grab the bundle</Link>
          </div>

          <div className="flex items-center justify-center">
            <div className="text-center bg-white/6 p-6 rounded-2xl border border-white/10">
              <div className="text-sm text-slate-300">SAVE UP TO</div>
              <div className="text-5xl font-extrabold text-white my-2">60%</div>
              <div className="text-sm text-slate-300">on smart essentials</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">People love shopping with us</h2>
          <div className="text-sm text-purple-300 mt-2">Real reviews from local shoppers</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
              <div className="flex items-center gap-2 mb-3 text-yellow-400">
                {Array.from({ length: t.rating }).map((_, idx) => <Star key={idx} size={16} className="text-yellow-400" />)}
              </div>
              <p className="text-slate-300 italic text-lg">“{t.quote}”</p>
              <div className="mt-4 text-sm text-slate-400 font-medium border-t border-slate-700 pt-4">{t.name}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800 mt-20 py-10 text-center text-sm text-slate-400">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>© {new Date().getFullYear()} NextGen Marketplace. All rights reserved.</div>
            <div className="flex items-center gap-4">
              <Link href="#" className="text-slate-400 hover:text-slate-200">Privacy Policy</Link>
              <span className="text-slate-600">•</span>
              <Link href="#" className="text-slate-400 hover:text-slate-200">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>

    </main>
  );
}