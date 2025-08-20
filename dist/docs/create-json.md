## **ACTION: CREATE THE JSON BLOCK FILE**
* The block configuration controls MUST BE ONLY USED to create global controls for showing/hiding content, background colors/gradients, activate/deactivate animations and layout styles they MUST NOT be used to add content.

### Critical Implementation Rule

**DO NOT ADD any controls to the JSON block properties that you are not implementing in the PHP template file.**

This is essential because:
- Every control defined in the JSON `zenb.controls` section must have corresponding implementation in the PHP template
- Unused controls create confusing UI elements in the WordPress block editor that don't affect the block output
- The PHP template is the source of truth for what actually renders on the frontend
- Controls without implementation lead to broken user experiences and confused content editors
- Zen-blocks passes control values as PHP variables to your template, so unused controls are wasted variables

### Control Types and PHP Integration

#### Text Controls
```json
"my_text": {
    "type": "text",
    "label": "My Text",
    "default": "Default text"
}
```
**Required in PHP**: `<?php echo esc_html($my_text); ?>`

#### Toggle Controls
```json
"show_element": {
    "type": "toggle", 
    "label": "Show Element",
    "default": true
}
```
**Required in PHP**: `<?php if ($show_element): ?> ... <?php endif; ?>`

#### Select Controls
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

#### Range/Number Controls
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

#### Image Controls
```json
"background_image": {
    "type": "image",
    "label": "Background Image"
}
```
**Required in PHP**: `<?php if ($background_image): ?><img src="<?php echo esc_url($background_image['url']); ?>" /><?php endif; ?>`

#### Color Controls
```json
"background_color": {
    "type": "color",
    "label": "Background Color",
    "default": "#ffffff"
}
```
**Required in PHP**: `<div style="background-color: <?php echo esc_attr($background_color); ?>">` or CSS classes

### Common Violations to Avoid

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

### Zen-Blocks Specific Features

#### Available Control Types
- `text`: Simple text input field
- `select`: Dropdown selection with options  
- `number`: Numeric input field
- `toggle`: Boolean on/off switch
- `image`: Image upload input
- `range`: Numeric slider with min/max values
- `color`: Color picker (as shown in example)

#### Editable Element Types (`zen-type`)
- `text` (default): Text editing with formatting
- `wysiwyg`: WYSIWYG editor for rich content  
- `image`: Media library integration
- `link`: Link/button elements
- `repeater`: Repeatable content groups
- `innerblocks`: Nested Gutenberg blocks

Remember: **Every control must serve a purpose and be fully implemented in the PHP template. The zen-blocks system passes all JSON controls as PHP variables to your template, so unused controls are both wasteful and confusing to editors.**

### Block system

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

Before adding any control to the JSON `zenb.controls` section:

1. **Verify PHP Implementation**: Ensure the control variable is used in the PHP template (e.g., `$layout`, `$show_title`, `$background_color`)
2. **Test Functionality**: Confirm changing the control value produces visible changes in the block
3. **Check Default Values**: Ensure default values in JSON match expected behavior in PHP
4. **Validate All States**: Test all possible control values/options work correctly
5. **Wrap in Root Element**: Remember all block content must be wrapped in a single parent element for React compatibility
6. **Test zen-edit Attributes**: If using editable elements, ensure `zen-edit` attributes work with your controls


## **CRITICAL! NEXT TOOL:**
ZenBlocks Create JavaScipt file