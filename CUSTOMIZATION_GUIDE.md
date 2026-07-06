# Portfolio Customization Guide

This guide will help you customize and maintain your premium portfolio.

## 🎨 Customizing Colors

### Primary Colors
Edit `tailwind.config.js` to change the primary accent color:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        50: '#f5f3ff',
        // ... change to your preferred color
        500: '#8b5cf6', // Main color
      }
    }
  }
}
```

**Current theme**: Sky Blue (#38bdf8) - Professional and modern

### Background Colors
The portfolio uses Slate 950 as the main background. To change:
- Modify `--bg-color` in `src/index.css`
- Update `bg-slate-950` classes in components

## 📝 Adding/Editing Content

### Hero Section
File: `src/components/Hero.jsx`

Change your name and title:
```jsx
<h1>
  <span className="...">YOUR NAME</span>
  <br />
  <span className="...">YOUR TITLE</span>
</h1>
```

Update bio text:
```jsx
<motion.p className="...">
  Your bio here...
</motion.p>
```

### Skills Section
File: `src/components/Skills.jsx`

Add/edit skills in the `skillsData` array:
```javascript
const skillsData = [
  {
    category: "Your Category",
    icon: <YourIcon />,
    desc: "Your description",
    items: ["Skill1", "Skill2", "Skill3"]
  },
  // Add more categories
];
```

**Available icons from lucide-react:**
- `Code2`, `Database`, `Layout`, `Cloud`, `Cpu`, `Brain`
- Import more from: `import { YourIcon } from 'lucide-react'`

### Experience Section
File: `src/components/Experience.jsx`

Edit the `experiences` array:
```javascript
const experiences = [
  {
    role: "Your Job Title",
    company: "Company Name",
    duration: "When",
    desc: [
      "Achievement 1",
      "Achievement 2",
      // Add more
    ]
  }
];
```

### Projects Section
File: `src/components/Projects.jsx`

Edit the `projectCategories` array:
```javascript
const projectCategories = [
  {
    name: "Category Name",
    projects: [
      {
        title: "Project Name",
        desc: "Short description",
        highlights: [
          "Key feature 1",
          "Key feature 2",
          // Add more
        ],
        tools: ["Technology1", "Technology2"],
        link: "https://project-url.com"
      }
    ]
  }
];
```

### Contact/Footer Section
File: `src/components/Footer.jsx`

Update contact information:
```jsx
<a href="mailto:your@email.com">
  hegdeadi01@gmail.com  // Change this
</a>

<a href="tel:+91YOUR_PHONE">
  +91 9353462110  // Change this
</a>
```

Update social links:
```jsx
<a href="https://linkedin.com/in/yourprofile">
  // LinkedIn link
</a>
<a href="https://github.com/yourprofile">
  // GitHub link
</a>
```

## 🎬 Customizing Animations

All animations use Framer Motion. Edit timing and effects in each component:

### Common animation patterns:

**Fade in on load:**
```jsx
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.8 }}
```

**Scroll trigger animation:**
```jsx
whileInView={{ opacity: 1, scale: 1, y: 0 }}
viewport={{ once: true }}
```

**Hover effects:**
```jsx
whileHover={{ scale: 1.05 }}
transition={{ duration: 0.3 }}
```

### Adjusting animation speed:
- `duration: 0.6` = Speed (lower = faster)
- `delay: 0.2` = Wait time before starting
- `transition` = Type of animation curve

## 🖼️ Adding Your Images

### Profile Image
1. Replace `/src/assets/profile.jpg` with your image
2. File should be: `profile.jpg` or update import in `Hero.jsx`

### Background Images
1. Add images to `/src/assets/`
2. Import and use in components:
```jsx
import bgImage from '../assets/your-image.png';

<div style={{ backgroundImage: `url(${bgImage})` }}>
```

### Optimizing Images
- Keep images under 500KB
- Use JPG for photos, PNG for graphics
- Use 1:1 aspect ratio for profile image (square)

## 🔧 Tailwind CSS Classes Reference

### Common classes used:

**Spacing:**
- `px-6` = horizontal padding
- `py-24` = vertical padding
- `gap-8` = gap between items

**Colors:**
- `text-slate-100` = text color
- `bg-slate-900` = background color
- `border-slate-700` = border color
- `hover:bg-sky-400` = on hover

**Sizing:**
- `w-full` = 100% width
- `max-w-7xl` = max width container
- `h-screen` = full height

**Responsive:**
- `md:` = medium screens (768px+)
- `lg:` = large screens (1024px+)
- `sm:flex-row` = flex row on small screens

## 📱 Testing Responsiveness

1. Open dev server: `npm run dev`
2. Press `F12` to open DevTools
3. Click mobile icon (device toolbar)
4. Test on different screen sizes:
   - Mobile: 375px
   - Tablet: 768px
   - Desktop: 1024px+

## 🚀 Deploying Your Portfolio

### GitHub Pages (Current setup)
```bash
npm run build
npm run deploy
```

Update `vite.config.js` if deploying to custom domain:
```javascript
export default defineConfig({
  base: '/',  // Change from '/my-portfolio/'
  plugins: [react()],
})
```

### Vercel (Recommended)
1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy with one click

### Netlify
1. Build: `npm run build`
2. Upload `dist` folder to Netlify

## 🔗 Useful Links

- [Tailwind CSS Docs](https://tailwindcss.com/)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [Lucide Icons](https://lucide.dev/)
- [React Docs](https://react.dev/)

## ⚡ Performance Tips

1. **Image Optimization**
   - Compress images before adding
   - Use appropriate formats

2. **Code Splitting**
   - Components are lazy loaded ✓
   - Keep bundle size small

3. **CSS**
   - Tailwind automatically removes unused styles ✓
   - Don't add custom CSS unless necessary

4. **Animations**
   - Keep animations under 1s
   - Use `ease-out` for natural feel

## 🐛 Troubleshooting

### Server won't start
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### Styles not applying
1. Check class names are correct
2. Ensure `src/index.css` has Tailwind import
3. Restart dev server

### Images not showing
1. Check file path starts with `/src/assets/`
2. Verify file exists
3. Check browser console for errors

### Animations not smooth
1. Reduce animation duration
2. Check if GPU acceleration is enabled
3. Test on different browser

---

**Happy customizing! 🎉**
