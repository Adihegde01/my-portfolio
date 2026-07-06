# Premium Portfolio - Next.js Edition

A **completely redesigned**, modern, enterprise-grade portfolio built with **Next.js 15** featuring premium UI/UX design, smooth animations, and professional components.

## 🚀 Live Demo

**Production**: https://adihegde01.github.io/my-portfolio/  
**Development**: http://localhost:3001/my-portfolio/

## ✨ Premium Features

### 🎨 Modern Design System
- **Premium color palette** (Sky Blue, Purple, Dark Slate)
- **Glassmorphism effects** (frosted glass design)
- **Smooth animations** with Framer Motion
- **Consistent spacing** (8px-based scale)
- **Professional typography** (Outfit + Plus Jakarta Sans)

### 🏗️ Enterprise Architecture
- **Next.js 15** with App Router
- **TypeScript** for type safety
- **Tailwind CSS 4** for utility-first styling
- **Server & Client Components** optimization
- **Image optimization** built-in

### 📱 Responsive Layout
- Mobile-first approach
- Tablet optimization
- Desktop refinement
- Touch-friendly interactions

### ⚡ Performance
- Code splitting by route
- Automatic image optimization
- CSS purging with Tailwind
- Zero layout shift
- Fast page loads

## 📦 Project Structure

```
my-portfolio/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
│
├── components/
│   ├── Navbar.tsx         # Navigation bar
│   ├── Footer.tsx         # Footer with contact form
│   ├── BackgroundEffects.tsx  # Animated background
│   └── sections/          # Page sections
│       ├── Hero.tsx       # Hero/landing section
│       ├── Skills.tsx     # Technical skills
│       ├── Experience.tsx # Work experience
│       ├── Projects.tsx   # Featured projects
│       └── Contact.tsx    # Contact CTA
│
├── public/                # Static assets
├── next.config.js         # Next.js configuration
├── tailwind.config.ts     # Tailwind configuration
├── tsconfig.json          # TypeScript configuration
└── package.json
```

## 🛠️ Tech Stack

| Category | Technology |
|----------|-----------|
| **Framework** | Next.js 15 |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS 4 |
| **Animations** | Framer Motion |
| **Icons** | Lucide React |
| **Fonts** | Google Fonts (Outfit, Plus Jakarta Sans) |

## 🎯 Sections Overview

### 1. **Navbar**
- Fixed positioning with blur effect
- Smooth scroll navigation
- Mobile hamburger menu
- Theme toggle (dark mode ready)
- Responsive design

### 2. **Hero Section**
- Professional profile image with glow
- Large, bold gradient text
- Compelling subtitle
- Call-to-action buttons
- Floating info cards
- Statistics showcase

### 3. **Skills Section**
- 6 skill categories
- Icon-based design
- Technology badges
- Hover animations
- Responsive grid layout

### 4. **Experience Section**
- Timeline-style design
- Achievement highlights
- Role and duration badges
- Professional styling
- Hover effects

### 5. **Projects Section**
- 3 project categories
- Project cards with descriptions
- Technology stack badges
- External links
- Highlight bullets

### 6. **Contact Section**
- Contact information cards
- Contact form with validation
- Social media links
- Call-to-action section
- Footer information

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at: `http://localhost:3001/my-portfolio/`

### Build for Production

```bash
# Build the app
npm run build

# Start production server
npm start
```

## 🎨 Customization

### Update Personal Information

**Hero Section** - Edit `components/sections/Hero.tsx`:
```tsx
<h1>Your Name Here</h1>
<p>Your professional title</p>
```

**Skills** - Edit `components/sections/Skills.tsx`:
```tsx
const skillCategories = [
  {
    title: 'Your Skill',
    skills: ['Tech1', 'Tech2'],
    // ...
  }
]
```

**Projects** - Edit `components/sections/Projects.tsx`:
```tsx
const projectCategories = [
  {
    category: 'Your Category',
    projects: [/* your projects */]
  }
]
```

**Contact** - Edit `components/sections/Contact.tsx` and `components/Footer.tsx`:
```tsx
href="mailto:your-email@example.com"
href="tel:+1234567890"
```

### Modify Colors

Edit `tailwind.config.ts`:
```typescript
colors: {
  'primary': {
    500: '#your-color',
    // ...
  }
}
```

### Add New Sections

Create `components/sections/YourSection.tsx` and import in `app/page.tsx`:
```tsx
import YourSection from '@/components/sections/YourSection'

export default function Home() {
  return (
    <>
      {/* ... */}
      <YourSection />
    </>
  )
}
```

## 📊 Available Scripts

```bash
# Development
npm run dev          # Start dev server

# Production
npm run build        # Build for production
npm start           # Start production server

# Code Quality
npm run lint        # Run ESLint

# Deployment
npm run deploy      # Build and deploy to GitHub Pages
```

## 🎨 Design Tokens

### Colors
- **Primary**: Sky Blue (#0ea5e9)
- **Accent**: Purple (#a855f7)
- **Dark**: Slate 950 (#030712)
- **Text**: Slate 50-300

### Typography
- **Display Font**: Outfit (600-900 weights)
- **Body Font**: Plus Jakarta Sans (300-800 weights)
- **Base Size**: 16px

### Spacing Scale
- xs: 0.5rem (8px)
- sm: 0.75rem (12px)
- md: 1rem (16px)
- lg: 1.5rem (24px)
- xl: 2rem (32px)
- 2xl: 2.5rem (40px)

## 🌐 Deployment

### GitHub Pages
```bash
npm run deploy
```

### Vercel (Recommended)
1. Push code to GitHub
2. Import repository at vercel.com
3. Deploy with one click

### Netlify
```bash
npm run build
# Upload 'out' folder to Netlify
```

### Custom Server
```bash
npm run build
npm start
```

## ⚡ Performance Optimizations

- ✅ Next.js image optimization
- ✅ Automatic code splitting
- ✅ CSS purging with Tailwind
- ✅ Font optimization with Next.js
- ✅ Component lazy loading
- ✅ Metadata and SEO optimization

## 🐛 Troubleshooting

### Port Already in Use
```bash
npm run dev -- -p 3002
```

### Build Errors
```bash
rm -rf .next node_modules package-lock.json
npm install
npm run build
```

### Styling Issues
1. Ensure `globals.css` imports Tailwind
2. Restart dev server
3. Clear browser cache

## 📚 Documentation

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [TypeScript](https://www.typescriptlang.org/docs/)

## 🎯 Next Steps

1. **Customize content** - Update personal info, projects, skills
2. **Add images** - Replace profile image
3. **Connect contact form** - Integrate with email service
4. **Deploy** - Push to GitHub Pages or Vercel
5. **Monitor** - Add analytics (Google Analytics, Vercel Analytics)

## 📞 Support

Need help? Check:
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com)
- [Framer Motion Guide](https://www.framer.com/motion/)

## 📄 License

This project is open source and available under the MIT License.

---

**Built with ❤️ using Next.js, Tailwind CSS, and Framer Motion**

**Current Version**: 1.0.0  
**Last Updated**: 2026-07-06  
**Status**: ✅ Production Ready
