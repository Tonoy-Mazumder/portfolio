"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiMonitor, FiServer, FiLayers, FiLayout, FiPackage, FiLock, FiExternalLink, FiMail, FiArrowUpRight } from "react-icons/fi";
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiNodedotjs, SiExpress, SiMongodb, SiStripe, SiGit, SiVercel, SiGithub } from "react-icons/si";
import { FaGraduationCap, FaFacebookF } from "react-icons/fa";
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
            <motion.article
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 280, damping: 24 }}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md transition-colors hover:border-violet-500/60"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={p.image}
                  alt={`Screenshot of the ${p.name} project homepage`}
                  width={1440}
                  height={900}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="aspect-video w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/50 via-black/0 to-black/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <h3 className="text-xl font-semibold">{p.name}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-white/60">{p.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="rounded-full border border-violet-500/25 bg-violet-500/15 px-3 py-1 text-xs text-violet-300">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-5 flex flex-wrap gap-3">
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-linear-to-r from-violet-600 to-cyan-500 px-5 py-2.5 text-sm font-medium text-white shadow-lg shadow-violet-500/20 transition hover:from-violet-500 hover:to-cyan-400 focus-visible:ring-2 focus-visible:ring-cyan-300/80 focus-visible:outline-none"
                  >
                    Live Demo
                    <FiExternalLink size={14} aria-hidden="true" />
                  </a>
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-2.5 text-sm font-medium backdrop-blur-md transition hover:border-cyan-400/50 hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-cyan-300/80 focus-visible:outline-none"
                  >
                    <SiGithub size={15} aria-hidden="true" />
                    GitHub
                  </a>
                </div>
              </div>
            </motion.article>
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

const journey = [
  {
    stage: "Frontend",
    title: "Interfaces with React & Next.js",
    desc: "Grew into building responsive interfaces with React, Next.js, TypeScript and Tailwind CSS.",
    dot: "bg-violet-400 ring-violet-500/20",
  },
  {
    stage: "Backend",
    title: "APIs with Node.js & MongoDB",
    desc: "Expanded to the backend with Node.js, Express, MongoDB and Better Auth.",
    dot: "bg-cyan-400 ring-cyan-500/20",
  },
  {
    stage: "Full-stack",
    title: "4 live projects",
    desc: "Built and deployed four projects, combining frontend interfaces with backend services where needed.",
    dot: "bg-violet-400 ring-violet-500/20",
  },
  {
    stage: "2027",
    title: "Expected graduation",
    desc: "Completing the diploma and looking for my first entry-level role.",
    dot: "bg-cyan-400 ring-cyan-500/20",
  },
];

export function Education() {
  return (
    <section id="education" className={shell}>
      <Reveal>
        <h2 className={title}>My <span className="glow-text">education</span></h2>
      </Reveal>
      <div className="grid gap-6 lg:grid-cols-5 lg:gap-8">
        <Reveal delay={0.1} className="lg:col-span-2">
          <motion.article
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 280, damping: 24 }}
            className="h-full rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md transition-colors hover:border-violet-500/60 sm:p-6"
          >
            <div className="flex items-start justify-between gap-3">
              <span className="inline-flex rounded-xl bg-violet-500/20 p-3 text-violet-300">
                <FaGraduationCap size={24} aria-hidden="true" />
              </span>
              <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-300">
                Expected 2027
              </span>
            </div>
            <h3 className="mt-5 text-xl font-semibold leading-snug">
              Diploma in Computer Science and Technology
            </h3>
            <p className="mt-2 text-sm text-white/70 sm:text-base">Cumilla Polytechnic Institute</p>
            <p className="mt-3 text-sm leading-relaxed text-white/60">
              Studying Computer Technology while spending most of my time building with React,
              Next.js, TypeScript and Node.js.
            </p>
            <p className="mt-5 flex items-center gap-2 text-xs uppercase tracking-widest text-cyan-300">
              <span className="h-2 w-2 rounded-full bg-cyan-400" aria-hidden="true" />
              In progress
            </p>
          </motion.article>
        </Reveal>

        <div className="lg:col-span-3">
          <Reveal>
            <p className="mb-5 text-sm uppercase tracking-widest text-cyan-300">Learning journey</p>
          </Reveal>
          <ol className="relative space-y-5 border-l border-white/10 pl-6 sm:space-y-6 sm:pl-8">
            {journey.map((step, i) => (
              <li key={step.stage} className="relative">
                <Reveal delay={0.1 + i * 0.1}>
                  <span
                    aria-hidden="true"
                    className={`absolute top-5 -left-6 h-3 w-3 -translate-x-1/2 rounded-full ring-4 sm:-left-8 ${step.dot}`}
                  />
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-md transition-colors hover:border-violet-500/60 sm:p-5">
                    <p className="text-xs font-medium uppercase tracking-widest text-violet-300">
                      {step.stage}
                    </p>
                    <h4 className="mt-1.5 font-semibold">{step.title}</h4>
                    <p className="mt-1.5 text-sm leading-relaxed text-white/60">{step.desc}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

const EMAIL = "mazumdertonoy582@gmail.com";

const socialLinks = [
  { label: "GitHub", href: GITHUB, icon: SiGithub, accent: "hover:border-violet-400/50 hover:text-violet-300" },
  {
    label: "Facebook",
    href: "https://www.facebook.com/tonoy.mazumder.10",
    icon: FaFacebookF,
    accent: "hover:border-cyan-400/50 hover:text-cyan-300",
  },
];

export function Contact() {
  return (
    <section id="contact" className={`${shell} text-center`}>
      <Reveal>
        <p className="mb-3 text-sm uppercase tracking-widest text-cyan-300">Get in touch</p>
        <h2 className={title}>Let&apos;s <span className="glow-text">work together</span></h2>
        <p className="mx-auto max-w-xl text-base leading-relaxed text-white/60 sm:text-lg">
          Open for entry-level Full Stack roles. Have a project or an opportunity in mind?
          I&apos;d love to hear from you.
        </p>
      </Reveal>

      <Reveal delay={0.1}>
        <motion.a
          href={`mailto:${EMAIL}`}
          whileHover={{ y: -6 }}
          transition={{ type: "spring", stiffness: 280, damping: 24 }}
          className="group mx-auto mt-8 flex max-w-2xl flex-col items-center rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition-colors hover:border-violet-500/60 focus-visible:ring-2 focus-visible:ring-cyan-300/80 focus-visible:outline-none sm:flex-row sm:gap-5 sm:p-7 sm:text-left"
        >
          <span className="inline-flex shrink-0 rounded-2xl bg-violet-500/20 p-3.5 text-violet-300 transition-colors group-hover:bg-cyan-500/15 group-hover:text-cyan-300">
            <FiMail size={24} aria-hidden="true" />
          </span>
          <span className="mt-4 min-w-0 flex-1 sm:mt-0">
            <span className="block text-xs font-medium uppercase tracking-widest text-cyan-300 sm:text-sm">
              Email me
            </span>
            <span className="mt-1.5 block break-words text-base font-semibold sm:text-lg md:text-xl">
              {EMAIL}
            </span>
            <span className="mt-1.5 block text-sm text-white/60">Send me a message any time.</span>
          </span>
          <FiArrowUpRight
            size={22}
            aria-hidden="true"
            className="hidden shrink-0 text-white/40 transition group-hover:text-violet-300 sm:block"
          />
        </motion.a>
      </Reveal>

      <Reveal delay={0.2}>
        <div className="mx-auto mt-6 flex max-w-2xl flex-wrap justify-center gap-3 sm:gap-4">
          {socialLinks.map((l) => {
            const Icon = l.icon;
            return (
              <a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noreferrer"
                className={`inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-medium text-white/70 backdrop-blur-md transition focus-visible:ring-2 focus-visible:ring-cyan-300/80 focus-visible:outline-none sm:px-7 sm:text-base ${l.accent}`}
              >
                <Icon size={18} aria-hidden="true" />
                {l.label}
              </a>
            );
          })}
        </div>
      </Reveal>

      <Reveal delay={0.25}>
        <p className="mt-12 text-sm text-white/40 sm:mt-16">© 2026 Tonoy Mazumder</p>
      </Reveal>
    </section>
  );
}