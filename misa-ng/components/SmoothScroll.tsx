'use client';
import { useEffect } from 'react';
import Lenis from 'lenis';
export default function SmoothScroll() {
  useEffect(() => {
    const l = new Lenis({ duration: 1.15, anchors: true });
    let id = 0;
    const raf = (t: number) => { l.raf(t); id = requestAnimationFrame(raf); };
    id = requestAnimationFrame(raf);
    return () => { cancelAnimationFrame(id); l.destroy(); };
  }, []);
  return null;
}
