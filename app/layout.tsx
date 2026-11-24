import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tonoy Mazumder | Full Stack Developer",
  description:
    "Portfolio of Tonoy Mazumder, a Full Stack developer from Bangladesh building with React, Next.js, TypeScript and Node.js.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}