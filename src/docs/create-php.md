## **ACTION: CREATE THE PHP TEMPLATE FILE**

Go inside the PHP template file for the component and start writing the the template for the component:

### How to create the component template:

Create the template file (`hero-banner/hero-banner.php`)
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

#### Template Requirements

1. **Root Element**: Wrap all block content in a single parent element
2. **Editable Elements**: Use `zen-edit` attribute for editable areas
3. **Editor Types**: Specify `zen-type` for different input types
4. **Repeaters**: Use `zen-repeater` for repeatable content groups

#### Template Structure

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

#### Available Editor Types

##### Text (`zen-type="text"`)
Simple text editing with basic formatting options.

```php
<h2 zen-edit="title" zen-type="text">Default Title</h2>
<p zen-edit="description" zen-type="text">Default description</p>
```

##### WYSIWYG (`zen-type="wysiwyg"`)
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

##### Image (`zen-type="image"`)
Media library integration for image selection.

```php
<img zen-edit="hero_image" zen-type="image" src="" alt="Hero Image" />
<figure>
    <img zen-edit="gallery_image" zen-type="image" src="" alt="Gallery Image" />
    <figcaption zen-edit="caption" zen-type="text">Image caption</figcaption>
</figure>
```

##### Link (`zen-type="link"`)
Link and button elements with URL and text editing.

```php
<a zen-edit="cta_link" zen-type="link" href="#" class="btn">Click Here</a>
<button zen-edit="action_button" zen-type="link" class="btn btn-primary">Action Button</button>
```

##### Repeater (`zen-repeater="items"`)
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

##### Inner Blocks (`zen-type="innerblocks"`)
Nested Gutenberg blocks for rich content editing.

```php
<div class="content-container">
    <div zen-edit="inner_content" zen-type="innerblocks">
        <!-- Users can add any Gutenberg blocks here -->
    </div>
</div>
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

## **CRITICAL! NEXT TOOL:**
ZenBlocks Create CSS file
