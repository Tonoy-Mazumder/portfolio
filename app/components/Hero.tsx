"use client";
import { motion } from "framer-motion";

import Typing from "./Typing";
import ParticlePhoto from "./ParticlePhoto";

const words = ["Full Stack Developer", "React & Next.js Developer", "Node.js & MongoDB Builder"];

export default function Hero() {
  return (
    <section className="flex min-h-screen flex-col-reverse items-center justify-center gap-8 overflow-x-clip px-5 pb-16 pt-28 text-center sm:px-8 lg:flex-row lg:gap-20 lg:pb-0 lg:pt-0 lg:text-left">
      <div>
        <motion.p initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} className="text-violet-400">
          Hi, I&apos;m
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}
          className="glow-text text-4xl font-bold sm:text-5xl lg:text-7xl"
        >
          Tonoy Mazumder
        </motion.h1>
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
          className="mt-4 min-h-8 text-lg text-white/80 sm:text-xl md:text-2xl"
        >
          <Typing words={words} />
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
          className="mx-auto mt-3 max-w-md text-white/60 lg:mx-0"
        >
          From pixels to databases, I build the whole experience.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}
          className="mt-8 flex flex-wrap justify-center gap-3 sm:gap-4 lg:justify-start"
        >
          <a href="#projects" className="rounded-full bg-violet-600 px-5 py-3 font-medium transition hover:scale-105 hover:bg-violet-500 sm:px-6">
            View Projects
          </a>
          <a
            href="/Tonoy_Mazumder_CV.pdf" download
            className="rounded-full border border-white/20 px-5 py-3 transition hover:bg-white/10 sm:px-6"
          >
            Download CV
          </a>
        </motion.div>
      </div>
      <ParticlePhoto />
    </section>
  );
}