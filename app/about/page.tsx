import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Founded in Freetown in 2017 by Simeon Bangura, Music Heals Initiative Sierra Leone uses music for healing, rehabilitation, education and opportunity.",
};
export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#07101d] text-white">

            <SiteHeader />

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
                do more than entertain – it could become a practical tool for
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

      {/* ========================================
          LEADERSHIP — FOUNDER & EXECUTIVE DIRECTOR
      ======================================== */}
      <section
        id="leadership"
        className="relative scroll-mt-24 overflow-hidden border-b border-white/10 bg-[#07101d]"
      >
        <div
          aria-hidden="true"
          className="absolute -left-24 top-24 h-80 w-80 rounded-full bg-amber-500/10 blur-3xl"
        />

        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          {/* Section heading */}
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-amber-400">
              Leadership
            </p>

            <h2 className="font-serif text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
              Meet our Founder &amp; Executive Director.
            </h2>

            <div className="mt-8 h-px w-20 bg-amber-400" />
          </div>

          {/* Profile */}
          <div className="mt-14 grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            {/* Portrait + overview */}
            <div>
              <div className="relative">
                <div
                  aria-hidden="true"
                  className="absolute -inset-4 rounded-[2rem] bg-amber-400/10 blur-2xl"
                />

                <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900 shadow-2xl">
                  <div className="relative aspect-[4/5]">
                    <Image
                      src="/images/team/simeon-bangura-founder.jpg"
                      alt="Simeon Bangura, Founder and Executive Director of Music Heals Initiative Sierra Leone, smiling while playing an acoustic guitar"
                      fill
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                <p className="font-serif text-2xl font-bold text-white">
                  Simeon Bangura
                </p>

                <p className="mt-1 text-sm font-semibold uppercase tracking-[0.18em] text-amber-400">
                  Founder &amp; Executive Director
                </p>

                <dl className="mt-6 space-y-4 text-sm">
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                      Organisation
                    </dt>
                    <dd className="mt-1 text-slate-200">
                      Music Heals Initiative Sierra Leone (MHISL)
                    </dd>
                  </div>

                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                      Location
                    </dt>
                    <dd className="mt-1 text-slate-200">
                      Freetown, Sierra Leone
                    </dd>
                  </div>

                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                      Teaching Music Since
                    </dt>
                    <dd className="mt-1 text-slate-200">2013</dd>
                  </div>
                </dl>
              </div>
            </div>

            {/* Profile copy */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
                Executive Profile
              </h3>

              <div className="mt-5 space-y-6 text-base leading-8 text-slate-300 sm:text-lg">
                <p>
                  <span className="font-semibold text-white">Simeon Bangura</span>{" "}
                  is a Sierra Leonean music educator, social development
                  advocate, and the Founder and Executive Director of Music
                  Heals Initiative Sierra Leone (MHISL).
                </p>

                <p>
                  With music teaching experience dating back to 2013, he founded
                  MHISL in 2017 following volunteer work at Don Bosco Fambul,
                  where he provided music-based psychosocial support to families
                  displaced by the Freetown mudslide disaster.
                </p>

                <p>
                  Today, he leads the organisation&rsquo;s strategic
                  development, using music and the creative arts to advance
                  child protection, youth rehabilitation, music education,
                  psychosocial well-being and social inclusion across Sierra
                  Leone.
                </p>
              </div>

              <blockquote className="mt-10 border-l-2 border-amber-400 bg-white/[0.03] px-6 py-5">
                <p className="font-serif text-xl italic leading-8 text-slate-100">
                  &ldquo;Music is far more than entertainment &ndash; it is a
                  vital bridge to healing, dignity and transformation.&rdquo;
                </p>
                <footer className="mt-3 text-sm font-semibold text-amber-400">
                  &mdash; Simeon Bangura
                </footer>
              </blockquote>
            </div>
          </div>

          {/* Core expertise */}
          <div className="mt-20">
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-400">
              Core Expertise
            </h3>

            <div className="mt-6 grid gap-6 md:grid-cols-3">
              {[
                {
                  title: "Music Education & Pedagogy",
                  body: "Music instruction, music theory and brass education, including preparing students for internationally recognised examinations such as RSL Awards.",
                },
                {
                  title: "Psychosocial Support & Music-Based Care",
                  body: "Applying music-based interventions to support emotional well-being, cognitive engagement and recovery from trauma.",
                },
                {
                  title: "Programme Leadership & Governance",
                  body: "Developing community-based arts programmes, providing strategic leadership and building partnerships that advance social impact through music.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-amber-400/40"
                >
                  <h4 className="font-serif text-xl font-bold text-white">
                    {item.title}
                  </h4>
                  <p className="mt-3 text-sm leading-7 text-slate-300">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Key achievements */}
          <div className="mt-16">
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-400">
              Key Achievements
            </h3>

            <ol className="mt-6 grid gap-6 md:grid-cols-3">
              {[
                {
                  title: "Organisational Development",
                  body: "Founded Music Heals Initiative Sierra Leone in 2017, establishing programmes that bring music and psychosocial support to correctional facilities, care centres and communities.",
                },
                {
                  title: "Partnerships & Resource Mobilisation",
                  body: "Secured musical instruments, digital learning equipment and international partnerships to strengthen programme delivery.",
                },
                {
                  title: "Youth Education & Empowerment",
                  body: "Developed structured music education that equips underserved young people with practical skills and access to internationally recognised music qualifications.",
                },
              ].map((item, index) => (
                <li
                  key={item.title}
                  className="rounded-2xl border border-white/10 bg-[#0a1422] p-6"
                >
                  <p className="font-serif text-3xl font-bold text-amber-400">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h4 className="mt-3 text-lg font-semibold text-white">
                    {item.title}
                  </h4>
                  <p className="mt-3 text-sm leading-7 text-slate-300">
                    {item.body}
                  </p>
                </li>
              ))}
            </ol>
          </div>

          {/* Official contact */}
          <div className="mt-16 rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-400">
              Official Contact
            </h3>

            <dl className="mt-6 grid gap-6 text-sm sm:grid-cols-2 lg:grid-cols-4">
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                  Email
                </dt>
                <dd className="mt-2 break-words">
                  <a
                    href="mailto:info@musichealsinitiative.org"
                    className="text-white transition hover:text-amber-400"
                  >
                    info@musichealsinitiative.org
                  </a>
                </dd>
              </div>

              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                  Telephone
                </dt>
                <dd className="mt-2">
                  <a
                    href="tel:+23276967247"
                    className="text-white transition hover:text-amber-400"
                  >
                    +232 76 967247
                  </a>
                </dd>
              </div>

              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                  Website
                </dt>
                <dd className="mt-2">
                  <a
                    href="https://www.musichealsinitiative.org"
                    className="text-white transition hover:text-amber-400"
                  >
                    www.musichealsinitiative.org
                  </a>
                </dd>
              </div>

              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                  Office Address
                </dt>
                <dd className="mt-2 leading-6 text-slate-200">
                  Collegiate Senior Secondary School Compound, Wilkinson Road,
                  Freetown, Sierra Leone
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}