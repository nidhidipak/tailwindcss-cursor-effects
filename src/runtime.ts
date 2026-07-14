export function initCursorEffects() {
  if (typeof window === 'undefined') return () => {};

  const cleanupFns: Array<() => void> = [];

  // Track global mouse position for blob/follower
  const root = document.documentElement;
  const globalMouseMove = (e: MouseEvent) => {
    root.style.setProperty('--mouse-x', `${e.clientX}px`);
    root.style.setProperty('--mouse-y', `${e.clientY}px`);
  };
  window.addEventListener('mousemove', globalMouseMove);
  cleanupFns.push(() => window.removeEventListener('mousemove', globalMouseMove));

  // Spotlight (requires relative coordinates per element)
  document.querySelectorAll('.cursor-spotlight, .cursor-spotlight-sm, .cursor-spotlight-xl').forEach((el) => {
    const handleSpotlight = (e: Event) => {
      const mouseEvent = e as MouseEvent;
      const element = e.currentTarget as HTMLElement;
      const rect = element.getBoundingClientRect();
      const x = mouseEvent.clientX - rect.left;
      const y = mouseEvent.clientY - rect.top;
      element.style.setProperty('--mouse-x', `${x}px`);
      element.style.setProperty('--mouse-y', `${y}px`);
    };
    el.addEventListener('mousemove', handleSpotlight);
    cleanupFns.push(() => el.removeEventListener('mousemove', handleSpotlight));
  });

  // Text Reveal (requires absolute coordinates but only while hovering)
  document.querySelectorAll('.cursor-text-reveal, .cursor-text-reveal-lg, .cursor-text-wrapper').forEach((el) => {
    const handleTextRevealMove = (e: Event) => {
      const mouseEvent = e as MouseEvent;
      const element = e.currentTarget as HTMLElement;
      element.style.setProperty('--text-reveal-x', `${mouseEvent.clientX}px`);
      element.style.setProperty('--text-reveal-y', `${mouseEvent.clientY}px`);
    };
    const handleTextRevealLeave = (e: Event) => {
      const element = e.currentTarget as HTMLElement;
      element.style.removeProperty('--text-reveal-x');
      element.style.removeProperty('--text-reveal-y');
    };
    el.addEventListener('mousemove', handleTextRevealMove);
    el.addEventListener('mouseleave', handleTextRevealLeave);
    cleanupFns.push(() => {
      el.removeEventListener('mousemove', handleTextRevealMove);
      el.removeEventListener('mouseleave', handleTextRevealLeave);
    });
  });

  // Awwwards Style Geometric Followers (Auto-injected)
  const awwwardsCursors = [
    'cursor-difference', 'cursor-exclusion', 'cursor-overlay', 'cursor-color-dodge', 'cursor-saturation',
    'cursor-glow-neon', 'cursor-flashlight', 'cursor-scanning-laser', 'cursor-rgb-split',
    'cursor-dashed-orbit', 'cursor-crosshair', 'cursor-morph',
    'cursor-ring', 'cursor-ring-double', 'cursor-halo', 'cursor-lens', 'cursor-pulse'
  ];

  awwwardsCursors.forEach(cursorClass => {
    document.querySelectorAll(`.${cursorClass}`).forEach(el => {
      let follower: HTMLElement | null = null;
      
      const handleEnter = () => {
        if (!follower) {
          follower = document.createElement('div');
          follower.className = `cursor-follower ${cursorClass}`;
          follower.style.opacity = '0';
          follower.style.transition = 'opacity 0.3s ease';
          document.body.appendChild(follower);
          
          // Force reflow and fade in
          requestAnimationFrame(() => {
            if (follower) follower.style.opacity = '1';
          });
        }
      };

      const handleLeave = () => {
        if (follower) {
          const f = follower;
          f.style.opacity = '0';
          setTimeout(() => f.remove(), 300);
          follower = null;
        }
      };
      
      el.addEventListener('mouseenter', handleEnter);
      el.addEventListener('mouseleave', handleLeave);
      cleanupFns.push(() => {
        el.removeEventListener('mouseenter', handleEnter);
        el.removeEventListener('mouseleave', handleLeave);
        if (follower) follower.remove();
      });
    });
  });

  // Magnetic & Physics effects
  document.querySelectorAll('.cursor-magnetic, .cursor-magnetic-sm, .cursor-magnetic-lg, .cursor-magnetic-heavy, .cursor-magnetic-elastic, .cursor-repel, .cursor-magnetic-x, .cursor-magnetic-invert, .cursor-corner-snap').forEach((el) => {
    const element = el as HTMLElement;
    const handleMagneticMove = (e: Event) => {
      const mouseEvent = e as MouseEvent;
      const rect = element.getBoundingClientRect();
      const h = rect.width / 2;
      const v = rect.height / 2;
      let x = mouseEvent.clientX - rect.left - h;
      let y = mouseEvent.clientY - rect.top - v;
      
      let strengthStr = getComputedStyle(element).getPropertyValue('--magnetic-strength').trim() || '0.5';
      let strength = parseFloat(strengthStr);

      if (element.classList.contains('cursor-repel')) {
        strength = -1.5; // Repel strongly
      } else if (element.classList.contains('cursor-magnetic-invert')) {
        strength = -0.5; // Invert push
      } else if (element.classList.contains('cursor-corner-snap')) {
        // Snap to nearest corner
        const cornerX = x > 0 ? h : -h;
        const cornerY = y > 0 ? v : -v;
        x = cornerX;
        y = cornerY;
        strength = 0.8;
      }

      if (element.classList.contains('cursor-magnetic-x')) {
        y = 0; // Lock to X axis
      }

      element.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
    };

    const handleMagneticLeave = () => {
      element.style.transform = 'translate(0px, 0px)';
    };

    element.addEventListener('mousemove', handleMagneticMove);
    element.addEventListener('mouseleave', handleMagneticLeave);
    cleanupFns.push(() => {
      element.removeEventListener('mousemove', handleMagneticMove);
      element.removeEventListener('mouseleave', handleMagneticLeave);
    });
  });

  // Image reveal hover triggers
  const cursorImageEl = document.querySelector('.cursor-image') as HTMLElement;
  if (cursorImageEl) {
    document.querySelectorAll('[data-cursor-img]').forEach((el) => {
      const handleImageEnter = (e: Event) => {
        const target = e.currentTarget as HTMLElement;
        const imgUrl = target.getAttribute('data-cursor-img');
        if (imgUrl) {
          cursorImageEl.style.setProperty('--reveal-image', `url(${imgUrl})`);
          cursorImageEl.classList.add('cursor-image-active');
        }
      };
      const handleImageLeave = () => {
        cursorImageEl.classList.remove('cursor-image-active');
      };
      
      el.addEventListener('mouseenter', handleImageEnter);
      el.addEventListener('mouseleave', handleImageLeave);
      cleanupFns.push(() => {
        el.removeEventListener('mouseenter', handleImageEnter);
        el.removeEventListener('mouseleave', handleImageLeave);
      });
    });
  }

  // Hover Distortion
  const distorts = document.querySelectorAll('.cursor-distort');
  if (distorts.length > 0) {
    if (!document.getElementById('cursor-distort-svg')) {
      const svg = document.createElement('div');
      svg.innerHTML = `
        <svg id="cursor-distort-svg" style="position: absolute; width: 0; height: 0; pointer-events: none;">
          <filter id="cursor-distort-filter">
            <feTurbulence type="fractalNoise" baseFrequency="0.01" numOctaves="3" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="0" xChannelSelector="R" yChannelSelector="G" id="cursor-distort-map" />
          </filter>
        </svg>
      `;
      document.body.appendChild(svg);
      // We don't necessarily need to clean up the SVG as it's harmless, but we could.
    }
    
    distorts.forEach((el) => {
      const map = document.querySelector('#cursor-distort-filter feDisplacementMap');
      let scale = 0;
      let targetScale = 0;
      let lastX = 0;
      let lastY = 0;
      let reqId: number;
      let stopTimeout: any;

      const animate = () => {
        scale += (targetScale - scale) * 0.15;
        if (map) map.setAttribute('scale', scale.toString());
        if (scale > 0.5 || targetScale > 0) {
          reqId = requestAnimationFrame(animate);
        } else {
          scale = 0;
          if (map) map.setAttribute('scale', '0');
        }
      };

      const handleDistortMove = (e: Event) => {
        const mouseEvent = e as MouseEvent;
        const dx = mouseEvent.clientX - lastX;
        const dy = mouseEvent.clientY - lastY;
        const speed = Math.sqrt(dx * dx + dy * dy);
        targetScale = Math.min(speed * 3, 50); 
        lastX = mouseEvent.clientX;
        lastY = mouseEvent.clientY;
        
        clearTimeout(stopTimeout);
        stopTimeout = setTimeout(() => {
          targetScale = 0;
        }, 50);

        cancelAnimationFrame(reqId);
        reqId = requestAnimationFrame(animate);
      };

      const handleDistortEnter = (e: Event) => {
        const mouseEvent = e as MouseEvent;
        lastX = mouseEvent.clientX;
        lastY = mouseEvent.clientY;
        animate();
      };

      el.addEventListener('mousemove', handleDistortMove);
      el.addEventListener('mouseenter', handleDistortEnter);
      cleanupFns.push(() => {
        el.removeEventListener('mousemove', handleDistortMove);
        el.removeEventListener('mouseenter', handleDistortEnter);
        clearTimeout(stopTimeout);
        cancelAnimationFrame(reqId);
      });
    });
  }

  // Cursor Trail Effect
  let lastTrailTime = 0;
  document.querySelectorAll('.cursor-trail').forEach((el) => {
    const handleTrailMove = (e: Event) => {
      const now = Date.now();
      if (now - lastTrailTime < 30) return;
      lastTrailTime = now;
      
      const mouseEvent = e as MouseEvent;
      const particle = document.createElement('div');
      particle.className = 'cursor-trail-particle';
      particle.style.left = `${mouseEvent.clientX}px`;
      particle.style.top = `${mouseEvent.clientY}px`;
      
      document.body.appendChild(particle);

      requestAnimationFrame(() => {
        particle.style.opacity = '0';
        particle.style.transform = 'translate(-50%, -50%) scale(0.2)';
      });

      setTimeout(() => {
        particle.remove();
      }, 600);
    };

    el.addEventListener('mousemove', handleTrailMove);
    cleanupFns.push(() => el.removeEventListener('mousemove', handleTrailMove));
  });

  // Global Click Ripple
  const globalMouseDown = (e: MouseEvent) => {
    const ripple = document.createElement('div');
    ripple.className = 'cursor-ripple-effect';
    ripple.style.left = `${e.clientX}px`;
    ripple.style.top = `${e.clientY}px`;
    document.body.appendChild(ripple);
    
    requestAnimationFrame(() => {
      ripple.style.transform = 'translate(-50%, -50%) scale(1.5)';
      ripple.style.opacity = '0';
    });
    
    setTimeout(() => {
      ripple.remove();
    }, 500);
  };
  document.addEventListener('mousedown', globalMouseDown);
  cleanupFns.push(() => document.removeEventListener('mousedown', globalMouseDown));

  return function cleanup() {
    cleanupFns.forEach(fn => fn());
    cleanupFns.length = 0; // Clear the array
  };
}
