"use client";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const SEEN_KEY = "loader-seen";

// tell the photo that the loading screen is finished
const signalDone = () => {
  document.documentElement.dataset.loaded = "true";
  window.dispatchEvent(new Event("loader-done"));
};

export default function Loader() {
  const [count, setCount] = useState(0);
  // hidden until the effect confirms this is the first visit, so repeat visits never flash it
  const [show, setShow] = useState(false);
  const seen = useRef<boolean | null>(null);
  const progress = useRef(0);

  useEffect(() => {
    let skip = seen.current;
    if (skip === null) {
      try {
        skip = sessionStorage.getItem(SEEN_KEY) === "true";
      } catch {
        skip = false;
      }
      seen.current = skip;
      if (!skip) {
        try {
          sessionStorage.setItem(SEEN_KEY, "true");
        } catch {
          // no sessionStorage: show the loader anyway
        }
      }
    }

    if (skip) {
      // repeat visit in this session: skip the loader and let the photo start right away
      signalDone();
      return;
    }

    document.body.style.overflow = "hidden";
    setShow(true);

    let n = progress.current;
    let t: ReturnType<typeof setTimeout>;
    const id = setInterval(() => {
   n = Math.min(100, n + 8 + Math.floor(Math.random() * 5));
      progress.current = n;
      setCount(n);
      if (n >= 100) {
        clearInterval(id);
        t = setTimeout(() => {
          document.body.style.overflow = "";
          signalDone();
          setShow(false);
        }, 250);
      }
    }, 30);

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
