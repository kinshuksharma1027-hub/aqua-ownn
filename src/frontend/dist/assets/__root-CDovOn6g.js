import { r as reactExports, j as jsxRuntimeExports, O as Outlet } from "./index-Dvwu-T9G.js";
import { u as useScrollPosition } from "./useScrollPosition-DDE3F8aK.js";
import { c as createLucideIcon } from "./createLucideIcon-bMRtb0YX.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  [
    "path",
    {
      d: "M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z",
      key: "1ptgy4"
    }
  ],
  [
    "path",
    {
      d: "M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97",
      key: "1sl1rz"
    }
  ]
];
const Droplets = createLucideIcon("droplets", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "M4 12h16", key: "1lakjw" }],
  ["path", { d: "M4 18h16", key: "19g7jn" }],
  ["path", { d: "M4 6h16", key: "1o0s65" }]
];
const Menu = createLucideIcon("menu", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
];
const X = createLucideIcon("x", __iconNode);
const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Compare", href: "#compare" },
  { label: "Why Us", href: "#why-us" },
  { label: "Inquiry", href: "#inquiry" }
];
function scrollTo(id) {
  const el = document.querySelector(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}
function Layout({ children }) {
  const { scrollY } = useScrollPosition();
  const [mobileOpen, setMobileOpen] = reactExports.useState(false);
  const [activeSection, setActiveSection] = reactExports.useState("home");
  const scrolled = scrollY > 60;
  reactExports.useEffect(() => {
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
  const year = (/* @__PURE__ */ new Date()).getFullYear();
  const hostname = typeof window !== "undefined" ? window.location.hostname : "";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen flex flex-col bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "header",
      {
        className: `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-card/90 backdrop-blur-xl border-b border-border shadow-subtle" : "bg-transparent"}`,
        "data-ocid": "nav.header",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between h-16 md:h-20", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                onClick: () => scrollTo("#home"),
                className: "flex items-center gap-2.5 group",
                "data-ocid": "nav.logo_link",
                "aria-label": "Go to home",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-9 h-9 rounded-xl gradient-aqua flex items-center justify-center shadow-subtle group-hover:shadow-glow-aqua transition-all duration-300", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Droplets,
                      {
                        className: "w-5 h-5 text-primary-foreground",
                        strokeWidth: 2.2
                      }
                    ) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 rounded-xl animate-pulse-ring bg-primary/20 -z-10" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-display font-bold text-xl tracking-tight text-foreground", children: [
                    "aqua ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-accent-bright", children: "ownn" })
                  ] })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "nav",
              {
                className: "hidden md:flex items-center gap-1",
                "aria-label": "Main navigation",
                children: NAV_LINKS.map((link) => {
                  const id = link.href.slice(1);
                  const isActive = activeSection === id;
                  return /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      type: "button",
                      onClick: () => scrollTo(link.href),
                      className: `px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${isActive ? "text-primary bg-primary/10 shadow-sm" : "text-muted-foreground hover:text-foreground hover:bg-muted/60"}`,
                      "data-ocid": `nav.${id}_link`,
                      children: link.label
                    },
                    link.href
                  );
                })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => scrollTo("#inquiry"),
                  className: "hidden md:flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-primary-foreground font-semibold text-sm shadow-elevated hover:shadow-glow-aqua hover:scale-105 transition-all duration-200",
                  "data-ocid": "nav.cta_button",
                  children: "Get Started"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  className: "md:hidden p-2 rounded-lg text-foreground hover:bg-muted/60 transition-smooth",
                  onClick: () => setMobileOpen((v) => !v),
                  "aria-label": mobileOpen ? "Close menu" : "Open menu",
                  "data-ocid": "nav.mobile_toggle",
                  children: mobileOpen ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-5 h-5" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { className: "w-5 h-5" })
                }
              )
            ] })
          ] }) }),
          mobileOpen && /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "md:hidden bg-card/95 backdrop-blur-xl border-t border-border px-4 py-4 space-y-1",
              "data-ocid": "nav.mobile_menu",
              children: [
                NAV_LINKS.map((link) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => {
                      scrollTo(link.href);
                      setMobileOpen(false);
                    },
                    className: "w-full text-left px-4 py-3 rounded-lg text-foreground font-semibold hover:bg-muted/60 transition-smooth",
                    "data-ocid": `nav.mobile_${link.href.slice(1)}_link`,
                    children: link.label
                  },
                  link.href
                )),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => {
                      scrollTo("#inquiry");
                      setMobileOpen(false);
                    },
                    className: "w-full mt-2 px-4 py-3 rounded-xl bg-primary text-primary-foreground font-bold text-center shadow-elevated transition-smooth",
                    "data-ocid": "nav.mobile_cta_button",
                    children: "Get Started"
                  }
                )
              ]
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "flex-1", children }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "bg-foreground text-background", "data-ocid": "footer", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2.5 mb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-9 h-9 rounded-xl gradient-aqua flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              Droplets,
              {
                className: "w-5 h-5 text-primary-foreground",
                strokeWidth: 2.2
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display font-bold text-xl text-background/90", children: "aqua ownn" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-background/60 text-sm leading-relaxed max-w-xs", children: "Premium custom-branded water bottles for hotels, cafes, and businesses across India." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-display font-bold text-background/90 mb-4 text-sm uppercase tracking-widest", children: "Contact" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-sm text-background/60", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "font-semibold text-background/80", children: "Naman Sharma" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Savitri Vihar, Amrit Nagar" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "High Tension Road, ISKON Road" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Mansarovar, Jaipur" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "pt-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: "https://wa.me/917357941899?text=Hi%2C%20I%20want%20to%20enquire%20about%20custom%20water%20bottles",
                className: "text-primary hover:text-primary/80 font-semibold transition-smooth",
                target: "_blank",
                rel: "noopener noreferrer",
                "data-ocid": "footer.whatsapp_link",
                children: "+91 7357941899"
              }
            ) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-display font-bold text-background/90 mb-4 text-sm uppercase tracking-widest", children: "Follow Us" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "a",
            {
              href: "https://www.instagram.com/namansharma__52",
              target: "_blank",
              rel: "noopener noreferrer",
              className: "inline-flex items-center gap-2 text-background/60 hover:text-primary transition-smooth text-sm font-semibold",
              "data-ocid": "footer.instagram_link",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-8 h-8 rounded-lg bg-background/10 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "svg",
                  {
                    className: "w-4 h-4",
                    viewBox: "0 0 24 24",
                    fill: "currentColor",
                    "aria-hidden": "true",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" })
                  }
                ) }),
                "@namansharma__52"
              ]
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 pt-6 border-t border-background/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-background/40", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
          "© ",
          year,
          ". Built with love using",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`,
              className: "hover:text-background/60 transition-smooth underline underline-offset-2",
              target: "_blank",
              rel: "noopener noreferrer",
              children: "caffeine.ai"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-background/30", children: "Made in Jaipur, India 🇮🇳" })
      ] })
    ] }) })
  ] });
}
function RootLayout() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Layout, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) });
}
export {
  RootLayout as default
};
