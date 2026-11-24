"use client";
import { motion } from "framer-motion";
import Reveal from "./Reveal";

// scroll-mt keeps each heading clear of the fixed navbar when you click a nav link
const shell = "mx-auto max-w-5xl scroll-mt-16 px-5 py-20 sm:px-8 md:py-28";
const title = "mb-8 text-3xl font-bold md:mb-10 md:text-4xl";
const GITHUB = "https://github.com/Tonoy-Mazumder";

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
    </section>
  );
}

// TODO: replace each github value with the exact repo link, and edit tags to your real tech stack.
const projects = [
  {
    name: "RentPro",
    desc: "Full-stack equipment rental platform. Customers browse and rent equipment, owners manage listings and requests, and admins manage users and approvals.",
    tags: ["Role-based dashboards", "Stripe payments", "Google login"],
    live: "https://equipment-rental-platform-seven.vercel.app",
    github: "https://github.com/Tonoy-Mazumder/equipment-rental-platform",
  },
  {
    name: "BondhuBondhon",
    desc: "Community event platform for social activities and volunteering. Create, manage and join events, with categories and dark mode.",
    tags: ["Better Auth", "Event management", "Dark mode"],
    live: "https://bondhu-bondhon.vercel.app",
    github: "https://github.com/Tonoy-Mazumder/bondhu-bondhon",
  },
  {
    name: "Bazar-Dor",
    desc: "Bangla market price tracker showing daily prices of essential goods, price changes, 8 categories and a page for each product.",
    tags: ["Next.js", "Bangla UI", "Price tracking"],
    live: "https://bazar-dor-inky.vercel.app",
    github: "https://github.com/Tonoy-Mazumder/bazar-dor",
  },
  {
    name: "Fit-Log",
    desc: "Modern workout library with 12 exercises. Browse workouts, build your daily plan, save favorites and see time and calorie estimates.",
    tags: ["Next.js", "Workout plans", "Saved list"],
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
  { group: "Frontend", items: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "HeroUI", "shadcn/ui"] },
  { group: "Backend", items: ["Node.js", "Express.js", "MongoDB", "Better Auth", "Stripe"] },
  { group: "Tools", items: ["Git & GitHub", "Vercel"] },
];

export function Skills() {
  return (
    <section id="skills" className={shell}>
      <Reveal><h2 className={title}>My <span className="glow-text">skills</span></h2></Reveal>
      <div className="space-y-8">
        {skills.map((g) => (
          <div key={g.group}>
            <p className="mb-3 text-sm uppercase tracking-widest text-cyan-300">{g.group}</p>
            <div className="flex flex-wrap gap-2.5 sm:gap-3">
              {g.items.map((s, i) => (
                <motion.span
                  key={s}
                  initial={{ opacity: 0, scale: 0.6 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05, type: "spring" }}
                  whileHover={{ scale: 1.12, rotate: -2 }}
                  className="cursor-default rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm backdrop-blur-md sm:px-5"
                >
                  {s}
                </motion.span>
              ))}
            </div>
          </div>
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