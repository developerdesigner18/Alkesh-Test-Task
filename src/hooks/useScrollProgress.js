import { useState, useEffect } from 'react';

const clamp = (v, min, max) => Math.min(Math.max(v, min), max);

export const useScrollProgress = (ref) => {
  const [progress, setProgress] = useState(0);
  const [viewportHeight, setViewportHeight] = useState(
    typeof window !== 'undefined' ? window.innerHeight : 800
  );

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;

      const element = ref.current;
      const rect = element.getBoundingClientRect();
      const elementHeight = element.offsetHeight;
      const vh = window.innerHeight;

      const scrolled = -rect.top;
      const totalScrollable = elementHeight - vh;

      const raw = totalScrollable > 0 ? scrolled / totalScrollable : 0;
      setProgress(clamp(raw, 0, 1));
      setViewportHeight(vh);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [ref]);

  return [progress, viewportHeight];
};
