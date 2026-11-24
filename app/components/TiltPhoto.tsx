"use client";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export default function TiltPhoto() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const cfg = { stiffness: 150, damping: 15 };
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [12, -12]), cfg);
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-12, 12]), cfg);

  return (
    <div style={{ perspective: 1000 }} className="w-64 md:w-80">
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <motion.div
          style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
          onMouseMove={(e) => {
            const r = e.currentTarget.getBoundingClientRect();
            x.set((e.clientX - r.left) / r.width - 0.5);
            y.set((e.clientY - r.top) / r.height - 0.5);
          }}
          onMouseLeave={() => { x.set(0); y.set(0); }}
          className="relative aspect-square w-full"
        >
          {/* soft glow behind the circle */}
          <div
            style={{ transform: "translateZ(-50px)" }}
            className="absolute inset-0 rounded-full bg-violet-500/60 blur-3xl"
          />
          {/* round frame with gradient background */}
          <div
            style={{ transform: "translateZ(30px)" }}
            className="absolute inset-0 overflow-hidden rounded-full border-2 border-white/40 bg-gradient-to-b from-violet-700 to-cyan-500 shadow-[0_0_40px_rgba(139,92,246,0.5)]"
          >
            {/* photo sits at the bottom of the circle */}
            <div className="absolute bottom-0 left-[9%] aspect-[439/568] w-[82%]">
              <Image
                src="/me.png"
                alt="Tonoy Mazumder"
                fill
                priority
                sizes="(min-width: 768px) 270px, 220px"
                className="object-contain object-bottom"
              />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}