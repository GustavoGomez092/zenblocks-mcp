# Example Zen Block components

``example-component/example-component.php``

```php
<div class="example-component layout-<?php echo esc_attr($layout); ?>">
    <div class="demo-header">
        <h2 zen-edit="header_title">Demo Components Block</h2>
        <div zen-edit="header_description" zen-type="wysiwyg">
            <p>This block demonstrates all available editable components in Zen Blocks.</p>
        </div>
    </div>

    <div class="demo-section text-section">
        <h3>Text Field Demo</h3>
        <p zen-edit="simple_text">This is a simple text field that can be edited.</p>
    </div>

    <div class="demo-section wysiwyg-section">
        <h3>WYSIWYG Field Demo</h3>
        <div zen-edit="rich_content" zen-type="wysiwyg">
            <p>This is a <strong>WYSIWYG</strong> field with <em>rich formatting</em> options.</p>
            <ul>
                <li>List item 1</li>
                <li>List item 2</li>
            </ul>
        </div>
    </div>

    <div class="demo-section image-section">
        <h3>Image Field Demo</h3>
        <div class="image-container">
            <img zen-edit="demo_image" zen-type="image" src="" alt="Demo image" />
        </div>
    </div>

    <div class="demo-section link-section">
        <h3>Link Field Demo</h3>
        <a zen-edit="demo_link" zen-type="link" class="demo-button">
            <span zen-edit="button_text">Click Me</span>
        </a>
    </div>

    <div class="demo-section repeater-section">
        <h3>Repeater Field Demo</h3>
        <div class="feature-items" zen-repeater="features">
            <div class="feature-item">
                <h4 zen-edit="feature_title">Feature Title</h4>
                <p zen-edit="feature_description">Feature description goes here.</p>
                <img zen-edit="feature_icon" zen-type="image" src="" alt="Feature icon" />
            </div>
        </div>
    </div>

    <div class="demo-section innerblocks-section">
        <h3>InnerBlocks Field Demo</h3>
        <div zen-edit="inner_content" zen-type="innerblocks" class="inner-blocks-container">
            <p>Add any Gutenberg blocks here...</p>
        </div>
    </div>

    <?php if ($show_advanced): ?>
    <div class="demo-section advanced-section">
        <h3>Advanced Options Demo</h3>
        <div class="color-demo" style="background-color: <?php echo esc_attr($background_color); ?>">
            <p>Background color control demo</p>
        </div>
        
        <div class="columns-demo columns-<?php echo esc_attr($columns_count); ?>">
            <?php for ($i = 1; $i <= $columns_count; $i++): ?>
            <div class="column">Column <?php echo $i; ?></div>
            <?php endfor; ?>
        </div>
    </div>
    <?php endif; ?>
</div>
```
---

``example-component/example-component.css``
```css
.example-components {
    @apply max-w-6xl mx-auto p-8 font-sans;
}

.example-component.layout-compact {
    @apply max-w-4xl;
}

.example-component.layout-expanded {
    @apply max-w-full p-12;
}

.demo-header {
    @apply mb-8 text-center pb-6 border-b border-gray-200;
}

.demo-header h2 {
    @apply text-4xl mb-4 text-gray-900;
}

.demo-section {
    @apply mb-12 p-6 bg-gray-50 rounded-lg shadow-sm;
}

.demo-section h3 {
    @apply text-2xl mb-4 text-gray-900 border-b-2 border-blue-600 pb-2 inline-block;
}

/* Text section styles */
.text-section p {
    @apply text-lg leading-relaxed;
}

/* WYSIWYG section styles */
.wysiwyg-section ul {
    @apply ml-6;
}

/* Image section styles */
.image-container {
    @apply max-w-full text-center;
}

.image-container img {
    @apply max-w-full h-auto rounded shadow-md;
}

/* Link section styles */
.demo-button {
    @apply inline-block px-6 py-3 bg-blue-600 text-white no-underline rounded font-medium transition-colors duration-300 ease-in-out hover:bg-blue-700;
}

/* Repeater section styles */
.feature-items {
    @apply grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-6;
}

.feature-item {
    @apply p-6 bg-white rounded-md shadow-sm;
}

.feature-item h4 {
    @apply mt-0 mb-3 text-gray-900;
}

.feature-item img {
    @apply max-w-16 h-auto mt-4;
}

/* InnerBlocks section styles */
.inner-blocks-container {
    @apply min-h-[100px] p-4 bg-white border border-dashed border-gray-300 rounded;
}

/* Advanced section styles */
.color-demo {
    @apply p-6 rounded-md mb-6 text-center;
}

.color-demo p {
    @apply m-0 font-medium;
}

.columns-demo {
    @apply grid gap-4;
}

.columns-1 { @apply grid-cols-1; }
.columns-2 { @apply grid-cols-2; }
.columns-3 { @apply grid-cols-3; }
.columns-4 { @apply grid-cols-4; }
.columns-5 { @apply grid-cols-5; }
.columns-6 { @apply grid-cols-6; }

.column {
    @apply p-4 bg-white rounded text-center shadow;
}
```
---
``example-component/example-component.js``
```javascript
const exampleComponent = document.querySelector(".example-component")

if(exampleComponent) console.log(exampleComponent);
```
---
``example-component/example-component.json``
```json
{
  "name": "zen-blocks/demo-components",
  "title": "Demo Components",
  "category": "zen-blocks",
  "icon": "layout",
  "description": "A comprehensive demo of all Zen Blocks editable components.",
  "keywords": ["demo", "components", "zen", "showcase"],
  "version": "1.0.0",
  "supports": {
    "html": true,
    "align": ["wide", "full"],
    "anchor": true,
    "customClassName": true
  },
  "zenb": {
    "controls": {
      "layout": {
        "type": "select",
        "label": "Layout",
        "default": "default",
        "options": [
          {
            "key": "default",
            "value": "Default Layout"
          },
          {
            "key": "compact",
            "value": "Compact Layout"
          },
          {
            "key": "expanded",
            "value": "Expanded Layout"
          }
        ]
      },
      "show_advanced": {
        "type": "toggle",
        "label": "Show Advanced Options",
        "default": false
      },
      "background_color": {
        "type": "color",
        "label": "Background Color",
        "default": "#f0f0f0"
      },
      "columns_count": {
        "type": "range",
        "label": "Columns Count",
        "default": 3,
        "min": 1,
        "max": 6,
        "step": 1
      }
    }
  }
}
```

## Examples

### Example 1: Product Showcase Block

**Configuration** (`product-showcase/product-showcase.json`):
```json
{
    "name": "zen-blocks/product-showcase",
    "title": "Product Showcase",
    "category": "widgets",
    "icon": "products",
    "description": "Display products in an attractive grid layout",
    "keywords": ["product", "showcase", "grid", "ecommerce"],
    "supports": {
        "align": ["wide", "full"],
        "color": {
            "background": true,
            "text": true
        },
        "spacing": {
            "padding": true,
            "margin": true
        }
    },
    "zenb": {
        "controls": {
            "products_per_row": {
                "type": "range",
                "label": "Products per Row",
                "default": 3,
                "min": 1,
                "max": 6,
                "step": 1
            },
            "show_price": {
                "type": "toggle",
                "label": "Show Prices",
                "default": true
            },
            "show_rating": {
                "type": "toggle",
                "label": "Show Ratings",
                "default": true
            },
            "button_style": {
                "type": "select",
                "label": "Button Style",
                "default": "solid",
                "options": [
                    {"key": "solid", "value": "Solid"},
                    {"key": "outline", "value": "Outline"},
                    {"key": "text", "value": "Text Only"}
                ]
            }
        }
    }
}
```

**Template** (`product-showcase/product-showcase.php`):
```php
<div class="product-showcase" style="--columns: <?php echo intval($products_per_row); ?>;">
    <div zen-repeater="products">
        <div class="product-item">
            <div class="product-image">
                <img zen-edit="product_image" zen-type="image" src="" alt="Product Image" />
            </div>
            
            <div class="product-info">
                <h3 zen-edit="product_name" zen-type="text">Product Name</h3>
                <p zen-edit="product_description" zen-type="text">Product description</p>
                
                <?php if ($show_price): ?>
                    <div class="product-price">
                        <span zen-edit="price" zen-type="text">$99.99</span>
                    </div>
                <?php endif; ?>
                
                <?php if ($show_rating): ?>
                    <div class="product-rating">
                        <span zen-edit="rating" zen-type="number">5</span> ⭐
                    </div>
                <?php endif; ?>
                
                <div class="product-actions">
                    <a zen-edit="product_link" zen-type="link" href="#" 
                       class="btn btn-<?php echo esc_attr($button_style); ?>">
                        <span zen-edit="button_text" zen-type="text">Buy Now</span>
                    </a>
                </div>
            </div>
        </div>
    </div>
</div>
```

### Example 2: Testimonial Slider Block

**Configuration** (`testimonial-slider/testimonial-slider.json`):
```json
{
    "name": "zen-blocks/testimonial-slider",
    "title": "Testimonial Slider",
    "category": "widgets",
    "icon": "format-quote",
    "description": "Display customer testimonials in a slider format",
    "keywords": ["testimonial", "slider", "review", "customer"],
    "supports": {
        "align": true,
        "color": {
            "background": true,
            "text": true
        },
        "typography": {
            "fontSize": true,
            "lineHeight": true
        }
    },
    "zenb": {
        "controls": {
            "auto_play": {
                "type": "toggle",
                "label": "Auto Play",
                "default": true
            },
            "slide_duration": {
                "type": "range",
                "label": "Slide Duration (seconds)",
                "default": 5,
                "min": 2,
                "max": 10,
                "condition": {
                    "auto_play": true
                }
            },
            "show_navigation": {
                "type": "toggle",
                "label": "Show Navigation Arrows",
                "default": true
            },
            "show_indicators": {
                "type": "toggle",
                "label": "Show Slide Indicators",
                "default": true
            },
            "testimonial_style": {
                "type": "select",
                "label": "Testimonial Style",
                "default": "card",
                "options": [
                    {"key": "card", "value": "Card Style"},
                    {"key": "minimal", "value": "Minimal"},
                    {"key": "quote", "value": "Quote Style"}
                ]
            }
        }
    }
}
```

**Template** (`testimonial-slider/testimonial-slider.php`):
```php
<div class="testimonial-slider style-<?php echo esc_attr($testimonial_style); ?>"
     data-autoplay="<?php echo $auto_play ? 'true' : 'false'; ?>"
     data-duration="<?php echo intval($slide_duration); ?>">
     
    <div class="slider-container">
        <div zen-repeater="testimonials">
            <div class="testimonial-slide">
                <div class="testimonial-content">
                    <blockquote zen-edit="quote" zen-type="wysiwyg">
                        "This product changed my life! Highly recommended."
                    </blockquote>
                </div>
                
                <div class="testimonial-author">
                    <img zen-edit="author_image" zen-type="image" src="" alt="Author" class="author-avatar" />
                    <div class="author-info">
                        <cite zen-edit="author_name" zen-type="text">John Doe</cite>
                        <span zen-edit="author_title" zen-type="text">CEO, Company Name</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <?php if ($show_navigation): ?>
        <div class="slider-navigation">
            <button class="prev-slide" aria-label="Previous testimonial">‹</button>
            <button class="next-slide" aria-label="Next testimonial">›</button>
        </div>
    <?php endif; ?>
    
    <?php if ($show_indicators): ?>
        <div class="slider-indicators">
            <!-- Indicators will be generated by JavaScript -->
        </div>
    <?php endif; ?>
</div>
```

### Example 3: FAQ Accordion Block

**Configuration** (`faq-accordion/faq-accordion.json`):
```json
{
    "name": "zen-blocks/faq-accordion",
    "title": "FAQ Accordion",
    "category": "text",
    "icon": "editor-help",
    "description": "Display frequently asked questions in an expandable accordion format",
    "keywords": ["faq", "accordion", "questions", "help"],
    "supports": {
        "color": {
            "background": true,
            "text": true
        },
        "spacing": {
            "padding": true
        },
        "typography": {
            "fontSize": true
        }
    },
    "zenb": {
        "controls": {
            "accordion_style": {
                "type": "select",
                "label": "Accordion Style",
                "default": "bordered",
                "options": [
                    {"key": "bordered", "value": "Bordered"},
                    {"key": "minimal", "value": "Minimal"},
                    {"key": "filled", "value": "Filled Background"}
                ]
            },
            "allow_multiple_open": {
                "type": "toggle",
                "label": "Allow Multiple Open",
                "default": false,
                "help": "Allow multiple accordion items to be open simultaneously"
            },
            "first_open": {
                "type": "toggle",
                "label": "First Item Open by Default",
                "default": true
            },
            "icon_position": {
                "type": "select",
                "label": "Icon Position",
                "default": "right",
                "options": [
                    {"key": "left", "value": "Left"},
                    {"key": "right", "value": "Right"}
                ]
            }
        }
    }
}
```

**Template** (`faq-accordion/faq-accordion.php`):
```php
<div class="faq-accordion style-<?php echo esc_attr($accordion_style); ?> icon-<?php echo esc_attr($icon_position); ?>"
     data-multiple="<?php echo $allow_multiple_open ? 'true' : 'false'; ?>"
     data-first-open="<?php echo $first_open ? 'true' : 'false'; ?>">
     
    <div zen-repeater="faq_items">
        <div class="faq-item">
            <button class="faq-question" type="button" aria-expanded="false">
                <span zen-edit="question" zen-type="text">What is your return policy?</span>
                <span class="faq-icon" aria-hidden="true">+</span>
            </button>
            
            <div class="faq-answer" style="display: none;">
                <div zen-edit="answer" zen-type="wysiwyg">
                    <p>We offer a 30-day return policy for all unused items in original packaging.</p>
                </div>
            </div>
        </div>
    </div>
</div>
```