"use client";
import { motion } from "framer-motion";
import { FiArrowRight, FiDownload, FiMail } from "react-icons/fi";
import { SiGithub } from "react-icons/si";

import Typing from "./Typing";
import ParticlePhoto from "./ParticlePhoto";

const words = ["Full Stack Developer", "React & Next.js Developer", "Node.js & MongoDB Builder"];
const GITHUB = "https://github.com/Tonoy-Mazumder";
const EMAIL = "mailto:mazumdertonoy582@gmail.com";

export default function Hero() {
  return (
    <section className="flex min-h-screen flex-col-reverse items-center justify-center gap-8 overflow-x-clip px-5 pb-16 pt-28 text-center sm:px-8 lg:flex-row lg:gap-20 lg:pb-0 lg:pt-0 lg:text-left">
      <div>
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-5"
        >
          <span className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-white/70 backdrop-blur-md sm:text-sm">
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75 motion-safe:animate-ping" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400" />
            </span>
            Available for entry-level roles
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center justify-center gap-3 text-sm font-medium tracking-[0.2em] text-violet-400 sm:text-base lg:justify-start"
        >
          <span
            aria-hidden="true"
            className="hidden h-px w-10 bg-linear-to-r from-violet-400 to-cyan-400 sm:block"
          />
          Hi, I&apos;m
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}
          className="glow-text mt-1.5 text-4xl font-bold tracking-tight sm:text-5xl lg:text-7xl"
        >
          Tonoy Mazumder
        </motion.h1>
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
          className="mt-4 min-h-8 text-lg font-medium text-white/80 sm:text-xl md:text-2xl"
        >
          <Typing words={words} />
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
          className="mx-auto mt-4 max-w-md text-base leading-relaxed text-white/60 sm:text-lg lg:mx-0"
        >
          From pixels to databases, I build the whole experience.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}
          className="mt-9 flex flex-wrap justify-center gap-3 sm:gap-4 lg:justify-start"
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-full bg-linear-to-r from-violet-600 to-cyan-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-500/25 transition hover:from-violet-500 hover:to-cyan-400 focus-visible:ring-2 focus-visible:ring-cyan-300/80 focus-visible:outline-none sm:px-7 sm:text-base"
          >
            View Projects
            <FiArrowRight size={16} aria-hidden="true" />
          </a>
          <a
            href="/Tonoy_Mazumder_CV.pdf"
            download
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-medium backdrop-blur-md transition hover:border-violet-400/50 hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-cyan-300/80 focus-visible:outline-none sm:px-7 sm:text-base"
          >
            <FiDownload size={16} aria-hidden="true" />
            Download CV
          </a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.95 }}
          className="mt-7 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm lg:justify-start"
        >
          <a
            href={GITHUB}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded text-white/60 transition hover:text-violet-300 focus-visible:ring-2 focus-visible:ring-cyan-300/80 focus-visible:outline-none"
          >
            <SiGithub size={17} aria-hidden="true" />
            GitHub
          </a>
          <a
            href={EMAIL}
            className="inline-flex items-center gap-2 rounded text-white/60 transition hover:text-cyan-300 focus-visible:ring-2 focus-visible:ring-cyan-300/80 focus-visible:outline-none"
          >
            <FiMail size={17} aria-hidden="true" />
            Email
          </a>
        </motion.div>
      </div>
      <ParticlePhoto />
    </section>
  );
}
