import Image from "next/image";
import Link from "next/link";

// Quick links shown in the footer
const exploreLinks = [
  { label: "About Us", href: "/about" },
  { label: "Programs", href: "/#programs" },
  { label: "Impact", href: "/#impact" },
  { label: "Gallery", href: "/gallery" },
  { label: "Safeguarding", href: "/#safeguarding" },
  { label: "Contact", href: "/contact" },
];

export default function SiteFooter() {
  const year = new Date().getFullYear(); // updates automatically every year

  return (
    <footer className="border-t border-white/10 bg-[#050b14] text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        {/* Column 1: Logo and short description (takes 2 columns on large screens) */}
        <div className="sm:col-span-2">
          <Link href="/">
            <Image
              src="/images/logo/music-heals-sierra-leone-logo.jpg"
              alt="Music Heals Initiative Sierra Leone — home"
              width={140}
              height={60}
              className="h-auto w-[110px]"
            />
          </Link>

          <p className="mt-5 max-w-sm text-sm leading-7 text-slate-400">
            Using music and the creative arts for healing, education,
            empowerment and social inclusion across Sierra Leone since 2017.
          </p>

          <p className="mt-4 text-xs font-semibold uppercase tracking-[0.28em] text-[#f2b900]">
            Music. Purpose. Empowerment.
          </p>
        </div>

        {/* Column 2: Quick links */}
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
            Explore
          </h2>

          <ul className="mt-5 space-y-3 text-sm">
            {exploreLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-slate-200 transition hover:text-[#f2b900]"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Contact details and social media */}
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
            Get in Touch
          </h2>

          <ul className="mt-5 space-y-4 text-sm text-slate-200">
            <li>
              <a
                href="mailto:musichealsinitiativesierraleon@gmail.com"
                className="break-all transition hover:text-[#f2b900]"
              >
                musichealsinitiativesierraleon@gmail.com
              </a>
            </li>
            <li>
              <a href="tel:+23276967247" className="transition hover:text-[#f2b900]">
                +232 76 967247
              </a>
            </li>
            <li className="leading-6 text-slate-400">
              Collegiate Senior Secondary School Compound, Wilkinson Road,
              Freetown, Sierra Leone
            </li>
          </ul>

          <div className="mt-6 flex gap-5 text-sm font-semibold">
            <a
              href="https://www.facebook.com/share/1FMoGGTWmq/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-200 transition hover:text-[#f2b900]"
            >
              Facebook
            </a>
            <a
              href="https://www.instagram.com/musicheals0000"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-200 transition hover:text-[#f2b900]"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar: copyright */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-6 text-xs text-slate-500 sm:flex-row sm:justify-between lg:px-8">
          <p>&copy; {year} Music Heals Initiative Sierra Leone. All rights reserved.</p>
          <p>Freetown, Sierra Leone</p>
        </div>
      </div>
    </footer>
  );
}