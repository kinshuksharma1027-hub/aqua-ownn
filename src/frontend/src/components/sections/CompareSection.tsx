import { CheckCircle, XCircle } from "lucide-react";
import { motion } from "motion/react";
import { useInView } from "../../hooks/useScrollPosition";

const COMPARISON_ROWS = [
  { feature: "Brand Identity", xyz: false, aqua: true },
  { feature: "Custom Label Design", xyz: false, aqua: true },
  { feature: "Premium Sticker Quality", xyz: false, aqua: true },
  { feature: "Transparent Bottle", xyz: false, aqua: true },
  { feature: "Business Logo Printing", xyz: false, aqua: true },
  { feature: "Bulk Order Discounts", xyz: false, aqua: true },
  { feature: "Recyclable Material", xyz: false, aqua: true },
  { feature: "48h Turnaround", xyz: false, aqua: true },
];

/** Photorealistic XYZ other-brand bottle — kraft paper label, camel motif, black cap */
function XYZBottleSVG() {
  return (
    <svg
      viewBox="0 0 160 350"
      width="130"
      height="278"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Other Brands generic water bottle with kraft camel label</title>
      <defs>
        {/* === BODY GRADIENTS === */}
        {/* Main clear plastic — left-to-right cylindrical shading */}
        <linearGradient id="xBodyBase" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#8fb8c4" stopOpacity="0.70" />
          <stop offset="8%" stopColor="#c8dfe6" stopOpacity="0.85" />
          <stop offset="22%" stopColor="#e8f4f8" stopOpacity="0.92" />
          <stop offset="40%" stopColor="#f5fafb" stopOpacity="0.97" />
          <stop offset="58%" stopColor="#eaf5f8" stopOpacity="0.93" />
          <stop offset="76%" stopColor="#c0dce6" stopOpacity="0.86" />
          <stop offset="90%" stopColor="#8ab4c0" stopOpacity="0.72" />
          <stop offset="100%" stopColor="#6898a8" stopOpacity="0.60" />
        </linearGradient>
        {/* Edge shadow overlay — darkens both edges for 3D roundness */}
        <linearGradient id="xBodyEdge" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#1a3a48" stopOpacity="0.32" />
          <stop offset="10%" stopColor="#1a3a48" stopOpacity="0.08" />
          <stop offset="50%" stopColor="#1a3a48" stopOpacity="0.00" />
          <stop offset="90%" stopColor="#0e2838" stopOpacity="0.08" />
          <stop offset="100%" stopColor="#0e2838" stopOpacity="0.38" />
        </linearGradient>
        {/* Central specular highlight — bright vertical streak */}
        <linearGradient id="xBodySpecular" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="white" stopOpacity="0.00" />
          <stop offset="30%" stopColor="white" stopOpacity="0.00" />
          <stop offset="37%" stopColor="white" stopOpacity="0.45" />
          <stop offset="43%" stopColor="white" stopOpacity="0.72" />
          <stop offset="48%" stopColor="white" stopOpacity="0.45" />
          <stop offset="55%" stopColor="white" stopOpacity="0.00" />
          <stop offset="100%" stopColor="white" stopOpacity="0.00" />
        </linearGradient>
        {/* Water fill inside — cyan-tinted lower portion */}
        <linearGradient id="xWater" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#90c8d8" stopOpacity="0.18" />
          <stop offset="60%" stopColor="#5aaabf" stopOpacity="0.32" />
          <stop offset="100%" stopColor="#3a8fa8" stopOpacity="0.45" />
        </linearGradient>

        {/* === NECK GRADIENT === */}
        <linearGradient id="xNeck" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#7ab0bc" stopOpacity="0.70" />
          <stop offset="20%" stopColor="#cce4ea" stopOpacity="0.90" />
          <stop offset="50%" stopColor="#eaf6f8" stopOpacity="0.96" />
          <stop offset="80%" stopColor="#b8dce4" stopOpacity="0.88" />
          <stop offset="100%" stopColor="#6898a8" stopOpacity="0.65" />
        </linearGradient>

        {/* === CAP GRADIENTS === */}
        {/* Matte-black cylindrical cap — top-to-bottom light */}
        <linearGradient id="xCap" x1="20%" y1="0%" x2="80%" y2="100%">
          <stop offset="0%" stopColor="#454545" />
          <stop offset="25%" stopColor="#1e1e1e" />
          <stop offset="60%" stopColor="#0c0c0c" />
          <stop offset="100%" stopColor="#040404" />
        </linearGradient>
        {/* Cap left-edge rim light */}
        <linearGradient id="xCapRimLeft" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="white" stopOpacity="0.22" />
          <stop offset="30%" stopColor="white" stopOpacity="0.00" />
        </linearGradient>
        {/* Cap right-edge rim light */}
        <linearGradient id="xCapRimRight" x1="100%" y1="0%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="white" stopOpacity="0.10" />
          <stop offset="30%" stopColor="white" stopOpacity="0.00" />
        </linearGradient>
        {/* Cap top specular ellipse */}
        <radialGradient
          id="xCapTop"
          cx="40%"
          cy="30%"
          r="60%"
          fx="38%"
          fy="28%"
        >
          <stop offset="0%" stopColor="white" stopOpacity="0.55" />
          <stop offset="50%" stopColor="white" stopOpacity="0.18" />
          <stop offset="100%" stopColor="white" stopOpacity="0.00" />
        </radialGradient>

        {/* === KRAFT LABEL GRADIENTS === */}
        {/* Base label — warm tan kraft paper */}
        <linearGradient id="xLabel" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ddb870" />
          <stop offset="25%" stopColor="#cc9f50" />
          <stop offset="55%" stopColor="#b88338" />
          <stop offset="85%" stopColor="#a57025" />
          <stop offset="100%" stopColor="#8c5e18" />
        </linearGradient>
        {/* Label cylindrical sheen — lighter in center */}
        <linearGradient id="xLabelSheen" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="black" stopOpacity="0.10" />
          <stop offset="35%" stopColor="white" stopOpacity="0.10" />
          <stop offset="52%" stopColor="white" stopOpacity="0.22" />
          <stop offset="70%" stopColor="white" stopOpacity="0.06" />
          <stop offset="100%" stopColor="black" stopOpacity="0.12" />
        </linearGradient>
        {/* Kraft texture noise overlay */}
        <linearGradient id="xLabelTexA" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#fff3d0" stopOpacity="0.10" />
          <stop offset="30%" stopColor="#c07818" stopOpacity="0.06" />
          <stop offset="70%" stopColor="#fff3d0" stopOpacity="0.08" />
          <stop offset="100%" stopColor="#7a4808" stopOpacity="0.10" />
        </linearGradient>

        {/* === FILTERS === */}
        {/* Bottle drop shadow */}
        <filter id="xShadow" x="-25%" y="-5%" width="150%" height="118%">
          <feDropShadow
            dx="5"
            dy="10"
            stdDeviation="10"
            floodColor="#0a2030"
            floodOpacity="0.30"
          />
        </filter>
        {/* Label subtle inner shadow */}
        <filter id="xLabelF" x="-3%" y="-3%" width="106%" height="106%">
          <feDropShadow
            dx="0"
            dy="2"
            stdDeviation="3"
            floodColor="#3a1800"
            floodOpacity="0.22"
          />
        </filter>
        {/* Caustic streak blur */}
        <filter id="xCaustic" x="-5%" y="-5%" width="110%" height="110%">
          <feGaussianBlur stdDeviation="1.2" />
        </filter>
      </defs>

      <g filter="url(#xShadow)">
        {/* ===== BOTTLE BODY ===== */}
        {/* Layer 1: Base plastic fill */}
        <path
          d="M54 58 Q44 66 40 80 Q34 100 33 125 L33 272 Q33 296 58 300 L102 300 Q127 296 127 272 L127 125 Q126 100 120 80 Q116 66 106 58 Z"
          fill="url(#xBodyBase)"
        />
        {/* Layer 2: Edge shadow overlay */}
        <path
          d="M54 58 Q44 66 40 80 Q34 100 33 125 L33 272 Q33 296 58 300 L102 300 Q127 296 127 272 L127 125 Q126 100 120 80 Q116 66 106 58 Z"
          fill="url(#xBodyEdge)"
        />
        {/* Layer 3: Central specular highlight */}
        <path
          d="M54 58 Q44 66 40 80 Q34 100 33 125 L33 272 Q33 296 58 300 L102 300 Q127 296 127 272 L127 125 Q126 100 120 80 Q116 66 106 58 Z"
          fill="url(#xBodySpecular)"
        />

        {/* ===== WATER FILL (lower ~50%) ===== */}
        <path
          d="M33 186 Q33 186 33 272 Q33 295 58 298 L102 298 Q127 295 127 272 L127 186 Q107 200 80 186 Q53 172 33 186 Z"
          fill="url(#xWater)"
        />
        {/* Water surface highlight line */}
        <path
          d="M33 186 Q50 176 66 182 Q80 188 94 182 Q110 176 127 183"
          fill="none"
          stroke="#80c0d0"
          strokeWidth="1.2"
          opacity="0.55"
        />

        {/* ===== NECK ===== */}
        <path
          d="M62 36 Q55 46 53 58 L53 64 L107 64 L107 58 Q105 46 98 36 Z"
          fill="url(#xNeck)"
        />
        {/* Neck shoulder ring */}
        <ellipse
          cx="80"
          cy="64"
          rx="27"
          ry="3.5"
          fill="#6898a8"
          opacity="0.38"
        />
        {/* Neck base groove line */}
        <rect
          x="53"
          y="62"
          width="54"
          height="2"
          rx="1"
          fill="#507888"
          opacity="0.35"
        />

        {/* ===== CAP ===== */}
        {/* Cap body */}
        <rect x="54" y="15" width="52" height="25" rx="8" fill="url(#xCap)" />
        {/* Cap left rim light */}
        <rect
          x="54"
          y="15"
          width="14"
          height="25"
          rx="7"
          fill="url(#xCapRimLeft)"
        />
        {/* Cap right rim light */}
        <rect
          x="92"
          y="15"
          width="14"
          height="25"
          rx="7"
          fill="url(#xCapRimRight)"
        />
        {/* Cap knurl ribs — horizontal threading lines */}
        <rect
          x="55"
          y="24"
          width="50"
          height="1.5"
          rx="0.75"
          fill="white"
          opacity="0.07"
        />
        <rect
          x="55"
          y="28"
          width="50"
          height="1.5"
          rx="0.75"
          fill="white"
          opacity="0.05"
        />
        <rect
          x="55"
          y="32"
          width="50"
          height="1.5"
          rx="0.75"
          fill="white"
          opacity="0.05"
        />
        {/* Cap top specular highlight */}
        <ellipse cx="76" cy="18" rx="18" ry="5" fill="url(#xCapTop)" />
        {/* Cap bottom edge shadow line */}
        <rect
          x="54"
          y="36"
          width="52"
          height="2.5"
          rx="1.25"
          fill="black"
          opacity="0.30"
        />
        {/* Cap-to-neck transition ring */}
        <ellipse
          cx="80"
          cy="38"
          rx="26"
          ry="3.5"
          fill="#0a1820"
          opacity="0.28"
        />

        {/* ===== KRAFT LABEL ===== */}
        {/* Label base */}
        <rect
          x="36"
          y="108"
          width="88"
          height="112"
          rx="4"
          fill="url(#xLabel)"
          filter="url(#xLabelF)"
        />
        {/* Cylindrical sheen on label */}
        <rect
          x="36"
          y="108"
          width="88"
          height="112"
          rx="4"
          fill="url(#xLabelSheen)"
        />
        {/* Kraft paper texture overlay A */}
        <rect
          x="36"
          y="108"
          width="88"
          height="112"
          rx="4"
          fill="url(#xLabelTexA)"
        />
        {/* Tiny texture streaks to simulate kraft paper grain */}
        <line
          x1="42"
          y1="115"
          x2="42"
          y2="215"
          stroke="#8c5e18"
          strokeWidth="0.5"
          opacity="0.08"
        />
        <line
          x1="50"
          y1="110"
          x2="50"
          y2="218"
          stroke="#fff3d0"
          strokeWidth="0.4"
          opacity="0.10"
        />
        <line
          x1="65"
          y1="112"
          x2="65"
          y2="216"
          stroke="#8c5e18"
          strokeWidth="0.4"
          opacity="0.07"
        />
        <line
          x1="90"
          y1="110"
          x2="90"
          y2="218"
          stroke="#fff3d0"
          strokeWidth="0.5"
          opacity="0.09"
        />
        <line
          x1="108"
          y1="113"
          x2="108"
          y2="217"
          stroke="#8c5e18"
          strokeWidth="0.4"
          opacity="0.07"
        />
        <line
          x1="118"
          y1="111"
          x2="118"
          y2="215"
          stroke="#fff3d0"
          strokeWidth="0.4"
          opacity="0.08"
        />

        {/* Label border lines — top and bottom dark brown rules */}
        <rect
          x="36"
          y="108"
          width="88"
          height="5"
          rx="2"
          fill="#5a3208"
          opacity="0.50"
        />
        <rect
          x="36"
          y="215"
          width="88"
          height="5"
          rx="2"
          fill="#5a3208"
          opacity="0.50"
        />
        {/* Inner thin border lines */}
        <rect
          x="38"
          y="115"
          width="84"
          height="1"
          fill="#5a3208"
          opacity="0.30"
        />
        <rect
          x="38"
          y="213"
          width="84"
          height="1"
          fill="#5a3208"
          opacity="0.30"
        />

        {/* Camel emoji (large, centered above XYZ text) */}
        <text x="80" y="148" textAnchor="middle" fontSize="30" opacity="0.95">
          🐪
        </text>

        {/* XYZ brand name */}
        <text
          x="80"
          y="172"
          textAnchor="middle"
          fontFamily="'Space Grotesk', Georgia, serif"
          fontWeight="900"
          fontSize="24"
          fill="#2e1200"
          opacity="0.92"
          letterSpacing="4"
        >
          XYZ
        </text>

        {/* Thin divider under XYZ */}
        <line
          x1="52"
          y1="178"
          x2="108"
          y2="178"
          stroke="#5a3208"
          strokeWidth="0.8"
          opacity="0.55"
        />

        {/* PURE WATER */}
        <text
          x="80"
          y="190"
          textAnchor="middle"
          fontFamily="'DM Sans', Arial, sans-serif"
          fontWeight="700"
          fontSize="8.5"
          fill="#4a2200"
          opacity="0.82"
          letterSpacing="3"
        >
          PURE WATER
        </text>

        {/* RECYCLABLE */}
        <text
          x="80"
          y="205"
          textAnchor="middle"
          fontFamily="'DM Sans', Arial, sans-serif"
          fontSize="7"
          fill="#6b3c08"
          opacity="0.70"
          letterSpacing="2.5"
        >
          ♻ RECYCLABLE
        </text>

        {/* ===== EDGE CAUSTIC STREAKS ===== */}
        {/* Left bright edge highlight */}
        <path
          d="M40 75 Q37 130 36 220"
          fill="none"
          stroke="white"
          strokeWidth="6"
          strokeLinecap="round"
          opacity="0.18"
        />
        <path
          d="M43 78 Q41 128 41 200"
          fill="none"
          stroke="white"
          strokeWidth="2.5"
          strokeLinecap="round"
          opacity="0.28"
        />
        {/* Right edge highlight */}
        <path
          d="M120 75 Q123 130 124 220"
          fill="none"
          stroke="white"
          strokeWidth="4"
          strokeLinecap="round"
          opacity="0.12"
        />
        <path
          d="M117 78 Q119 128 119 200"
          fill="none"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.18"
        />
        {/* Caustic vertical light streak (center-left of body) */}
        <path
          d="M60 80 Q58 140 58 250"
          fill="none"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.12"
          filter="url(#xCaustic)"
        />

        {/* ===== BOTTOM REFLECTION ===== */}
        <ellipse
          cx="80"
          cy="300"
          rx="34"
          ry="5"
          fill="#2a6070"
          opacity="0.18"
        />
      </g>
    </svg>
  );
}

/** Photorealistic Aqua Ownn premium bottle — vibrant cyan diamond-pattern label, black cap */
function AquaOwnnBottleSVG() {
  return (
    <svg
      viewBox="0 0 160 350"
      width="130"
      height="278"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>
        Aqua Ownn premium custom water bottle with cyan diamond label
      </title>
      <defs>
        {/* === BODY GRADIENTS === */}
        <linearGradient id="aBodyBase" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#78c0d4" stopOpacity="0.68" />
          <stop offset="8%" stopColor="#b8e2ec" stopOpacity="0.85" />
          <stop offset="22%" stopColor="#ddf4fa" stopOpacity="0.92" />
          <stop offset="40%" stopColor="#f0fafe" stopOpacity="0.97" />
          <stop offset="58%" stopColor="#d8f2f8" stopOpacity="0.93" />
          <stop offset="76%" stopColor="#a8d8e8" stopOpacity="0.86" />
          <stop offset="90%" stopColor="#78b8cc" stopOpacity="0.72" />
          <stop offset="100%" stopColor="#5898b0" stopOpacity="0.60" />
        </linearGradient>
        <linearGradient id="aBodyEdge" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#003850" stopOpacity="0.35" />
          <stop offset="10%" stopColor="#003850" stopOpacity="0.08" />
          <stop offset="50%" stopColor="#003850" stopOpacity="0.00" />
          <stop offset="90%" stopColor="#001e30" stopOpacity="0.08" />
          <stop offset="100%" stopColor="#001e30" stopOpacity="0.40" />
        </linearGradient>
        <linearGradient id="aBodySpecular" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="white" stopOpacity="0.00" />
          <stop offset="30%" stopColor="white" stopOpacity="0.00" />
          <stop offset="37%" stopColor="white" stopOpacity="0.48" />
          <stop offset="43%" stopColor="white" stopOpacity="0.75" />
          <stop offset="48%" stopColor="white" stopOpacity="0.48" />
          <stop offset="55%" stopColor="white" stopOpacity="0.00" />
          <stop offset="100%" stopColor="white" stopOpacity="0.00" />
        </linearGradient>
        {/* Water fill — cyan tinted */}
        <linearGradient id="aWater" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#22c8e8" stopOpacity="0.22" />
          <stop offset="60%" stopColor="#0090b8" stopOpacity="0.38" />
          <stop offset="100%" stopColor="#006890" stopOpacity="0.55" />
        </linearGradient>

        {/* === NECK === */}
        <linearGradient id="aNeck" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#58b0c8" stopOpacity="0.68" />
          <stop offset="20%" stopColor="#b0dcea" stopOpacity="0.90" />
          <stop offset="50%" stopColor="#d8f4fa" stopOpacity="0.96" />
          <stop offset="80%" stopColor="#90ccdc" stopOpacity="0.88" />
          <stop offset="100%" stopColor="#4890a8" stopOpacity="0.65" />
        </linearGradient>

        {/* === CAP === */}
        <linearGradient id="aCap" x1="20%" y1="0%" x2="80%" y2="100%">
          <stop offset="0%" stopColor="#454545" />
          <stop offset="25%" stopColor="#1e1e1e" />
          <stop offset="60%" stopColor="#0c0c0c" />
          <stop offset="100%" stopColor="#040404" />
        </linearGradient>
        <linearGradient id="aCapRimLeft" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="white" stopOpacity="0.24" />
          <stop offset="30%" stopColor="white" stopOpacity="0.00" />
        </linearGradient>
        <linearGradient id="aCapRimRight" x1="100%" y1="0%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="white" stopOpacity="0.12" />
          <stop offset="30%" stopColor="white" stopOpacity="0.00" />
        </linearGradient>
        <radialGradient
          id="aCapTop"
          cx="40%"
          cy="30%"
          r="60%"
          fx="38%"
          fy="28%"
        >
          <stop offset="0%" stopColor="white" stopOpacity="0.58" />
          <stop offset="50%" stopColor="white" stopOpacity="0.20" />
          <stop offset="100%" stopColor="white" stopOpacity="0.00" />
        </radialGradient>

        {/* === CYAN LABEL GRADIENTS === */}
        <linearGradient id="aLabel" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00d8f0" />
          <stop offset="30%" stopColor="#00b8d8" />
          <stop offset="60%" stopColor="#0098c0" />
          <stop offset="100%" stopColor="#0078a8" />
        </linearGradient>
        {/* Cylindrical label sheen */}
        <linearGradient id="aLabelSheen" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="black" stopOpacity="0.12" />
          <stop offset="32%" stopColor="white" stopOpacity="0.10" />
          <stop offset="50%" stopColor="white" stopOpacity="0.28" />
          <stop offset="68%" stopColor="white" stopOpacity="0.08" />
          <stop offset="100%" stopColor="black" stopOpacity="0.14" />
        </linearGradient>
        {/* Diamond facet fill */}
        <linearGradient id="aDiamond" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="white" stopOpacity="0.22" />
          <stop offset="100%" stopColor="white" stopOpacity="0.04" />
        </linearGradient>
        {/* Diamond dark facet */}
        <linearGradient id="aDiamondDark" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#003858" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#003858" stopOpacity="0.04" />
        </linearGradient>

        {/* === FILTERS === */}
        <filter id="aShadow" x="-25%" y="-5%" width="150%" height="118%">
          <feDropShadow
            dx="5"
            dy="10"
            stdDeviation="10"
            floodColor="#001828"
            floodOpacity="0.35"
          />
        </filter>
        <filter id="aLabelF" x="-3%" y="-3%" width="106%" height="106%">
          <feDropShadow
            dx="0"
            dy="2"
            stdDeviation="4"
            floodColor="#001a30"
            floodOpacity="0.30"
          />
        </filter>
        <filter id="aGlow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="aCaustic" x="-5%" y="-5%" width="110%" height="110%">
          <feGaussianBlur stdDeviation="1.2" />
        </filter>
      </defs>

      <g filter="url(#aShadow)">
        {/* ===== BOTTLE BODY ===== */}
        <path
          d="M54 58 Q44 66 40 80 Q34 100 33 125 L33 272 Q33 296 58 300 L102 300 Q127 296 127 272 L127 125 Q126 100 120 80 Q116 66 106 58 Z"
          fill="url(#aBodyBase)"
        />
        <path
          d="M54 58 Q44 66 40 80 Q34 100 33 125 L33 272 Q33 296 58 300 L102 300 Q127 296 127 272 L127 125 Q126 100 120 80 Q116 66 106 58 Z"
          fill="url(#aBodyEdge)"
        />
        <path
          d="M54 58 Q44 66 40 80 Q34 100 33 125 L33 272 Q33 296 58 300 L102 300 Q127 296 127 272 L127 125 Q126 100 120 80 Q116 66 106 58 Z"
          fill="url(#aBodySpecular)"
        />

        {/* ===== WATER FILL ===== */}
        <path
          d="M33 186 Q33 186 33 272 Q33 295 58 298 L102 298 Q127 295 127 272 L127 186 Q107 200 80 186 Q53 172 33 186 Z"
          fill="url(#aWater)"
        />
        <path
          d="M33 186 Q50 176 66 182 Q80 188 94 182 Q110 176 127 183"
          fill="none"
          stroke="#40d8f0"
          strokeWidth="1.2"
          opacity="0.60"
        />

        {/* ===== NECK ===== */}
        <path
          d="M62 36 Q55 46 53 58 L53 64 L107 64 L107 58 Q105 46 98 36 Z"
          fill="url(#aNeck)"
        />
        <ellipse
          cx="80"
          cy="64"
          rx="27"
          ry="3.5"
          fill="#38a8c0"
          opacity="0.38"
        />
        <rect
          x="53"
          y="62"
          width="54"
          height="2"
          rx="1"
          fill="#2898b0"
          opacity="0.35"
        />

        {/* ===== CAP ===== */}
        <rect x="54" y="15" width="52" height="25" rx="8" fill="url(#aCap)" />
        <rect
          x="54"
          y="15"
          width="14"
          height="25"
          rx="7"
          fill="url(#aCapRimLeft)"
        />
        <rect
          x="92"
          y="15"
          width="14"
          height="25"
          rx="7"
          fill="url(#aCapRimRight)"
        />
        <rect
          x="55"
          y="24"
          width="50"
          height="1.5"
          rx="0.75"
          fill="white"
          opacity="0.07"
        />
        <rect
          x="55"
          y="28"
          width="50"
          height="1.5"
          rx="0.75"
          fill="white"
          opacity="0.05"
        />
        <rect
          x="55"
          y="32"
          width="50"
          height="1.5"
          rx="0.75"
          fill="white"
          opacity="0.05"
        />
        <ellipse cx="76" cy="18" rx="18" ry="5" fill="url(#aCapTop)" />
        <rect
          x="54"
          y="36"
          width="52"
          height="2.5"
          rx="1.25"
          fill="black"
          opacity="0.30"
        />
        <ellipse
          cx="80"
          cy="38"
          rx="26"
          ry="3.5"
          fill="#001018"
          opacity="0.28"
        />

        {/* ===== CYAN DIAMOND LABEL ===== */}
        {/* Base label */}
        <rect
          x="36"
          y="108"
          width="88"
          height="112"
          rx="4"
          fill="url(#aLabel)"
          filter="url(#aLabelF)"
        />
        {/* Sheen overlay */}
        <rect
          x="36"
          y="108"
          width="88"
          height="112"
          rx="4"
          fill="url(#aLabelSheen)"
        />

        {/* Diamond / crystal facet pattern — alternating rows of light/dark diamonds */}
        {/* Row 1 — offset */}
        <polygon points="80,112 91,122 80,132 69,122" fill="url(#aDiamond)" />
        <polygon points="58,112 69,122 58,132 47,122" fill="url(#aDiamond)" />
        <polygon
          points="102,112 113,122 102,132 91,122"
          fill="url(#aDiamond)"
        />
        <polygon
          points="124,112 125,120 120,132 113,122"
          fill="url(#aDiamond)"
        />
        {/* Row 1 dark facet pairs */}
        <polygon
          points="69,122 80,132 69,142 58,132"
          fill="url(#aDiamondDark)"
        />
        <polygon
          points="91,122 102,132 91,142 80,132"
          fill="url(#aDiamondDark)"
        />
        <polygon
          points="47,122 58,132 47,142 36,132"
          fill="url(#aDiamondDark)"
        />
        <polygon
          points="113,122 124,132 113,142 102,132"
          fill="url(#aDiamondDark)"
        />
        {/* Row 2 */}
        <polygon points="80,132 91,142 80,152 69,142" fill="url(#aDiamond)" />
        <polygon points="58,132 69,142 58,152 47,142" fill="url(#aDiamond)" />
        <polygon
          points="102,132 113,142 102,152 91,142"
          fill="url(#aDiamond)"
        />
        {/* Row 2 dark */}
        <polygon
          points="69,142 80,152 69,162 58,152"
          fill="url(#aDiamondDark)"
        />
        <polygon
          points="91,142 102,152 91,162 80,152"
          fill="url(#aDiamondDark)"
        />
        {/* Row 3 */}
        <polygon points="80,152 91,162 80,172 69,162" fill="url(#aDiamond)" />
        <polygon points="58,152 69,162 58,172 47,162" fill="url(#aDiamond)" />
        <polygon
          points="102,152 113,162 102,172 91,162"
          fill="url(#aDiamond)"
        />
        {/* Row 3 dark */}
        <polygon
          points="69,162 80,172 69,182 58,172"
          fill="url(#aDiamondDark)"
        />
        <polygon
          points="91,162 102,172 91,182 80,172"
          fill="url(#aDiamondDark)"
        />
        {/* Row 4 */}
        <polygon points="80,172 91,182 80,192 69,182" fill="url(#aDiamond)" />
        <polygon points="58,172 69,182 58,192 47,182" fill="url(#aDiamond)" />
        <polygon
          points="102,172 113,182 102,192 91,182"
          fill="url(#aDiamond)"
        />
        {/* Row 4 dark */}
        <polygon
          points="69,182 80,192 69,202 58,192"
          fill="url(#aDiamondDark)"
        />
        <polygon
          points="91,182 102,192 91,202 80,192"
          fill="url(#aDiamondDark)"
        />
        {/* Row 5 */}
        <polygon points="80,192 91,202 80,212 69,202" fill="url(#aDiamond)" />
        <polygon points="58,192 69,202 58,212 47,202" fill="url(#aDiamond)" />
        <polygon
          points="102,192 113,202 102,212 91,202"
          fill="url(#aDiamond)"
        />

        {/* Label top white holographic band */}
        <rect
          x="36"
          y="108"
          width="88"
          height="6"
          rx="2"
          fill="white"
          opacity="0.22"
        />
        {/* Label bottom dark band */}
        <rect
          x="36"
          y="214"
          width="88"
          height="6"
          rx="2"
          fill="#003858"
          opacity="0.35"
        />

        {/* Water drop icon above brand name */}
        <path
          d="M80 116 Q76.5 121 76.5 125 Q76.5 130 80 130 Q83.5 130 83.5 125 Q83.5 121 80 116 Z"
          fill="white"
          opacity="0.75"
        />

        {/* AQUA OWNN brand name */}
        <text
          x="80"
          y="158"
          textAnchor="middle"
          fontFamily="'Space Grotesk', Arial, sans-serif"
          fontWeight="900"
          fontSize="17"
          fill="white"
          filter="url(#aGlow)"
          letterSpacing="2"
        >
          AQUA OWNN
        </text>

        {/* Divider */}
        <line
          x1="44"
          y1="164"
          x2="116"
          y2="164"
          stroke="white"
          strokeWidth="0.8"
          opacity="0.55"
        />

        {/* PREMIUM REFRESHMENT */}
        <text
          x="80"
          y="175"
          textAnchor="middle"
          fontFamily="'DM Sans', Arial, sans-serif"
          fontWeight="500"
          fontSize="7.5"
          fill="white"
          opacity="0.90"
          letterSpacing="2"
        >
          PREMIUM REFRESHMENT
        </text>

        {/* ECO · CUSTOM · BRANDED */}
        <text
          x="80"
          y="188"
          textAnchor="middle"
          fontFamily="'DM Sans', Arial, sans-serif"
          fontSize="6.5"
          fill="white"
          opacity="0.70"
          letterSpacing="2.5"
        >
          ECO · CUSTOM · BRANDED
        </text>

        {/* ===== EDGE CAUSTIC STREAKS ===== */}
        {/* Left bright edge */}
        <path
          d="M40 75 Q37 130 36 220"
          fill="none"
          stroke="white"
          strokeWidth="6"
          strokeLinecap="round"
          opacity="0.20"
        />
        <path
          d="M43 78 Q41 128 41 200"
          fill="none"
          stroke="white"
          strokeWidth="2.5"
          strokeLinecap="round"
          opacity="0.32"
        />
        {/* Right edge */}
        <path
          d="M120 75 Q123 130 124 220"
          fill="none"
          stroke="white"
          strokeWidth="4"
          strokeLinecap="round"
          opacity="0.14"
        />
        <path
          d="M117 78 Q119 128 119 200"
          fill="none"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.22"
        />
        {/* Caustic light streak (center-left) */}
        <path
          d="M60 80 Q58 140 58 250"
          fill="none"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.14"
          filter="url(#aCaustic)"
        />

        {/* ===== BOTTOM REFLECTION ===== */}
        <ellipse
          cx="80"
          cy="300"
          rx="34"
          ry="5"
          fill="#0090c0"
          opacity="0.22"
        />
      </g>
    </svg>
  );
}

export default function CompareSection() {
  const [ref, inView] = useInView(0.15);

  return (
    <section
      id="compare"
      className="py-20 md:py-28 bg-muted/30"
      data-ocid="compare.section"
    >
      {/* Watery divider — reduced overlap so background text remains visible */}
      <div className="h-16 -mt-4 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQ0MCIgaGVpZ2h0PSI2NCIgdmlld0JveD0iMCAwIDE0NDAgNjQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgMzJDMTgwIDY0IDM2MCAwIDU0MCAzMkM3MjAgNjQgOTAwIDAgMTA4MCAzMkMxMjYwIDY0IDE0NDAgMCAxNDQwIDMyVjY0SDBWMzJaIiBmaWxsPSJva2xjaCgwLjk0IDAuMDEgMjMwKSIvPjwvc3ZnPg==')] bg-no-repeat bg-bottom bg-cover pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="text-xs font-bold tracking-widest uppercase text-primary mb-3 block">
            The Difference
          </span>
          <h2 className="font-display font-bold text-4xl sm:text-5xl tracking-tight text-foreground mb-4">
            Generic vs. <span className="text-accent-bright">Premium</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            See why 500+ brands chose Aqua Ownn over the boring alternatives.
          </p>
        </motion.div>

        {/* Visual bottle comparison */}
        <motion.div
          className="grid md:grid-cols-2 gap-6 mb-14"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          {/* ── Other Brands card — renders ONLY XYZBottleSVG ── */}
          <div
            className="relative rounded-3xl overflow-hidden border-2 border-border bg-card shadow-subtle"
            data-ocid="compare.xyz_card"
          >
            <div className="absolute top-4 left-4 px-3 py-1.5 rounded-lg bg-muted text-muted-foreground text-xs font-bold uppercase tracking-widest">
              Other Brands
            </div>
            <div className="pt-14 pb-8 px-8 flex flex-col items-center gap-4">
              <div className="w-48 h-72 rounded-2xl bg-gradient-to-b from-muted/40 to-muted/70 border border-border flex items-center justify-center overflow-hidden">
                {/* XYZ / Other Brands bottle ONLY */}
                <XYZBottleSVG />
              </div>
              <div className="space-y-2 w-full">
                {[
                  "Plain white label",
                  "Generic camel logo",
                  "Zero brand recall",
                  "Looks like every other bottle",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <XCircle className="w-4 h-4 text-destructive shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── Aqua Ownn Premium card — renders ONLY AquaOwnnBottleSVG ── */}
          <motion.div
            className="relative rounded-3xl overflow-hidden border-2 border-primary/40 gradient-aqua shadow-elevated"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
            data-ocid="compare.aquaownn_card"
          >
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,oklch(0.62_0.22_200/0.15),transparent_60%)]" />
            <div className="absolute top-4 left-4 px-3 py-1.5 rounded-lg bg-primary text-primary-foreground text-xs font-bold uppercase tracking-widest shadow-glow-aqua">
              Aqua Ownn
            </div>
            <div className="relative pt-14 pb-8 px-8 flex flex-col items-center gap-4">
              <div className="w-48 h-72 rounded-2xl bg-card/60 border border-primary/30 flex items-center justify-center overflow-hidden shadow-glow-aqua">
                {/* Aqua Ownn bottle ONLY */}
                <AquaOwnnBottleSVG />
              </div>
              <div className="space-y-2 w-full">
                {[
                  "Custom holographic label",
                  "Your brand logo & colors",
                  "Instant brand recognition",
                  "Premium crystal-clear bottle",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 text-sm text-foreground font-medium"
                  >
                    <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Feature comparison table */}
        <motion.div
          className="bg-card rounded-3xl border border-border shadow-subtle overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          data-ocid="compare.table"
        >
          <div className="grid grid-cols-3 bg-muted/40 border-b border-border px-6 py-4 text-sm font-bold">
            <span className="text-foreground">Feature</span>
            <span className="text-center text-muted-foreground">
              Other Brands
            </span>
            <span className="text-center text-primary">Aqua Ownn</span>
          </div>
          {COMPARISON_ROWS.map((row, i) => (
            <div
              key={row.feature}
              className={`grid grid-cols-3 px-6 py-4 text-sm border-b last:border-0 border-border ${i % 2 === 0 ? "bg-card" : "bg-muted/20"}`}
              data-ocid={`compare.row.${i + 1}`}
            >
              <span className="text-foreground font-semibold">
                {row.feature}
              </span>
              <span className="flex justify-center">
                <XCircle
                  className="w-5 h-5 text-destructive"
                  aria-label="Not available"
                />
              </span>
              <span className="flex justify-center">
                <CheckCircle
                  className="w-5 h-5 text-primary"
                  aria-label="Available"
                />
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
