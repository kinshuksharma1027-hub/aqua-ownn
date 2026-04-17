import { useEffect, useRef, useState } from "react";
import type { ScrollState } from "../types";

export function useScrollPosition(): ScrollState {
  const [state, setState] = useState<ScrollState>({
    scrollY: 0,
    scrollProgress: 0,
    direction: "down",
  });
  const lastScrollY = useRef(0);

  useEffect(() => {
    const update = () => {
      const scrollY = window.scrollY;
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      const scrollProgress =
        maxScroll > 0 ? Math.min(scrollY / maxScroll, 1) : 0;
      const direction: "up" | "down" =
        scrollY < lastScrollY.current ? "up" : "down";
      lastScrollY.current = scrollY;
      setState({ scrollY, scrollProgress, direction });
    };

    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return state;
}

export function useInView(
  threshold = 0.1,
): [React.RefObject<HTMLDivElement | null>, boolean] {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, inView];
}
