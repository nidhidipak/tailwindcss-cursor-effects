# tailwindcss-cursor-effects

A highly advanced Tailwind CSS plugin that provides out-of-the-box interactive cursor experiences. Bring your website to life with magnetic buttons, liquid distortions, blend-mode followers, and geometric shapes just by adding a Tailwind utility class.

Framework agnostic, highly performant, and fully safe for Server-Side Rendering (SSR) environments like Next.js, Nuxt, and SvelteKit.

## Installation

Install the plugin from npm:

```bash
npm install tailwindcss-cursor-effects
```

Then add the plugin to your `tailwind.config.js` (for Tailwind v3) or import it directly (for Tailwind v4).

**Tailwind v3 (`tailwind.config.js`):**
```javascript
module.exports = {
  plugins: [
    require('tailwindcss-cursor-effects'),
  ],
}
```

## Initialization (Required)

Because these effects are highly interactive, a tiny client-side JavaScript runtime is required to pipe mouse coordinates to CSS variables and dynamically spawn cursor followers.

Import and run the initializer in your client-side entry file. The function returns a `cleanup()` method, making it perfectly safe for SPAs and React `useEffect` hooks to prevent memory leaks during component unmounting.

**React / Next.js Example:**
```jsx
import { useEffect } from 'react';
import { initCursorEffects } from 'tailwindcss-cursor-effects/dist/runtime';

export default function App() {
  useEffect(() => {
    // Initialize effects and save the cleanup function
    const cleanup = initCursorEffects();
    
    // Cleanup on unmount
    return () => cleanup();
  }, []);

  return <div>{/* Your App */}</div>;
}
```

---

## Available Utilities

### 1. Geometric & Awwwards Followers
Applying these classes to any container will automatically spawn a custom cursor shape that follows your mouse whenever you hover over the element. *Zero extra HTML nested divs needed!*

- `cursor-ring`, `cursor-ring-double`
- `cursor-halo`, `cursor-lens`, `cursor-pulse`
- `cursor-crosshair`, `cursor-dashed-orbit`, `cursor-morph`

```html
<!-- A double-ring cursor will follow your mouse when hovering this div -->
<div class="cursor-ring-double p-8 bg-slate-900 rounded-xl">
  Hover me for a double ring cursor!
</div>
```

### 2. Blend Mode Inversions
Create stunning typography and visual contrast by inverting the colors beneath the cursor.
- `cursor-difference`
- `cursor-exclusion`
- `cursor-overlay`
- `cursor-color-dodge`
- `cursor-saturation`

```html
<div class="cursor-difference bg-white text-black p-8">
  The cursor will invert these colors on hover!
</div>
```

### 3. Advanced Lighting
Turn the user's cursor into a light source.
- `cursor-glow-neon`
- `cursor-rgb-split`
- `cursor-flashlight`
- `cursor-scanning-laser`

```html
<div class="cursor-flashlight bg-slate-900 text-white p-8 overflow-hidden">
  Everything is dark except where you hover!
</div>
```

### 4. Magnetic & Physics Buttons
Makes an element pull towards the user's cursor on hover. Great for CTA buttons!
- `cursor-magnetic`, `cursor-magnetic-heavy`, `cursor-magnetic-elastic`
- `cursor-repel` (pushes away), `cursor-magnetic-invert`
- `cursor-magnetic-x` (locks to X-axis), `cursor-corner-snap`

```html
<button class="cursor-magnetic px-6 py-2 bg-indigo-500 rounded-full text-white">
  I pull towards your mouse!
</button>
```

### 5. Spotlight Cursor
Applies a radial spotlight gradient that follows the cursor *inside* the element boundaries.
- `cursor-spotlight`, `cursor-spotlight-sm`, `cursor-spotlight-xl`

```html
<div class="cursor-spotlight bg-slate-900 border border-slate-700 p-6 rounded-xl">
  Spotlight Card
</div>
```

### 6. Text Reveal
Reveals text color dynamically based on the mouse cursor's position, creating a scratch-off or mask effect.
- `cursor-text-reveal`, `cursor-text-reveal-lg`
- `cursor-text-wrapper` (Add to parent container to track mouse across the whole box)

```html
<div class="cursor-text-wrapper bg-slate-900 p-8 rounded-xl">
  <h1 class="cursor-text-reveal text-6xl font-black">
    Hover over the box to reveal!
  </h1>
</div>
```

### 7. Hover Distortion (Liquid Effect)
Applies a real-time liquid/fractal SVG noise distortion to the element based on how fast the cursor is moving over it.
- `cursor-distort`

```html
<div class="cursor-distort bg-blue-500 text-white p-8 rounded-xl">
  Move your mouse fast over me!
</div>
```

### 8. Image Reveal
Hovering over specific elements will reveal a floating image that follows the cursor.
- `cursor-image` (Global container)
- `data-cursor-img="url"` (Target element attribute)

```html
<!-- 1. Place the reveal container ANYWHERE in your DOM -->
<div class="cursor-image"></div>

<!-- 2. Add the data attribute to your hover targets -->
<a href="#" data-cursor-img="https://images.unsplash.com/photo-123...">Hover to reveal image</a>
```

### 9. Cursor Trail
Leaves a fading trail of particles behind the cursor as it moves.
- `cursor-trail`

```html
<div class="cursor-trail p-8 bg-slate-900">
  Move your mouse here to see a particle trail!
</div>
```

---

## Developer Experience (Playground)
This repository includes a full playground. You can clone the repo, run `npm install`, and then `npm run playground` to experiment with all the effects live in your browser!
