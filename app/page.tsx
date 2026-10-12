import Image from "next/image";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
            <SiteHeader />

      {/* Hero */}
            <section className="relative min-h-[calc(100vh-80px)] overflow-hidden">
        <Image
          src="/images/hero/hero-live-music-performance.jpg"
          alt="Music Heals Sierra Leone musicians performing together"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/20" />

        <div className="relative z-10 mx-auto flex min-h-[calc(100vh-80px)] max-w-7xl items-center px-6 py-20 lg:px-8">
          <div className="max-w-3xl text-white">
            <p className="mb-5 text-sm font-bold uppercase tracking-[0.28em] text-orange-300">
              Music. Purpose. Empowerment.
            </p>

            <h1 className="font-serif text-5xl font-bold leading-tight sm:text-6xl lg:text-7xl">
              Healing, educating and empowering through music.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
              Music Heals Sierra Leone uses music and creative arts to support
              healing, education, empowerment and social inclusion across
              vulnerable and underserved communities.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                href="/about"
                className="rounded-full bg-brand-orange px-8 py-4 text-center font-semibold text-brand-teal-dark transition hover:bg-brand-orange-light"
              >
                Discover Our Mission
              </a>

              <a
                href="#programs"
                className="rounded-full border border-white/50 bg-white/10 px-8 py-4 text-center font-semibold text-white backdrop-blur transition hover:bg-white hover:text-slate-900"
              >
                Explore Our Programs
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="px-6 py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-brand-orange-deep">
              About Music Heals Sierra Leone
            </p>

            <h2 className="font-serif text-4xl font-bold leading-tight text-brand-teal md:text-5xl">
              Music as a tool for healing, growth and opportunity.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Music Heals Sierra Leone is a non-governmental organization
              committed to harnessing the transformative power of music and
              creative arts to heal, educate and empower vulnerable
              populations across Sierra Leone.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              Its work promotes trauma recovery, emotional wellbeing, social
              inclusion, life skills, creative expression and hope.
            </p>
          </div>

          <div className="overflow-hidden rounded-[2rem] shadow-xl">
            <Image
              src="/images/stories/story-guitar-music-empowerment.jpg"
              alt="Musician playing guitar"
              width={900}
              height={700}
              className="h-[480px] w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Vision + Mission */}
      <section className="bg-brand-teal px-6 py-24 text-white lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2">
          <article className="rounded-3xl border border-white/10 bg-white/5 p-8 md:p-10">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-orange-300">
              Our Vision
            </p>

            <h3 className="mt-5 text-3xl font-bold">
              Peaceful, inclusive and empowered communities.
            </h3>

            <p className="mt-5 leading-8 text-slate-200">
              A society where vulnerable children, youth and women can heal,
              grow and thrive through the transformative power of music.
            </p>
          </article>

          <article className="rounded-3xl border border-white/10 bg-white/5 p-8 md:p-10">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-orange-300">
              Our Mission
            </p>

            <h3 className="mt-5 text-3xl font-bold">
              Music for healing, education and empowerment.
            </h3>

            <p className="mt-5 leading-8 text-slate-200">
              Using music as a therapeutic, educational and empowerment tool
              through healing, life-skills development, health support and
              social reintegration programs.
            </p>
          </article>
        </div>
      </section>

      {/* Programs */}
      <section id="programs" className="px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 max-w-3xl">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-brand-orange-deep">
              Our Programs
            </p>

            <h2 className="font-serif text-4xl font-bold text-brand-teal md:text-5xl">
              Developing skills, confidence and creativity.
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <article className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
              <Image
                src="/images/programs/program-ensemble-training.jpg"
                alt="Ensemble music training"
                width={800}
                height={550}
                className="h-72 w-full object-cover object-top"
              />
              <div className="p-7">
                <h3 className="text-2xl font-bold text-brand-teal">
                  Ensemble Training
                </h3>
                <p className="mt-3 leading-7 text-slate-600">
                  Collaborative learning that develops musical ability,
                  teamwork and confidence.
                </p>
              </div>
            </article>

            <article className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
              <Image
                src="/images/programs/program-keyboard-training.jpg"
                alt="Keyboard training"
                width={800}
                height={550}
                className="h-72 w-full object-cover object-top"
              />
              <div className="p-7">
                <h3 className="text-2xl font-bold text-brand-teal">
                  Keyboard Training
                </h3>
                <p className="mt-3 leading-7 text-slate-600">
                  Practical instruction that supports discipline, creative
                  expression and musical development.
                </p>
              </div>
            </article>

            <article className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
              <Image
                src="/images/programs/program-drum-training.jpg"
                alt="Drum training"
                width={800}
                height={550}
                className="h-72 w-full object-cover object-top"
              />
              <div className="p-7">
                <h3 className="text-2xl font-bold text-brand-teal">
                  Percussion Training
                </h3>
                <p className="mt-3 leading-7 text-slate-600">
                  Hands-on rhythm and percussion learning designed to build
                  focus, coordination and performance skills.
                </p>
              </div>
            </article>

            <article className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
              <Image
                src="/images/programs/program-trumpet-training.jpg"
                alt="Trumpet training"
                width={800}
                height={550}
                className="h-72 w-full object-cover object-top"
              />
              <div className="p-7">
                <h3 className="text-2xl font-bold text-brand-teal">
                  Instrument Development
                </h3>
                <p className="mt-3 leading-7 text-slate-600">
                  Supporting learners as they develop technique,
                  perseverance and confidence with musical instruments.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Community */}
      <section className="bg-brand-cream px-6 py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center">
          <div className="overflow-hidden rounded-[2rem]">
            <Image
              src="/images/community/community-women-group-session.jpg"
              alt="Community group session"
              width={900}
              height={650}
              className="h-auto w-full object-contain"
            />
          </div>

          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-brand-orange-deep">
              Community Empowerment
            </p>

            <h2 className="font-serif mt-4 text-4xl font-bold text-brand-teal md:text-5xl">
              Reaching beyond the music classroom.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Music Heals Sierra Leone works with vulnerable children,
              at-risk youth, women, inmates and underserved communities,
              combining creative expression with emotional wellbeing,
              inclusion and life-skills development.
            </p>
          </div>
        </div>
      </section>

      {/* Impact */}
      <section id="impact" className="px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-brand-orange-deep">
              Our Impact
            </p>

            <h2 className="font-serif mt-4 text-4xl font-bold text-brand-teal md:text-5xl">
              Learning that leads to visible achievement.
            </h2>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <div className="overflow-hidden rounded-3xl bg-brand-cream p-5">
              <Image
                src="/images/impact/impact-music-examination-certificate.jpg"
                alt="Music examination certificate"
                width={800}
                height={900}
                className="h-[500px] w-full rounded-2xl bg-white object-contain"
              />

              <h3 className="mt-6 text-2xl font-bold text-brand-teal">
                Music Achievement
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Formal musical learning can provide learners with measurable
                milestones and recognition for their progress.
              </p>
            </div>

            <div className="overflow-hidden rounded-3xl bg-brand-cream p-5">
              <Image
                src="/images/impact/impact-community-certificates.jpg"
                alt="Participants displaying certificates"
                width={800}
                height={900}
                className="h-[500px] w-full rounded-2xl bg-white object-contain"
              />

              <h3 className="mt-6 text-2xl font-bold text-brand-teal">
                Growth and Recognition
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Recognition of learning and participation reinforces
                confidence, motivation and a sense of progress.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership */}
      <section className="bg-brand-teal px-6 py-24 text-white lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-orange-300">
              Partnership
            </p>

            <h2 className="font-serif mt-4 text-4xl font-bold md:text-5xl">
              Collaboration expands what music can achieve.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-200">
              Partnerships, supporters, volunteers and collaborating
              organizations can contribute to expanding access to programs,
              skills development and community support.
            </p>
          </div>

          <div className="overflow-hidden rounded-[2rem]">
            <Image
              src="/images/partners/partnership-community-support.jpg"
              alt="Music Heals Sierra Leone partnership engagement"
              width={900}
              height={650}
              className="h-auto w-full object-contain"
            />
          </div>
        </div>
      </section>

      {/* Video Stories */}
      <section className="px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 text-center">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-brand-orange-deep">
              Music in Action
            </p>

            <h2 className="font-serif mt-4 text-4xl font-bold text-brand-teal md:text-5xl">
              See the learning and creativity.
            </h2>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
                        <article className="overflow-hidden rounded-3xl bg-slate-950 shadow-lg">
              <video
                controls
                preload="none"
                poster="/images/gallery/gallery-guitar-musician-portrait.jpg"
                className="aspect-video w-full bg-black object-cover"
              >
                <source
                  src="/videos/music-guitar-performance.mp4"
                  type="video/mp4"
                />
                Your browser does not support video playback.
              </video>

              <div className="p-6 text-white">
                <h3 className="text-xl font-bold">Guitar Performance</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  Creative expression through practical music performance.
                </p>
              </div>
            </article>

            <article className="overflow-hidden rounded-3xl bg-slate-950 shadow-lg">
              <video
                controls
                preload="none"
                poster="/images/programs/program-keyboard-training.jpg"
                className="aspect-video w-full bg-black object-cover"
              >
                <source
                  src="/videos/music-keyboard-practice.mp4"
                  type="video/mp4"
                />
                Your browser does not support video playback.
              </video>

              <div className="p-6 text-white">
                <h3 className="text-xl font-bold">Keyboard Practice</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  Developing skill through focused practice and instruction.
                </p>
              </div>
            </article>

            <article className="overflow-hidden rounded-3xl bg-slate-950 shadow-lg">
              <video
                controls
                preload="none"
                poster="/images/programs/program-trumpet-training.jpg"
                className="aspect-video w-full bg-black object-cover"
              >
                <source
                  src="/videos/music-student-wind-instrument-performance.mp4"
                  type="video/mp4"
                />
                Your browser does not support video playback.
              </video>

              <div className="p-6 text-white">
                <h3 className="text-xl font-bold">Instrument Performance</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  Building confidence through musical practice and
                  performance.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="bg-brand-cream px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-brand-orange-deep">
              Gallery
            </p>

            <h2 className="font-serif mt-4 text-4xl font-bold text-brand-teal md:text-5xl">
              Moments from Music Heals Sierra Leone.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="overflow-hidden rounded-3xl">
              <Image
                src="/images/gallery/gallery-trumpet-practice.jpg"
                alt="Trumpet practice"
                width={900}
                height={670}
                className="h-[420px] w-full object-cover object-top transition duration-500 hover:scale-105"
              />
            </div>

            <div className="overflow-hidden rounded-3xl">
              <Image
                src="/images/community/community-keyboard-session.jpg"
                alt="Community keyboard session"
                width={900}
                height={650}
                className="h-[420px] w-full object-cover transition duration-500 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-brand-orange-deep">
            Our Core Values
          </p>

          <h2 className="font-serif mt-4 text-4xl font-bold text-brand-teal md:text-5xl">
            Principles that guide our work.
          </h2>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {[
              "Transparency",
              "Mutual Respect",
              "Honesty",
              "Accountability",
              "Collective Responsibility",
            ].map((value) => (
              <div
                key={value}
                className="rounded-2xl border border-slate-200 bg-white p-6 font-semibold text-brand-teal shadow-sm"
              >
                {value}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safeguarding */}
      <section id="safeguarding" className="bg-orange-50 px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-brand-orange-deep">
            Safeguarding
          </p>

          <h2 className="font-serif mt-4 text-4xl font-bold text-brand-teal md:text-5xl">
            Safety, dignity and respect come first.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Music Heals Sierra Leone places the welfare of children and young
            people at the centre of its work and maintains safeguarding
            procedures intended to protect beneficiaries from abuse,
            exploitation, neglect and harm.
          </p>
        </div>
      </section>

      {/* Get Involved */}
      <section id="support" className="px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-6xl rounded-[2rem] bg-brand-teal px-8 py-16 text-center text-white md:px-16">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-orange-300">
            Get Involved
          </p>

          <h2 className="font-serif mx-auto mt-4 max-w-3xl text-4xl font-bold md:text-5xl">
            Help music create healing, opportunity and hope.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-slate-200">
            Supporters, volunteers and partners can help Music Heals Sierra
            Leone expand access to meaningful music and empowerment programs.
          </p>

          
            <a href="/contact"
                        className="mt-8 inline-block rounded-full bg-brand-orange px-8 py-4 font-semibold text-brand-teal-dark transition hover:bg-brand-orange-light"
          >
            Contact Our Team
          </a>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="border-t border-slate-200 px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-brand-orange-deep">
            Contact
          </p>

          <h2 className="font-serif mt-4 text-4xl font-bold text-brand-teal md:text-5xl">
            Connect with Music Heals Sierra Leone.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-slate-600">
            For partnerships, volunteering, program enquiries, support or
            general information, contact the Music Heals Sierra Leone team.
          </p>
        </div>
      </section>

          <SiteFooter />
    </main>
  );
}