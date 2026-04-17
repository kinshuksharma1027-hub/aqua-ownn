import { r as reactExports, j as jsxRuntimeExports } from "./index-Dvwu-T9G.js";
import { a as useInView } from "./useScrollPosition-DDE3F8aK.js";
import { l as motion } from "./proxy-BP_ChBL_.js";
import { c as createLucideIcon } from "./createLucideIcon-bMRtb0YX.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$6 = [
  ["rect", { width: "16", height: "20", x: "4", y: "2", rx: "2", ry: "2", key: "76otgf" }],
  ["path", { d: "M9 22v-4h6v4", key: "r93iot" }],
  ["path", { d: "M8 6h.01", key: "1dz90k" }],
  ["path", { d: "M16 6h.01", key: "1x0f13" }],
  ["path", { d: "M12 6h.01", key: "1vi96p" }],
  ["path", { d: "M12 10h.01", key: "1nrarc" }],
  ["path", { d: "M12 14h.01", key: "1etili" }],
  ["path", { d: "M16 10h.01", key: "1m94wz" }],
  ["path", { d: "M16 14h.01", key: "1gbofw" }],
  ["path", { d: "M8 10h.01", key: "19clt8" }],
  ["path", { d: "M8 14h.01", key: "6423bh" }]
];
const Building = createLucideIcon("building", __iconNode$6);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$5 = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]];
const ChevronDown = createLucideIcon("chevron-down", __iconNode$5);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$4 = [
  ["path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z", key: "1lielz" }]
];
const MessageSquare = createLucideIcon("message-square", __iconNode$4);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$3 = [
  [
    "path",
    {
      d: "M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",
      key: "1a0edw"
    }
  ],
  ["path", { d: "M12 22V12", key: "d0xqtd" }],
  ["polyline", { points: "3.29 7 12 12 20.71 7", key: "ousv84" }],
  ["path", { d: "m7.5 4.27 9 5.15", key: "1c824w" }]
];
const Package = createLucideIcon("package", __iconNode$3);
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
      d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",
      key: "9njp5v"
    }
  ]
];
const Phone = createLucideIcon("phone", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  [
    "path",
    {
      d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
      key: "1ffxy3"
    }
  ],
  ["path", { d: "m21.854 2.147-10.94 10.939", key: "12cjpa" }]
];
const Send = createLucideIcon("send", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
  ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }]
];
const User = createLucideIcon("user", __iconNode);
const BUSINESS_TYPES = [
  "Hotel / Resort",
  "Café / Restaurant",
  "Corporate Office",
  "Events Company",
  "Retail Store",
  "Other"
];
const QUANTITY_OPTIONS = [
  "100–500 bottles",
  "500–1,000 bottles",
  "1,000–5,000 bottles",
  "5,000–10,000 bottles",
  "10,000+ bottles"
];
const EMPTY_FORM = {
  brandName: "",
  contactPerson: "",
  phone: "",
  businessType: "",
  quantity: "",
  message: ""
};
function buildWhatsAppUrl(form) {
  const msg = encodeURIComponent(
    `Hi Naman! I want to enquire about custom water bottles for Aqua Ownn.

Brand Name: ${form.brandName}
Contact Person: ${form.contactPerson}
Phone: ${form.phone}
Business Type: ${form.businessType}
Quantity Needed: ${form.quantity}
Message: ${form.message || "Please contact me to discuss further."}`
  );
  return `https://wa.me/917357941899?text=${msg}`;
}
function InstagramIcon({ className = "w-6 h-6" }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "svg",
    {
      viewBox: "0 0 24 24",
      className,
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      "aria-hidden": "true",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("defs", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("linearGradient", { id: "igGrad", x1: "0%", y1: "100%", x2: "100%", y2: "0%", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "0%", stopColor: "#f09433" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "25%", stopColor: "#e6683c" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "50%", stopColor: "#dc2743" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "75%", stopColor: "#cc2366" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "100%", stopColor: "#bc1888" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "rect",
          {
            x: "2",
            y: "2",
            width: "20",
            height: "20",
            rx: "5.5",
            ry: "5.5",
            fill: "url(#igGrad)"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "circle",
          {
            cx: "12",
            cy: "12",
            r: "4.5",
            stroke: "white",
            strokeWidth: "1.8",
            fill: "none"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "17.5", cy: "6.5", r: "1.2", fill: "white" })
      ]
    }
  );
}
function InquirySection() {
  const [ref, inView] = useInView(0.1);
  const [form, setForm] = reactExports.useState(EMPTY_FORM);
  const [errors, setErrors] = reactExports.useState({});
  function validate() {
    const newErrors = {};
    if (!form.brandName.trim()) newErrors.brandName = "Brand name is required";
    if (!form.contactPerson.trim())
      newErrors.contactPerson = "Contact person is required";
    if (!form.phone.trim() || !/^\+?[0-9\s-]{8,15}$/.test(form.phone.trim()))
      newErrors.phone = "Valid phone number required";
    if (!form.businessType)
      newErrors.businessType = "Please select a business type";
    if (!form.quantity)
      newErrors.quantity = "Please select approximate quantity";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (!validate()) return;
    window.open(buildWhatsAppUrl(form), "_blank", "noopener,noreferrer");
  }
  function handleChange(field, value) {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: void 0 }));
  }
  const inputBase = "w-full px-4 py-3 rounded-xl border bg-card text-foreground font-body text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/60 transition-smooth";
  const inputError = "border-destructive focus:ring-destructive/30";
  const inputNormal = "border-border";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "section",
    {
      id: "inquiry",
      className: "py-20 md:py-28 gradient-aqua relative overflow-hidden",
      "data-ocid": "inquiry.section",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_80%_50%,oklch(0.62_0.22_200/0.12),transparent)]" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-[radial-gradient(ellipse_40%_60%_at_10%_30%,oklch(0.45_0.2_200/0.08),transparent)]" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8",
            ref,
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-2 gap-12 lg:gap-16 items-start", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                motion.div,
                {
                  initial: { opacity: 0, x: -40 },
                  animate: inView ? { opacity: 1, x: 0 } : {},
                  transition: { duration: 0.7 },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold tracking-widest uppercase text-primary mb-3 block", children: "Get In Touch" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display font-bold text-4xl sm:text-5xl tracking-tight text-foreground mb-6 leading-tight", children: [
                      "Let's Build Your",
                      " ",
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-accent-bright", children: "Branded Bottle" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-lg leading-relaxed mb-8", children: "Ready to elevate your brand? Fill in the form and we'll connect on WhatsApp instantly. Fast quotes, zero commitment." }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "a",
                        {
                          href: "https://wa.me/917357941899?text=Hi%20Naman%2C%20I%27d%20like%20to%20enquire%20about%20custom%20water%20bottles",
                          target: "_blank",
                          rel: "noopener noreferrer",
                          className: "flex items-center gap-4 bg-card/70 backdrop-blur rounded-2xl border border-border p-5 hover:border-primary/40 hover:shadow-elevated transition-all duration-300 group",
                          "data-ocid": "inquiry.whatsapp_link",
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MessageSquare, { className: "w-6 h-6 text-primary" }) }),
                            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold text-foreground text-sm", children: "WhatsApp" }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-primary font-semibold", children: "+91 7357941899" })
                            ] })
                          ]
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 bg-card/70 backdrop-blur rounded-2xl border border-border p-5", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "w-6 h-6 text-primary" }) }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold text-foreground text-sm", children: "Phone" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-muted-foreground text-sm", children: "+91 7357941899" })
                        ] })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "a",
                        {
                          href: "https://www.instagram.com/aqua.ownn?igsh=MTQwZjV5aWRxc2wxaw==",
                          target: "_blank",
                          rel: "noopener noreferrer",
                          className: "flex items-center gap-4 bg-card/70 backdrop-blur rounded-2xl border border-border p-5 hover:border-pink-400/50 hover:shadow-elevated transition-all duration-300 group",
                          "data-ocid": "inquiry.aqua_ownn_instagram_link",
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-xl bg-pink-500/10 flex items-center justify-center group-hover:bg-pink-500/20 transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx(InstagramIcon, { className: "w-6 h-6" }) }),
                            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold text-foreground text-sm", children: "Aqua Ownn Instagram" }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-medium bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 bg-clip-text text-transparent", children: "@aqua.ownn" })
                            ] })
                          ]
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "a",
                        {
                          href: "https://www.instagram.com/namansharma__52?igsh=ZnowaTRhY2xucnRx",
                          target: "_blank",
                          rel: "noopener noreferrer",
                          className: "flex items-center gap-4 bg-card/70 backdrop-blur rounded-2xl border border-border p-5 hover:border-pink-400/50 hover:shadow-elevated transition-all duration-300 group",
                          "data-ocid": "inquiry.owner_instagram_link",
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-xl bg-pink-500/10 flex items-center justify-center group-hover:bg-pink-500/20 transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx(InstagramIcon, { className: "w-6 h-6" }) }),
                            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold text-foreground text-sm", children: "Owner Instagram" }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-medium bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 bg-clip-text text-transparent", children: "@namansharma__52" })
                            ] })
                          ]
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4 bg-card/70 backdrop-blur rounded-2xl border border-border p-5", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Building, { className: "w-6 h-6 text-primary" }) }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold text-foreground text-sm", children: "Location" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-muted-foreground text-sm", children: "Savitri Vihar, Amrit Nagar, High Tension Road, ISKON Road, Mansarovar, Jaipur" })
                        ] })
                      ] })
                    ] })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.div,
                {
                  initial: { opacity: 0, x: 40 },
                  animate: inView ? { opacity: 1, x: 0 } : {},
                  transition: { duration: 0.7, delay: 0.15 },
                  children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "form",
                    {
                      onSubmit: handleSubmit,
                      className: "bg-card rounded-3xl border border-border p-8 shadow-elevated space-y-5",
                      "data-ocid": "inquiry.form",
                      noValidate: true,
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-2xl text-foreground", children: "Request a Quote" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsxs(
                            "label",
                            {
                              className: "block text-sm font-semibold text-foreground mb-1.5",
                              htmlFor: "brand-name",
                              children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsx(Building, { className: "w-4 h-4 inline mr-1.5 -mt-0.5 text-primary" }),
                                "Brand Name *"
                              ]
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "input",
                            {
                              id: "brand-name",
                              type: "text",
                              placeholder: "e.g. The Grand Hotel",
                              value: form.brandName,
                              onChange: (e) => handleChange("brandName", e.target.value),
                              className: `${inputBase} ${errors.brandName ? inputError : inputNormal}`,
                              "data-ocid": "inquiry.brand_name_input"
                            }
                          ),
                          errors.brandName && /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "p",
                            {
                              className: "mt-1 text-xs text-destructive",
                              "data-ocid": "inquiry.brand_name_field_error",
                              children: errors.brandName
                            }
                          )
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsxs(
                            "label",
                            {
                              className: "block text-sm font-semibold text-foreground mb-1.5",
                              htmlFor: "contact-person",
                              children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "w-4 h-4 inline mr-1.5 -mt-0.5 text-primary" }),
                                "Contact Person *"
                              ]
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "input",
                            {
                              id: "contact-person",
                              type: "text",
                              placeholder: "Your name",
                              value: form.contactPerson,
                              onChange: (e) => handleChange("contactPerson", e.target.value),
                              className: `${inputBase} ${errors.contactPerson ? inputError : inputNormal}`,
                              "data-ocid": "inquiry.contact_person_input"
                            }
                          ),
                          errors.contactPerson && /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "p",
                            {
                              className: "mt-1 text-xs text-destructive",
                              "data-ocid": "inquiry.contact_person_field_error",
                              children: errors.contactPerson
                            }
                          )
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsxs(
                            "label",
                            {
                              className: "block text-sm font-semibold text-foreground mb-1.5",
                              htmlFor: "phone",
                              children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "w-4 h-4 inline mr-1.5 -mt-0.5 text-primary" }),
                                "WhatsApp Number *"
                              ]
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "input",
                            {
                              id: "phone",
                              type: "tel",
                              placeholder: "+91 98765 43210",
                              value: form.phone,
                              onChange: (e) => handleChange("phone", e.target.value),
                              className: `${inputBase} ${errors.phone ? inputError : inputNormal}`,
                              "data-ocid": "inquiry.phone_input"
                            }
                          ),
                          errors.phone && /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "p",
                            {
                              className: "mt-1 text-xs text-destructive",
                              "data-ocid": "inquiry.phone_field_error",
                              children: errors.phone
                            }
                          )
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "label",
                            {
                              className: "block text-sm font-semibold text-foreground mb-1.5",
                              htmlFor: "business-type",
                              children: "Business Type *"
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsxs(
                              "select",
                              {
                                id: "business-type",
                                value: form.businessType,
                                onChange: (e) => handleChange("businessType", e.target.value),
                                className: `${inputBase} appearance-none ${errors.businessType ? inputError : inputNormal}`,
                                "data-ocid": "inquiry.business_type_select",
                                children: [
                                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Select your business type" }),
                                  BUSINESS_TYPES.map((bt) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: bt, children: bt }, bt))
                                ]
                              }
                            ),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" })
                          ] }),
                          errors.businessType && /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "p",
                            {
                              className: "mt-1 text-xs text-destructive",
                              "data-ocid": "inquiry.business_type_field_error",
                              children: errors.businessType
                            }
                          )
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsxs(
                            "label",
                            {
                              className: "block text-sm font-semibold text-foreground mb-1.5",
                              htmlFor: "quantity",
                              children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsx(Package, { className: "w-4 h-4 inline mr-1.5 -mt-0.5 text-primary" }),
                                "Monthly Quantity *"
                              ]
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsxs(
                              "select",
                              {
                                id: "quantity",
                                value: form.quantity,
                                onChange: (e) => handleChange("quantity", e.target.value),
                                className: `${inputBase} appearance-none ${errors.quantity ? inputError : inputNormal}`,
                                "data-ocid": "inquiry.quantity_select",
                                children: [
                                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Select approximate quantity" }),
                                  QUANTITY_OPTIONS.map((q) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: q, children: q }, q))
                                ]
                              }
                            ),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" })
                          ] }),
                          errors.quantity && /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "p",
                            {
                              className: "mt-1 text-xs text-destructive",
                              "data-ocid": "inquiry.quantity_field_error",
                              children: errors.quantity
                            }
                          )
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "label",
                            {
                              className: "block text-sm font-semibold text-foreground mb-1.5",
                              htmlFor: "message",
                              children: "Additional Message (optional)"
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "textarea",
                            {
                              id: "message",
                              rows: 3,
                              placeholder: "Tell us about your design ideas, special requirements...",
                              value: form.message,
                              onChange: (e) => handleChange("message", e.target.value),
                              className: `${inputBase} resize-none ${inputNormal}`,
                              "data-ocid": "inquiry.message_textarea"
                            }
                          )
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          "button",
                          {
                            type: "submit",
                            className: "w-full flex items-center justify-center gap-2.5 px-6 py-4 rounded-2xl bg-primary text-primary-foreground font-bold text-base shadow-elevated hover:shadow-glow-aqua hover:scale-[1.02] active:scale-[0.98] transition-all duration-300",
                            "data-ocid": "inquiry.submit_button",
                            children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "w-5 h-5" }),
                              "Send via WhatsApp"
                            ]
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center text-xs text-muted-foreground", children: "Your inquiry will open WhatsApp directly. We respond within 1 hour." })
                      ]
                    }
                  )
                }
              )
            ] })
          }
        )
      ]
    }
  );
}
export {
  InquirySection as default
};
