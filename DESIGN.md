# Design Brief

## Direction
Aqua Ownn — premium B2B water bottle customization showcase with bright, high-contrast watery theme. Pure white backgrounds with flowing aqua/cyan gradients and interactive 3D bottle models.

## Tone
Bright aquatic futurism. High-contrast, visible, expensive-looking. Cyan + white + navy creates psychological urgency and attention-grabbing hierarchy. No dark theme — maximum readability and premium perception.

## Differentiation
Flowing water-inspired gradient backgrounds combined with parallax 3D bottles and high-saturation aqua accent text. Every interactive element glows softly with aqua, forcing inquiry conversion through visual intensity.

## Color Palette

| Token      | OKLCH              | Role                           |
| ---------- | ------------------ | ------------------------------ |
| background | 0.98 0.008 230     | Bright off-white base          |
| foreground | 0.18 0.015 230     | Deep navy text, high contrast  |
| card       | 1.0 0.004 230      | Pure white elevated surfaces   |
| primary    | 0.55 0.2 200       | Vivid cyan CTAs & accents      |
| secondary  | 0.94 0.01 230      | Subtle background tint         |
| accent     | 0.62 0.22 200      | Bright aqua highlights         |
| muted      | 0.94 0.01 230      | Soft UI elements               |

## Typography
- **Display**: Space Grotesk — hero text, section headings. Geometric, modern, tech-premium.
- **Body**: DM Sans — body copy, labels. Clean, high-end SaaS feel.
- **Scale**: hero `text-6xl md:text-7xl font-bold`, h2 `text-3xl md:text-5xl font-bold`, body `text-base md:text-lg`.

## Elevation & Depth
Light-based hierarchy: pure white cards lift above off-white backgrounds via subtle shadows. No dark surfaces — depth through opacity and shadow, not darkening. Aqua glow on hover creates layered depth.

## Structural Zones

| Zone    | Background                  | Border              | Notes                                      |
| ------- | --------------------------- | ------------------- | ------------------------------------------ |
| Header  | bg-background               | border-primary      | Minimal, bright aqua border-bottom         |
| Hero    | gradient-hero               | —                   | Flowing water gradient, 3D bottle centered |
| Content | bg-background alternate bg-secondary | —        | White sections with soft aqua tint        |
| Footer  | bg-foreground (deep navy)   | border-accent       | White text, bright cyan contact buttons   |

## Spacing & Rhythm
Spacious density — `gap-8` between sections, `p-6 md:p-12` for padding. Large whitespace emphasizes premium positioning. Micro-interactions (hover lift, subtle glow) at 0.3s smooth easing.

## Component Patterns
- **Buttons**: aqua primary, white text, hover lift + glow-aqua shadow.
- **Cards**: white, rounded-lg (12px), subtle border, hover: lift + aqua glow.
- **Badges**: aqua background, white text, `rounded-full`.

## Motion
- **Entrance**: fade-in 0.6s on load, scale-in 0.4s for 3D models.
- **Hover**: lift (translateY -2px), glow shadow, color brighten.
- **Scroll**: parallax 3D bottles move 40% of scroll offset. Floating animation on idle bottles.
- **Decorative**: continuous float animation on hero bottle, pulsing glow on CTAs.

## Constraints
- Never use dark backgrounds — maintain brightness and visibility.
- Foreground text always >= 0.18 lightness (deep navy) for AA+ contrast on white.
- Aqua accent (primary/accent) hue locked to ~200° (cyan range).
- All text bright and high-contrast — psychological trigger for inquiry.

## Signature Detail
Flowing, water-like gradient backgrounds that shift subtly on scroll + parallax 3D transparent bottles with internal water animations create a cohesive water-tech aesthetic. Aqua glow on every interactive element forces visual attention and conversion.
