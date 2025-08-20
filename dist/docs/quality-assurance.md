## Cohesion testing

## **CRITICAL ACTION: ASK the user for the page URL where the component is displayed so you can use the playwright MCP to do the quality assurance**

### Make sure all these guidelines are followed, Review the template, styles and javaScript to make sure all these guidelines are followed:

1. **Start with PHP Template**: Build the template first, then add only the controls you actually use
2. **One-to-One Mapping**: Each JSON control should have clear usage in the PHP file
3. **Meaningful Defaults**: Set JSON defaults that make sense for your template's initial state
4. **Test Edge Cases**: Verify the template handles empty/null values gracefully
5. **Document Usage**: Comment your PHP to show where each control is used
6. **Follow File Structure**: Each block needs its own folder with matching PHP file name
7. **Root Element Required**: Wrap all content in single parent element (e.g., `<div class="my-block">`)
8. **Editable Elements**: Use `zen-edit` attributes properly with unique values
9. **Editor Types**: Understand `zen-type` options: `text`, `wysiwyg`, `image`, `link`, `repeater`, `innerblocks`

## Best Practices
Go thorugh each file of the ZenBlock component and make sure all these best practices are followed. YOU MUST be recursive! Keep testing on your own until best practices are checked and ready. THIS IS CRITICAL.

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

### 4. Security Best Practices
- Always escape output using `esc_html()`, `esc_attr()`, `esc_url()`
- Validate and sanitize user inputs
- Use `wp_kses_post()` for rich content
- Never trust user-provided data


## Testing and Quality Assurance

### Block Testing Checklist
you MUST USE the Playwright MCP to complete this checklist, do NOT proceed to the next item on the checklist until the current item has passed. YOU MUST be recursive! Keep testing on your own until all test types are complete. THIS IS CRITICAL.

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
   - [ ] No JavaScript errors
   - [ ] Smooth animations
   - [ ] Efficient CSS rendering

5. **Cross-browser Testing**:
   - [ ] Chrome/Chromium
   - [ ] Safari


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


## **CRITICAL! DO NOT PROCEED TO THE STOP ACTION UNTIL EVERYTHING IN THIS DOCUMENT IS THOROUGHLY TESTED**

**ACTION: STOP**