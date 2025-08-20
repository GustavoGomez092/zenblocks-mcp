## **ACTION: CREATE THE CSS FILE**
* If the user is going to use tailwind to style the zen block components, you MUST always use the @apply approach for separating the styles from the markup, you MUST use relevant naming conventions for creating the component clasess and then bind the styles inside the CSS file using @apply, you MUST NOT use tailwind classess inside the markup.

### About Tailwind referencing
you MUST alwayts start with referencing the main CSS inside the component CSS:

```css
@reference "@/index.css";

.component-class {
  /* Nested CSS for the component */
}
```

### Enhanced CSS Styling Requirements for Component Generation

**CRITICAL: Always use scoped/nested CSS to prevent style conflicts**

#### Mandatory CSS Scoping Rules:
* **ALWAYS wrap all CSS styles within a unique container class** to avoid CSS collision between generated components
* **Use nested CSS structure** where all styles are contained within a parent selector (e.g., `.my-component { /* all styles here */ }`)
* **Never use global CSS selectors** that could affect other components on the page
* **Prefix all class names** with a unique identifier specific to the component

#### **Animation State Requirements:**
* **DO NOT add `opacity: 0` or hide elements with CSS** for entrance animations
* **DO NOT use CSS transforms** for initial animation states (translateX, translateY, scale, etc.)
* **All entrance animation logic MUST be handled by JavaScript** (either Vanilla JS or GSAP)
* **CSS transitions are ONLY for:**
  - Hover effects
  - Focus states  
  - Static interactions (button presses, form states)
  - Non-entrance animations (continuous animations, background effects)

#### Implementation Guidelines:

**For vanilla CSS/HTML components:**
```css
.unique-component-name {
  /* All component styles nested here */
  .content { 
    /* NO opacity: 0 or transform initial states here */
    /* styles */
    .title {
      /* styles */
      .colored-text {
        /* styles */
      }
    }
    .button { 
      /* Hover transitions are OK */
      transition: background-color 0.3s ease;
      
      &:hover {
        background-color: #different-color;
      }
    }
  }
}
```

**For Tailwind CSS components:**
* Wrap the entire component in a container div with a unique class
* Use @apply for all Tailwind classes within this scoped container
* **Avoid Tailwind opacity and transform classes** for elements that will have entrance animations

```css
.unique-component-name {
  /* All component styles nested here */
  .content { 
    @apply /* tailwind classes (no opacity-0, no transform classes for animated elements) */;
    .title {
      @apply /* tailwind classes */;
      .colored-text {
        @apply /* tailwind classes */;
      }
    }
    .button { 
      @apply /* tailwind classes */ transition-colors duration-300;
      
      &:hover {
        @apply /* hover state classes */;
      }
    }
  }
}
```

#### Animation-Related CSS Guidelines:
* **Elements that will animate in:** Apply NO initial styling for animation states in CSS
* **Static elements:** Style normally - no animation restrictions
* **Hover/interaction effects:** Use CSS transitions freely
* **Continuous animations:** CSS animations are acceptable (spinning loaders, pulsing effects, etc.)

#### Why This Matters:
* Prevents style bleeding between different components
* Ensures component reusability without conflicts
* Maintains predictable styling behavior
* Allows multiple instances of components on the same page
* **Prevents animation conflicts** between CSS and JavaScript
* **Ensures consistent animation behavior** across different frameworks
* Follows modern CSS architecture best practices

#### Animation State Examples:

**❌ WRONG - Don't do this in CSS:**
```css
.hero-section {
  .fade-in-text {
    opacity: 0; /* Don't hide for JS animations */
    transform: translateY(20px); /* Don't set initial transform */
  }
}
```

**✅ CORRECT - Let JavaScript handle animation states:**
```css
.hero-section {
  .fade-in-text {
    /* Normal styling only - no animation initial states */
    font-size: 2rem;
    color: #333;
    
    /* Hover effects are fine */
    transition: color 0.2s ease;
    &:hover {
      color: #666;
    }
  }
}
```

**REMEMBER: No exceptions - every generated component MUST have scoped/nested CSS styling and MUST NOT include CSS-based initial animation states.**

### ABOUT STYLES INSIDE A REPEATER
**CRITICAL: ALWAYS reference the div automatically created by zen blocks for any repeater area.**

❌ **Don't do this**: referencing only the container for styling

```php
    <?php if ($show_logos): ?>
      <div class="testimonial-logos">
        // logos-container has a child with a zen-repeater prop
        <div class="logos-container">
          <div zen-repeater="company_logos">
            <div class="logo-item">
              <img zen-edit="logo_image" zen-type="image" src="" alt="Company Logo" />
            </div>
          </div>
        </div>
      </div>
    <?php endif; ?>
```
```css
  .testimonial-logos {
    /* .logos-container is a repeater section in the PHP template */
    .logos-container {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
      gap: 2rem;
    }
  }
```

✅ **Do this**: reference the first div child of the repeater container to apply styles correctly

```php
    <?php if ($show_logos): ?>
      <div class="testimonial-logos">
        // logos-container has a child with a zen-repeater prop
        <div class="logos-container">
          <div zen-repeater="company_logos">
            <div class="logo-item">
              <img zen-edit="logo_image" zen-type="image" src="" alt="Company Logo" />
            </div>
          </div>
        </div>
      </div>
    <?php endif; ?>
```

```css
  .testimonial-logos {
    /* .logos-container is a repeater section in the PHP template */
    .logos-container > div {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
      gap: 2rem;
    }
  }
```

### Final step when creating the styles
Make sure that you add a reference to the component stylesheet on the ``index.js`` file.

```javascript
import './index.css'
// you MUST import the CSS files for the components you create here in order for the @apply directive to work
import './zen-blocks/home-hero/home-hero.css';

import gsap from "gsap";
import scrollTrigger from "gsap/ScrollTrigger";
import Lenis from 'lenis'

gsap.registerPlugin(scrollTrigger);

// Initialize Lenis
const lenis = new Lenis({
  autoRaf: true,
});

window.gsap = gsap;
window.ScrollTrigger = scrollTrigger;
window.Lenis = lenis;
```

## **CRITICAL! NEXT TOOL:**
ZenBlocks Create JSON file