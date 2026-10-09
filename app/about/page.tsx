import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#07101d] text-white">

      {/* ========================================
          NAVIGATION
      ======================================== */}
      <header className="border-b border-white/10 bg-[#07111f]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">

  <Link href="/" className="flex items-center">
  <Image
    src="/images/logo/music-heals-sierra-leone-logo.jpg"
    alt="Music Heals Sierra Leone"
    width={140}
    height={60}
    className="h-auto w-[120px]"
    priority
  />
  </Link>

          <nav className="hidden items-center gap-4 md:flex">
  <Link
    href="/"
    className="rounded-lg px-3 py-2 text-lg font-medium text-white transition-all duration-300 hover:bg-white/10 hover:text-[#f2b900]"
  >
    Home
  </Link>

  <Link
    href="/about"
    className="rounded-lg px-3 py-2 text-lg font-medium text-[#f2b900] transition-all duration-300"
  >
    About
  </Link>

  <Link
    href="/#programs"
    className="rounded-lg px-3 py-2 text-lg font-medium text-white transition-all duration-300 hover:bg-white/10 hover:text-[#f2b900]"
  >
    Programs
  </Link>

  <Link
    href="/#impact"
    className="rounded-lg px-3 py-2 text-lg font-medium text-white transition-all duration-300 hover:bg-white/10 hover:text-[#f2b900]"
  >
    Impact
  </Link>

  <Link
    href="/gallery"
    className="rounded-lg px-3 py-2 text-lg font-medium text-white transition-all duration-300 hover:bg-white/10 hover:text-[#f2b900]"
  >
    Gallery
  </Link>

  <Link
    href="/#safeguarding"
    className="rounded-lg px-3 py-2 text-lg font-medium text-white transition-all duration-300 hover:bg-white/10 hover:text-[#f2b900]"
  >
    Safeguarding
  </Link>

  <Link
    href="/contact"
    className="rounded-lg px-3 py-2 text-lg font-medium text-white transition-all duration-300 hover:bg-white/10 hover:text-[#f2b900]"
  >
    Contact
  </Link>
</nav>

<Link
  href="/contact"
  className="rounded-full bg-[#f2b900] px-5 py-3 text-sm font-semibold text-[#07111f]"
>
  Get Involved
</Link>
        </div>
      </header>

      {/* ========================================
          ABOUT HERO
      ======================================== */}
      <section className="relative overflow-hidden border-b border-white/10">

        <div
          aria-hidden="true"
          className="absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-amber-500/10 blur-3xl"
        />

        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:px-8 lg:py-28">
          {/* Hero text */}
          <div className="relative z-10">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.28em] text-amber-400">
              About MHISL
            </p>

            <h1 className="max-w-3xl font-serif text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              Music as a pathway to{" "}
              <span className="text-amber-400">
                healing, opportunity and empowerment.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              Founded in Freetown in 2017, Music Heals Initiative Sierra Leone
              (MHISL) uses music, creative education and skills development as
              tools for therapeutic healing, social rehabilitation and
              empowerment.
            </p>

            <p className="mt-4 max-w-2xl text-base leading-8 text-slate-400">
              We create opportunities for vulnerable and underserved people to
              learn, express themselves, develop practical skills and build
              pathways toward stronger futures.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="#our-story"
                className="rounded-full bg-amber-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-300 focus:ring-offset-2 focus:ring-offset-[#07101d]"
              >
                Discover Our Story
              </Link>

              <Link
                href="/contact"
                className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-amber-400 hover:text-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-300 focus:ring-offset-2 focus:ring-offset-[#07101d]"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* Hero image */}
          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute -inset-4 rounded-[2rem] bg-amber-400/10 blur-2xl"
            />

            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900 shadow-2xl">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/images/gallery/gallery-community-brass-group.jpg"
                  alt="Music Heals Initiative Sierra Leone participants gathered with musical instruments"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#07101d]/80 via-transparent to-transparent" />
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-400">
                  Freetown, Sierra Leone
                </p>

                <p className="mt-2 max-w-md text-sm leading-6 text-slate-200">
                  Creating spaces where music can inspire learning, connection,
                  confidence and positive change.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================
          OUR STORY
      ======================================== */}
      <section
        id="our-story"
        className="relative scroll-mt-24 border-b border-white/10 bg-[#0a1422]"
      >
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            {/* Section heading */}
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-amber-400">
                Our Story
              </p>

              <h2 className="font-serif text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
                Where music became a tool for change.
              </h2>

              <div className="mt-8 h-px w-20 bg-amber-400" />

              <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                  Founded
                </p>

                <p className="mt-2 font-serif text-4xl font-bold text-amber-400">
                  2017
                </p>

                <p className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                  Founder & Executive Director
                </p>

                <p className="mt-2 text-lg font-semibold text-white">
                  Simeon Bangura
                </p>

                <p className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                  Established In
                </p>

                <p className="mt-2 text-lg font-semibold text-white">
                  Freetown, Sierra Leone
                </p>
              </div>
            </div>

            {/* Story copy */}
            <div className="space-y-6 text-base leading-8 text-slate-300 sm:text-lg">
              <p>
                Music Heals Initiative Sierra Leone was founded in Freetown in
                2017 by{" "}
                <span className="font-semibold text-white">Simeon Bangura</span>,
                Founder and Executive Director, with a belief that music could
                do more than entertain—it could become a practical tool for
                healing, rehabilitation and opportunity.
              </p>

              <p>
                The organization began with community-based music engagement,
                basic instrument instruction and therapeutic music sessions
                designed to engage street-connected children, vulnerable youth
                and marginalized young people in high-risk communities across
                Freetown.
              </p>

              <p>
                From those early community activities, MHISL gradually developed
                more structured approaches to music education, life-skills
                development and rehabilitation-focused engagement.
              </p>

              <p>
                Today, the organization has evolved into a broader empowerment
                platform that combines music and performing arts with digital
                learning, audio production, life-skills development and
                pathways toward education, employment and social integration.
              </p>

              <blockquote className="mt-10 border-l-2 border-amber-400 bg-white/[0.03] px-6 py-5 font-serif text-xl italic leading-8 text-slate-100">
                Music is not only something to perform. It can create space for
                healing, learning, dignity and opportunity.
              </blockquote>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}