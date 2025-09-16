# AI Assistant Instructions for Moroccan Glow E-commerce Project

## Project Overview
This is a React 18 TypeScript e-commerce site for Moroccan skincare products built with:
- Vite for fast builds (using SWC compiler)
- TailwindCSS for styling
- Framer Motion for animations
- React Router for navigation
- Vitest/Testing Library for testing

## Key Architecture Patterns

### Component Organization
- `src/components/Pages/` - Main page components (Home, Shop, About)
- `src/components/Sections/` - Reusable page sections (Hero, Products, Reviews)
- `src/components/Shop/` - Shopping-specific components (Cart, Products)
- `src/components/Header/` - Navigation components
- `src/components/Animate/` - Animation wrapper components

### Core UI Patterns
- Responsive design using Tailwind breakpoints (mobile-first)
- Consistent color scheme defined in `tailwind.config.mjs`:
  ```js
  colors: {
    background: '#f1ecf0',
    primary: '#c56948',
    secondary: '#c1a063', 
    text: '#393939'
  }
  ```
- Video overlays and carousels for product showcases 
- Sticky headers with smooth transitions
- Mobile menu with slide-in animation

### State Management
- Component-level state with useState/useEffect
- URL state for shopping filters and search
- Intersection Observer for scroll animations

## Development Workflow

### Setup and Installation
```bash
# Install dependencies
pnpm install

# Start dev server
pnpm run dev

# Run type checks
pnpm run typecheck

# Run tests
pnpm run test
```

### Common Tasks
1. Adding a new page:
   - Create component in `src/components/Pages/`
   - Add route in `App.tsx`
   - Follow existing pattern with HeaderWrapper

2. Adding shop products:
   - Update product data in `src/utils/products.tsx`
   - Follow existing product card pattern from ShopComponent

3. Styling components:
   - Use Tailwind classes following mobile-first approach
   - Custom animations with Framer Motion
   - Follow existing component patterns for consistency

### Testing
- Tests use Vitest with Testing Library
- Follow pattern in `src/components/Avatar/test.tsx`
- Run `pnpm test:ui` for visual test runner

## Code Conventions

### Components
- Functional components with TypeScript props
- Consistent file organization:
  1. Imports
  2. Type/Interface definitions
  3. Component function
  4. Helper functions
  5. Exports

### Styling
- Tailwind classes organized by:
  1. Layout (position, display, size)
  2. Typography
  3. Colors/Backgrounds
  4. Interactive states
- Use design tokens from theme config
- Mobile-first responsive design

### Animation Pattern
Use FadeInWhenVisible wrapper for scroll animations:
```tsx
<FadeInWhenVisible>
  <Component />
</FadeInWhenVisible>
```

## Common Gotchas
- Video elements need `playsInline` prop for iOS
- Maintain z-index order for overlays/modals
- Test mobile menu behavior extensively
- Keep SVG icon imports consistent with Lucide React