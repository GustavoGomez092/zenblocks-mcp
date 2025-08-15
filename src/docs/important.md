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
* When creating markup for a Zen block component you MUST make sure that you wrap all block content in a single parent element this component MUST have it's first class name be the same name as the containing folder name. (e.g., ``<div class="my-custom-block">...</div>``)

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