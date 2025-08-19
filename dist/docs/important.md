# IMPORTANT INFO WHEN WORKING WITH ZENBLOCKS

## Main Guidelines

* Ask for the theme folder name so you can locate the right theme where you will create the zenblocks
* Create a ``zen-blocks`` folder in your theme directory if there is none
* You MUST use kebab-case for the folder name and the block name
* Follow this file structure when creating Zen block components: 
```
theme-name/
└── zen-blocks/
    └── component-name/
        ├── component-name.php
        ├── component-name.css
        ├── component-name.js
        └── component-name.json
```

**CRITICAL: ALWAYS Review the PHP code so that the template has only one child.**
* When creating markup for a Zen block component you MUST make sure that you wrap all block content in a single parent element this component MUST have it's first class name be the same name as the containing folder name. 

❌ **Don't do this**: Having more than one child on the template file or multiple childs.

```php
<div class="company-intro layout-<?php echo esc_attr($layout); ?>"></div>
<?php if ($show_breadcrumb): ?>
<nav class="breadcrumb">
  <div zen-edit="breadcrumb_content" zen-type="text">[Home / About]</div>
</nav>
<?php endif; ?>

<div class="intro-container">
  <div class="content-section">
    <div class="text-content">
      <h1 zen-edit="main_title" zen-type="text">Crafting Excellence Together</h1>

      <div zen-edit="description" zen-type="wysiwyg">
        <p>Lorem ipsum</p>
      </div>

      <?php if ($show_cta_button): ?>
      <div class="cta-section">
        <a zen-edit="cta_link" zen-type="link" href="#" class="cta-button">
          <span zen-edit="cta_text" zen-type="text">Learn More</span>
        </a>
      </div>
      <?php endif; ?>
    </div>

    <?php if ($show_decorative_badge): ?>
    <div class="decorative-badge">
      <div class="badge-circle">
        <div class="badge-inner">
          <div zen-edit="badge_content" zen-type="text">R</div>
        </div>
      </div>
    </div>
    <?php endif; ?>
  </div>

  <?php if ($show_hero_image): ?>
  <div class="image-section">
    <div class="image-container">
      <img zen-edit="hero_image" zen-type="image" src="" alt="Team collaboration" class="hero-image" />
    </div>
  </div>
  <?php endif; ?>
</div>
</div>
```

✅ **Do this**: Having always one child and only one at all times

```php
<div class="company-intro layout-<?php echo esc_attr($layout); ?>">
  <?php if ($show_breadcrumb): ?>
    <nav class="breadcrumb">
      <div zen-edit="breadcrumb_content" zen-type="text">[Home / About]</div>
    </nav>
  <?php endif; ?>
  <div class="intro-container">
    <div class="content-section">
      <div class="text-content">
        <h1 zen-edit="main_title" zen-type="text">Crafting Excellence Together</h1>

        <div zen-edit="description" zen-type="wysiwyg">
          <p>Lorem ipsum</p>
        </div>

        <?php if ($show_cta_button): ?>
          <div class="cta-section">
            <a zen-edit="cta_link" zen-type="link" href="#" class="cta-button">
              <span zen-edit="cta_text" zen-type="text">Learn More</span>
            </a>
          </div>
        <?php endif; ?>
      </div>

      <?php if ($show_decorative_badge): ?>
        <div class="decorative-badge">
          <div class="badge-circle">
            <div class="badge-inner">
              <div zen-edit="badge_content" zen-type="text">R</div>
            </div>
          </div>
        </div>
      <?php endif; ?>
    </div>

    <?php if ($show_hero_image): ?>
      <div class="image-section">
        <div class="image-container">
          <img zen-edit="hero_image" zen-type="image" src="" alt="Team collaboration" class="hero-image" />
        </div>
      </div>
    <?php endif; ?>
  </div>
</div>
```

* You MUST use the editable elements inside the HTML template (e.g., ``<h2 zen-edit="title">Default Title</h2>``)
* You can specify the editor type using zen-type attribute (e.g., ``<div zen-edit="content" zen-type="wysiwyg">Default content</div>``)
* YOU MUST REMEMBER AT ALL TIMES WHEN CREATING THE HTML that you have these editable field types:
    * text (default): Text editing with formatting
    * wysiwyg: WYSIWYG editor for rich content
    * image: Media library integration
    * link: Link/button elements
    * repeater: Repeatable content groups
    * innerblocks: Nested Gutenberg blocks for rich content editing
* The block configuration controls MUST BE ONLY USED to create global controls for showing/hiding content, background colors/gradients, activate/deactivate animations and layout styles they MUST NOT be used to add content.
* the main PHP file MUST have the same name as the containing folder (e.g., ``my-custom-block/my-custom-block.php``)
* When adding a new zen block you MUST ALWAYS Create its corresponding style, script and JSON files, so they are always available for the user even if they are not needed. The naming for all files MUST ALWAYS be the same as the containing folder (e.g., ``my-custom-block/my-custom-block.css``, ``my-custom-block/my-custom-block.js``, ``my-custom-block/my-custom-block.json``)
* you MUST always ask if the name for the new Zen component you are going to build is OK with the user, you MUST NOT skip this step, ALWAYS ask for the name of the component before creating the folder and files.
* You MUST ALWAYS ask once and only once if the user is going to be using Tailwind or nested CSS for their styling, Once you have their answer, keep it so you don't ask it again. Always ask this before creating the first component. You MUST NOT accept any other answer other than Tailwind or Nested CSS.
* You MUST ALWAYS ask once and only once if the user is going to be using GSAP or vanilla JS for their animations and interactions, Once you have their answer, keep it so you don't ask it again. Always ask this before creating the first component. You MUST NOT accept any other answer other than GSAP or Vanilla JS.
* If the user is going to use tailwind to style the zen block components, you MUST always use the @apply approach for separating the styles from the markup, you MUST use relevant naming conventions for creating the component clasess and then bind the styles inside the CSS file using @apply, you MUST NOT use tailwind classess inside the markup.


## JavaScript File Generation Requirements

### Animation Framework Selection:
**FIRST, always ask the user:** "Will this component use **Vanilla JavaScript** or **GSAP** for animations?"

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
// Set initial states for elements that will animate
function setInitialStates() {
  const animatedElements = document.querySelectorAll('.fade-in-element');
  animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
  });
}

// Animate elements
function animateIn(element) {
  element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  element.style.opacity = '1';
  element.style.transform = 'translateY(0)';
}
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
- Use intersection observers for scroll-triggered animations
- Ensure accessibility (respect `prefers-reduced-motion`)
- Include proper event cleanup/removal
- Use semantic and descriptive variable names
- Comment complex animation logic

---

## Enhanced CSS Styling Requirements for Component Generation

**CRITICAL: Always use scoped/nested CSS to prevent style conflicts**

### Mandatory CSS Scoping Rules:
* **ALWAYS wrap all CSS styles within a unique container class** to avoid CSS collision between generated components
* **Use nested CSS structure** where all styles are contained within a parent selector (e.g., `.my-component { /* all styles here */ }`)
* **Never use global CSS selectors** that could affect other components on the page
* **Prefix all class names** with a unique identifier specific to the component

### **NEW: Animation State Requirements:**
* **DO NOT add `opacity: 0` or hide elements with CSS** for entrance animations
* **DO NOT use CSS transforms** for initial animation states (translateX, translateY, scale, etc.)
* **All entrance animation logic MUST be handled by JavaScript** (either Vanilla JS or GSAP)
* **CSS transitions are ONLY for:**
  - Hover effects
  - Focus states  
  - Static interactions (button presses, form states)
  - Non-entrance animations (continuous animations, background effects)

### Implementation Guidelines:

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

### Animation-Related CSS Guidelines:
* **Elements that will animate in:** Apply NO initial styling for animation states in CSS
* **Static elements:** Style normally - no animation restrictions
* **Hover/interaction effects:** Use CSS transitions freely
* **Continuous animations:** CSS animations are acceptable (spinning loaders, pulsing effects, etc.)

### Why This Matters:
* Prevents style bleeding between different components
* Ensures component reusability without conflicts
* Maintains predictable styling behavior
* Allows multiple instances of components on the same page
* **Prevents animation conflicts** between CSS and JavaScript
* **Ensures consistent animation behavior** across different frameworks
* Follows modern CSS architecture best practices

### Animation State Examples:

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

## Critical Implementation Rule

**DO NOT ADD any controls to the JSON block properties that you are not implementing in the PHP template file.**

This is essential because:
- Every control defined in the JSON `zenb.controls` section must have corresponding implementation in the PHP template
- Unused controls create confusing UI elements in the WordPress block editor that don't affect the block output
- The PHP template is the source of truth for what actually renders on the frontend
- Controls without implementation lead to broken user experiences and confused content editors
- Zen-blocks passes control values as PHP variables to your template, so unused controls are wasted variables

## Implementation Checklist

Before adding any control to the JSON `zenb.controls` section:

1. **Verify PHP Implementation**: Ensure the control variable is used in the PHP template (e.g., `$layout`, `$show_title`, `$background_color`)
2. **Test Functionality**: Confirm changing the control value produces visible changes in the block
3. **Check Default Values**: Ensure default values in JSON match expected behavior in PHP
4. **Validate All States**: Test all possible control values/options work correctly
5. **Wrap in Root Element**: Remember all block content must be wrapped in a single parent element for React compatibility
6. **Test zen-edit Attributes**: If using editable elements, ensure `zen-edit` attributes work with your controls

## Control Types and PHP Integration

### Text Controls
```json
"my_text": {
    "type": "text",
    "label": "My Text",
    "default": "Default text"
}
```
**Required in PHP**: `<?php echo esc_html($my_text); ?>`

### Toggle Controls
```json
"show_element": {
    "type": "toggle", 
    "label": "Show Element",
    "default": true
}
```
**Required in PHP**: `<?php if ($show_element): ?> ... <?php endif; ?>`

### Select Controls
```json
"layout": {
    "type": "select",
    "label": "Layout",
    "default": "default",
    "options": [
        {"key": "default", "value": "Default Layout"},
        {"key": "alternate", "value": "Alternate Layout"}
    ]
}
```
**Required in PHP**: `<div class="layout-<?php echo esc_attr($layout); ?>">` or conditional logic

### Range/Number Controls
```json
"columns": {
    "type": "range",
    "label": "Columns",
    "default": 2,
    "min": 1,
    "max": 4,
    "step": 1
}
```
**Required in PHP**: Used in loops, CSS classes, or inline styles like `<div class="columns-<?php echo $columns; ?>">`

### Image Controls
```json
"background_image": {
    "type": "image",
    "label": "Background Image"
}
```
**Required in PHP**: `<?php if ($background_image): ?><img src="<?php echo esc_url($background_image['url']); ?>" /><?php endif; ?>`

### Color Controls
```json
"background_color": {
    "type": "color",
    "label": "Background Color",
    "default": "#ffffff"
}
```
**Required in PHP**: `<div style="background-color: <?php echo esc_attr($background_color); ?>">` or CSS classes

## Best Practices

1. **Start with PHP Template**: Build the template first, then add only the controls you actually use
2. **One-to-One Mapping**: Each JSON control should have clear usage in the PHP file
3. **Meaningful Defaults**: Set JSON defaults that make sense for your template's initial state
4. **Test Edge Cases**: Verify the template handles empty/null values gracefully
5. **Document Usage**: Comment your PHP to show where each control is used
6. **Follow File Structure**: Each block needs its own folder with matching PHP file name
7. **Root Element Required**: Wrap all content in single parent element (e.g., `<div class="my-block">`)
8. **Editable Elements**: Use `zen-edit` attributes properly with unique values
9. **Editor Types**: Understand `zen-type` options: `text`, `wysiwyg`, `image`, `link`, `repeater`, `innerblocks`

## Common Violations to Avoid

❌ **Don't do this**: Adding unused controls
```json
{
    "zenb": {
        "controls": {
            "text_color": {"type": "color", "default": "#000000"},
            "font_size": {"type": "range", "min": 12, "max": 48},
            "margin": {"type": "range", "min": 0, "max": 100}
        }
    }
}
```
If none of these are used in the PHP template.

❌ **Don't do this**: Forgetting the root element wrapper
```php
<h2>Title</h2>
<p>Content</p>
<!-- Missing single parent wrapper -->
```

❌ **Don't do this**: Adding controls for zen-edit content
```json
{
    "zenb": {
        "controls": {
            "title_text": {"type": "text", "default": "My Title"}
        }
    }
}
```
When you already have `<h2 zen-edit="title">My Title</h2>` in PHP.

✅ **Do this**: Only include implemented controls
```json
{
    "zenb": {
        "controls": {
            "show_title": {"type": "toggle", "default": true}
        }
    }
}
```
With corresponding PHP: 
```php
<div class="my-block">
    <?php if ($show_title): ?>
        <h2 zen-edit="title">Default Title</h2>
    <?php endif; ?>
</div>
```

## Zen-Blocks Specific Features

### Available Control Types
- `text`: Simple text input field
- `select`: Dropdown selection with options  
- `number`: Numeric input field
- `toggle`: Boolean on/off switch
- `image`: Image upload input
- `range`: Numeric slider with min/max values
- `color`: Color picker (as shown in example)

### Editable Element Types (`zen-type`)
- `text` (default): Text editing with formatting
- `wysiwyg`: WYSIWYG editor for rich content  
- `image`: Media library integration
- `link`: Link/button elements
- `repeater`: Repeatable content groups
- `innerblocks`: Nested Gutenberg blocks

Remember: **Every control must serve a purpose and be fully implemented in the PHP template. The zen-blocks system passes all JSON controls as PHP variables to your template, so unused controls are both wasteful and confusing to editors.**

## ABOUT STYLES INSIDE A REPEATER
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