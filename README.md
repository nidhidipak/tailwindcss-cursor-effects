# tailwindcss-cursor-effects

A Tailwind CSS plugin that provides out-of-the-box interactive cursor experiences. Forget writing lots of JavaScript for basic interactions—just drop in a Tailwind class!

## Installation

Install the plugin from npm:

```bash
npm install tailwindcss-cursor-effects
```

Then add the plugin to your `tailwind.config.js` file:

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    // ...
  },
  plugins: [
    require('tailwindcss-cursor-effects'),
    // ...
  ],
}
```

## Initialization

Because these are highly interactive effects, a tiny client-side JavaScript runtime is required to pipe mouse coordinates to CSS variables. 

Import and run the initializer in your client-side entry file (e.g., `main.js` or `_app.tsx`):

```javascript
import { initCursorEffects } from 'tailwindcss-cursor-effects/dist/runtime';

// Call it once when your app mounts
initCursorEffects();
```

## Available Utilities

### Magnetic Buttons
Makes an element pull towards the user's cursor on hover.
- `cursor-magnetic`
- `cursor-magnetic-sm`
- `cursor-magnetic-lg`
- `cursor-strength-{20|40|60|80}`

```html
<button class="cursor-magnetic cursor-strength-40 px-6 py-2 bg-indigo-500 rounded-full text-white">
  Hover Me
</button>
```

### Spotlight Cursor
Applies a radial spotlight gradient that follows the cursor *inside* the element.
- `cursor-spotlight`
- `cursor-spotlight-sm`
- `cursor-spotlight-xl`

```html
<div class="cursor-spotlight bg-slate-900 border border-slate-700 p-6 rounded-xl text-white">
  Spotlight Card
</div>
```

### Blob Cursor
A large, blurred, colorful blob that smoothly follows the cursor across the whole screen.
- `cursor-blob`
- `cursor-blob-lg`
- `cursor-blob-xl`

```html
<!-- Place anywhere in the DOM -->
<div class="cursor-blob"></div>
```

### Cursor Follower
A fixed element that smoothly trails behind the real cursor.
- `cursor-follow`
- `cursor-follow-slow`
- `cursor-follow-fast`

```html
<div class="cursor-follow w-4 h-4 bg-white rounded-full mix-blend-difference"></div>
```

### Image Reveal
Hovering over specific elements will reveal a floating image that follows the cursor.
- `cursor-image`

```html
<!-- 1. Place the reveal container in the DOM -->
<div class="cursor-image"></div>

<!-- 2. Add the data attribute to your hover targets -->
<a href="#" data-cursor-img="https://images.unsplash.com/photo-...">Hover to reveal image</a>
```

### Text Reveal
Reveals text color dynamically based on the mouse cursor's position.
- `cursor-text-reveal`
- `cursor-text-reveal-lg`
- `cursor-text-wrapper` (Optional: Add this to a parent container so the reveal tracks the mouse across the whole box)

```html
<div class="cursor-text-wrapper bg-slate-900 p-8 rounded-xl">
  <h1 class="cursor-text-reveal text-6xl font-black">
    Hover over the box to reveal!
  </h1>
</div>
```

### Hover Distortion (Liquid Effect)
Applies a real-time liquid/fractal noise distortion to the element based on how fast the cursor is moving over it.
- `cursor-distort`

```html
<div class="cursor-distort bg-blue-500 text-white p-8 rounded-xl">
  Move your mouse fast over me!
</div>
```
