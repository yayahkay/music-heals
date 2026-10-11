import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Photos and videos of Music Heals Initiative Sierra Leone students, performances, training sessions and community programmes in Freetown.",
};

export default function GalleryLayout({ children }: LayoutProps<"/gallery">) {
  return children;
}