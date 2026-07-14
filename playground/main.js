import { initCursorEffects } from './runtime.js';

// Initialize all cursor effects globally
const cleanup = initCursorEffects();

// --- Copy to Clipboard Feature for Playground ---
const toast = document.createElement('div');
toast.className = 'fixed bottom-8 right-8 bg-emerald-500 text-white px-6 py-4 rounded-xl shadow-[0_10px_40px_rgba(16,185,129,0.3)] transform translate-y-20 opacity-0 transition-all duration-300 z-[10000] font-medium flex items-center gap-3';
toast.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" /></svg> <span id="toast-msg">Copied class</span>`;
document.body.appendChild(toast);

let toastTimeout;

// Select all elements in the playground that have a cursor class
document.querySelectorAll('[class*="cursor-"]').forEach(el => {
  // Only target the main demo cards inside the grids or flex wrappers
  if (!el.closest('section > .grid') && !el.closest('section > .flex')) return;
  // Ignore specific wrapper classes that aren't the actual effect
  if (el.classList.contains('cursor-text-wrapper')) return;

  // Ensure they feel clickable
  if (window.getComputedStyle(el).cursor === 'auto') {
      el.style.cursor = 'pointer';
  }
  
  el.addEventListener('click', (e) => {
    // Prevent interfering with inner elements
    e.stopPropagation();

    // Find the actual cursor plugin class
    const classes = Array.from(el.classList);
    const cursorClass = classes.find(c => 
      c.startsWith('cursor-') && 
      !['cursor-pointer', 'cursor-text-mask'].includes(c)
    );
    
    if (cursorClass) {
      // Copy to clipboard
      navigator.clipboard.writeText(cursorClass).then(() => {
        
        // 1. Show Toast
        document.getElementById('toast-msg').textContent = `Copied: .${cursorClass}`;
        toast.style.transform = 'translateY(0)';
        toast.style.opacity = '1';
        
        clearTimeout(toastTimeout);
        toastTimeout = setTimeout(() => {
          toast.style.transform = 'translateY(20px)';
          toast.style.opacity = '0';
        }, 2000);

        // 2. Temporarily change the text of the button/card
        const heading = el.querySelector('h3');
        if (heading) {
            // For Cards
            const originalText = heading.innerText;
            heading.innerText = 'Copied!';
            heading.classList.add('text-emerald-400');
            setTimeout(() => {
                heading.innerText = originalText;
                heading.classList.remove('text-emerald-400');
            }, 1500);
        } else if (el.tagName.toLowerCase() === 'button') {
            // For Buttons
            const originalText = el.innerText;
            el.innerText = 'Copied!';
            el.classList.add('bg-emerald-600');
            setTimeout(() => {
                el.innerText = originalText;
                el.classList.remove('bg-emerald-600');
            }, 1500);
        }
      });
    }
  });
});
