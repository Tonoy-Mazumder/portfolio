import type { Metadata } from "next";
import "./globals.css";

const SITE_URL = "https://portfolio-tonoy.vercel.app";
const TITLE = "Tonoy Mazumder | Full Stack Developer";
const DESCRIPTION =
  "Full Stack developer from Bangladesh who builds fast, smooth web apps using React, Next.js, Node.js and MongoDB. Open to entry-level roles.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: SITE_URL,
    siteName: "Tonoy Mazumder Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
