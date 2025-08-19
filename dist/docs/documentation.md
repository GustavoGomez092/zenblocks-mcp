# Zen Blocks - Complete Documentation

A powerful WordPress plugin for creating Gutenberg blocks using HTML/PHP templates with minimal configuration.

### Directory Structure

```
wp-content/themes/your-theme/zen-blocks/
├── my-custom-block/
│   ├── my-custom-block.php          # Template file (required)
│   ├── my-custom-block.json         # Block configuration (optional)
│   ├── my-custom-block.css          # Block styles (optional)
│   └── my-custom-block.js           # Block scripts (optional)
├── another-block/
│   ├── another-block.php
│   ├── another-block.json
│   ├── another-block.css
│   └── another-block.js
```

## Quick Start Guide

### Create Your First Block

**Step 1**: Create the directory
```bash
mkdir wp-content/themes/your-theme/zen-blocks/hero-banner
```

**Step 2**: Create the template file (`hero-banner/hero-banner.php`)
```php
<div class="hero-banner">
    <?php if ($show_title): ?>
        <h1 zen-edit="title" zen-type="text">Welcome to Our Site</h1>
    <?php endif; ?>
    
    <div zen-edit="content" zen-type="wysiwyg">
        <p>This is the default hero content that users can edit.</p>
    </div>
    
    <div class="hero-image">
        <img zen-edit="hero_image" zen-type="image" src="" alt="Hero Image" />
    </div>
    
    <div zen-repeater="buttons">
        <a zen-edit="button_text" zen-type="link" href="#" class="btn">Click Here</a>
    </div>
</div>
```

**Step 3**: Create the configuration file (`hero-banner/hero-banner.json`)
```json
{
    "name": "zen-blocks/hero-banner",
    "title": "Hero Banner",
    "category": "design",
    "icon": "star",
    "description": "A customizable hero banner with image and call-to-action buttons",
    "keywords": ["hero", "banner", "header"],
    "version": "1.0.0",
    "supports": {
        "align": ["wide", "full"],
        "anchor": true,
        "customClassName": true,
        "color": {
            "background": true,
            "text": true,
            "gradients": true
        }
    },
    "zenb": {
        "controls": {
            "show_title": {
                "type": "toggle",
                "label": "Show Title",
                "default": true
            },
            "layout_style": {
                "type": "select",
                "label": "Layout Style",
                "default": "centered",
                "options": [
                    {"key": "centered", "value": "Centered"},
                    {"key": "left", "value": "Left Aligned"},
                    {"key": "right", "value": "Right Aligned"}
                ]
            }
        }
    }
}
```

## Block Configuration (block.json)

The `block.json` file is the heart of your block configuration. It defines metadata, behavior, and editor integration settings using WordPress's standard block JSON schema.

### Basic Configuration

```json
{
    "name": "zen-blocks/block-name",
    "title": "Block Display Name",
    "category": "zen-blocks",
    "icon": "star",
    "description": "Description of what your block does",
    "keywords": ["keyword1", "keyword2", "keyword3"],
    "version": "1.0.0",
    "supports": {
        "html": true,
        "align": ["wide", "full"], 
        "anchor": true,
        "customClassName": true
    },
    "zenb": {
        "controls": {}
    }
}
```

## WordPress Block JSON Configurations

Zen Blocks supports all standard WordPress block JSON configurations, providing full compatibility with the WordPress Block API. Below is a comprehensive reference of all available configuration options:

### Core Properties

#### Name (Required)
The name for a block is a unique string that identifies a block. Names have to be structured as namespace/block-name

```json
{
    "name": "zen-blocks/my-custom-block"
}
```

#### Title (Required)
This is the display title for your block, which can be translated

```json
{
    "title": "My Custom Block"
}
```

#### Category
Blocks are grouped into categories to help users browse and discover them

Available core categories:
- `text` - Text-based blocks
- `media` - Media-related blocks  
- `design` - Layout and design blocks
- `widgets` - Widget-style blocks
- `theme` - Theme-related blocks
- `embed` - Embed blocks

```json
{
    "category": "design"
}
```

#### Icon
An icon property should be specified to make it easier to identify a block. These can be any of WordPress' Dashicons

```json
{
    "icon": "star"
}
```

Popular Dashicons include: `star`, `heart`, `admin-home`, `admin-site`, `admin-media`, `admin-page`, `admin-comments`, `admin-appearance`, `admin-plugins`, `admin-users`, `admin-tools`, `admin-settings`, `admin-network`, `menu`, `admin-generic`.

### Block Metadata

#### Description
```json
{
    "description": "A versatile block for creating custom layouts with editable content areas"
}
```

#### Keywords
Sometimes a block could have aliases that help users discover it while searching

```json
{
    "keywords": ["layout", "custom", "flexible", "content"]
}
```

#### Version
The current version number of the block, such as 1.0 or 1.0.3

```json
{
    "version": "1.2.0"
}
```

#### Text Domain
The gettext text domain of the plugin/block

```json
{
    "textdomain": "zen-blocks"
}
```

### Attributes System

Attributes provide the structured data needs of a block

```json
{
    "attributes": {
        "title": {
            "type": "string",
            "source": "html",
            "selector": ".block-title"
        },
        "imageUrl": {
            "type": "string",
            "source": "attribute",
            "selector": "img",
            "attribute": "src"
        },
        "isVisible": {
            "type": "boolean",
            "default": true
        },
        "columns": {
            "type": "number",
            "default": 3
        },
        "items": {
            "type": "array",
            "default": []
        },
        "settings": {
            "type": "object",
            "default": {}
        }
    }
}
```

### Block Supports

Block Supports is the API that allows a block to declare support for certain features

#### Alignment Support
This property adds block controls, which enable changes to a block's alignment

```json
{
    "supports": {
        "align": true,
        "align": ["left", "center", "right", "wide", "full"],
        "alignWide": true
    }
}
```

#### Anchor Support
Anchors let you link directly to a specific block on a page

```json
{
    "supports": {
        "anchor": true
    }
}
```

#### Color Support
This value signals that a block supports some of the properties related to color

```json
{
    "supports": {
        "color": {
            "background": true,
            "text": true,
            "gradients": true,
            "link": true,
            "heading": true,
            "button": true,
            "enableContrastChecker": true
        }
    }
}
```

#### Typography Support
The presence of this object signals that a block supports some typography related properties

```json
{
    "supports": {
        "typography": {
            "fontSize": true,
            "lineHeight": true,
            "textAlign": true,
            "textAlign": ["left", "center", "right"]
        }
    }
}
```

#### Spacing Support
This value signals that a block supports some of the CSS style properties related to spacing

```json
{
    "supports": {
        "spacing": {
            "margin": true,
            "padding": true,
            "blockGap": true,
            "margin": ["top", "bottom"],
            "padding": ["horizontal", "vertical"]
        }
    }
}
```

#### Dimensions Support
This value signals that a block supports some of the CSS style properties related to dimensions

```json
{
    "supports": {
        "dimensions": {
            "aspectRatio": true,
            "minHeight": true
        }
    }
}
```

#### Position Support
This value signals that a block supports some of the CSS style properties related to position

```json
{
    "supports": {
        "position": {
            "sticky": true
        }
    }
}
```

#### Filter Support
This value signals that a block supports some of the properties related to filters

```json
{
    "supports": {
        "filter": {
            "duotone": true
        }
    },
    "selectors": {
        "filter": {
            "duotone": ".wp-block-zen-blocks-image img"
        }
    }
}
```

#### Background Support
This value signals that a block supports some of the CSS style properties related to background

```json
{
    "supports": {
        "background": {
            "backgroundImage": true,
            "backgroundSize": true
        }
    }
}
```

#### Shadow Support
This property adds block controls which allow the user to set a box shadow for a block

```json
{
    "supports": {
        "shadow": true
    }
}
```

### Example Configuration
It provides structured example data for the block. This data is used to construct a preview for the block

```json
{
    "example": {
        "attributes": {
            "title": "Sample Hero Title",
            "content": "This is how the block will appear in the block preview",
            "layout": "centered",
            "show_title": true
        }
    }
}
```

## Template System

### Template Requirements

1. **Root Element**: Wrap all block content in a single parent element
2. **Editable Elements**: Use `zen-edit` attribute for editable areas
3. **Editor Types**: Specify `zen-type` for different input types
4. **Repeaters**: Use `zen-repeater` for repeatable content groups

### Template Structure

```php
<div class="my-custom-block">
    <!-- Conditional content based on controls -->
    <?php if ($show_header): ?>
        <header class="block-header">
            <h2 zen-edit="title" zen-type="text">Default Title</h2>
            <p zen-edit="subtitle" zen-type="text">Default subtitle</p>
        </header>
    <?php endif; ?>
    
    <!-- Rich content area -->
    <div class="content-area">
        <div zen-edit="main_content" zen-type="wysiwyg">
            <p>Default rich content that users can edit with the WYSIWYG editor.</p>
        </div>
    </div>
    
    <!-- Media elements -->
    <div class="media-section">
        <img zen-edit="featured_image" zen-type="image" src="" alt="Featured Image" />
    </div>
    
    <!-- Interactive elements -->
    <div class="action-section">
        <a zen-edit="cta_button" zen-type="link" href="#" class="btn btn-primary">Call to Action</a>
    </div>
    
    <!-- Repeatable content -->
    <div class="items-list">
        <div zen-repeater="list_items">
            <div class="list-item">
                <h3 zen-edit="item_title" zen-type="text">Item Title</h3>
                <p zen-edit="item_description" zen-type="text">Item description</p>
                <img zen-edit="item_image" zen-type="image" src="" alt="Item Image" />
            </div>
        </div>
    </div>
    
    <!-- Inner blocks for nested content -->
    <div zen-edit="inner_content" zen-type="innerblocks">
        <!-- This will allow users to add any Gutenberg blocks here -->
    </div>
</div>
```

### Available Editor Types

#### Text (`zen-type="text"`)
Simple text editing with basic formatting options.

```php
<h2 zen-edit="title" zen-type="text">Default Title</h2>
<p zen-edit="description" zen-type="text">Default description</p>
```

#### WYSIWYG (`zen-type="wysiwyg"`)
Rich text editor with full formatting capabilities.

```php
<div zen-edit="content" zen-type="wysiwyg">
    <p>Rich content with <strong>bold</strong>, <em>italic</em>, and <a href="#">links</a>.</p>
    <ul>
        <li>List items</li>
        <li>Are supported</li>
    </ul>
</div>
```

#### Image (`zen-type="image"`)
Media library integration for image selection.

```php
<img zen-edit="hero_image" zen-type="image" src="" alt="Hero Image" />
<figure>
    <img zen-edit="gallery_image" zen-type="image" src="" alt="Gallery Image" />
    <figcaption zen-edit="caption" zen-type="text">Image caption</figcaption>
</figure>
```

#### Link (`zen-type="link"`)
Link and button elements with URL and text editing.

```php
<a zen-edit="cta_link" zen-type="link" href="#" class="btn">Click Here</a>
<button zen-edit="action_button" zen-type="link" class="btn btn-primary">Action Button</button>
```

#### Repeater (`zen-repeater="items"`)
Repeatable content groups for dynamic lists.

```php
<div class="testimonials">
    <div zen-repeater="testimonials">
        <div class="testimonial">
            <img zen-edit="avatar" zen-type="image" src="" alt="Avatar" />
            <h3 zen-edit="name" zen-type="text">John Doe</h3>
            <p zen-edit="quote" zen-type="text">This is an amazing product!</p>
            <div zen-edit="rating" zen-type="number">5</div>
        </div>
    </div>
</div>
```

#### Inner Blocks (`zen-type="innerblocks"`)
Nested Gutenberg blocks for rich content editing.

```php
<div class="content-container">
    <div zen-edit="inner_content" zen-type="innerblocks">
        <!-- Users can add any Gutenberg blocks here -->
    </div>
</div>
```

## Control Types & Examples

Zen Blocks provides various control types for block settings in the `zenb.controls` section:

### Text Control
Simple text input field for short text values.

```json
{
    "zenb": {
        "controls": {
            "heading_text": {
                "type": "text",
                "label": "Heading Text",
                "default": "Welcome",
                "placeholder": "Enter heading text...",
                "help": "This text will appear as the main heading"
            }
        }
    }
}
```

**Usage in Template**:
```php
<h1 class="heading"><?php echo esc_html($heading_text); ?></h1>
```

### Select Control
Dropdown selection with predefined options.

```json
{
    "zenb": {
        "controls": {
            "layout_style": {
                "type": "select",
                "label": "Layout Style",
                "default": "grid",
                "options": [
                    {"key": "grid", "value": "Grid Layout"},
                    {"key": "list", "value": "List Layout"},
                    {"key": "masonry", "value": "Masonry Layout"},
                    {"key": "carousel", "value": "Carousel Layout"}
                ],
                "help": "Choose how content should be displayed"
            }
        }
    }
}
```

**Usage in Template**:
```php
<div class="content-wrapper layout-<?php echo esc_attr($layout_style); ?>">
    <!-- Component content nested here, never outside this container -->
</div>
```

### Number Control
Numeric input field with optional min/max constraints.

```json
{
    "zenb": {
        "controls": {
            "item_count": {
                "type": "number",
                "label": "Number of Items",
                "default": 6,
                "min": 1,
                "max": 12,
                "step": 1,
                "help": "Maximum number of items to display"
            }
        }
    }
}
```

**Usage in Template**:
```php
<?php 
$items = array_slice($items_array, 0, $item_count);
foreach ($items as $item): 
?>
    <div class="item"><?php echo $item; ?></div>
<?php endforeach; ?>
```

### Toggle Control
Boolean on/off switch for feature toggles.

```json
{
    "zenb": {
        "controls": {
            "show_author": {
                "type": "toggle",
                "label": "Show Author Information",
                "default": true,
                "help": "Display author name and avatar"
            },
            "enable_animations": {
                "type": "toggle",
                "label": "Enable Animations",
                "default": false,
                "help": "Add CSS animations to elements"
            }
        }
    }
}
```

**Usage in Template**:
```php
<?php if ($show_author): ?>
    <div class="author-info">
        <img src="<?php echo get_avatar_url(get_the_author_meta('ID')); ?>" alt="Author" />
        <span><?php echo get_the_author(); ?></span>
    </div>
<?php endif; ?>

<div class="content <?php echo $enable_animations ? 'animated' : ''; ?>">
    <!-- Content here -->
</div>
```

### Image Control
Image upload and selection from media library.

```json
{
    "zenb": {
        "controls": {
            "background_image": {
                "type": "image",
                "label": "Background Image",
                "default": "",
                "help": "Choose a background image for the block"
            },
            "logo": {
                "type": "image",
                "label": "Company Logo",
                "default": "",
                "help": "Upload your company logo"
            }
        }
    }
}
```

**Usage in Template**:
```php
<div class="hero-section" style="background-image: url('<?php echo esc_url($background_image); ?>');">
    <?php if ($logo): ?>
        <img src="<?php echo esc_url($logo); ?>" alt="Company Logo" class="logo" />
    <?php endif; ?>
</div>
```

### Range Control
Numeric slider with min/max values and steps.

```json
{
    "zenb": {
        "controls": {
            "columns": {
                "type": "range",
                "label": "Number of Columns",
                "default": 3,
                "min": 1,
                "max": 6,
                "step": 1,
                "help": "Adjust the number of columns in the grid"
            },
            "opacity": {
                "type": "range",
                "label": "Background Opacity",
                "default": 0.8,
                "min": 0,
                "max": 1,
                "step": 0.1,
                "help": "Control background transparency"
            }
        }
    }
}
```

**Usage in Template**:
```php
<div class="grid-container" style="--columns: <?php echo intval($columns); ?>; opacity: <?php echo floatval($opacity); ?>;">
    <!-- Grid items here -->
</div>
```

### Color Control
Color picker for custom color selection.

```json
{
    "zenb": {
        "controls": {
            "accent_color": {
                "type": "color",
                "label": "Accent Color",
                "default": "#007cba",
                "help": "Choose the accent color for highlights"
            },
            "text_color": {
                "type": "color",
                "label": "Text Color",
                "default": "#333333",
                "help": "Set the text color"
            }
        }
    }
}
```

**Usage in Template**:
```php
<div class="styled-content" style="--accent-color: <?php echo esc_attr($accent_color); ?>; color: <?php echo esc_attr($text_color); ?>;">
    <h2 class="accent-heading">Styled Heading</h2>
    <p>This text uses the custom colors.</p>
</div>
```

### Textarea Control
Multi-line text input for longer content.

```json
{
    "zenb": {
        "controls": {
            "description": {
                "type": "textarea",
                "label": "Block Description",
                "default": "",
                "placeholder": "Enter a detailed description...",
                "rows": 4,
                "help": "Provide additional context or description for the block"
            }
        }
    }
}
```

**Usage in Template**:
```php
<?php if ($description): ?>
    <div class="block-description">
        <p><?php echo wp_kses_post(nl2br($description)); ?></p>
    </div>
<?php endif; ?>
```

### URL Control
URL input field with validation.

```json
{
    "zenb": {
        "controls": {
            "external_link": {
                "type": "url",
                "label": "External Link",
                "default": "",
                "placeholder": "https://example.com",
                "help": "Enter a valid URL"
            }
        }
    }
}
```

**Usage in Template**:
```php
<?php if ($external_link): ?>
    <a href="<?php echo esc_url($external_link); ?>" target="_blank" rel="noopener">
        Visit External Site
    </a>
<?php endif; ?>
```

### Date Control
Date picker for date-related settings.

```json
{
    "zenb": {
        "controls": {
            "event_date": {
                "type": "date",
                "label": "Event Date",
                "default": "",
                "help": "Select the event date"
            }
        }
    }
}
```

**Usage in Template**:
```php
<?php if ($event_date): ?>
    <div class="event-date">
        <time datetime="<?php echo esc_attr($event_date); ?>">
            <?php echo date('F j, Y', strtotime($event_date)); ?>
        </time>
    </div>
<?php endif; ?>
```

### Multi-Select Control
Multiple selection dropdown for choosing multiple options.

```json
{
    "zenb": {
        "controls": {
            "features": {
                "type": "multiselect",
                "label": "Features to Display",
                "default": [],
                "options": [
                    {"key": "testimonials", "value": "Customer Testimonials"},
                    {"key": "pricing", "value": "Pricing Information"},
                    {"key": "gallery", "value": "Image Gallery"},
                    {"key": "contact", "value": "Contact Form"}
                ],
                "help": "Select which features to include in this block"
            }
        }
    }
}
```

**Usage in Template**:
```php
<div class="feature-block">
    <?php if (in_array('testimonials', $features)): ?>
        <section class="testimonials">
            <!-- Testimonials content -->
        </section>
    <?php endif; ?>
    
    <?php if (in_array('pricing', $features)): ?>
        <section class="pricing">
            <!-- Pricing content -->
        </section>
    <?php endif; ?>
    
    <?php if (in_array('gallery', $features)): ?>
        <section class="gallery">
            <!-- Gallery content -->
        </section>
    <?php endif; ?>
</div>
```

## Zen Blocks Specific Features

### Advanced Control Examples

#### Grouped Controls
Organize related controls into sections:

```json
{
    "zenb": {
        "controls": {
            "columns": {
                "type": "range",
                "label": "Columns",
                "default": 3,
                "min": 1,
                "max": 6
            },
            "gap": {
                "type": "range",
                "label": "Gap Size",
                "default": 20,
                "min": 0,
                "max": 100,
                "step": 5
            },
            "border_radius": {
                "type": "range",
                "label": "Border Radius",
                "default": 8,
                "min": 0,
                "max": 50
            },
            "shadow": {
                "type": "toggle",
                "label": "Enable Shadow",
                "default": false
            }
        }
    }
}
```

#### Conditional Controls
Controls that appear based on other control values:

```json
{
    "zenb": {
        "controls": {
            "show_image": {
                "type": "toggle",
                "label": "Show Image",
                "default": true
            },
            "image_position": {
                "type": "select",
                "label": "Image Position",
                "default": "left",
                "options": [
                    {"key": "left", "value": "Left"},
                    {"key": "right", "value": "Right"},
                    {"key": "top", "value": "Top"},
                    {"key": "bottom", "value": "Bottom"}
                ],
                "condition": {
                    "show_image": true
                }
            },
            "image_size": {
                "type": "select",
                "label": "Image Size",
                "default": "medium",
                "options": [
                    {"key": "thumbnail", "value": "Thumbnail"},
                    {"key": "medium", "value": "Medium"},
                    {"key": "large", "value": "Large"},
                    {"key": "full", "value": "Full Size"}
                ],
                "condition": {
                    "show_image": true
                }
            }
        }
    }
}
```

## Advanced Configuration

### Complete Block Example

Here's a comprehensive example showing all configuration options:

```json
{
    "$schema": "https://schemas.wp.org/trunk/block.json",
    "apiVersion": 3,
    "name": "zen-blocks/advanced-content-block",
    "title": "Advanced Content Block",
    "category": "design",
    "parent": ["core/group"],
    "ancestor": ["core/post-content"],
    "allowedBlocks": ["core/paragraph", "core/heading"],
    "icon": "layout",
    "description": "A comprehensive content block with advanced customization options",
    "keywords": ["content", "advanced", "layout", "flexible"],
    "version": "2.1.0",
    "textdomain": "zen-blocks",
    
    "attributes": {
        "uniqueId": {
            "type": "string",
            "default": ""
        },
        "customData": {
            "type": "object",
            "default": {}
        }
    },
    
    "providesContext": {
        "zen-blocks/blockStyle": "blockStyle",
        "zen-blocks/accentColor": "accentColor"
    },
    
    "usesContext": ["postId", "postType"],
    
    "selectors": {
        "root": ".wp-block-zen-blocks-advanced-content-block",
        "color": {
            "text": ".wp-block-zen-blocks-advanced-content-block .content",
            "background": ".wp-block-zen-blocks-advanced-content-block .background"
        },
        "typography": {
            "fontSize": ".wp-block-zen-blocks-advanced-content-block h1",
            "lineHeight": ".wp-block-zen-blocks-advanced-content-block p"
        }
    },
    
    "supports": {
        "align": ["wide", "full"],
        "alignWide": true,
        "anchor": true,
        "ariaLabel": true,
        "className": true,
        "customClassName": true,
        "html": true,
        "inserter": true,
        "lock": true,
        "multiple": true,
        "reusable": true,
        "renaming": true,
        
        "color": {
            "background": true,
            "text": true,
            "gradients": true,
            "link": true,
            "heading": true,
            "button": true,
            "enableContrastChecker": true
        },
        
        "typography": {
            "fontSize": true,
            "lineHeight": true,
            "textAlign": ["left", "center", "right"]
        },
        
        "spacing": {
            "margin": true,
            "padding": true,
            "blockGap": ["horizontal", "vertical"]
        },
        
        "dimensions": {
            "aspectRatio": true,
            "minHeight": true
        },
        
        "position": {
            "sticky": true
        },
        
        "background": {
            "backgroundImage": true,
            "backgroundSize": true
        },
        
        "filter": {
            "duotone": true
        },
        
        "shadow": true,
        
        "layout": {
            "default": {"type": "flex"},
            "allowSwitching": true,
            "allowEditing": true,
            "allowInheriting": true,
            "allowVerticalAlignment": true,
            "allowJustification": true
        },
        
        "interactivity": {
            "clientNavigation": true,
            "interactive": true
        }
    },
    
    "styles": [
        {
            "name": "default",
            "label": "Default",
            "isDefault": true
        },
        {
            "name": "minimal",
            "label": "Minimal"
        },
        {
            "name": "bold",
            "label": "Bold"
        },
        {
            "name": "elegant",
            "label": "Elegant"
        }
    ],
    
    "variations": [
        {
            "name": "content-left",
            "title": "Content Left",
            "description": "Content aligned to the left with image on right",
            "icon": "align-left",
            "attributes": {
                "layout": "content-left",
                "image_position": "right"
            },
            "scope": ["block"],
            "isActive": ["layout"]
        },
        {
            "name": "content-center",
            "title": "Content Center",
            "description": "Centered content with background image",
            "icon": "align-center",
            "attributes": {
                "layout": "centered",
                "show_background": true
            },
            "scope": ["block"],
            "isActive": ["layout"]
        }
    ],
    
    "example": {
        "attributes": {
            "title": "Sample Advanced Block",
            "layout": "default",
            "show_image": true,
            "columns": 3
        }
    },
    
    "blockHooks": {
        "core/post-content": "after"
    },
    
    "editorScript": "file:./editor.js",
    "script": "file:./frontend.js",
    "viewScript": "file:./view.js",
    "editorStyle": "file:./editor.css",
    "style": "file:./style.css",
    "viewStyle": "file:./frontend.css",
    "render": "file:./render.php",
    
    "zenb": {
        "controls": {
            "block_title": {
                "type": "text",
                "label": "Block Title",
                "default": "Advanced Content",
                "help": "Main title for the content block"
            },
            "layout": {
                "type": "select",
                "label": "Layout Type",
                "default": "default",
                "options": [
                    {"key": "default", "value": "Default Layout"},
                    {"key": "content-left", "value": "Content Left"},
                    {"key": "content-right", "value": "Content Right"},
                    {"key": "centered", "value": "Centered"},
                    {"key": "full-width", "value": "Full Width"}
                ]
            },
            "show_image": {
                "type": "toggle",
                "label": "Show Featured Image",
                "default": true
            },
            "image_position": {
                "type": "select",
                "label": "Image Position",
                "default": "left",
                "options": [
                    {"key": "left", "value": "Left"},
                    {"key": "right", "value": "Right"},
                    {"key": "top", "value": "Top"},
                    {"key": "bottom", "value": "Bottom"}
                ],
                "condition": {
                    "show_image": true
                }
            },
            "content_alignment": {
                "type": "select",
                "label": "Content Alignment",
                "default": "left",
                "options": [
                    {"key": "left", "value": "Left"},
                    {"key": "center", "value": "Center"},
                    {"key": "right", "value": "Right"}
                ]
            },
            "max_content_width": {
                "type": "range",
                "label": "Max Content Width (%)",
                "default": 100,
                "min": 50,
                "max": 100,
                "step": 5
            },
            "background_color": {
                "type": "color",
                "label": "Background Color",
                "default": "#ffffff"
            },
            "accent_color": {
                "type": "color",
                "label": "Accent Color",
                "default": "#007cba"
            },
            "border_radius": {
                "type": "range",
                "label": "Border Radius (px)",
                "default": 8,
                "min": 0,
                "max": 50,
                "step": 2
            },
            "enable_shadow": {
                "type": "toggle",
                "label": "Enable Shadow",
                "default": false
            },
            "shadow_intensity": {
                "type": "range",
                "label": "Shadow Intensity",
                "default": 0.3,
                "min": 0.1,
                "max": 1,
                "step": 0.1,
                "condition": {
                    "enable_shadow": true
                }
            },
            "enable_animations": {
                "type": "toggle",
                "label": "Enable Animations",
                "default": false
            },
            "animation_type": {
                "type": "select",
                "label": "Animation Type",
                "default": "fade",
                "options": [
                    {"key": "fade", "value": "Fade In"},
                    {"key": "slide", "value": "Slide In"},
                    {"key": "scale", "value": "Scale In"},
                    {"key": "bounce", "value": "Bounce In"}
                ],
                "condition": {
                    "enable_animations": true
                }
            },
            "animation_delay": {
                "type": "range",
                "label": "Animation Delay (ms)",
                "default": 0,
                "min": 0,
                "max": 2000,
                "step": 100,
                "condition": {
                    "enable_animations": true
                }
            }
        }
    }
}
```

### Complex Template with All Features

```php
<div class="advanced-content-block <?php echo esc_attr($layout); ?> <?php echo $enable_animations ? 'animated' : ''; ?>"
     style="
         --accent-color: <?php echo esc_attr($accent_color); ?>;
         --bg-color: <?php echo esc_attr($background_color); ?>;
         --border-radius: <?php echo intval($border_radius); ?>px;
         --max-width: <?php echo intval($max_content_width); ?>%;
         <?php if ($enable_shadow): ?>
         --shadow: 0 4px 20px rgba(0,0,0,<?php echo floatval($shadow_intensity); ?>);
         <?php endif; ?>
         <?php if ($enable_animations): ?>
         --animation-delay: <?php echo intval($animation_delay); ?>ms;
         <?php endif; ?>
     "
     data-animation="<?php echo esc_attr($animation_type); ?>">
     
    <?php if ($show_image && $image_position === 'top'): ?>
        <div class="block-image image-top">
            <img zen-edit="featured_image" zen-type="image" src="" alt="Featured Image" />
        </div>
    <?php endif; ?>
    
    <div class="content-wrapper align-<?php echo esc_attr($content_alignment); ?>">
        
        <?php if ($show_image && $image_position === 'left'): ?>
            <div class="block-image image-left">
                <img zen-edit="featured_image" zen-type="image" src="" alt="Featured Image" />
            </div>
        <?php endif; ?>
        
        <div class="content-area">
            <h2 zen-edit="title" zen-type="text"><?php echo esc_html($block_title); ?></h2>
            
            <div zen-edit="main_content" zen-type="wysiwyg">
                <p>This is the main content area where users can add rich text content.</p>
            </div>
            
            <div class="action-buttons">
                <div zen-repeater="action_buttons">
                    <a zen-edit="button_link" zen-type="link" href="#" class="btn btn-primary">
                        <span zen-edit="button_text" zen-type="text">Learn More</span>
                    </a>
                </div>
            </div>
            
            <div class="additional-content">
                <div zen-edit="inner_blocks" zen-type="innerblocks">
                    <!-- Users can add any Gutenberg blocks here -->
                </div>
            </div>
        </div>
        
        <?php if ($show_image && $image_position === 'right'): ?>
            <div class="block-image image-right">
                <img zen-edit="featured_image" zen-type="image" src="" alt="Featured Image" />
            </div>
        <?php endif; ?>
        
    </div>
    
    <?php if ($show_image && $image_position === 'bottom'): ?>
        <div class="block-image image-bottom">
            <img zen-edit="featured_image" zen-type="image" src="" alt="Featured Image" />
        </div>
    <?php endif; ?>
    
</div>
```

## Best Practices

### 1. Block Naming Conventions
- Use descriptive, kebab-case names: `hero-banner`, `testimonial-grid`, `pricing-table`
- Include your namespace: `your-theme/block-name` or `your-plugin/block-name`
- Keep names concise but meaningful

### 2. Template Organization
- Always wrap content in a root element with a descriptive class
- Use semantic HTML elements when possible
- Include conditional logic for optional features
- Provide meaningful default content

### 3. Control Design
- Group related controls into sections
- Use clear, descriptive labels
- Provide helpful descriptions
- Set sensible default values
- Use appropriate control types for the data

### 4. Performance Considerations
- Only enqueue scripts/styles when needed
- Use `viewScript` and `viewStyle` for frontend-only assets
- Optimize images and use appropriate sizes
- Minimize DOM manipulation in JavaScript

### 5. Accessibility Guidelines
- Always include proper ARIA labels and roles
- Ensure keyboard navigation works for interactive elements
- Use semantic HTML structure
- Provide alternative text for images
- Test with screen readers

### 6. Security Best Practices
- Always escape output using `esc_html()`, `esc_attr()`, `esc_url()`
- Validate and sanitize user inputs
- Use `wp_kses_post()` for rich content
- Never trust user-provided data

## Advanced Features and Techniques

### Dynamic Block Rendering

For blocks that need server-side data processing, use the `render` property:

**Block Configuration**:
```json
{
    "render": "file:./render.php"
}
```

**Render File** (`render.php`):
```php
<?php
/**
 * Server-side rendering for dynamic blocks
 * 
 * @param array    $attributes Block attributes
 * @param string   $content    Block default content
 * @param WP_Block $block      Block instance
 */

$wrapper_attributes = get_block_wrapper_attributes([
    'class' => 'dynamic-content-block'
]);

// Fetch dynamic data
$posts = get_posts([
    'post_type' => $attributes['postType'] ?? 'post',
    'posts_per_page' => $attributes['postCount'] ?? 5,
    'meta_query' => [
        [
            'key' => 'featured',
            'value' => $attributes['onlyFeatured'] ?? false,
            'compare' => '='
        ]
    ]
]);

?>
<div <?php echo $wrapper_attributes; ?>>
    <h2><?php echo esc_html($attributes['title'] ?? 'Latest Posts'); ?></h2>
    
    <div class="posts-grid" style="--columns: <?php echo intval($attributes['columns'] ?? 3); ?>;">
        <?php foreach ($posts as $post): ?>
            <article class="post-item">
                <h3><a href="<?php echo get_permalink($post); ?>"><?php echo get_the_title($post); ?></a></h3>
                <div class="post-excerpt"><?php echo get_the_excerpt($post); ?></div>
                <time datetime="<?php echo get_the_date('c', $post); ?>"><?php echo get_the_date('', $post); ?></time>
            </article>
        <?php endforeach; ?>
    </div>
</div>
```

### Advanced Styling Techniques

**CSS File** (`advanced-block/advanced-block.css`):
```css
.wp-block-zen-blocks-advanced-block {
    /* CSS Custom Properties for dynamic styling */
    --accent-color: #007cba;
    --spacing-unit: 1rem;
    --border-radius: 8px;
    --columns: 3;
    
    container-type: inline-size;
    position: relative;
}

/* Responsive grid using CSS Grid and custom properties */
.content-grid {
    display: grid;
    grid-template-columns: repeat(var(--columns), 1fr);
    gap: var(--spacing-unit);
}

/* Container queries for responsive design */
@container (max-width: 768px) {
    .content-grid {
        grid-template-columns: 1fr;
    }
}

/* Animation states */
.animated {
    opacity: 0;
    transform: translateY(20px);
    transition: all 0.6s ease;
}

.animated.in-view {
    opacity: 1;
    transform: translateY(0);
}

/* Different animation types */
.animated[data-animation="fade"] {
    opacity: 0;
}

.animated[data-animation="slide"] {
    transform: translateX(-20px);
}

.animated[data-animation="scale"] {
    transform: scale(0.9);
}

.animated[data-animation="bounce"] {
    animation: bounceIn 0.6s ease;
}

@keyframes bounceIn {
    0% { transform: scale(0.3); opacity: 0; }
    50% { transform: scale(1.05); }
    70% { transform: scale(0.9); }
    100% { transform: scale(1); opacity: 1; }
}

/* Block style variations */
.wp-block-zen-blocks-advanced-block.is-style-minimal {
    border: none;
    box-shadow: none;
    background: transparent;
}

.wp-block-zen-blocks-advanced-block.is-style-bold {
    border: 3px solid var(--accent-color);
    box-shadow: 0 8px 32px rgba(0,0,0,0.1);
}

.wp-block-zen-blocks-advanced-block.is-style-elegant {
    background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
    border-radius: calc(var(--border-radius) * 2);
}
```

### Interactive JavaScript Enhancement

**JavaScript File** (`advanced-block/advanced-block.js`):
```javascript
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all Zen Blocks features
    initializeSliders();
    initializeAccordions();
    initializeAnimations();
    initializeLazyLoading();
});

function initializeSliders() {
    const sliders = document.querySelectorAll('.testimonial-slider');
    
    sliders.forEach(slider => {
        const autoplay = slider.dataset.autoplay === 'true';
        const duration = parseInt(slider.dataset.duration) * 1000;
        let currentSlide = 0;
        const slides = slider.querySelectorAll('.testimonial-slide');
        
        // Navigation buttons
        const prevBtn = slider.querySelector('.prev-slide');
        const nextBtn = slider.querySelector('.next-slide');
        
        function showSlide(index) {
            slides.forEach((slide, i) => {
                slide.style.display = i === index ? 'block' : 'none';
            });
            
            // Update indicators
            const indicators = slider.querySelectorAll('.indicator');
            indicators.forEach((indicator, i) => {
                indicator.classList.toggle('active', i === index);
            });
        }
        
        function nextSlide() {
            currentSlide = (currentSlide + 1) % slides.length;
            showSlide(currentSlide);
        }
        
        function prevSlide() {
            currentSlide = (currentSlide - 1 + slides.length) % slides.length;
            showSlide(currentSlide);
        }
        
        // Event listeners
        if (nextBtn) nextBtn.addEventListener('click', nextSlide);
        if (prevBtn) prevBtn.addEventListener('click', prevSlide);
        
        // Auto-play functionality
        if (autoplay && slides.length > 1) {
            setInterval(nextSlide, duration);
        }
        
        // Initialize first slide
        showSlide(0);
        
        // Generate indicators
        if (slider.querySelector('.slider-indicators')) {
            const indicatorsContainer = slider.querySelector('.slider-indicators');
            slides.forEach((_, index) => {
                const indicator = document.createElement('button');
                indicator.className = 'indicator';
                indicator.setAttribute('aria-label', `Go to slide ${index + 1}`);
                indicator.addEventListener('click', () => {
                    currentSlide = index;
                    showSlide(currentSlide);
                });
                indicatorsContainer.appendChild(indicator);
            });
        }
    });
}

function initializeAccordions() {
    const accordions = document.querySelectorAll('.faq-accordion');
    
    accordions.forEach(accordion => {
        const allowMultiple = accordion.dataset.multiple === 'true';
        const firstOpen = accordion.dataset.firstOpen === 'true';
        const questions = accordion.querySelectorAll('.faq-question');
        
        questions.forEach((question, index) => {
            const answer = question.nextElementSibling;
            const icon = question.querySelector('.faq-icon');
            
            // Set initial state
            if (firstOpen && index === 0) {
                question.setAttribute('aria-expanded', 'true');
                answer.style.display = 'block';
                if (icon) icon.textContent = '−';
            }
            
            question.addEventListener('click', function() {
                const isOpen = this.getAttribute('aria-expanded') === 'true';
                
                // Close others if multiple not allowed
                if (!allowMultiple && !isOpen) {
                    questions.forEach(q => {
                        q.setAttribute('aria-expanded', 'false');
                        q.nextElementSibling.style.display = 'none';
                        const qIcon = q.querySelector('.faq-icon');
                        if (qIcon) qIcon.textContent = '+';
                    });
                }
                
                // Toggle current item
                this.setAttribute('aria-expanded', !isOpen);
                answer.style.display = isOpen ? 'none' : 'block';
                if (icon) icon.textContent = isOpen ? '+' : '−';
            });
        });
    });
}

function initializeAnimations() {
    const animatedElements = document.querySelectorAll('.animated');
    
    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const delay = entry.target.style.getPropertyValue('--animation-delay') || '0ms';
                    setTimeout(() => {
                        entry.target.classList.add('in-view');
                    }, parseInt(delay));
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });
        
        animatedElements.forEach(el => observer.observe(el));
    } else {
        // Fallback for browsers without IntersectionObserver
        animatedElements.forEach(el => el.classList.add('in-view'));
    }
}

function initializeLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        images.forEach(img => imageObserver.observe(img));
    }
}
```

## Advanced Block Patterns

### 1. Composite Block with Multiple Content Types

**Configuration** (`content-showcase/content-showcase.json`):
```json
{
    "name": "zen-blocks/content-showcase",
    "title": "Content Showcase",
    "category": "design",
    "icon": "screenoptions",
    "description": "A comprehensive content block with multiple display options",
    "supports": {
        "align": ["wide", "full"],
        "color": {
            "background": true,
            "text": true,
            "gradients": true
        },
        "spacing": {
            "padding": true,
            "margin": true
        },
        "typography": {
            "fontSize": true,
            "lineHeight": true,
            "textAlign": true
        }
    },
    "zenb": {
        "controls": {
            "content_type": {
                "type": "select",
                "label": "Content Type",
                "default": "mixed",
                "options": [
                    {"key": "text", "value": "Text Only"},
                    {"key": "image", "value": "Image Focus"},
                    {"key": "video", "value": "Video Content"},
                    {"key": "mixed", "value": "Mixed Content"}
                ]
            },
            "grid_columns": {
                "type": "range",
                "label": "Grid Columns",
                "default": 2,
                "min": 1,
                "max": 4,
                "condition": {
                    "content_type": ["mixed", "image"]
                }
            },
            "vertical_alignment": {
                "type": "select",
                "label": "Vertical Alignment",
                "default": "center",
                "options": [
                    {"key": "top", "value": "Top"},
                    {"key": "center", "value": "Center"},
                    {"key": "bottom", "value": "Bottom"}
                ]
            },
            "show_title": {
                "type": "toggle",
                "label": "Show Title",
                "default": true
            },
            "title_level": {
                "type": "select",
                "label": "Title Level",
                "default": "h2",
                "options": [
                    {"key": "h1", "value": "H1"},
                    {"key": "h2", "value": "H2"},
                    {"key": "h3", "value": "H3"},
                    {"key": "h4", "value": "H4"}
                ],
                "condition": {
                    "show_title": true
                }
            },
            "content_limit": {
                "type": "number",
                "label": "Content Word Limit",
                "default": 0,
                "min": 0,
                "help": "Set to 0 for unlimited content"
            },
            "image_aspect_ratio": {
                "type": "select",
                "label": "Image Aspect Ratio",
                "default": "16-9",
                "options": [
                    {"key": "1-1", "value": "Square (1:1)"},
                    {"key": "4-3", "value": "Standard (4:3)"},
                    {"key": "16-9", "value": "Widescreen (16:9)"},
                    {"key": "21-9", "value": "Ultrawide (21:9)"}
                ],
                "condition": {
                    "content_type": ["image", "mixed"]
                }
            },
            "enable_lightbox": {
                "type": "toggle",
                "label": "Enable Lightbox",
                "default": false,
                "condition": {
                    "content_type": ["image", "mixed"]
                }
            },
            "lazy_load": {
                "type": "toggle",
                "label": "Lazy Load Images",
                "default": true
            },
            "entrance_animation": {
                "type": "select",
                "label": "Entrance Animation",
                "default": "none",
                "options": [
                    {"key": "none", "value": "None"},
                    {"key": "fadeIn", "value": "Fade In"},
                    {"key": "slideUp", "value": "Slide Up"},
                    {"key": "slideLeft", "value": "Slide Left"},
                    {"key": "scaleIn", "value": "Scale In"},
                    {"key": "rotateIn", "value": "Rotate In"}
                ]
            },
            "animation_duration": {
                "type": "range",
                "label": "Animation Duration (ms)",
                "default": 600,
                "min": 200,
                "max": 2000,
                "step": 100,
                "condition": {
                    "entrance_animation": ["fadeIn", "slideUp", "slideLeft", "scaleIn", "rotateIn"]
                }
            },
            "stagger_delay": {
                "type": "range",
                "label": "Stagger Delay (ms)",
                "default": 100,
                "min": 0,
                "max": 500,
                "step": 50,
                "condition": {
                    "entrance_animation": ["fadeIn", "slideUp", "slideLeft", "scaleIn", "rotateIn"]
                }
            }
        }
    }
}
```

### 3. Custom Post Type Integration

**Configuration** (`team-members/team-members.json`):
```json
{
    "name": "zen-blocks/team-members",
    "title": "Team Members",
    "category": "widgets",
    "icon": "groups",
    "description": "Display team members from custom post type",
    "render": "file:./render.php",
    "zenb": {
        "controls": {
            "department": {
                "type": "select",
                "label": "Department",
                "default": "",
                "options": "dynamic:team_departments"
            },
            "member_count": {
                "type": "number",
                "label": "Number of Members",
                "default": 6,
                "min": 1,
                "max": 20
            },
            "featured_only": {
                "type": "toggle",
                "label": "Featured Members Only",
                "default": false
            },
            "layout_style": {
                "type": "select",
                "label": "Layout Style",
                "default": "grid",
                "options": [
                    {"key": "grid", "value": "Grid Layout"},
                    {"key": "list", "value": "List Layout"},
                    {"key": "carousel", "value": "Carousel"}
                ]
            },
            "image_shape": {
                "type": "select",
                "label": "Image Shape",
                "default": "circle",
                "options": [
                    {"key": "circle", "value": "Circle"},
                    {"key": "square", "value": "Square"},
                    {"key": "rounded", "value": "Rounded Square"}
                ]
            },
            "show_bio": {
                "type": "toggle",
                "label": "Show Biography",
                "default": true
            },
            "show_social": {
                "type": "toggle",
                "label": "Show Social Links",
                "default": true
            }
        }
    }
}
```



## Performance Optimization

### Asset Optimization

**Conditional asset loading**:
```json
{
    "editorScript": "file:./editor.js",
    "viewScript": "file:./frontend.js",
    "style": "file:./common.css",
    "viewStyle": "file:./frontend.css"
}
```

**JavaScript optimization**:
```javascript
// Use intersection observer for performance
const observerOptions = {
    threshold: 0.1,
    rootMargin: '50px'
};

// Debounce resize events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Optimize scroll events
const handleScroll = debounce(() => {
    // Scroll handling logic
}, 16); // ~60fps

window.addEventListener('scroll', handleScroll);
```

### CSS Performance

```css
/* Use CSS custom properties for dynamic values */
.zen-block {
    --primary-color: #007cba;
    --spacing: 1rem;
    --border-radius: 8px;
}

/* Efficient animations */
.animated-element {
    will-change: transform, opacity;
    transform: translateZ(0); /* Force hardware acceleration */
}

/* Container queries for better responsive design */
@container (min-width: 768px) {
    .responsive-grid {
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    }
}

/* Efficient hover effects */
.hover-element {
    transition: transform 0.2s ease;
}

.hover-element:hover {
    transform: translateY(-2px);
}
```

## Testing and Quality Assurance

### Block Testing Checklist

1. **Functionality Testing**:
   - [ ] Block inserts correctly
   - [ ] All controls work as expected
   - [ ] Editable areas function properly
   - [ ] Repeaters add/remove items correctly
   - [ ] Inner blocks work if implemented

2. **Responsive Testing**:
   - [ ] Block displays correctly on mobile devices
   - [ ] Controls adapt to different screen sizes
   - [ ] Content remains readable at all breakpoints

3. **Accessibility Testing**:
   - [ ] Keyboard navigation works
   - [ ] Screen reader compatibility
   - [ ] Proper ARIA labels and roles
   - [ ] Color contrast meets WCAG guidelines

4. **Performance Testing**:
   - [ ] Fast loading times
   - [ ] No JavaScript errors
   - [ ] Smooth animations
   - [ ] Efficient CSS rendering

5. **Cross-browser Testing**:
   - [ ] Chrome/Chromium
   - [ ] Firefox
   - [ ] Safari
   - [ ] Edge

### Unit Testing Example

**JavaScript testing**:
```javascript
// test-zen-blocks.js
describe('Zen Blocks Functionality', () => {
    test('Slider navigation works', () => {
        const slider = document.querySelector('.testimonial-slider');
        const nextBtn = slider.querySelector('.next-slide');
        const slides = slider.querySelectorAll('.testimonial-slide');
        
        // Test navigation
        nextBtn.click();
        expect(slides[1].style.display).toBe('block');
        expect(slides[0].style.display).toBe('none');
    });
    
    test('Accordion toggles correctly', () => {
        const accordion = document.querySelector('.faq-accordion');
        const question = accordion.querySelector('.faq-question');
        const answer = question.nextElementSibling;
        
        question.click();
        expect(question.getAttribute('aria-expanded')).toBe('true');
        expect(answer.style.display).toBe('block');
    });
});
```

## Troubleshooting Guide

### Common Issues and Solutions

#### 1. Block Not Appearing in Inserter
**Problem**: Block doesn't show up in the block inserter
**Solutions**:
- Check if folder name matches PHP file name
- Verify block.json syntax is valid
- Ensure block name follows `namespace/block-name` format
- Check if `inserter` support is set to `false`

#### 2. Controls Not Working
**Problem**: zenb.controls not showing in editor
**Solutions**:
- Verify JSON syntax in zenb.controls section
- Check if ZENB_ADMIN_UI constant is set to true
- Ensure control types are valid
- Verify conditional logic syntax

#### 3. Template Variables Not Available
**Problem**: Variables from controls not accessible in template
**Solutions**:
- Check control names match variable names used in template
- Verify block.json is in same directory as template
- Ensure JSON is valid and properly formatted

#### 4. Styles Not Loading
**Problem**: CSS styles not applying to block
**Solutions**:
- Check if CSS file name matches block folder name
- Verify CSS file is in the correct directory
- Clear WordPress cache if using caching plugins
- Check browser developer tools for CSS loading errors
- Ensure CSS selectors have proper specificity

#### 5. JavaScript Errors
**Problem**: JavaScript functionality not working
**Solutions**:
- Check browser console for errors
- Verify JavaScript file name matches block folder name
- Ensure DOM elements exist before accessing them
- Use proper event listeners for dynamic content

#### 6. Repeater Issues
**Problem**: zen-repeater not adding/removing items
**Solutions**:
- Ensure repeater is wrapped in a container element
- Check for conflicting JavaScript on the page
- Verify repeater name is unique within the block
- Test with browser JavaScript enabled

## Advanced Customization Techniques

### Custom Control Types

You can extend Zen Blocks with custom control types by using WordPress filters:

```php
// functions.php or plugin file
add_filter('zenb_control_types', function($control_types) {
    $control_types['custom_post_select'] = [
        'render_callback' => 'render_custom_post_select',
        'sanitize_callback' => 'sanitize_text_field'
    ];
    return $control_types;
});

function render_custom_post_select($control_config, $current_value) {
    $posts = get_posts(['post_type' => $control_config['post_type'] ?? 'post']);
    
    $output = '<select name="' . esc_attr($control_config['name']) . '">';
    $output .= '<option value="">Select a post...</option>';
    
    foreach ($posts as $post) {
        $selected = selected($current_value, $post->ID, false);
        $output .= sprintf(
            '<option value="%d"%s>%s</option>',
            $post->ID,
            $selected,
            esc_html($post->post_title)
        );
    }
    
    $output .= '</select>';
    return $output;
}
```

### Dynamic Options for Controls

Create dynamic options that are populated from WordPress data:

```php
// functions.php
add_filter('zenb_dynamic_options', function($options, $option_type) {
    switch ($option_type) {
        case 'product_categories':
            $terms = get_terms(['taxonomy' => 'product_cat']);
            $options = [['key' => '', 'value' => 'All Categories']];
            foreach ($terms as $term) {
                $options[] = [
                    'key' => $term->term_id,
                    'value' => $term->name
                ];
            }
            break;
            
        case 'team_departments':
            $terms = get_terms(['taxonomy' => 'department']);
            $options = [['key' => '', 'value' => 'All Departments']];
            foreach ($terms as $term) {
                $options[] = [
                    'key' => $term->slug,
                    'value' => $term->name
                ];
            }
            break;
            
        case 'user_roles':
            $roles = wp_roles()->get_names();
            $options = [];
            foreach ($roles as $role_key => $role_name) {
                $options[] = [
                    'key' => $role_key,
                    'value' => $role_name
                ];
            }
            break;
    }
    
    return $options;
}, 10, 2);
```

## Security Considerations

### Input Sanitization

**Always sanitize user inputs**:
```php
// In template files
<div class="user-content">
    <h2><?php echo esc_html($user_title); ?></h2>
    <div class="content"><?php echo wp_kses_post($user_content); ?></div>
    <img src="<?php echo esc_url($user_image); ?>" alt="<?php echo esc_attr($user_alt_text); ?>" />
    <a href="<?php echo esc_url($user_link); ?>" class="<?php echo esc_attr($user_css_class); ?>">
        <?php echo esc_html($user_link_text); ?>
    </a>
</div>
```

### Data Validation

**Validate control values**:
```php
add_filter('zenb_validate_control_value', function($value, $control_config, $control_name) {
    switch ($control_config['type']) {
        case 'url':
            return filter_var($value, FILTER_VALIDATE_URL) ? $value : '';
            
        case 'email':
            return filter_var($value, FILTER_VALIDATE_EMAIL) ? $value : '';
            
        case 'number':
            $min = $control_config['min'] ?? PHP_INT_MIN;
            $max = $control_config['max'] ?? PHP_INT_MAX;
            $number = intval($value);
            return max($min, min($max, $number));
            
        case 'color':
            return preg_match('/^#[a-f0-9]{6}$/i', $value) ? $value : '#000000';
            
        default:
            return sanitize_text_field($value);
    }
}, 10, 3);
```