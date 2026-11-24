"use client";
import dynamic from "next/dynamic";

const Scene = dynamic(() => import("./Scene") ,{ ssr: false });

export default function SceneLoader() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0">
      <Scene></Scene>
    </div>
  );
}