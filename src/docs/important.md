# IMPORTANT INFO WHEN WORKING WITH ZENBLOCKS

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
* You MUST ALWAYS ask once and only once if the user is going to be using tailwind for their styling, Once you have their answer, keep it so you don't ask it again. Always ask this before creating the first component.
* If the user is going to use tailwind to style the zen block components, you MUST always use the @apply approach for separating the styles from the markup, you MUST use relevant naming conventions for creating the component clasess and then bind the styles inside the CSS file using @apply, you MUST NOT use tailwind classess inside the markup.
Here's an enriched version of that prompt:

## CSS Styling Requirements for Component Generation

**CRITICAL: Always use scoped/nested CSS to prevent style conflicts**

### Mandatory CSS Scoping Rules:
* **ALWAYS wrap all CSS styles within a unique container class** to avoid CSS collision between generated components
* **Use nested CSS structure** where all styles are contained within a parent selector (e.g., `.my-component { /* all styles here */ }`)
* **Never use global CSS selectors** that could affect other components on the page
* **Prefix all class names** with a unique identifier specific to the component

### Implementation Guidelines:

**For vanilla CSS/HTML components:**
```css
.unique-component-name {
  /* All component styles nested here */
  .content { 
  /* styles */
    .title {
        /* styles */
        .colored-text {
            /* styles */
        }
    }
    .button { 
        /* styles */
    }
  }
}
```

**For Tailwind CSS components:**
* Wrap the entire component in a container div with a unique class
* use @apply for all Tailwind classes within this scoped container
* Example: `<div className="my-unique-component">`
```css
.unique-component-name {
  /* All component styles nested here */
  .content { 
    @apply /* tailwind classes */;
    .title {
        @apply /* tailwind classes */;
        .colored-text {
            @apply /* tailwind classes */;
        }
    }
    .button { 
        @apply /* tailwind classes */;
    }
  }
}
```

### Why This Matters:
* Prevents style bleeding between different components
* Ensures component reusability without conflicts
* Maintains predictable styling behavior
* Allows multiple instances of components on the same page
* Follows modern CSS architecture best practices

**REMEMBER: No exceptions - every generated component MUST have scoped/nested CSS styling.**

* When creating markup for a Zen block component you MUST make sure that you wrap all block content in a single parent element this component MUST have it's first class name be the same name as the containing folder name. (e.g., ``<div class="my-custom-block">...</div>``)
