# Zen Blocks WordPress Plugin Overview

**Zen Blocks** is a WordPress plugin that simplifies the creation of custom Gutenberg blocks using familiar HTML/PHP templates instead of complex JavaScript and React code.

## Core Concept

The plugin allows developers to create Gutenberg blocks using traditional web technologies:
- **HTML/PHP** for block structure and content
- **CSS** for styling  
- **JSON** for block configuration
- **JavaScript** for optional frontend functionality

## Key Features

### Simple Block Creation Process
1. Create a folder in your theme's `zen-blocks` directory
2. Add a PHP template file with the same name as the folder
3. Optionally add JSON configuration, CSS styles, and JS scripts
4. The plugin automatically registers your blocks

### Editable Content System
- Use the `zen-edit` attribute to make any element editable in the Gutenberg editor
- Multiple editor types supported:
  - `text` (default) - formatted text editing
  - `wysiwyg` - rich content editor
  - `image` - media library integration
  - `link` - link/button elements
  - `repeater` - repeatable content groups
  - `innerblocks` - nested Gutenberg blocks

### Block Configuration Controls
Supports various control types for block settings:
- Text inputs, dropdowns, number fields
- Toggle switches, color pickers
- Range sliders, image uploads
- Full WordPress block.json standard support

### Example Structure
```
zen-blocks/
└── my-custom-block/
    ├── my-custom-block.php    # Template file
    ├── my-custom-block.json   # Block configuration
    ├── my-custom-block.css    # Styles (optional)
    └── my-custom-block.js     # Scripts (optional)
```

## Benefits

- **Developer-friendly**: Uses familiar HTML/PHP instead of React
- **No build process**: Works directly with standard web files
- **Flexible**: Supports simple text blocks to complex repeatable content
- **Standards-compliant**: Follows WordPress block development best practices
- **Production-ready**: Includes configuration options for deployment

## Use Cases

Perfect for developers who want to create custom Gutenberg blocks without learning React/JavaScript build tools, or for agencies that need to quickly prototype and deploy custom content blocks for clients.