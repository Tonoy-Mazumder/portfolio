"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

type P = { x: number; y: number; vx: number; vy: number; ox: number; oy: number; c: string; a: number; delay: number };

const FADE = "linear-gradient(to bottom, black 80%, transparent 100%)";

export default function ParticlePhoto({ src = "/me.png" }: { src?: string }) {
  const wrap = useRef<HTMLDivElement>(null);
  const cv = useRef<HTMLCanvasElement>(null);
  const [done, setDone] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const cfg = { stiffness: 150, damping: 15 };
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [10, -10]), cfg);
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-10, 10]), cfg);

  useEffect(() => {
    const canvas = cv.current!;
    const box = wrap.current!;
    const ctx = canvas.getContext("2d")!;
    const W = box.clientWidth;
    const H = box.clientHeight;
    const CW = W * 1.8;
    const CH = H * 1.6;
    const offX = (CW - W) / 2;
    const offY = (CH - H) / 2;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = CW * dpr;
    canvas.height = CH * dpr;
    canvas.style.width = `${CW}px`;
    canvas.style.height = `${CH}px`;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    const gap = window.innerWidth < 768 ? 4 : 3;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const R = Math.min(CW, CH) * 0.48;
    const parts: P[] = [];
    let raf = 0;
    let start = 0;
    let alive = true;
    let timer: ReturnType<typeof setTimeout>;
    let fallback: ReturnType<typeof setTimeout>;
    let begin: (() => void) | null = null;

    if (reduce) setDone(true);

    const loop = () => {
      const t = (performance.now() - start) / 1000;
      ctx.clearRect(0, 0, CW, CH);
      for (const p of parts) {
        if (t > p.delay) {
          p.vx += (p.ox - p.x) * 0.02;
          p.vy += (p.oy - p.y) * 0.02;
        } else {
          p.vx += (Math.random() - 0.5) * 0.15;
          p.vy += (Math.random() - 0.5) * 0.15;
        }
        p.vx *= 0.88;
        p.vy *= 0.88;
        p.x += p.vx;
        p.y += p.vy;
        const away = Math.hypot(p.ox - p.x, p.oy - p.y);
        const near = 1 - Math.min(1, away / (R * 0.8));
        ctx.globalAlpha = p.a * (0.15 + 0.85 * near);
        ctx.fillStyle = p.c;
        ctx.fillRect(p.x, p.y, gap, gap);
      }
      ctx.globalAlpha = 1;
      if (t < 6) raf = requestAnimationFrame(loop); // stop drawing after the fade
    };

    const img = new window.Image();
    img.src = src;
    img.onload = () => {
      if (!alive || reduce) return;
      const o = document.createElement("canvas");
      o.width = W;
      o.height = H;
      const octx = o.getContext("2d", { willReadFrequently: true })!;
      octx.imageSmoothingQuality = "high";
      octx.drawImage(img, 0, 0, W, H);
      const d = octx.getImageData(0, 0, W, H).data;

      for (let py = 0; py < H; py += gap) {
        for (let px = 0; px < W; px += gap) {
          const i = (py * W + px) * 4;
          if (d[i + 3] < 128) continue;
          const fade = py > H * 0.8 ? 1 - (py - H * 0.8) / (H * 0.2) : 1;
          if (fade <= 0.03) continue;
          const ang = Math.random() * Math.PI * 2;
          const rad = R * ((Math.random() + Math.random() + Math.random()) / 3) * 1.6;
          parts.push({
            ox: offX + px,
            oy: offY + py,
            x: CW / 2 + Math.cos(ang) * rad,
            y: CH / 2 + Math.sin(ang) * rad,
            vx: 0,
            vy: 0,
            c: `rgb(${d[i]},${d[i + 1]},${d[i + 2]})`,
            a: fade,
            delay: Math.random() * 1.8,
          });
        }
      }

      let started = false;
      begin = () => {
        if (started || !alive) return;
        started = true;
        start = performance.now();
        // when the dots have gathered, fade in the real sharp photo
        timer = setTimeout(() => setDone(true), 4200);
        loop();
      };

      // wait for the loading screen to finish, then start the dots
      if (document.documentElement.dataset.loaded === "true") {
        begin();
      } else {
        window.addEventListener("loader-done", begin, { once: true });
        fallback = setTimeout(begin, 6000); // safety: start anyway after 6 seconds
      }
    };

    return () => {
      alive = false;
      clearTimeout(timer);
      clearTimeout(fallback);
      cancelAnimationFrame(raf);
      if (begin) window.removeEventListener("loader-done", begin);
    };
  }, [src]);

  return (
    <div style={{ perspective: 1000 }} className="w-72 md:w-96">
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <motion.div
          ref={wrap}
          style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
          onMouseMove={(e) => {
            const r = e.currentTarget.getBoundingClientRect();
            x.set((e.clientX - r.left) / r.width - 0.5);
            y.set((e.clientY - r.top) / r.height - 0.5);
          }}
          onMouseLeave={() => { x.set(0); y.set(0); }}
          className="relative aspect-[439/568] w-full"
        >
          {/* particles: fade out when the photo is ready */}
          <motion.canvas
            ref={cv}
            animate={{ opacity: done ? 0 : 1 }}
            transition={{ duration: 1.2 }}
            style={{ transform: "translate(-50%, -50%) translateZ(30px)" }}
            className="pointer-events-none absolute left-1/2 top-1/2"
          />
          {/* the real sharp photo: fades in at the end */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: done ? 1 : 0 }}
            transition={{ duration: 1.2 }}
            style={{ transform: "translateZ(30px)", WebkitMaskImage: FADE, maskImage: FADE }}
            className="absolute inset-0"
          >
            <Image
              src={src}
              alt="Tonoy Mazumder"
              fill
              priority
              quality={100}
              sizes="(min-width: 768px) 384px, 288px"
              className="object-fill"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}