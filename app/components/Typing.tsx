"use client";
import { useEffect, useState } from "react";

export default function Typing({ words, className = "" }: { words: string[]; className?: string }) {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [del, setDel] = useState(false);

  useEffect(() => {
    const w = words[i];
    let delay = del ? 40 : 80;
    if (!del && text === w) delay = 1400;
    if (del && text === "") delay = 300;
    const t = setTimeout(() => {
      if (!del && text === w) setDel(true);
      else if (del && text === "") { setDel(false); setI((i + 1) % words.length); }
      else setText(del ? w.slice(0, text.length - 1) : w.slice(0, text.length + 1));
    }, delay);
    return () => clearTimeout(t);
  }, [text, del, i, words]);

  return (
    <span className={className}>
      {text}
      <span className="ml-1 animate-pulse text-violet-400">|</span>
    </span>
  );
}