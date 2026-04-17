import {
  Building,
  ChevronDown,
  MessageSquare,
  Package,
  Phone,
  Send,
  User,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { useInView } from "../../hooks/useScrollPosition";
import type { InquiryForm } from "../../types";

const BUSINESS_TYPES = [
  "Hotel / Resort",
  "Café / Restaurant",
  "Corporate Office",
  "Events Company",
  "Retail Store",
  "Other",
];
const QUANTITY_OPTIONS = [
  "100–500 bottles",
  "500–1,000 bottles",
  "1,000–5,000 bottles",
  "5,000–10,000 bottles",
  "10,000+ bottles",
];

const EMPTY_FORM: InquiryForm = {
  brandName: "",
  contactPerson: "",
  phone: "",
  businessType: "",
  quantity: "",
  message: "",
};

function buildWhatsAppUrl(form: InquiryForm): string {
  const msg = encodeURIComponent(
    `Hi Naman! I want to enquire about custom water bottles for Aqua Ownn.\n\nBrand Name: ${form.brandName}\nContact Person: ${form.contactPerson}\nPhone: ${form.phone}\nBusiness Type: ${form.businessType}\nQuantity Needed: ${form.quantity}\nMessage: ${form.message || "Please contact me to discuss further."}`,
  );
  return `https://wa.me/917357941899?text=${msg}`;
}

/** Instagram gradient icon SVG */
function InstagramIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="igGrad" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#f09433" />
          <stop offset="25%" stopColor="#e6683c" />
          <stop offset="50%" stopColor="#dc2743" />
          <stop offset="75%" stopColor="#cc2366" />
          <stop offset="100%" stopColor="#bc1888" />
        </linearGradient>
      </defs>
      <rect
        x="2"
        y="2"
        width="20"
        height="20"
        rx="5.5"
        ry="5.5"
        fill="url(#igGrad)"
      />
      <circle
        cx="12"
        cy="12"
        r="4.5"
        stroke="white"
        strokeWidth="1.8"
        fill="none"
      />
      <circle cx="17.5" cy="6.5" r="1.2" fill="white" />
    </svg>
  );
}

export default function InquirySection() {
  const [ref, inView] = useInView(0.1);
  const [form, setForm] = useState<InquiryForm>(EMPTY_FORM);
  const [errors, setErrors] = useState<
    Partial<Record<keyof InquiryForm, string>>
  >({});

  function validate(): boolean {
    const newErrors: Partial<Record<keyof InquiryForm, string>> = {};
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

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    window.open(buildWhatsAppUrl(form), "_blank", "noopener,noreferrer");
  }

  function handleChange(field: keyof InquiryForm, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  }

  const inputBase =
    "w-full px-4 py-3 rounded-xl border bg-card text-foreground font-body text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/60 transition-smooth";
  const inputError = "border-destructive focus:ring-destructive/30";
  const inputNormal = "border-border";

  return (
    <section
      id="inquiry"
      className="py-20 md:py-28 gradient-aqua relative overflow-hidden"
      data-ocid="inquiry.section"
    >
      {/* Decorative BG */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_80%_50%,oklch(0.62_0.22_200/0.12),transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_60%_at_10%_30%,oklch(0.45_0.2_200/0.08),transparent)]" />

      <div
        className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
        ref={ref}
      >
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left — Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="text-xs font-bold tracking-widest uppercase text-primary mb-3 block">
              Get In Touch
            </span>
            <h2 className="font-display font-bold text-4xl sm:text-5xl tracking-tight text-foreground mb-6 leading-tight">
              Let&apos;s Build Your{" "}
              <span className="text-accent-bright">Branded Bottle</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Ready to elevate your brand? Fill in the form and we&apos;ll
              connect on WhatsApp instantly. Fast quotes, zero commitment.
            </p>

            {/* Contact cards */}
            <div className="space-y-4">
              {/* WhatsApp */}
              <a
                href="https://wa.me/917357941899?text=Hi%20Naman%2C%20I%27d%20like%20to%20enquire%20about%20custom%20water%20bottles"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-card/70 backdrop-blur rounded-2xl border border-border p-5 hover:border-primary/40 hover:shadow-elevated transition-all duration-300 group"
                data-ocid="inquiry.whatsapp_link"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <MessageSquare className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="font-bold text-foreground text-sm">
                    WhatsApp
                  </div>
                  <div className="text-primary font-semibold">
                    +91 7357941899
                  </div>
                </div>
              </a>

              {/* Phone */}
              <div className="flex items-center gap-4 bg-card/70 backdrop-blur rounded-2xl border border-border p-5">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="font-bold text-foreground text-sm">Phone</div>
                  <div className="text-muted-foreground text-sm">
                    +91 7357941899
                  </div>
                </div>
              </div>

              {/* Aqua Ownn Instagram — ABOVE owner Instagram */}
              <a
                href="https://www.instagram.com/aqua.ownn?igsh=MTQwZjV5aWRxc2wxaw=="
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-card/70 backdrop-blur rounded-2xl border border-border p-5 hover:border-pink-400/50 hover:shadow-elevated transition-all duration-300 group"
                data-ocid="inquiry.aqua_ownn_instagram_link"
              >
                <div className="w-12 h-12 rounded-xl bg-pink-500/10 flex items-center justify-center group-hover:bg-pink-500/20 transition-colors">
                  <InstagramIcon className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-bold text-foreground text-sm">
                    Aqua Ownn Instagram
                  </div>
                  <div className="text-sm font-medium bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
                    @aqua.ownn
                  </div>
                </div>
              </a>

              {/* Owner Instagram */}
              <a
                href="https://www.instagram.com/namansharma__52?igsh=ZnowaTRhY2xucnRx"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-card/70 backdrop-blur rounded-2xl border border-border p-5 hover:border-pink-400/50 hover:shadow-elevated transition-all duration-300 group"
                data-ocid="inquiry.owner_instagram_link"
              >
                <div className="w-12 h-12 rounded-xl bg-pink-500/10 flex items-center justify-center group-hover:bg-pink-500/20 transition-colors">
                  <InstagramIcon className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-bold text-foreground text-sm">
                    Owner Instagram
                  </div>
                  <div className="text-sm font-medium bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
                    @namansharma__52
                  </div>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-start gap-4 bg-card/70 backdrop-blur rounded-2xl border border-border p-5">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Building className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="font-bold text-foreground text-sm">
                    Location
                  </div>
                  <div className="text-muted-foreground text-sm">
                    Savitri Vihar, Amrit Nagar, High Tension Road, ISKON Road,
                    Mansarovar, Jaipur
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-card rounded-3xl border border-border p-8 shadow-elevated space-y-5"
              data-ocid="inquiry.form"
              noValidate
            >
              <h3 className="font-display font-bold text-2xl text-foreground">
                Request a Quote
              </h3>

              {/* Brand Name */}
              <div>
                <label
                  className="block text-sm font-semibold text-foreground mb-1.5"
                  htmlFor="brand-name"
                >
                  <Building className="w-4 h-4 inline mr-1.5 -mt-0.5 text-primary" />
                  Brand Name *
                </label>
                <input
                  id="brand-name"
                  type="text"
                  placeholder="e.g. The Grand Hotel"
                  value={form.brandName}
                  onChange={(e) => handleChange("brandName", e.target.value)}
                  className={`${inputBase} ${errors.brandName ? inputError : inputNormal}`}
                  data-ocid="inquiry.brand_name_input"
                />
                {errors.brandName && (
                  <p
                    className="mt-1 text-xs text-destructive"
                    data-ocid="inquiry.brand_name_field_error"
                  >
                    {errors.brandName}
                  </p>
                )}
              </div>

              {/* Contact Person */}
              <div>
                <label
                  className="block text-sm font-semibold text-foreground mb-1.5"
                  htmlFor="contact-person"
                >
                  <User className="w-4 h-4 inline mr-1.5 -mt-0.5 text-primary" />
                  Contact Person *
                </label>
                <input
                  id="contact-person"
                  type="text"
                  placeholder="Your name"
                  value={form.contactPerson}
                  onChange={(e) =>
                    handleChange("contactPerson", e.target.value)
                  }
                  className={`${inputBase} ${errors.contactPerson ? inputError : inputNormal}`}
                  data-ocid="inquiry.contact_person_input"
                />
                {errors.contactPerson && (
                  <p
                    className="mt-1 text-xs text-destructive"
                    data-ocid="inquiry.contact_person_field_error"
                  >
                    {errors.contactPerson}
                  </p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label
                  className="block text-sm font-semibold text-foreground mb-1.5"
                  htmlFor="phone"
                >
                  <Phone className="w-4 h-4 inline mr-1.5 -mt-0.5 text-primary" />
                  WhatsApp Number *
                </label>
                <input
                  id="phone"
                  type="tel"
                  placeholder="+91 98765 43210"
                  value={form.phone}
                  onChange={(e) => handleChange("phone", e.target.value)}
                  className={`${inputBase} ${errors.phone ? inputError : inputNormal}`}
                  data-ocid="inquiry.phone_input"
                />
                {errors.phone && (
                  <p
                    className="mt-1 text-xs text-destructive"
                    data-ocid="inquiry.phone_field_error"
                  >
                    {errors.phone}
                  </p>
                )}
              </div>

              {/* Business Type */}
              <div>
                <label
                  className="block text-sm font-semibold text-foreground mb-1.5"
                  htmlFor="business-type"
                >
                  Business Type *
                </label>
                <div className="relative">
                  <select
                    id="business-type"
                    value={form.businessType}
                    onChange={(e) =>
                      handleChange("businessType", e.target.value)
                    }
                    className={`${inputBase} appearance-none ${errors.businessType ? inputError : inputNormal}`}
                    data-ocid="inquiry.business_type_select"
                  >
                    <option value="">Select your business type</option>
                    {BUSINESS_TYPES.map((bt) => (
                      <option key={bt} value={bt}>
                        {bt}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                </div>
                {errors.businessType && (
                  <p
                    className="mt-1 text-xs text-destructive"
                    data-ocid="inquiry.business_type_field_error"
                  >
                    {errors.businessType}
                  </p>
                )}
              </div>

              {/* Quantity */}
              <div>
                <label
                  className="block text-sm font-semibold text-foreground mb-1.5"
                  htmlFor="quantity"
                >
                  <Package className="w-4 h-4 inline mr-1.5 -mt-0.5 text-primary" />
                  Monthly Quantity *
                </label>
                <div className="relative">
                  <select
                    id="quantity"
                    value={form.quantity}
                    onChange={(e) => handleChange("quantity", e.target.value)}
                    className={`${inputBase} appearance-none ${errors.quantity ? inputError : inputNormal}`}
                    data-ocid="inquiry.quantity_select"
                  >
                    <option value="">Select approximate quantity</option>
                    {QUANTITY_OPTIONS.map((q) => (
                      <option key={q} value={q}>
                        {q}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                </div>
                {errors.quantity && (
                  <p
                    className="mt-1 text-xs text-destructive"
                    data-ocid="inquiry.quantity_field_error"
                  >
                    {errors.quantity}
                  </p>
                )}
              </div>

              {/* Message */}
              <div>
                <label
                  className="block text-sm font-semibold text-foreground mb-1.5"
                  htmlFor="message"
                >
                  Additional Message (optional)
                </label>
                <textarea
                  id="message"
                  rows={3}
                  placeholder="Tell us about your design ideas, special requirements..."
                  value={form.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  className={`${inputBase} resize-none ${inputNormal}`}
                  data-ocid="inquiry.message_textarea"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2.5 px-6 py-4 rounded-2xl bg-primary text-primary-foreground font-bold text-base shadow-elevated hover:shadow-glow-aqua hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
                data-ocid="inquiry.submit_button"
              >
                <Send className="w-5 h-5" />
                Send via WhatsApp
              </button>

              <p className="text-center text-xs text-muted-foreground">
                Your inquiry will open WhatsApp directly. We respond within 1
                hour.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
