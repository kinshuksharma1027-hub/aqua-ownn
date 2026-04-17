import { r as reactExports } from "./index-Dvwu-T9G.js";
function useScrollPosition() {
  const [state, setState] = reactExports.useState({
    scrollY: 0,
    scrollProgress: 0,
    direction: "down"
  });
  const lastScrollY = reactExports.useRef(0);
  reactExports.useEffect(() => {
    const update = () => {
      const scrollY = window.scrollY;
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      const scrollProgress = maxScroll > 0 ? Math.min(scrollY / maxScroll, 1) : 0;
      const direction = scrollY < lastScrollY.current ? "up" : "down";
      lastScrollY.current = scrollY;
      setState({ scrollY, scrollProgress, direction });
    };
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);
  return state;
}
function useInView(threshold = 0.1) {
  const ref = reactExports.useRef(null);
  const [inView, setInView] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return [ref, inView];
}
export {
  useInView as a,
  useScrollPosition as u
};
