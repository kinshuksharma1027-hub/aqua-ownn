import { ArrowRight, Building2, Recycle, Sparkles } from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const STATS = [
  { value: "500+", label: "Brands Served" },
  { value: "100%", label: "Fully Custom" },
  { value: "48h", label: "Quick Turnaround" },
];

const BUBBLES = [
  { id: "b1", size: 12, left: 10, top: 20, dur: 3, delay: 0 },
  { id: "b2", size: 20, left: 24, top: 45, dur: 3.8, delay: 0.5 },
  { id: "b3", size: 28, left: 38, top: 22, dur: 4.6, delay: 1 },
  { id: "b4", size: 36, left: 52, top: 60, dur: 5.4, delay: 1.5 },
  { id: "b5", size: 44, left: 66, top: 35, dur: 4.2, delay: 2 },
  { id: "b6", size: 52, left: 80, top: 55, dur: 5, delay: 2.5 },
];

function scrollTo(id: string) {
  document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const bottleY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const bottleRotate = useTransform(scrollYProgress, [0, 1], [0, 12]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 60]);

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-screen flex items-center overflow-hidden"
      data-ocid="hero.section"
    >
      {/* Layered background */}
      <div className="absolute inset-0 gradient-hero" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_60%_40%,oklch(0.55_0.2_200/0.18),transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_50%_at_20%_80%,oklch(0.62_0.22_200/0.12),transparent)]" />

      {/* Animated water blobs */}
      <motion.div
        className="absolute top-20 right-[5%] w-64 h-64 rounded-full bg-primary/8 blur-3xl"
        animate={{ scale: [1, 1.2, 1], x: [0, 20, 0] }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 left-[5%] w-80 h-80 rounded-full bg-accent/10 blur-3xl"
        animate={{ scale: [1, 0.85, 1], y: [0, -30, 0] }}
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      {/* Floating bubbles */}
      {BUBBLES.map((bubble) => (
        <motion.div
          key={bubble.id}
          className="absolute rounded-full bg-primary/10 border border-primary/20"
          style={{
            width: bubble.size,
            height: bubble.size,
            left: `${bubble.left}%`,
            top: `${bubble.top}%`,
          }}
          animate={{ y: [0, -(bubble.size + 12), 0], opacity: [0.4, 0.8, 0.4] }}
          transition={{
            duration: bubble.dur,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: bubble.delay,
          }}
        />
      ))}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 pt-32 grid lg:grid-cols-2 gap-12 lg:gap-8 items-center w-full">
        {/* Left — Text */}
        <motion.div
          style={{ y: textY, opacity: heroOpacity }}
          className="text-left"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary font-semibold text-sm mb-6"
            data-ocid="hero.badge"
          >
            <Sparkles className="w-4 h-4" />
            Premium B2B Customization
          </motion.div>

          {/* Taglines */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mb-4 space-y-1"
          >
            <p className="font-display font-black text-2xl sm:text-3xl tracking-tight bg-gradient-to-r from-primary via-accent-bright to-primary bg-clip-text text-transparent drop-shadow-[0_0_18px_oklch(0.62_0.22_200/0.55)]">
              Your Brand. Every Sip.
            </p>
            <p className="font-body font-semibold text-base sm:text-lg text-muted-foreground tracking-wide">
              Where Custom Meets Premium.
            </p>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl leading-[1.05] tracking-tight text-foreground mb-6"
            data-ocid="hero.headline"
          >
            Craft Your{" "}
            <span className="text-accent-bright relative">
              Brand&apos;s
              <span className="absolute -bottom-1 left-0 right-0 h-1 bg-primary/40 rounded-full" />
            </span>
            <br />
            <span className="text-accent-bright">Signature</span>
            <br />
            Bottle
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-lg font-body"
            data-ocid="hero.subheadline"
          >
            Elevate every sip. Custom-branded recyclable water bottles for
            hotels, cafes, and businesses — at unbeatable rates. Your logo. Your
            story. Every bottle.
          </motion.p>

          {/* Trust signals */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-3 mb-8"
          >
            <span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground font-medium">
              <Recycle className="w-4 h-4 text-primary" /> 100% Recyclable
            </span>
            <span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground font-medium">
              <Building2 className="w-4 h-4 text-primary" /> B2B Specialists
            </span>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button
              type="button"
              onClick={() => scrollTo("#inquiry")}
              className="group flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-primary text-primary-foreground font-bold text-base shadow-elevated hover:shadow-glow-aqua hover:scale-105 transition-all duration-300"
              data-ocid="hero.cta_primary_button"
            >
              Start Customizing
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
            <button
              type="button"
              onClick={() => scrollTo("#compare")}
              className="flex items-center justify-center gap-2 px-8 py-4 rounded-2xl border-2 border-primary/30 text-primary font-bold text-base hover:bg-primary/5 hover:border-primary/60 transition-all duration-300"
              data-ocid="hero.cta_secondary_button"
            >
              See Comparison
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="mt-12 grid grid-cols-3 gap-4 pt-8 border-t border-border"
          >
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="text-center sm:text-left"
                data-ocid="hero.stat"
              >
                <div className="font-display font-black text-2xl sm:text-3xl text-accent-bright">
                  {stat.value}
                </div>
                <div className="text-xs text-muted-foreground font-semibold mt-0.5">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right — Bottle */}
        <div className="relative flex items-center justify-center lg:justify-end">
          <motion.div
            style={{ y: bottleY, rotate: bottleRotate }}
            className="relative"
          >
            {/* Glow rings */}
            <div className="absolute inset-8 rounded-full bg-primary/15 blur-2xl animate-glow" />
            <div
              className="absolute inset-16 rounded-full bg-primary/25 blur-xl animate-glow"
              style={{ animationDelay: "0.5s" }}
            />

            <motion.img
              src="/assets/generated/hero-bottle.dim_800x900.png"
              alt="Aqua Ownn premium custom water bottle"
              className="relative w-64 sm:w-80 lg:w-96 xl:w-[420px] h-auto object-contain drop-shadow-2xl animate-float"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.9,
                delay: 0.3,
                type: "spring",
                stiffness: 100,
              }}
              data-ocid="hero.bottle_image"
            />

            {/* Floating label badge */}
            <motion.div
              className="absolute top-8 -right-4 sm:-right-8 glass-card rounded-2xl px-4 py-3 shadow-elevated"
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              <div className="text-xs font-bold text-primary uppercase tracking-wide">
                Custom Label
              </div>
              <div className="text-sm font-black text-foreground">
                Your Brand Here
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
      >
        <span className="text-xs text-muted-foreground font-medium">
          Scroll to explore
        </span>
        <div className="w-5 h-8 rounded-full border-2 border-primary/40 flex items-start justify-center pt-1.5">
          <motion.div
            className="w-1.5 h-2 rounded-full bg-primary"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
          />
        </div>
      </motion.div>
    </section>
  );
}
