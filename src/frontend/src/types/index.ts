export interface NavLink {
  label: string;
  href: string;
}

export interface Benefit {
  icon: string;
  title: string;
  description: string;
}

export interface ComparisonItem {
  label: string;
  xyz: string | boolean;
  aqua: string | boolean;
}

export interface InquiryForm {
  brandName: string;
  contactPerson: string;
  phone: string;
  businessType: string;
  quantity: string;
  message: string;
}

export interface ScrollState {
  scrollY: number;
  scrollProgress: number;
  direction: "up" | "down";
}
