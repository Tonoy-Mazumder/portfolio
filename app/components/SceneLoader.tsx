"use client";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const Scene = dynamic(() => import("./Scene") ,{ ssr: false });

export default function SceneLoader() {
  // starts false so server and client render the same thing; the effect decides
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    setShow(true);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-0">
      {show && <Scene />}
    </div>
  );
}
