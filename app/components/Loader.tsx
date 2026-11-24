"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Loader() {
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(true);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    let n = 0;
    let t: ReturnType<typeof setTimeout>;
    const id = setInterval(() => {
      n = Math.min(100, n + 2 + Math.floor(Math.random() * 4));
      setCount(n);
      if (n >= 100) {
        clearInterval(id);
        t = setTimeout(() => {
          document.body.style.overflow = "";
          // tell the photo that the loading screen is finished
          document.documentElement.dataset.loaded = "true";
          window.dispatchEvent(new Event("loader-done"));
          setShow(false);
        }, 500);
      }
    }, 50);
    return () => {
      clearInterval(id);
      clearTimeout(t);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="loader"
          exit={{ y: "-100%", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-[#0a0a12]"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="glow-text text-6xl font-bold"
          >
            TM
          </motion.div>
          <p className="mt-4 text-xs tracking-[0.3em] text-white/50">LOADING PORTFOLIO</p>
          <div className="mt-6 h-1 w-56 overflow-hidden rounded-full bg-white/10">
            <div
              className="h-full bg-gradient-to-r from-violet-500 to-cyan-400"
              style={{ width: `${count}%` }}
            />
          </div>
          <p className="mt-3 text-sm text-white/60">{count}%</p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}