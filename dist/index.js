import plugin from "tailwindcss/plugin";
export default plugin(function ({ addUtilities, matchUtilities, theme }) {
    // 1. Magnetic Utilities
    addUtilities({
        ".cursor-magnetic": {
            "transition": "transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
            "will-change": "transform",
        },
        ".cursor-magnetic-heavy": {
            "transition": "transform 0.8s ease-out",
            "will-change": "transform",
        },
        ".cursor-magnetic-elastic": {
            "transition": "transform 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55)",
            "will-change": "transform",
        },
        ".cursor-repel": {
            "transition": "transform 0.2s ease-out",
            "will-change": "transform",
        },
        ".cursor-magnetic-x": {
            "transition": "transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
            "will-change": "transform",
        },
        ".cursor-magnetic-invert": {
            "transition": "transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
            "will-change": "transform",
        },
        ".cursor-corner-snap": {
            "transition": "transform 0.2s ease-in-out",
            "will-change": "transform",
        },
        ".cursor-magnetic-sm": {
            "--magnetic-strength": "0.2",
        },
        ".cursor-magnetic-lg": {
            "--magnetic-strength": "0.8",
        },
    });
    matchUtilities({
        "cursor-strength": (value) => ({
            "--magnetic-strength": value,
        }),
    }, { values: theme("cursorStrength") || { "20": "0.2", "40": "0.4", "60": "0.6", "80": "0.8" } });
    // 2. Cursor Follower
    addUtilities({
        ".cursor-follow": {
            position: "fixed",
            top: "0",
            left: "0",
            "pointer-events": "none",
            "will-change": "transform",
            "z-index": "9999",
            transition: "transform 0.1s ease-out",
            transform: "translate(var(--mouse-x, 0), var(--mouse-y, 0))",
        },
        ".cursor-follow-slow": {
            transition: "transform 0.3s ease-out",
        },
        ".cursor-follow-fast": {
            transition: "transform 0.05s ease-out",
        },
    });
    // 3. Blob Cursor
    addUtilities({
        ".cursor-blob": {
            position: "fixed",
            top: "0",
            left: "0",
            "pointer-events": "none",
            "will-change": "transform",
            "z-index": "9998",
            width: "100px",
            height: "100px",
            background: "rgba(99, 102, 241, 0.5)", // Indigo 500
            "border-radius": "50%",
            filter: "blur(40px)",
            transition: "transform 0.2s ease-out",
            transform: "translate(calc(var(--mouse-x, 0) - 50%), calc(var(--mouse-y, 0) - 50%))",
        },
        ".cursor-blob-lg": {
            width: "200px",
            height: "200px",
            filter: "blur(80px)",
        },
        ".cursor-blob-xl": {
            width: "300px",
            height: "300px",
            filter: "blur(120px)",
        },
    });
    // 4. Spotlight Cursor
    addUtilities({
        ".cursor-spotlight": {
            position: "relative",
            overflow: "hidden",
        },
        ".cursor-spotlight::before": {
            content: '""',
            position: "absolute",
            top: "0",
            left: "0",
            right: "0",
            bottom: "0",
            "pointer-events": "none",
            background: "radial-gradient(circle at var(--mouse-x) var(--mouse-y), rgba(255,255,255,0.15) 0%, transparent 80%)",
            transition: "opacity 0.3s ease",
            opacity: "0",
        },
        ".cursor-spotlight:hover::before": {
            opacity: "1",
        },
        ".cursor-spotlight-sm::before": {
            background: "radial-gradient(circle at var(--mouse-x) var(--mouse-y), rgba(255,255,255,0.15) 0%, transparent 40%)",
        },
        ".cursor-spotlight-xl::before": {
            background: "radial-gradient(circle at var(--mouse-x) var(--mouse-y), rgba(255,255,255,0.15) 0%, transparent 120%)",
        },
    });
    // 5. Image Reveal
    addUtilities({
        ".cursor-image": {
            "--reveal-image": "url('')",
            position: "fixed",
            top: "0",
            left: "0",
            "pointer-events": "none",
            "z-index": "9999",
            width: "150px",
            height: "150px",
            "border-radius": "12px",
            "background-image": "var(--reveal-image)",
            "background-size": "cover",
            "background-position": "center",
            opacity: "0",
            transform: "translate(calc(var(--mouse-x, 0px) + 20px), calc(var(--mouse-y, 0px) + 20px)) scale(0.8)",
            transition: "opacity 0.3s ease, transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
        },
        ".cursor-image-active": {
            opacity: "1",
            transform: "translate(calc(var(--mouse-x, 0px) + 20px), calc(var(--mouse-y, 0px) + 20px)) scale(1)",
        },
    });
    // 6. Text Reveal
    addUtilities({
        ".cursor-text-reveal": {
            color: "transparent",
            "background-image": "radial-gradient(circle at var(--text-reveal-x, -500px) var(--text-reveal-y, -500px), white 0%, transparent 150px)",
            "background-attachment": "fixed",
            "background-clip": "text",
            "-webkit-background-clip": "text",
        },
        ".cursor-text-reveal-lg": {
            "background-image": "radial-gradient(circle at var(--text-reveal-x, -500px) var(--text-reveal-y, -500px), white 0%, transparent 300px)",
        }
    });
    // 7. Hover Distortion
    addUtilities({
        ".cursor-distort": {
            filter: "url(#cursor-distort-filter)",
            "will-change": "filter",
        }
    });
    // 8. Blend Modes & Inversion
    addUtilities({
        ".cursor-follower": {
            position: "fixed",
            top: "0",
            left: "0",
            "pointer-events": "none",
            "z-index": "9999",
            "will-change": "transform",
            transform: "translate(calc(var(--mouse-x, 0px) - 50%), calc(var(--mouse-y, 0px) - 50%))",
        },
        ".cursor-follower.cursor-difference": {
            width: "20px", height: "20px",
            background: "white",
            "mix-blend-mode": "difference",
        },
        ".cursor-follower.cursor-exclusion": {
            width: "40px", height: "40px",
            "border": "2px solid white",
            "mix-blend-mode": "exclusion",
        },
        ".cursor-follower.cursor-overlay": {
            width: "80px", height: "80px",
            background: "white",
            "mix-blend-mode": "overlay",
        },
        ".cursor-follower.cursor-color-dodge": {
            width: "120px", height: "120px",
            background: "radial-gradient(circle, rgba(255,200,50,0.8) 0%, transparent 70%)",
            "mix-blend-mode": "color-dodge",
        },
        ".cursor-follower.cursor-saturation": {
            width: "150px", height: "150px",
            "backdrop-filter": "saturate(300%)",
        },
    });
    // 9. Advanced Lighting
    addUtilities({
        ".cursor-follower.cursor-glow-neon, .cursor-follower.cursor-flashlight, .cursor-follower.cursor-scanning-laser, .cursor-follower.cursor-rgb-split": {
            "z-index": "9998",
        },
        ".cursor-follower.cursor-glow-neon": {
            width: "200px", height: "200px",
            background: "radial-gradient(circle, rgba(255, 0, 255, 0.6) 0%, transparent 60%)",
            transform: "translate(calc(var(--mouse-x, 0px) - 50%), calc(var(--mouse-y, 0px) - 50%))",
            filter: "blur(20px)",
        },
        ".cursor-follower.cursor-flashlight": {
            width: "100px", height: "100px",
            "border-radius": "50%",
            background: "transparent",
            transform: "translate(calc(var(--mouse-x, 0px) - 50%), calc(var(--mouse-y, 0px) - 50%))",
            "box-shadow": "0 0 0 9999px rgba(0,0,0,0.95)",
        },
        ".cursor-follower.cursor-scanning-laser": {
            width: "100vw", height: "2px",
            background: "linear-gradient(90deg, transparent, rgba(0,255,0,0.8), transparent)",
            transform: "translateY(var(--mouse-y, 0px))",
        },
        ".cursor-follower.cursor-rgb-split": {
            width: "100px", height: "100px",
            "border-radius": "50%",
            transform: "translate(calc(var(--mouse-x, 0px) - 50%), calc(var(--mouse-y, 0px) - 50%))",
            "box-shadow": "-5px 0 20px rgba(255,0,0,0.8), 5px 0 20px rgba(0,255,0,0.8), 0 5px 20px rgba(0,0,255,0.8)",
        },
    });
    // 10. Shapes and Follower Geometry
    addUtilities({
        ".cursor-follower.cursor-dashed-orbit": {
            width: "40px", height: "40px",
        },
        ".cursor-follower.cursor-dashed-orbit::before": {
            content: '""',
            position: "absolute",
            top: "0", left: "0", width: "100%", height: "100%",
            "border-radius": "50%",
            "border": "2px dashed rgba(255,255,255,0.8)",
            "animation": "spin 4s linear infinite",
        },
        ".cursor-trail-particle": {
            position: "fixed",
            width: "8px", height: "8px",
            background: "white",
            "border-radius": "50%",
            "pointer-events": "none",
            "z-index": "9999",
            "transform": "translate(-50%, -50%) scale(1)",
            "transition": "opacity 0.6s ease-out, transform 0.6s ease-out",
        },
        ".cursor-follower.cursor-crosshair": {
            width: "40px", height: "40px",
        },
        ".cursor-follower.cursor-crosshair::before": {
            content: '""', position: "absolute", top: "50%", left: "0", width: "100%", height: "1px", background: "white",
        },
        ".cursor-follower.cursor-crosshair::after": {
            content: '""', position: "absolute", top: "0", left: "50%", width: "1px", height: "100%", background: "white",
        },
        ".cursor-follower.cursor-morph": {
            width: "20px", height: "20px",
            background: "white",
            "border-radius": "50%",
            "transition": "border-radius 0.3s ease, transform 0.3s ease",
        },
        ".cursor-follower.cursor-morph-active": {
            "border-radius": "0%",
            transform: "translate(calc(var(--mouse-x, 0px) - 50%), calc(var(--mouse-y, 0px) - 50%)) scale(2)",
        },
        ".cursor-follower.cursor-ring, .cursor-follower.cursor-ring-double, .cursor-follower.cursor-halo, .cursor-follower.cursor-lens, .cursor-follower.cursor-pulse": {
            "border-radius": "50%",
        },
        ".cursor-ripple-effect": {
            position: "fixed",
            width: "60px", height: "60px",
            border: "2px solid rgba(255,255,255,0.8)",
            "border-radius": "50%",
            "pointer-events": "none",
            "z-index": "9999",
            transform: "translate(-50%, -50%) scale(0)",
            transition: "transform 0.5s ease-out, opacity 0.5s ease-out",
        },
        ".cursor-follower.cursor-ring": {
            width: "40px", height: "40px",
            border: "2px solid white",
            background: "transparent",
        },
        ".cursor-follower.cursor-ring-double": {
            width: "60px", height: "60px",
            border: "1px solid rgba(255,255,255,0.5)",
            background: "transparent",
        },
        ".cursor-follower.cursor-ring-double::before": {
            content: '""', position: "absolute", top: "50%", left: "50%",
            width: "30px", height: "30px", border: "2px solid white", "border-radius": "50%",
            transform: "translate(-50%, -50%)",
        },
        ".cursor-follower.cursor-halo": {
            width: "100px", height: "100px",
            background: "rgba(255,255,255,0.1)",
            filter: "blur(10px)",
        },
        ".cursor-follower.cursor-lens": {
            width: "80px", height: "80px",
            "backdrop-filter": "contrast(1.5) saturate(1.5) blur(2px)",
            border: "1px solid rgba(255,255,255,0.2)",
        },
        ".cursor-follower.cursor-pulse": {
            width: "30px", height: "30px",
            background: "white",
            animation: "cursor-pulse-anim 1.5s ease-in-out infinite",
        },
    });
    // Add pulse animation keyframes
    addUtilities({
        "@keyframes cursor-pulse-anim": {
            "0%, 100%": { transform: "translate(calc(var(--mouse-x, 0px) - 50%), calc(var(--mouse-y, 0px) - 50%)) scale(1)", opacity: "1" },
            "50%": { transform: "translate(calc(var(--mouse-x, 0px) - 50%), calc(var(--mouse-y, 0px) - 50%)) scale(1.5)", opacity: "0.5" },
        }
    });
});
