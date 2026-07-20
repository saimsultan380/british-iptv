import React from "react";
import Link from "next/link";
import { Home, BookOpen, CreditCard, Store, Mail } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function NotFound() {
  const links = [
    { href: "/", label: "Home", icon: Home },
    { href: "/subscription-plans/", label: "Subscription Plans", icon: CreditCard },
    { href: "/installation-guide/", label: "Installation Guide", icon: BookOpen },
    { href: "/reseller-panel/", label: "Reseller Panel", icon: Store },
    { href: "/contact/", label: "Contact Us", icon: Mail },
  ] as const;

  return (
    <div className="min-h-screen bg-white text-zinc-950 font-sans antialiased flex flex-col">
      {/* Prevent indexing of soft-404 / error document */}
      <meta name="robots" content="noindex, nofollow" />

      <Header />

      <main className="flex-grow flex items-center justify-center py-20 px-6">
        <div className="max-w-lg w-full text-center">
          <div className="mb-10">
            <span className="text-[#D72C2C] text-9xl font-black opacity-10">404</span>
            <h1 className="text-4xl font-black text-[#0B1E5C] -mt-16 mb-4">
              Page Not Found
            </h1>
            <p className="text-[#343341] font-medium leading-relaxed">
              The page you are looking for doesn&apos;t exist or has been moved.
              Use the links below to get back on track.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <Link
              href="/"
              className="w-full sm:w-auto inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-[#D72C2C] px-8 text-sm font-bold text-white shadow-lg shadow-red-500/20 hover:bg-[#c02626] transition-all"
            >
              <Home className="h-4 w-4" />
              <span>Back to Home</span>
            </Link>

            <Link
              href="/contact/"
              className="w-full sm:w-auto inline-flex h-12 items-center justify-center gap-2 rounded-[4px] border border-zinc-200 bg-white px-8 text-sm font-bold text-zinc-900 hover:bg-zinc-50 transition-all"
            >
              <Mail className="h-4 w-4" />
              <span>Contact Support</span>
            </Link>
          </div>

          <nav aria-label="Helpful links" className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
            {links.map(({ href, label, icon: Icon }) => (
              <Link
                key={href}
                href={href}
                className="flex items-center gap-3 rounded-xl border border-zinc-100 bg-zinc-50/80 px-4 py-3 text-sm font-semibold text-[#0B1E5C] hover:border-zinc-200 hover:bg-white transition-colors"
              >
                <Icon className="h-4 w-4 text-[#D72C2C] shrink-0" />
                {label}
              </Link>
            ))}
          </nav>
        </div>
      </main>

      <Footer />
    </div>
  );
}
