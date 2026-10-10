"use client";

import Image from "next/image";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { useEffect, useMemo, useState } from "react";

type Category =
  | "All"
  | "Programs"
  | "Community"
  | "Achievements"
  | "Performances";

type GalleryImage = {
  id: number;
  type: "image";
  src: string;
  alt: string;
  title: string;
  date: string;
  credit: string;
  caption: string;
  category: Exclude<Category, "All">;
  objectPosition?: string;
  aspectClass?: string;
  featured?: boolean;
};

type GalleryVideo = {
  id: number;
  type: "video";
  src: string;
  title: string;
  date: string;
  credit: string;
  caption: string;
  category: Exclude<Category, "All">;
  aspectClass?: string;
  featured?: boolean;
};

type GalleryItem = GalleryImage | GalleryVideo;

const categories: Category[] = [
  "All",
  "Programs",
  "Community",
  "Achievements",
  "Performances",
];

/*
  IMPORTANT:
  Replace "Date to be confirmed" and "Credit to be confirmed"
  once MHSL provides the official metadata.
*/
const galleryItems: GalleryItem[] = [
  {
    id: 1,
    type: "video",
    src: "/videos/music-student-wind-instrument-performance.mp4",
    title: "Wind Instrument Performance",
    date: "Date to be confirmed",
    credit: "Credit to be confirmed",
    caption:
      "Young musicians bringing their training together through live performance.",
    category: "Performances",
    featured: true,
  },

  {
    id: 2,
    type: "image",
    src: "/images/gallery/gallery-trumpet-training-group.jpg",
    alt: "Three young musicians practicing trumpet together",
    title: "Trumpet Training Session",
    date: "Date to be confirmed",
    credit: "Credit to be confirmed",
    caption:
      "Focused practice builds confidence, discipline and musical expression.",
    category: "Programs",
    objectPosition: "center",
  },

  {
    id: 3,
    type: "image",
    src: "/images/gallery/gallery-children-brass-training.jpg",
    alt: "Children learning brass instruments during a music lesson",
    title: "Young Brass Musicians",
    date: "Date to be confirmed",
    credit: "Credit to be confirmed",
    caption:
      "Introducing young learners to instruments, teamwork and the joy of music.",
    category: "Programs",
    objectPosition: "center",
  },

  {
    id: 4,
    type: "image",
    src: "/images/gallery/gallery-guitar-student-portrait.jpg",
    alt: "Smiling young musician holding a guitar",
    title: "Learning Through Guitar",
    date: "Date to be confirmed",
    credit: "Credit to be confirmed",
    caption:
      "A musical journey can begin with one instrument and an opportunity to learn.",
    category: "Programs",
    aspectClass: "aspect-[4/3]",
    objectPosition: "center 30%",
},

  {
    id: 5,
    type: "image",
    src: "/images/gallery/gallery-children-rhythm-session.jpg",
    alt: "Children participating in a group rhythm and percussion activity",
    title: "Rhythm and Creative Play",
    date: "Date to be confirmed",
    credit: "Credit to be confirmed",
    caption:
      "Music becomes a shared language through rhythm, play and participation.",
    category: "Community",
    objectPosition: "center",
  },

  {
  id: 16,
  type: "image",
  src: "/images/gallery/gallery-early-music-learning.jpg",
  alt: "Young child participating in an early music learning activity with a recorder",
  title: "Early Music Discovery",
  date: "Date to be confirmed",
  credit: "Credit to be confirmed",
  caption:
    "Early exposure to music creates space for curiosity, expression and joyful learning.",
  category: "Programs",
  aspectClass: "aspect-[3/4]",
  objectPosition: "center 20%",
},
  {
  id: 6,
  type: "image",
  src: "/images/gallery/gallery-drum-training-student.jpg",
  alt: "Young musician practicing on a drum kit",
  title: "Drum Training",
  date: "Date to be confirmed",
  credit: "Credit to be confirmed",
  caption:
    "Developing rhythm, concentration and confidence behind the drum kit.",
  category: "Programs",
  aspectClass: "aspect-[3/4]",
  objectPosition: "top",
},

  {
    id: 7,
    type: "image",
    src: "/images/gallery/gallery-woman-guitar-training.jpg",
    alt: "Woman practicing acoustic guitar",
    title: "Guitar Learning",
    date: "Date to be confirmed",
    credit: "Credit to be confirmed",
    caption:
      "Creating space for learners of different ages to develop musical skills.",
    category: "Programs",
    aspectClass: "aspect-[4/3]",
    objectPosition: "center 35%",
},

  {
  id: 8,
  type: "image",
  src: "/images/gallery/gallery-brass-instrument-training.jpg",
  alt: "Young musician holding a large brass instrument during practice",
  title: "Brass Instrument Training",
  date: "Date to be confirmed",
  credit: "Credit to be confirmed",
  caption:
    "Learning complex instruments through patience, guidance and consistent practice.",
  category: "Programs",
  aspectClass: "aspect-[3/4]",
  objectPosition: "top",
},

  {
    id: 9,
    type: "image",
    src: "/images/gallery/gallery-community-brass-group.jpg",
    alt: "Music learners and community members gathered with brass instruments",
    title: "Music and Community",
    date: "Date to be confirmed",
    credit: "Credit to be confirmed",
    caption:
      "Music creates opportunities for connection across generations and communities.",
    category: "Community",
    objectPosition: "center",
  },

  {
    id: 10,
    type: "image",
    src: "/images/gallery/gallery-student-certificates.jpg",
    alt: "Music learners gathered while holding certificates",
    title: "Celebrating Achievement",
    date: "Date to be confirmed",
    credit: "Credit to be confirmed",
    caption:
      "Recognizing commitment, progress and the milestones reached through learning.",
    category: "Achievements",
    aspectClass: "aspect-video",
    objectPosition: "center",
  },

  {
    id: 11,
    type: "image",
    src: "/images/gallery/gallery-child-guitar-training.jpg",
    alt: "Young learner practicing acoustic guitar",
    title: "Guitar Practice",
    date: "Date to be confirmed",
    credit: "Credit to be confirmed",
    caption:
      "Learning one chord at a time and discovering the confidence to keep growing.",
    category: "Programs",
    objectPosition: "center",
  },

  {
  id: 12,
  type: "image",
  src: "/images/gallery/gallery-music-instruments-room.jpg",
  alt: "Guitars and music equipment arranged inside a Music Heals learning room",
  title: "Our Learning Environment",
  date: "Date to be confirmed",
  credit: "Credit to be confirmed",
  caption:
    "Instruments and learning spaces make continued music education possible.",
  category: "Community",
  aspectClass: "aspect-[3/4]",
  objectPosition: "center",
},

  {
    id: 13,
    type: "image",
    src: "/images/gallery/gallery-guitar-musician-portrait.jpg",
    alt: "Musician seated outdoors holding an acoustic guitar",
    title: "Music and Expression",
    date: "Date to be confirmed",
    credit: "Credit to be confirmed",
    caption:
      "Creative expression connects personal experience with the power of music.",
    category: "Performances",
    objectPosition: "center",
  },

  {
    id: 14,
    type: "video",
    src: "/videos/music-guitar-performance.mp4",
    title: "Guitar Performance",
    date: "Date to be confirmed",
    credit: "Credit to be confirmed",
    caption:
      "A moment of performance shaped by practice, creativity and musical expression.",
    category: "Performances",
  },

  {
    id: 15,
    type: "video",
    src: "/videos/music-keyboard-practice.mp4",
    title: "Keyboard Practice",
    date: "Date to be confirmed",
    credit: "Credit to be confirmed",
    caption:
      "Developing technique and confidence through focused keyboard practice.",
    category: "Programs",
  },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] =
    useState<Category>("All");

  const [selectedIndex, setSelectedIndex] =
    useState<number | null>(null);

  const filteredItems = useMemo(() => {
    if (activeCategory === "All") {
      return galleryItems;
    }

    return galleryItems.filter(
      (item) => item.category === activeCategory
    );
  }, [activeCategory]);

  const selectedItem =
    selectedIndex !== null
      ? filteredItems[selectedIndex]
      : null;

  function openLightbox(index: number) {
    setSelectedIndex(index);
  }

  function closeLightbox() {
    setSelectedIndex(null);
  }

  function showPrevious() {
    if (selectedIndex === null) return;

    setSelectedIndex(
      selectedIndex === 0
        ? filteredItems.length - 1
        : selectedIndex - 1
    );
  }

  function showNext() {
    if (selectedIndex === null) return;

    setSelectedIndex(
      selectedIndex === filteredItems.length - 1
        ? 0
        : selectedIndex + 1
    );
  }

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (selectedIndex === null) return;

      if (event.key === "Escape") {
        closeLightbox();
      }

      if (event.key === "ArrowLeft") {
        showPrevious();
      }

      if (event.key === "ArrowRight") {
        showNext();
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });

  useEffect(() => {
    const elements =
      document.querySelectorAll(".gallery-reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(
              "opacity-100",
              "translate-y-0"
            );

            entry.target.classList.remove(
              "opacity-0",
              "translate-y-6"
            );

            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    elements.forEach((element) =>
      observer.observe(element)
    );

    return () => observer.disconnect();
  }, [activeCategory]);

  return (
    <main className="min-h-screen bg-[#101820] text-white">

            <SiteHeader />

      {/* ========================================
          Hero
      ======================================== */}

      <section className="relative overflow-hidden px-6 py-24 lg:px-8 lg:py-32">

        <div
          className="absolute inset-0 opacity-[0.07]"
          aria-hidden="true"
        >
          <div className="absolute left-[15%] top-10 h-72 w-72 rounded-full bg-[#C9A84C] blur-3xl" />
          <div className="absolute bottom-0 right-[10%] h-96 w-96 rounded-full bg-[#8B2635] blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-5xl text-center">

          <p className="text-sm font-bold uppercase tracking-[0.35em] text-[#C9A84C]">
            Gallery
          </p>

          <h1 className="mt-6 font-serif text-5xl font-bold leading-tight md:text-7xl">
            Our Story in Pictures
          </h1>

          <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-slate-300 md:text-xl">
            We capture the energy of live performance and the
            impact of music education. Explore our journey below.
          </p>

        </div>
      </section>

      {/* ========================================
          Filters
      ======================================== */}

      <section className="border-y border-white/10 bg-[#162331] px-6 py-7">

        <div
          className="mx-auto flex max-w-7xl flex-wrap justify-center gap-3"
          role="group"
          aria-label="Filter gallery"
        >

          {categories.map((category) => {
            const active =
              activeCategory === category;

            return (
              <button
                key={category}
                type="button"
                aria-pressed={active}
                aria-label={`Show ${category} gallery items`}
                onClick={() => {
                  setActiveCategory(category);
                  setSelectedIndex(null);
                }}
                className={`rounded-full px-5 py-2.5 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-[#C9A84C] focus:ring-offset-2 focus:ring-offset-[#162331] ${
                  active
                    ? "bg-[#C9A84C] text-[#101820]"
                    : "border border-white/20 text-slate-200 hover:border-[#C9A84C] hover:text-[#C9A84C]"
                }`}
              >
                {category}
              </button>
            );
          })}

        </div>
      </section>

      {/* ========================================
          Gallery Grid
      ======================================== */}

      <section className="px-6 py-20 lg:px-8">

        <div className="mx-auto max-w-7xl">

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">

            {filteredItems.map((item, index) => (

              <article
                key={item.id}
                className={`gallery-reveal translate-y-6 overflow-hidden rounded-3xl border border-white/10 bg-[#162331] opacity-0 shadow-xl transition duration-700 ${
                  item.featured
                    ? "md:col-span-2 lg:col-span-2"
                    : ""
                }`}
              >

                <button
                  type="button"
                  onClick={() => openLightbox(index)}
                  aria-label={`Open ${item.title} in gallery viewer`}
                  className="group block w-full text-left focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#C9A84C]"
                >

                <div
                 className={`relative overflow-hidden bg-black ${
                  item.featured
                    ? "aspect-video"
                    : item.aspectClass ?? "aspect-[4/3]"
                    }`}
                  >

                    {item.type === "image" ? (
                      <Image
                        src={item.src}
                        alt={item.alt}
                        fill
                        loading="lazy"
                        sizes={
                          item.featured
                            ? "(max-width: 768px) 100vw, 66vw"
                            : "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        }
                        className="object-cover transition duration-700 group-hover:scale-[1.04]"
                        style={{
                          objectPosition:
                            item.objectPosition ??
                            "center",
                        }}
                      />
                    ) : (
                      <video
                        src={item.src}
                        preload="metadata"
                        muted
                        playsInline
                        aria-label={item.title}
                        className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                      />
                    )}

                    {/* Caption overlay */}

                    <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-100 transition duration-300 md:opacity-0 md:group-hover:opacity-100">

                      <div className="p-6">

                        <p className="max-w-md text-sm leading-6 text-white">
                          {item.caption}
                        </p>

                        <span className="mt-3 inline-block text-xs font-bold uppercase tracking-[0.2em] text-[#C9A84C]">
                          View Full Media
                        </span>

                      </div>

                    </div>

                    {item.type === "video" && (

                      <div
                        aria-hidden="true"
                        className="absolute left-5 top-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#C9A84C] text-lg text-[#101820] shadow-lg"
                      >
                        ▶
                      </div>

                    )}

                    {item.featured && (
                      <div className="absolute right-5 top-5 rounded-full bg-[#8B2635] px-4 py-2 text-xs font-bold uppercase tracking-wider text-white">
                        Featured
                      </div>
                    )}

                  </div>

                </button>

                {/* Metadata */}

                <div className="p-6">

                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#C9A84C]">
                    {item.category}
                  </p>

                  <h2 className="mt-3 font-serif text-2xl font-semibold">
                    {item.title}
                  </h2>

                  <div className="mt-4 space-y-1 text-sm text-slate-400">

                    <p>{item.date}</p>

                    <p>
                      Photographer / Videographer:{" "}
                      {item.credit}
                    </p>

                  </div>

                </div>

              </article>

            ))}

          </div>

        </div>
      </section>

      {/* ========================================
          Bottom CTA
      ======================================== */}

      <section className="px-6 pb-24 pt-10 lg:px-8">

        <div className="mx-auto max-w-5xl overflow-hidden rounded-[2rem] border border-[#C9A84C]/30 bg-[#1A2B3C] px-8 py-14 text-center md:px-14 md:py-16">

          <p className="text-sm font-bold uppercase tracking-[0.28em] text-[#C9A84C]">
            Make More Moments Possible
          </p>

          <h2 className="mx-auto mt-5 max-w-3xl font-serif text-4xl font-bold leading-tight md:text-5xl">
            Support the artists who create these moments.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-7 text-slate-300">
            Your support can help create more opportunities for
            music education, creative expression and community
            engagement.
          </p>

          {/*
            The donation system is still being planned.
            For now this sends the donor to the Contact page.
          */}

          <Link
            href="/contact#contact-form"
            className="mt-9 inline-flex rounded-full bg-[#C9A84C] px-8 py-4 font-bold text-[#101820] transition hover:bg-[#dfc66f] focus:outline-none focus:ring-2 focus:ring-white"
          >
            Donate
          </Link>

        </div>
      </section>

      {/* ========================================
          Accessible Lightbox
      ======================================== */}

      {selectedItem && (

        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${selectedItem.title} gallery viewer`}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 md:p-8"
          onClick={closeLightbox}
        >

          {/* Close button */}

          <button
            type="button"
            onClick={closeLightbox}
            aria-label="Close gallery viewer"
            className="absolute right-5 top-5 z-20 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-black/50 text-2xl text-white transition hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-[#C9A84C]"
          >
            
          </button>

          {/* Previous */}

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              showPrevious();
            }}
            aria-label="View previous gallery item"
            className="absolute left-3 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/50 text-2xl text-white transition hover:bg-[#C9A84C] hover:text-black focus:outline-none focus:ring-2 focus:ring-[#C9A84C] md:left-7"
          >
            ‹
          </button>

          {/* Next */}

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              showNext();
            }}
            aria-label="View next gallery item"
            className="absolute right-3 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/50 text-2xl text-white transition hover:bg-[#C9A84C] hover:text-black focus:outline-none focus:ring-2 focus:ring-[#C9A84C] md:right-7"
          >
            ›
          </button>

          <div
            className="flex max-h-[92vh] w-full max-w-6xl flex-col overflow-hidden rounded-2xl bg-[#101820]"
            onClick={(event) =>
              event.stopPropagation()
            }
          >

            <div className="relative flex min-h-[300px] flex-1 items-center justify-center bg-black md:min-h-[500px]">

              {selectedItem.type === "image" ? (

                <Image
                  src={selectedItem.src}
                  alt={selectedItem.alt}
                  width={1600}
                  height={1100}
                  className="max-h-[70vh] w-auto max-w-full object-contain"
                />

              ) : (

                <video
                  src={selectedItem.src}
                  controls
                  autoPlay
                  playsInline
                  className="max-h-[70vh] w-full object-contain"
                />

              )}

            </div>

            <div className="border-t border-white/10 p-6 md:p-8">

              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#C9A84C]">
                {selectedItem.category}
              </p>

              <h2 className="mt-2 font-serif text-2xl font-bold md:text-3xl">
                {selectedItem.title}
              </h2>

              <p className="mt-3 max-w-3xl leading-7 text-slate-300">
                {selectedItem.caption}
              </p>

              <div className="mt-4 flex flex-col gap-1 text-sm text-slate-500 sm:flex-row sm:gap-6">
                <span>{selectedItem.date}</span>
                <span>
                  Credit: {selectedItem.credit}
                </span>
              </div>

            </div>

          </div>

        </div>

      )}
          <SiteFooter />
    </main>
  );
}