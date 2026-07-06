# Design System - Premium Portfolio

Comprehensive guide to the design system used throughout the portfolio.

## 🎨 Color Palette

### Primary Colors
```
Primary Sky Blue
  50:  #f0f9ff
  100: #e0f2fe
  200: #bae6fd
  300: #7dd3fc
  400: #38bdf8
  500: #0ea5e9 (Main)
  600: #0284c7
  700: #0369a1
  800: #075985
  900: #0c3d66
```

### Accent Colors
```
Accent Purple
  50:  #faf8ff
  100: #f3e8ff
  200: #e9d5ff
  300: #d8b4fe
  400: #c084fc
  500: #a855f7 (Main)
  600: #9333ea
  700: #7e22ce
  800: #6b21a8
  900: #581c87
```

### Dark Colors
```
Dark Slate
  50:  #f9fafb
  100: #f3f4f6
  200: #e5e7eb
  300: #d1d5db
  400: #9ca3af
  500: #6b7280
  600: #4b5563
  700: #374151
  800: #1f2937
  900: #111827
  950: #030712 (Background)
```

## 📝 Typography

### Font Families
- **Display**: Outfit
  - Used for headings
  - Weights: 600, 700, 800, 900
  - Letter-spacing: -0.02em

- **Body**: Plus Jakarta Sans
  - Used for body text
  - Weights: 300, 400, 500, 600, 700, 800
  - Line-height: 1.6

### Font Sizes
```
xs:   12px (0.75rem)
sm:   14px (0.875rem)
base: 16px (1rem)      [Default]
lg:   18px (1.125rem)
xl:   20px (1.25rem)
2xl:  24px (1.5rem)
3xl:  30px (1.875rem)
4xl:  36px (2.25rem)
5xl:  48px (3rem)
6xl:  60px (3.75rem)
7xl:  72px (4.5rem)
```

### Heading Styles
```
h1: 5xl, font-bold (font-display)
h2: 4xl, font-bold (font-display)
h3: 2xl, font-bold (font-display)
h4: xl,  font-semibold
h5: lg,  font-semibold
h6: base, font-semibold
```

## 📏 Spacing System

Based on 8px scale for consistency:

```
xs:  4px   (0.25rem)
sm:  8px   (0.5rem)
md:  16px  (1rem)
lg:  24px  (1.5rem)
xl:  32px  (2rem)
2xl: 40px  (2.5rem)
3xl: 48px  (3rem)
4xl: 64px  (4rem)
5xl: 80px  (5rem)
```

### Common Patterns
- **Padding**: 16px (1rem) on containers
- **Gap**: 24px (1.5rem) between cards
- **Section padding**: 96px (6rem) vertical
- **Container**: max-width 1280px

## 🎭 Components

### Buttons

#### Primary Button
```tsx
<a className="btn-primary">
  Text
  <Icon size={20} />
</a>
```
- Background: Gradient (Primary 500-600)
- Text: White
- Padding: 12px 24px
- Border-radius: 8px
- Shadow: lg with primary glow
- Hover: scale(1.05)
- Active: scale(0.95)

#### Secondary Button
```tsx
<button className="btn-secondary">
  Text
  <Icon size={20} />
</button>
```
- Border: Primary 500/50
- Text: Primary 400
- Background: Transparent
- Padding: 12px 24px
- Hover: bg-primary-500/10
- Active: scale(0.95)

#### Outline Button
```tsx
<button className="btn-outline">
  Text
</button>
```
- Border: Dark 700/50
- Text: Dark 200
- Background: Transparent
- Hover: bg-dark-700/30

### Cards

#### Premium Card
```tsx
<div className="card-premium p-8">
  {/* content */}
</div>
```
- Border-radius: 16px (2xl)
- Background: Gradient (dark-800/40 to dark-900/40)
- Border: dark-700/50
- Backdrop: blur-sm
- Hover: 
  - Border: primary-500/50
  - Shadow: lg with primary glow
  - Background: darker gradient

### Glass Effect
```tsx
<div className="glass">
  {/* content */}
</div>
```
- Backdrop: blur-lg
- Background: white/5
- Border: white/10
- Creates frosted glass appearance

## ✨ Effects & Animations

### Gradient Text
```tsx
<span className="gradient-text">Text</span>
```
- Gradient: primary-400 → primary-500 → accent-500
- Background-clip: text
- -webkit-text-fill-color: transparent

### Glow Effect
```css
.glow {
  box-shadow: 0 0 20px rgba(14, 165, 233, 0.5);
}

.glow-lg {
  box-shadow: 0 0 40px rgba(14, 165, 233, 0.3);
}
```

### Animations
- **fade-in**: 0.5s ease-in-out
- **slide-up**: 0.5s ease-out
- **float**: 6s ease-in-out infinite
- **glow**: 2s ease-in-out infinite
- **pulse-slow**: 3s cubic-bezier infinite

### Framer Motion Patterns

**Scroll-triggered animation:**
```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
>
  {/* content */}
</motion.div>
```

**Hover animation:**
```tsx
<motion.div
  whileHover={{ y: -5 }}
  transition={{ duration: 0.3 }}
>
  {/* content */}
</motion.div>
```

## 🎯 Layout Patterns

### Section Layout
```
Container (max-w-7xl)
  ├── Section Header
  │   ├── Title
  │   └── Subtitle
  └── Content Grid
```

### Hero Layout
```
Hero Section
  ├── Left Column (Content)
  │   ├── Subtitle
  │   ├── Title
  │   ├── Description
  │   ├── CTA Buttons
  │   └── Stats
  └── Right Column (Image)
      └── Profile Image + Cards
```

### Card Grid
- Mobile: 1 column
- Tablet: 2 columns (md:)
- Desktop: 3 columns (lg:)
- Gap: 24px

## 🎨 Shadow System

```
xs: 0 1px 2px 0 rgb(0 0 0 / 0.05)
sm: 0 1px 2px 0 rgb(0 0 0 / 0.1)
md: 0 4px 6px -1px rgb(0 0 0 / 0.1)
lg: 0 10px 15px -3px rgb(0 0 0 / 0.1)
xl: 0 20px 25px -5px rgb(0 0 0 / 0.1)
2xl: 0 25px 50px -12px rgb(0 0 0 / 0.25)
glow: 0 0 20px 0 var(--shadow-color)
glow-lg: 0 0 40px 0 var(--shadow-color)
```

## 📱 Responsive Breakpoints

```
Mobile:  <768px  (base styles)
Tablet:  768px+  (md:)
Desktop: 1024px+ (lg:)
XL:      1280px+ (xl:)
2XL:     1536px+ (2xl:)
```

## 🌐 Utility Classes

### Containers
- `.container-fluid`: max-w-7xl
- `.container-compact`: max-w-6xl

### Grids
- `.grid-cols-responsive`: auto grid 3 cols

### Typography
- `.gradient-text`: gradient effect
- `.font-display`: Outfit font
- `.font-sans`: Plus Jakarta Sans

## ♿ Accessibility

- ✅ Semantic HTML
- ✅ ARIA labels on icons
- ✅ Keyboard navigation
- ✅ Color contrast ratios
- ✅ Focus visible states
- ✅ Alt text on images

## 🔄 Dark Mode (Ready for Implementation)

Currently using dark theme by default. To add light mode:

```tsx
// In Navbar
const [isDark, setIsDark] = useState(true)

useEffect(() => {
  if (!isDark) {
    document.documentElement.classList.remove('dark')
  } else {
    document.documentElement.classList.add('dark')
  }
}, [isDark])
```

---

**Design System Version**: 1.0.0  
**Last Updated**: 2026-07-06
