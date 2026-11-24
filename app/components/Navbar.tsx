"use client";
import { motion } from "framer-motion";

const links = ["about", "projects", "skills", "contact"];

export default function Navbar() {
  return (
    <div className="pointer-events-none fixed inset-x-0 top-3 z-50 flex justify-center px-3 sm:top-4">
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="pointer-events-auto flex max-w-full gap-4 rounded-full border border-white/10 bg-white/5 px-4 py-2.5 backdrop-blur-md sm:gap-6 sm:px-6 sm:py-3"
      >
        {links.map((l) => (
          <a key={l} href={`#${l}`} className="text-xs capitalize text-white/70 transition hover:text-violet-400 sm:text-sm">
            {l}
          </a>
        ))}
      </motion.nav>
    </div>
  );
}