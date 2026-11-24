"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Edges, Float, Sparkles, Stars } from "@react-three/drei";
import * as THREE from "three";

type V3 = [number, number, number];

/* ---------- glowing text like </> or GG ---------- */
function Glyph({ text, color }: { text: string; color: string }) {
  const tex = useMemo(() => {
    const c = document.createElement("canvas");
    c.width = 256;
    c.height = 128;
    const g = c.getContext("2d")!;
    g.font = "bold 84px monospace";
    g.textAlign = "center";
    g.textBaseline = "middle";
    g.shadowColor = color;
    g.shadowBlur = 24;
    g.fillStyle = color;
    g.fillText(text, 128, 66);
    g.fillText(text, 128, 66); // second pass makes the glow stronger
    return new THREE.CanvasTexture(c);
  }, [text, color]);

  return (
    <sprite scale={[2.4, 1.2, 1]}>
      <spriteMaterial map={tex} transparent depthWrite={false} toneMapped={false} />
    </sprite>
  );
}

/* ---------- spins slowly ---------- */
function Spin({ children, speed = 0.5 }: { children: React.ReactNode; speed?: number }) {
  const ref = useRef<THREE.Group>(null);
  useFrame((_, d) => {
    if (ref.current) ref.current.rotation.y += d * speed;
  });
  return <group ref={ref}>{children}</group>;
}

/* ---------- game controller ---------- */
function Controller() {
  const ref = useRef<THREE.Group>(null);
  useFrame(({ clock }) => {
    if (!ref.current) return;
    ref.current.rotation.y = Math.sin(clock.elapsedTime * 0.6) * 0.7;
    ref.current.rotation.x = 0.35;
  });
  const dark = <meshStandardMaterial color="#111827" metalness={0.6} roughness={0.35} />;
  const btn = (c: string) => (
    <meshStandardMaterial color={c} emissive={c} emissiveIntensity={0.9} toneMapped={false} />
  );
  return (
    <group ref={ref}>
      <mesh>
        <boxGeometry args={[2, 0.7, 0.45]} />
        {dark}
        <Edges color="#22d3ee" />
      </mesh>
      <mesh position={[-0.9, -0.5, 0]} rotation={[0, 0, 0.25]}>
        <cylinderGeometry args={[0.3, 0.36, 0.95, 20]} />
        {dark}
      </mesh>
      <mesh position={[0.9, -0.5, 0]} rotation={[0, 0, -0.25]}>
        <cylinderGeometry args={[0.3, 0.36, 0.95, 20]} />
        {dark}
      </mesh>
      {/* D-pad */}
      <mesh position={[-0.65, 0.05, 0.24]}>
        <boxGeometry args={[0.42, 0.12, 0.08]} />
        {btn("#22d3ee")}
      </mesh>
      <mesh position={[-0.65, 0.05, 0.24]}>
        <boxGeometry args={[0.12, 0.42, 0.08]} />
        {btn("#22d3ee")}
      </mesh>
      {/* four buttons */}
      {([
        [0.65, 0.25, "#00ffa3"],
        [0.65, -0.15, "#ff2e97"],
        [0.45, 0.05, "#38bdf8"],
        [0.85, 0.05, "#facc15"],
      ] as [number, number, string][]).map(([x, y, c], i) => (
        <mesh key={i} position={[x, y, 0.26]}>
          <sphereGeometry args={[0.09, 16, 16]} />
          {btn(c)}
        </mesh>
      ))}
      {/* sticks */}
      {([-0.3, 0.2] as number[]).map((x, i) => (
        <mesh key={i} position={[x, -0.2, 0.26]} rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.14, 0.14, 0.1, 16]} />
          <meshStandardMaterial color="#94a3b8" metalness={0.7} roughness={0.3} />
        </mesh>
      ))}
    </group>
  );
}

/* ---------- dice with neon edges ---------- */
function Dice({ color }: { color: string }) {
  return (
    <Spin speed={0.5}>
      <mesh rotation={[0.5, 0.5, 0]}>
        <boxGeometry args={[1.2, 1.2, 1.2]} />
        <meshStandardMaterial color="#0f172a" metalness={0.5} roughness={0.3} />
        <Edges color={color} />
      </mesh>
    </Spin>
  );
}

/* ---------- pixel alien (retro arcade) ---------- */
const ALIEN = [
  "..#.....#..",
  "...#...#...",
  "..#######..",
  ".##.###.##.",
  "###########",
  "#.#######.#",
  "#.#.....#.#",
  "...##.##...",
];

function Alien() {
  const cubes = useMemo(() => {
    const out: V3[] = [];
    ALIEN.forEach((row, r) =>
      [...row].forEach((ch, c) => {
        if (ch === "#") out.push([(c - 5) * 0.22, (3.5 - r) * 0.22, 0]);
      })
    );
    return out;
  }, []);
  return (
    <Spin speed={0.5}>
      {cubes.map((p, i) => (
        <mesh key={i} position={p}>
          <boxGeometry args={[0.2, 0.2, 0.2]} />
          <meshStandardMaterial color="#00ffa3" emissive="#00ffa3" emissiveIntensity={0.6} toneMapped={false} />
        </mesh>
      ))}
    </Spin>
  );
}

/* ---------- what goes where ---------- */
// Items sit at the left/right edges so the text stays readable.
// y goes down because the camera moves down as you scroll.
type Item = { p: V3; s: number } & (
  | { k: "glyph"; text: string; color: string }
  | { k: "pad" }
  | { k: "dice"; color: string }
  | { k: "alien" }
);

const ITEMS: Item[] = [
  { k: "glyph", text: "</>", color: "#00ffa3", p: [-4.2, 1.0, -2], s: 1.2 },
  { k: "pad", p: [4.4, -0.8, -3], s: 0.95 },
  { k: "dice", color: "#22d3ee", p: [-4.5, -4, -2], s: 1.0 },
  { k: "glyph", text: "{ }", color: "#a78bfa", p: [4.4, -5.5, -2], s: 1.2 },
  { k: "alien", p: [-4.3, -7.5, -3], s: 1.0 },
  { k: "glyph", text: "01", color: "#22d3ee", p: [4.2, -9.5, -2], s: 1.2 },
  { k: "glyph", text: "=>", color: "#ff2e97", p: [-4.3, -11.5, -2], s: 1.2 },
  { k: "dice", color: "#ff2e97", p: [4.4, -12.5, -3], s: 1.0 },
  { k: "glyph", text: "GG", color: "#00ffa3", p: [0, -15.5, -4], s: 2.2 },
];

function Placed({ item, mobile }: { item: Item; mobile: boolean }) {
  const pos: V3 = [mobile ? item.p[0] * 0.55 : item.p[0], item.p[1], item.p[2]];
  const scale = mobile ? item.s * 0.7 : item.s;
  return (
    <Float speed={1.5} rotationIntensity={0.25} floatIntensity={1.4} position={pos}>
      <group scale={scale}>
        {item.k === "glyph" && <Glyph text={item.text} color={item.color} />}
        {item.k === "pad" && <Controller />}
        {item.k === "dice" && <Dice color={item.color} />}
        {item.k === "alien" && <Alien />}
      </group>
    </Float>
  );
}

/* ---------- camera moves down as you scroll ---------- */
function Rig() {
  const mouse = useRef({ x: 0, y: 0 });
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = (e.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  useFrame((state) => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const p = max > 0 ? window.scrollY / max : 0;
    const cam = state.camera;
    cam.position.x = THREE.MathUtils.lerp(cam.position.x, mouse.current.x * 0.6, 0.05);
    cam.position.y = THREE.MathUtils.lerp(cam.position.y, -p * 16 - mouse.current.y * 0.4, 0.08);
    cam.rotation.z = THREE.MathUtils.lerp(cam.rotation.z, Math.sin(p * Math.PI * 2) * 0.05, 0.05);
  });
  return null;
}

export default function Scene() {
  const [mobile] = useState(() => window.innerWidth < 768);
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 55 }}
      dpr={[1, mobile ? 1.5 : 2]}
      gl={{ antialias: !mobile, alpha: true, powerPreference: "high-performance" }}
    >
      <ambientLight intensity={0.7} />
      <directionalLight position={[5, 5, 5]} intensity={2} color="#c4b5fd" />
      <directionalLight position={[-5, -3, 2]} intensity={1.5} color="#67e8f9" />
      <Stars radius={60} depth={50} count={mobile ? 1200 : 4000} factor={4} fade speed={1} />
      <Sparkles count={mobile ? 60 : 160} scale={[14, 20, 6]} position={[0, -7, -1]} size={3} speed={0.4} color="#67e8f9" />
      {ITEMS.map((item, i) => (
        <Placed key={i} item={item} mobile={mobile} />
      ))}
      <Rig />
    </Canvas>
  );
}