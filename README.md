<div align="center">

# 🖱️ tailwindcss-cursor-effects

Create interactive cursor effects using simple Tailwind CSS utility classes—no custom CSS required.

✨ Magnetic Buttons • 🎯 Spotlights • 💫 Cursor Followers • 🌊 Liquid Distortion • 🚀 Tailwind CSS v3 & v4

[![NPM Version](https://img.shields.io/npm/v/tailwindcss-cursor-effects?style=flat-square&logo=npm)](https://www.npmjs.com/package/tailwindcss-cursor-effects)
[![NPM Downloads](https://img.shields.io/npm/dt/tailwindcss-cursor-effects?style=flat-square&logo=npm)](https://www.npmjs.com/package/tailwindcss-cursor-effects)
[![License](https://img.shields.io/npm/l/tailwindcss-cursor-effects?style=flat-square)](LICENSE)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v3%20%26%20v4-38BDF8?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)

</div>

---

# ✨ Why?

Normally, creating advanced cursor interactions requires custom JavaScript, CSS, and lots of event handling.

```html
<button class="custom-cursor"></button>
```

With **tailwindcss-cursor-effects**, simply add a utility class.

```html
<button class="cursor-magnetic"></button>
```

No custom CSS.

No animation libraries.

Just Tailwind classes.

Works with every framework.

---

# ✨ Features

- 🖱️ Interactive cursor followers
- 🧲 Magnetic buttons
- 💡 Spotlight effects
- 🌊 Liquid distortions
- 🎨 Blend mode cursors
- 🖼 Image reveal cursor
- ✨ Cursor trails
- ⚡ High performance
- 🧩 SSR friendly
- ✅ Tailwind CSS v3 & v4

---

# 🌍 Works With

- HTML
- React
- Next.js
- Vue
- Nuxt
- Angular
- Svelte
- Astro
- Remix
- Laravel
- WordPress
- SolidJS
- Qwik
- Any Tailwind CSS project

---

# 📦 Installation

### npm

```bash
npm install tailwindcss-cursor-effects
```

### pnpm

```bash
pnpm add tailwindcss-cursor-effects
```

### yarn

```bash
yarn add tailwindcss-cursor-effects
```

---

# 🚀 Setup

## Tailwind CSS v4

```css
@import "tailwindcss";

@plugin "tailwindcss-cursor-effects";
```

---

## Tailwind CSS v3

```js
module.exports = {
  plugins: [
    require("tailwindcss-cursor-effects"),
  ],
};
```

---

# ⚡ Initialize Runtime

Import the runtime once in your application.

```jsx
import { useEffect } from "react";
import { initCursorEffects } from "tailwindcss-cursor-effects/dist/runtime";

export default function App() {
  useEffect(() => {
    const cleanup = initCursorEffects();
    return () => cleanup();
  }, []);

  return <YourApp />;
}
```

---

# 🎨 Examples

## Magnetic Button

```html
<button class="cursor-magnetic">
  Hover me
</button>
```

---

## Cursor Ring

```html
<div class="cursor-ring">
  Hover here
</div>
```

---

## Spotlight

```html
<div class="cursor-spotlight">
  Spotlight Effect
</div>
```

---

## Flashlight

```html
<div class="cursor-flashlight">
  Flashlight Effect
</div>
```

---

## Text Reveal

```html
<div class="cursor-text-wrapper">
    <h1 class="cursor-text-reveal">
        Hello World
    </h1>
</div>
```

---

## Image Reveal

```html
<div class="cursor-image"></div>

<a
  data-cursor-img="/image.jpg">
  Hover Me
</a>
```

---

## Cursor Trail

```html
<div class="cursor-trail">
  Move your mouse
</div>
```

---

## Liquid Distortion

```html
<div class="cursor-distort">
  Hover Me
</div>
```

---

# 📚 Available Utilities

| Category | Classes |
|----------|----------|
| Cursor Followers | `cursor-ring`, `cursor-ring-double`, `cursor-halo`, `cursor-pulse`, `cursor-crosshair`, `cursor-lens`, `cursor-morph`, `cursor-dashed-orbit` |
| Blend Modes | `cursor-difference`, `cursor-exclusion`, `cursor-overlay`, `cursor-color-dodge`, `cursor-saturation` |
| Lighting | `cursor-glow-neon`, `cursor-flashlight`, `cursor-rgb-split`, `cursor-scanning-laser` |
| Magnetic | `cursor-magnetic`, `cursor-magnetic-heavy`, `cursor-magnetic-elastic`, `cursor-repel`, `cursor-corner-snap`, `cursor-magnetic-invert`, `cursor-magnetic-x` |
| Spotlight | `cursor-spotlight`, `cursor-spotlight-sm`, `cursor-spotlight-xl` |
| Text Reveal | `cursor-text-wrapper`, `cursor-text-reveal`, `cursor-text-reveal-lg` |
| Distortion | `cursor-distort` |
| Image Reveal | `cursor-image` |
| Trail | `cursor-trail` |

---

# 🎥 Demo

👉 https://tailwindcss-cursor-effects.vercel.app

---

# 🧪 Playground

Clone the repository and start the playground.

```bash
git clone https://github.com/nidhidipak/tailwindcss-cursor-effects

cd tailwindcss-cursor-effects

npm install

npm run playground
```

---

# 🤝 Contributing

Contributions, issues and feature requests are welcome.

1. Fork the repository

2. Create a feature branch

3. Commit your changes

4. Open a Pull Request

---

# 📄 License

MIT License.

---

<div align="center">

Made with ❤️ by **Nidhi Patel**

⭐ If this project helps you, please consider giving it a star.

</div>