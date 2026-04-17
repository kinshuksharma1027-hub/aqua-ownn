import { Droplets, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useScrollPosition } from "../hooks/useScrollPosition";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Compare", href: "#compare" },
  { label: "Why Us", href: "#why-us" },
  { label: "Inquiry", href: "#inquiry" },
];

function scrollTo(id: string) {
  const el = document.querySelector(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const { scrollY } = useScrollPosition();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const scrolled = scrollY > 60;

  useEffect(() => {
    const sections = ["home", "compare", "why-us", "inquiry"];
    const handler = () => {
      let current = "home";
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) current = id;
      }
      setActiveSection(current);
    };
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Navigation */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-card/90 backdrop-blur-xl border-b border-border shadow-subtle"
            : "bg-transparent"
        }`}
        data-ocid="nav.header"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <button
              type="button"
              onClick={() => scrollTo("#home")}
              className="flex items-center gap-2.5 group"
              data-ocid="nav.logo_link"
              aria-label="Go to home"
            >
              <div className="relative">
                <div className="w-9 h-9 rounded-xl gradient-aqua flex items-center justify-center shadow-subtle group-hover:shadow-glow-aqua transition-all duration-300">
                  <Droplets
                    className="w-5 h-5 text-primary-foreground"
                    strokeWidth={2.2}
                  />
                </div>
                <div className="absolute inset-0 rounded-xl animate-pulse-ring bg-primary/20 -z-10" />
              </div>
              <span className="font-display font-bold text-xl tracking-tight text-foreground">
                aqua <span className="text-accent-bright">ownn</span>
              </span>
            </button>

            {/* Desktop Nav */}
            <nav
              className="hidden md:flex items-center gap-1"
              aria-label="Main navigation"
            >
              {NAV_LINKS.map((link) => {
                const id = link.href.slice(1);
                const isActive = activeSection === id;
                return (
                  <button
                    type="button"
                    key={link.href}
                    onClick={() => scrollTo(link.href)}
                    className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                      isActive
                        ? "text-primary bg-primary/10 shadow-sm"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted/60"
                    }`}
                    data-ocid={`nav.${id}_link`}
                  >
                    {link.label}
                  </button>
                );
              })}
            </nav>

            {/* CTA + Mobile Toggle */}
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => scrollTo("#inquiry")}
                className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-primary-foreground font-semibold text-sm shadow-elevated hover:shadow-glow-aqua hover:scale-105 transition-all duration-200"
                data-ocid="nav.cta_button"
              >
                Get Started
              </button>
              <button
                type="button"
                className="md:hidden p-2 rounded-lg text-foreground hover:bg-muted/60 transition-smooth"
                onClick={() => setMobileOpen((v) => !v)}
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
                data-ocid="nav.mobile_toggle"
              >
                {mobileOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div
            className="md:hidden bg-card/95 backdrop-blur-xl border-t border-border px-4 py-4 space-y-1"
            data-ocid="nav.mobile_menu"
          >
            {NAV_LINKS.map((link) => (
              <button
                type="button"
                key={link.href}
                onClick={() => {
                  scrollTo(link.href);
                  setMobileOpen(false);
                }}
                className="w-full text-left px-4 py-3 rounded-lg text-foreground font-semibold hover:bg-muted/60 transition-smooth"
                data-ocid={`nav.mobile_${link.href.slice(1)}_link`}
              >
                {link.label}
              </button>
            ))}
            <button
              type="button"
              onClick={() => {
                scrollTo("#inquiry");
                setMobileOpen(false);
              }}
              className="w-full mt-2 px-4 py-3 rounded-xl bg-primary text-primary-foreground font-bold text-center shadow-elevated transition-smooth"
              data-ocid="nav.mobile_cta_button"
            >
              Get Started
            </button>
          </div>
        )}
      </header>

      {/* Main content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="bg-foreground text-background" data-ocid="footer">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-9 h-9 rounded-xl gradient-aqua flex items-center justify-center">
                  <Droplets
                    className="w-5 h-5 text-primary-foreground"
                    strokeWidth={2.2}
                  />
                </div>
                <span className="font-display font-bold text-xl text-background/90">
                  aqua ownn
                </span>
              </div>
              <p className="text-background/60 text-sm leading-relaxed max-w-xs">
                Premium custom-branded water bottles for hotels, cafes, and
                businesses across India.
              </p>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-display font-bold text-background/90 mb-4 text-sm uppercase tracking-widest">
                Contact
              </h4>
              <ul className="space-y-2 text-sm text-background/60">
                <li className="font-semibold text-background/80">
                  Naman Sharma
                </li>
                <li>Savitri Vihar, Amrit Nagar</li>
                <li>High Tension Road, ISKON Road</li>
                <li>Mansarovar, Jaipur</li>
                <li className="pt-2">
                  <a
                    href="https://wa.me/917357941899?text=Hi%2C%20I%20want%20to%20enquire%20about%20custom%20water%20bottles"
                    className="text-primary hover:text-primary/80 font-semibold transition-smooth"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-ocid="footer.whatsapp_link"
                  >
                    +91 7357941899
                  </a>
                </li>
              </ul>
            </div>

            {/* Social */}
            <div>
              <h4 className="font-display font-bold text-background/90 mb-4 text-sm uppercase tracking-widest">
                Follow Us
              </h4>
              <a
                href="https://www.instagram.com/namansharma__52"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-background/60 hover:text-primary transition-smooth text-sm font-semibold"
                data-ocid="footer.instagram_link"
              >
                <span className="w-8 h-8 rounded-lg bg-background/10 flex items-center justify-center">
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </span>
                @namansharma__52
              </a>
            </div>
          </div>

          <div className="mt-10 pt-6 border-t border-background/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-background/40">
            <span>
              © {year}. Built with love using{" "}
              <a
                href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`}
                className="hover:text-background/60 transition-smooth underline underline-offset-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                caffeine.ai
              </a>
            </span>
            <span className="text-background/30">Made in Jaipur, India 🇮🇳</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
