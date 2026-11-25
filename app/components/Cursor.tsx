"use client";
import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function Cursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const rx = useSpring(x, { stiffness: 300, damping: 28 });
  const ry = useSpring(y, { stiffness: 300, damping: 28 });
  const [hover, setHover] = useState(false);
  const [fine, setFine] = useState(false); // true only on devices with a mouse

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    setFine(true);

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    const over = (e: MouseEvent) => {
      const target = e.target;

      if (target instanceof Element) {
        setHover(!!target.closest("a, button"));
      }
    };
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
    };
  }, [x, y]);

  if (!fine) return null;

  return (
    <div className="custom-cursor">
      {/* ring: follows smoothly */}
      <motion.div
        style={{ x: rx, y: ry }}
        animate={{ scale: hover ? 1.8 : 1 }}
        className="pointer-events-none fixed left-0 top-0 z-[150] -ml-4 -mt-4 h-8 w-8 rounded-full border border-violet-400/80"
      />
      {/* dot: follows the mouse exactly */}
      <motion.div
        style={{ x, y }}
        className="pointer-events-none fixed left-0 top-0 z-[150] -ml-1 -mt-1 h-2 w-2 rounded-full bg-cyan-300"
      />
    </div>
  );
}