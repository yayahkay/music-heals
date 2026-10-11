import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Music Heals Initiative Sierra Leone in Freetown to volunteer, partner, donate or enrol in our music programmes.",
};

export default function ContactLayout({ children }: LayoutProps<"/contact">) {
  return children;
}