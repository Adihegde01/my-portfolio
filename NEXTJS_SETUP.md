# Premium Portfolio - Next.js Edition 🚀

Your portfolio has been completely redesigned with **Next.js**, a modern, enterprise-grade framework with premium UI/UX.

## 🎯 What's Changed

### Migration from React + Vite to Next.js
- **Framework**: Vite React → Next.js 15
- **Styling**: Tailwind CSS v4 with premium design system
- **Performance**: Server-side optimization, image optimization, code splitting
- **SEO**: Built-in metadata, structured data support
- **TypeScript**: Full type safety for enterprise development

## ✨ Premium Features

### 1. **Modern Architecture**
- Next.js 15 with App Router
- TypeScript for type safety
- Client-side components with 'use client'
- Optimized routing and navigation
- Image optimization with Next.js Image component

### 2. **Design System**
- **Color Palette**: Premium blue/purple with dark theme
  - Primary: Sky Blue (#0ea5e9)
  - Accent: Purple (#a855f7)
  - Dark: Slate 950 (#030712)
- **Typography**: Outfit (display) + Plus Jakarta Sans (body)
- **Spacing**: Consistent 8px-based spacing scale
- **Components**: Reusable, fully styled components

### 3. **Premium UI Components**
- ✅ **Navbar**: Fixed, animated, mobile-responsive
- ✅ **Hero Section**: Professional profile showcase
- ✅ **Skills Section**: 6 category cards with tech stacks
- ✅ **Experience Section**: Timeline-style experiences
- ✅ **Projects Section**: 6+ featured projects
- ✅ **Contact Section**: Contact form + CTA
- ✅ **Footer**: Comprehensive footer with links

### 4. **Visual Effects**
- Smooth page animations with Framer Motion
- Scroll-triggered animations
- Hover effects on all interactive elements
- Background animated orbs
- Gradient text and elements
- Glassmorphism design pattern

### 5. **Performance Optimizations**
- Image optimization
- Code splitting
- CSS optimization with Tailwind
- Fast page loads
- SEO-friendly structure

### 6. **Responsive Design**
- Mobile-first approach
- Tablet optimization
- Desktop refinement
- Touch-friendly interactive elements

## 📁 Project Structure

```
my-portfolio/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── BackgroundEffects.tsx
│   └── sections/
│       ├── Hero.tsx
│       ├── Skills.tsx
│       ├── Experience.tsx
│       ├── Projects.tsx
│       └── Contact.tsx
├── public/                 # Static assets
├── next.config.js          # Next.js config
├── tailwind.config.ts      # Tailwind config
├── tsconfig.json           # TypeScript config
└── package.json
```

## 🎨 Color Palette

| Element | Color | Usage |
|---------|-------|-------|
| Primary | Sky Blue (#0ea5e9) | Main accent, CTA buttons |
| Accent | Purple (#a855f7) | Secondary accent, highlights |
| Dark | Slate 950 (#030712) | Background |
| Card | Slate 800/900 | Card backgrounds |
| Text | Slate 50-300 | Text colors |

## 🚀 Getting Started

### Development
```bash
npm install
npm run dev
```
Server runs on: `http://localhost:3000/my-portfolio`

### Build for Production
```bash
npm run build
npm run start
```

### Deploy to GitHub Pages
```bash
npm run build
npm run deploy
```

## 🛠️ Technologies

### Core
- **Next.js 15** - React framework with built-in optimization
- **React 19** - Latest React features
- **TypeScript** - Type safety

### Styling
- **Tailwind CSS 4** - Utility-first CSS
- **PostCSS** - CSS processing
- **@tailwindcss/postcss** - Tailwind PostCSS plugin

### Animations
- **Framer Motion** - Smooth animations
- **lucide-react** - Premium icons

### Development
- **ESLint** - Code quality
- **autoprefixer** - Browser compatibility

## 📦 Key Dependencies

```json
{
  "next": "^15.1.3",
  "react": "^19.2.4",
  "framer-motion": "^12.38.0",
  "lucide-react": "^0.577.0",
  "tailwindcss": "^4.0.9"
}
```

## 🎯 Features Breakdown

### Navbar
- Fixed positioning with blur effect
- Smooth animations on load
- Mobile hamburger menu
- Theme toggle (dark mode ready)
- Responsive design

### Hero Section
- Large profile image with glow effect
- Gradient text for name
- Statistics cards
- CTA buttons (View Work, Download Resume)
- Floating info cards
- Animated background

### Skills Section
- 6 skill categories
- Hover animations
- Technology badges
- Responsive grid (3 columns on desktop)

### Experience Section
- Timeline-style cards
- Achievement highlights
- Role and duration badges
- Hover animations

### Projects Section
- 3 project categories
- Project cards with images
- Tech stack badges
- External links
- Highlight bullets

### Contact Section
- Contact info cards (Email, Phone, Location)
- Contact form with validation
- Social links
- CTA section

### Footer
- Full contact information
- Contact form with submission handling
- Social media links
- Copyright info

## 🔧 Customization Guide

### Change Colors
Edit `tailwind.config.ts`:
```typescript
colors: {
  'primary': { /* your colors */ }
  'accent': { /* your colors */ }
}
```

### Update Content
Edit respective files in `components/sections/`:
- Hero: Update name, bio, CTA text
- Skills: Add/edit skill categories
- Experience: Update job history
- Projects: Update project list
- Contact: Update contact information

### Add New Pages
Create new files in `app/`:
```typescript
// app/blog/page.tsx
export default function BlogPage() {
  return <div>Blog content</div>
}
```

### Customize Components
All components in `components/` are fully editable:
- Add/remove sections
- Change styles
- Add new components
- Modify animations

## 🚀 Deployment Options

### GitHub Pages
```bash
npm run deploy
```

### Vercel (Recommended for Next.js)
1. Push to GitHub
2. Import at vercel.com
3. Deploy with one click

### Netlify
1. `npm run build`
2. Upload `out/` folder
3. Configure routing for SPA

### Custom Server
```bash
npm run build
npm run start
```

## 📊 Performance Metrics

- ⚡ **Next.js**: Built-in optimization
- 🖼️ **Image**: Automatic optimization
- 📦 **Bundle**: Code splitting by route
- 🎨 **CSS**: Automatic purging with Tailwind
- 🔍 **SEO**: Built-in metadata

## 🐛 Troubleshooting

### Port Already in Use
```bash
npm run dev -- -p 3001
```

### Build Errors
```bash
rm -rf .next node_modules
npm install
npm run build
```

### Styling Not Applied
- Check Tailwind config
- Ensure `globals.css` is imported
- Restart dev server

## 📞 Support

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion)
- [React Docs](https://react.dev)

---

**Your premium portfolio is ready for the world! 🎉**

Deployed at: https://adihegde01.github.io/my-portfolio/
