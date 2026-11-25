"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiMonitor, FiServer, FiLayers, FiLayout, FiPackage, FiLock } from "react-icons/fi";
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiNodedotjs, SiExpress, SiMongodb, SiStripe, SiGit, SiVercel } from "react-icons/si";
import Reveal from "./Reveal";

// scroll-mt keeps each heading clear of the fixed navbar when you click a nav link
const shell = "mx-auto max-w-5xl scroll-mt-16 px-5 py-20 sm:px-8 md:py-28";
const title = "mb-8 text-3xl font-bold md:mb-10 md:text-4xl";
const GITHUB = "https://github.com/Tonoy-Mazumder";

const facts = [
  { value: "4", label: "Live projects" },
  { value: "Full Stack", label: "React to MongoDB" },
  { value: "2027", label: "Diploma graduate" },
  { value: "Open", label: "Entry-level roles" },
];

const services = [
  {
    icon: FiMonitor,
    title: "Frontend",
    desc: "Fast, responsive interfaces with React, Next.js and Tailwind.",
  },
  {
    icon: FiServer,
    title: "Backend",
    desc: "APIs and databases with Node.js, Express and MongoDB.",
  },
  {
    icon: FiLayers,
    title: "Full-Stack Apps",
    desc: "Auth, payments and dashboards, shipped live on Vercel.",
  },
];

export function About() {
  return (
    <section id="about" className={shell}>
      <Reveal>
        <h2 className={title}>About <span className="glow-text">me</span></h2>
        <p className="max-w-2xl leading-relaxed text-white/70">
          I&apos;m Tonoy, a Full Stack developer from Bangladesh who loves turning ideas into fast,
          smooth and good-looking web apps. I&apos;m studying Computer Technology at Cumilla
          Polytechnic Institute (graduating 2027), and I spend most of my time building with React,
          Next.js, TypeScript and Node.js. I like the whole journey of a product: designing the
          interface, building the API, and shipping it live. Right now I&apos;m looking for my first
          entry-level role, where I can learn from a great team and bring real energy to the work.
        </p>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-4 md:mt-10 md:grid-cols-4">
          {facts.map((f) => (
            <div
              key={f.label}
              className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-md sm:p-5"
            >
              <p className="text-lg font-bold text-violet-300 sm:text-xl">{f.value}</p>
              <p className="mt-1 text-xs leading-snug text-white/60 sm:text-sm">{f.label}</p>
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal delay={0.15}>
        <p className="mb-4 mt-10 text-sm uppercase tracking-widest text-cyan-300 md:mb-5 md:mt-14">
          What I do
        </p>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                whileHover={{ y: -6 }}
                className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md transition-colors hover:border-violet-500/60"
              >
                <span className="inline-flex rounded-xl bg-violet-500/20 p-2.5 text-violet-300">
                  <Icon size={22} aria-hidden="true" />
                </span>
                <h3 className="mt-4 font-semibold">{s.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-white/60">{s.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </Reveal>
    </section>
  );
}

// TODO: replace each github value with the exact repo link, and edit tags to your real tech stack.
const projects = [
  {
    name: "RentPro",
    desc: "Full-stack equipment rental platform. Customers browse and rent equipment, owners manage listings and requests, and admins manage users and approvals.",
    image: "/projects/rentpro.webp",
    tags: ["Next.js", "TypeScript", "Node.js", "Express.js", "MongoDB", "Stripe", "Better Auth", "Tailwind CSS"],
    live: "https://equipment-rental-platform-seven.vercel.app",
    github: "https://github.com/Tonoy-Mazumder/equipment-rental-platform",
  },
  {
    name: "BondhuBondhon",
    desc: "Community event platform for social activities and volunteering. Create, manage and join events, with categories and dark mode.",
    image: "/projects/bondhubondhon.webp",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Better Auth", "MongoDB", "shadcn/ui"],
    live: "https://bondhu-bondhon.vercel.app",
    github: "https://github.com/Tonoy-Mazumder/bondhu-bondhon",
  },
  {
    name: "Bazar-Dor",
    desc: "Bangla market price tracker showing daily prices of essential goods, price changes, 8 categories and a page for each product.",
    image: "/projects/bazar-dor.webp",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "MongoDB", "shadcn/ui"],
    live: "https://bazar-dor-inky.vercel.app",
    github: "https://github.com/Tonoy-Mazumder/bazar-dor",
  },
  {
    name: "Fit-Log",
    desc: "Modern workout library with 12 exercises. Browse workouts, build your daily plan, save favorites and see time and calorie estimates.",
    image: "/projects/fit-log.webp",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "MongoDB", "LocalStorage", "shadcn/ui"],
    live: "https://fit-log-fawn.vercel.app",
    github: 'https://github.com/Tonoy-Mazumder/fit-log',
  },
];

export function Projects() {
  return (
    <section id="projects" className={shell}>
      <Reveal><h2 className={title}>My <span className="glow-text">projects</span></h2></Reveal>
      <div className="grid gap-5 md:grid-cols-2 md:gap-6">
        {projects.map((p, i) => (
          <Reveal key={p.name} delay={(i % 2) * 0.15}>
            <motion.div
              whileHover={{ y: -8, scale: 1.02 }}
              className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md transition-colors hover:border-violet-500/60 sm:p-6"
            >
              <Image
                src={p.image}
                alt={`Screenshot of the ${p.name} project homepage`}
                width={1440}
                height={900}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="mb-4 aspect-video w-full rounded-xl object-cover"
              />
              <h3 className="text-xl font-semibold">{p.name}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-white/60">{p.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-full bg-violet-500/20 px-3 py-1 text-xs text-violet-300">{t}</span>
                ))}
              </div>
              <div className="mt-5 flex flex-wrap gap-3 text-sm">
                <a href={p.live} target="_blank" rel="noreferrer" className="rounded-full bg-violet-600 px-4 py-2 transition hover:bg-violet-500">
                  Live ↗
                </a>
                <a href={p.github} target="_blank" rel="noreferrer" className="rounded-full border border-white/20 px-4 py-2 transition hover:bg-white/10">
                  GitHub
                </a>
              </div>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

const skills = [
  {
    group: "Frontend",
    cols: "grid-cols-2 sm:grid-cols-3 lg:grid-cols-6",
    items: [
      { name: "React.js", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "HeroUI", icon: FiLayout },
      { name: "shadcn/ui", icon: FiPackage },
    ],
  },
  {
    group: "Backend",
    cols: "grid-cols-2 sm:grid-cols-3 lg:grid-cols-5",
    items: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express.js", icon: SiExpress },
      { name: "MongoDB", icon: SiMongodb },
      { name: "Better Auth", icon: FiLock },
      { name: "Stripe", icon: SiStripe },
    ],
  },
  {
    group: "Tools",
    cols: "grid-cols-2 sm:grid-cols-3 lg:grid-cols-6",
    items: [
      { name: "Git & GitHub", icon: SiGit },
      { name: "Vercel", icon: SiVercel },
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className={shell}>
      <Reveal><h2 className={title}>My <span className="glow-text">skills</span></h2></Reveal>
      <div className="space-y-8 md:space-y-10">
        {skills.map((g, gi) => (
          <Reveal key={g.group} delay={gi * 0.1}>
            <p className="mb-4 text-sm uppercase tracking-widest text-cyan-300">{g.group}</p>
            <div className={`grid gap-3 sm:gap-4 ${g.cols}`}>
              {g.items.map((s, i) => {
                const Icon = s.icon;
                return (
                  <motion.div
                    key={s.name}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.45, delay: i * 0.05 }}
                    whileHover={{ y: -5 }}
                    className="group flex flex-col items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-3 py-5 text-center backdrop-blur-md transition-colors hover:border-violet-500/60"
                  >
                    <span className="rounded-xl bg-violet-500/20 p-2.5 text-violet-300 transition-colors group-hover:bg-cyan-500/15 group-hover:text-cyan-300">
                      <Icon size={24} aria-hidden="true" />
                    </span>
                    <span className="text-sm leading-snug text-white/70">{s.name}</span>
                  </motion.div>
                );
              })}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

const links = [
  { label: "Email", href: "mailto:mazumdertonoy582@gmail.com" },
  { label: "GitHub", href: GITHUB },
  { label: "Facebook", href: "https://www.facebook.com/tonoy.mazumder.10" },
];

export function Contact() {
  return (
    <section id="contact" className={`${shell} text-center`}>
      <Reveal>
        <h2 className={title}>Let&apos;s <span className="glow-text">work together</span></h2>
        <p className="mb-8 text-white/60">Open for entry-level Full Stack roles.</p>
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
          {links.map((l) => (
            <a
              key={l.label} href={l.href} target="_blank" rel="noreferrer"
              className="rounded-full border border-white/20 bg-white/5 px-6 py-3 font-medium backdrop-blur-md transition hover:scale-105 hover:bg-violet-600 sm:px-8 sm:py-4"
            >
              {l.label}
            </a>
          ))}
        </div>
        <p className="mt-12 text-sm text-white/40 sm:mt-16">© 2026 Tonoy Mazumder</p>
      </Reveal>
    </section>
  );
}