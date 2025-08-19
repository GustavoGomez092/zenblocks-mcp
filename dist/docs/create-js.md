## Create JavaScript File

### Vanilla JavaScript Animation Requirements:
When using Vanilla JavaScript:
- **Handle initial animation states manually** - elements that will animate in (fade, slide, etc.) must start with their "from" state applied via JavaScript
- Use `requestAnimationFrame` or CSS transitions for smooth animations
- Implement proper entrance animations by:
  1. Setting initial state (opacity: 0, transform values, etc.) via JavaScript on page load
  2. Triggering animations on scroll, interaction, or page load
  3. Using intersection observers for scroll-triggered animations

**Example Vanilla JS Structure:**
```javascript

// Home Hero - window.gsap animations and behavior
const animateComponent =() => {

  const root = document.querySelector('.home-hero');
  if (!root) return;

  // Respect reduced motion
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Elements to animate in
  const elements = [
    { el: root.querySelector('.home-hero__badge'), delay: 0.05 },
    { el: root.querySelector('.home-hero__title'), delay: 0.12 },
    { el: root.querySelector('.home-hero__subtitle'), delay: 0.24 },
    { el: root.querySelector('.home-hero__button'), delay: 0.36 }
  ].filter(item => item.el); // Remove null elements

  if (!prefersReduced && elements.length > 0) {
    // Set initial states using window.gsap
    window.gsap.set(elements.map(item => item.el), {
      opacity: 0,
      y: 14
    });

    // Create ScrollTrigger animation
    elements.forEach(({ el, delay }) => {
      window.gsap.to(el, {
        opacity: 1,
        y: 0,
        duration: 0.48,
        ease: "power2.out",
        delay: delay,
        scrollTrigger: {
          trigger: root,
          start: "top 80%", // Equivalent to threshold: 0.2
          once: true // Only animate once
        }
      });
    });
  }
};

jQuery(document).ready(() => {
  animateComponent();
});
```

### GSAP Animation Requirements:
When using GSAP:
- **Always use `gsap.fromTo()`** to explicitly define both initial and final animation states
- Never rely on CSS for initial animation states - let GSAP handle everything
- Use GSAP's built-in performance optimizations (force3D, etc.)

**Example GSAP Structure:**
```javascript
// GSAP Animation - fromTo method handles initial state
gsap.fromTo('.fade-in-element', 
  { 
    opacity: 0, 
    y: 20 
  },
  { 
    opacity: 1, 
    y: 0, 
    duration: 0.6, 
    ease: "power2.out" 
  }
);
```

### General JavaScript Requirements:
- Use modern ES6+ syntax (const/let, arrow functions, etc.)
- Implement proper error handling
- Use GSAP's ScrollTrigger instead of intersection observers
- Ensure accessibility (respect `prefers-reduced-motion`)
- Include proper event cleanup/removal
- Use semantic and descriptive variable names
- Comment complex animation logic

### General considerations:
- jQuery is available thorugh the ``jQuery`` keyword not the ``$``
- GSAP is available through the ``window.gsap`` object
- GSAP's scrollTrigger is available through ``window.scrollTrigger`` object
- Lenis smooth scroll is available through ``window.lenis`` object
- Always run animations or interactions on document ready:
```javascript
jQuery(document).ready(() => {
  animateComponent();
});
```

## **CRITICAL! NEXT TOOL:**
ZenBlocks Quality Assurance