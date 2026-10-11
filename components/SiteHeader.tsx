"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

// The menu links — edit this list to change the menu on EVERY page
const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Programs", href: "/#programs" },
  { label: "Impact", href: "/#impact" },
  { label: "Gallery", href: "/gallery" },
  { label: "Safeguarding", href: "/#safeguarding" },
  { label: "Contact", href: "/contact" },
];

export default function SiteHeader() {
  const pathname = usePathname(); // which page we're on, e.g. "/about"
  const [menuOpen, setMenuOpen] = useState(false); // is the phone menu open?

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-brand-teal/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        {/* Logo */}
        <Link href="/" onClick={() => setMenuOpen(false)}>
          <Image
            src="/images/logo/music-heals-sierra-leone-logo.jpg"
            alt="Music Heals Initiative Sierra Leone — home"
            width={140}
            height={60}
            className="h-auto w-[110px]"
            preload
          />
        </Link>

        {/* Desktop menu — hidden on small screens */}
        <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={`rounded-lg px-3 py-2 text-base font-medium transition hover:bg-white/10 hover:text-brand-orange-light ${
                  isActive ? "text-brand-orange-light" : "text-white"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          {/* Get Involved button — hidden on the smallest phones */}
          <Link
            href="/contact#get-involved"
            className="hidden rounded-full bg-brand-orange px-5 py-2.5 text-sm font-semibold text-brand-teal-dark transition hover:bg-brand-orange-light sm:inline-block"
          >
            Get Involved
          </Link>

          {/* Menu button (☰ / ✕) — only on small screens */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="rounded-lg p-2 text-white transition hover:bg-white/10 lg:hidden"
          >
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              aria-hidden="true"
            >
              {menuOpen ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Phone menu — only shown when menuOpen is true */}
      {menuOpen && (
        <nav
          id="mobile-menu"
          aria-label="Mobile"
          className="border-t border-white/10 px-6 pb-6 lg:hidden"
        >
          <ul className="mt-4 space-y-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    aria-current={isActive ? "page" : undefined}
                    className={`block rounded-lg px-3 py-3 text-lg font-medium transition hover:bg-white/10 ${
                      isActive ? "text-brand-orange-light" : "text-white"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <Link
            href="/contact#get-involved"
            onClick={() => setMenuOpen(false)}
            className="mt-4 block rounded-full bg-brand-orange px-5 py-3 text-center font-semibold text-brand-teal-dark transition hover:bg-brand-orange-light" 
          >
            Get Involved
          </Link>
        </nav>
      )}
    </header>
  );
}