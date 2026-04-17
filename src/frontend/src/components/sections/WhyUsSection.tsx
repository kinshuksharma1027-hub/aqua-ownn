import {
  Banknote,
  Paintbrush,
  Recycle,
  Star,
  TrendingUp,
  Zap,
} from "lucide-react";
import { motion } from "motion/react";
import { useInView } from "../../hooks/useScrollPosition";

const BENEFITS = [
  {
    id: "custom-branding",
    icon: Paintbrush,
    title: "Fully Custom Branding",
    description:
      "Your logo, colors, and design printed on every bottle. Stand out in every hotel room, café table, and conference hall.",
    highlight: "Design Freedom",
  },
  {
    id: "premium-quality",
    icon: Star,
    title: "Premium Print Quality",
    description:
      "High-resolution UV printing on crystal-clear recyclable plastic. Labels that stay vibrant, sharp, and waterproof.",
    highlight: "Crystal Clear",
  },
  {
    id: "affordable-rates",
    icon: Banknote,
    title: "Affordable B2B Rates",
    description:
      "Industry-best rates with bulk discounts for every order size. World-class quality that fits your business budget perfectly.",
    highlight: "Bulk Discounts",
  },
  {
    id: "brand-value",
    icon: TrendingUp,
    title: "Boost Brand Value",
    description:
      "Every bottle is a branded touchpoint. Guests remember your name, not the generic brand they drank from.",
    highlight: "Higher Recall",
  },
  {
    id: "eco-friendly",
    icon: Recycle,
    title: "100% Recyclable",
    description:
      "BPA-free, food-grade recyclable plastic — just like other brands, but with your own brand on it. Show your guests you care about the planet.",
    highlight: "Eco-Certified",
  },
  {
    id: "fast-delivery",
    icon: Zap,
    title: "Fast 48h Turnaround",
    description:
      "Express order processing and bulk shipping across India. Never run out of branded bottles for your property.",
    highlight: "48h Delivery",
  },
];

const TESTIMONIALS = [
  {
    text: "Our guests love seeing our logo on the bottles. It reinforces our brand at every touchpoint.",
    author: "Rajesh Mehta",
    role: "Hotel GM, Jaipur",
    initial: "R",
  },
  {
    text: "Switched from XYZ brand — our café now has a premium feel that customers notice immediately.",
    author: "Priya Singh",
    role: "Café Owner, Delhi",
    initial: "P",
  },
  {
    text: "The quality is beyond what we expected — our guests love the branded bottles at every event!",
    author: "Amit Verma",
    role: "Events Manager",
    initial: "A",
  },
];

export default function WhyUsSection() {
  const [ref, inView] = useInView(0.1);

  return (
    <section
      id="why-us"
      className="py-20 md:py-28 bg-background"
      data-ocid="whyus.section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="text-xs font-bold tracking-widest uppercase text-primary mb-3 block">
            Why Brands Choose Us
          </span>
          <h2 className="font-display font-bold text-4xl sm:text-5xl tracking-tight text-foreground mb-4">
            Everything Your Brand{" "}
            <span className="text-accent-bright">Deserves</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We don't just sell water bottles — we hand your brand a marketing
            tool that works 24/7.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20"
          data-ocid="whyus.benefits_list"
        >
          {BENEFITS.map((benefit, i) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={benefit.id}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group relative bg-card rounded-3xl border border-border p-7 hover:border-primary/40 hover:shadow-card-hover transition-all duration-300 overflow-hidden"
                data-ocid={`whyus.benefit.${i + 1}`}
              >
                {/* Hover glow */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,oklch(0.62_0.22_200/0.06),transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                <div className="relative">
                  <div className="w-12 h-12 rounded-2xl gradient-aqua flex items-center justify-center mb-5 shadow-subtle group-hover:shadow-glow-aqua transition-all duration-300">
                    <Icon className="w-6 h-6 text-primary" strokeWidth={2} />
                  </div>

                  <div className="inline-block px-2.5 py-1 rounded-lg bg-primary/10 text-primary text-xs font-bold mb-3">
                    {benefit.highlight}
                  </div>

                  <h3 className="font-display font-bold text-lg text-foreground mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <h3 className="font-display font-bold text-2xl text-foreground text-center mb-8">
            What Our Clients Say
          </h3>
          <div
            className="grid sm:grid-cols-3 gap-6"
            data-ocid="whyus.testimonials_list"
          >
            {TESTIMONIALS.map((t, i) => (
              <motion.div
                key={t.author}
                className="bg-card rounded-2xl border border-border p-6 shadow-subtle hover:shadow-elevated transition-all duration-300"
                whileHover={{ y: -4 }}
                data-ocid={`whyus.testimonial.${i + 1}`}
              >
                <div className="flex gap-1 mb-3">
                  {[0, 1, 2, 3, 4].map((si) => (
                    <Star
                      key={`${t.author}-star-${si}`}
                      className="w-4 h-4 fill-primary text-primary"
                    />
                  ))}
                </div>
                <p className="text-foreground text-sm leading-relaxed mb-4 italic">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full gradient-aqua flex items-center justify-center font-bold text-primary text-sm">
                    {t.initial}
                  </div>
                  <div>
                    <div className="font-bold text-foreground text-sm">
                      {t.author}
                    </div>
                    <div className="text-muted-foreground text-xs">
                      {t.role}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
