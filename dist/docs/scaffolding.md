# STEP 1: OVERVIEW 
You are about to start a toolchain, you will execute the steps described by the current tool before moving over to the next tool in the chain. you MUST ALWAYS execute the tool specified at the final line of the text, so that the tool chain can continue, the ONLY way to stop this toolchain is if the action is "STOP", otherwise you MUST execute the next tool.

## **READ THROUGH THIS OVERVIEW TO UNDERSTAND WHAT ZENBLOCKS ARE**

### Zen Blocks WordPress Plugin Overview

**Zen Blocks** is a WordPress plugin that simplifies the creation of custom Gutenberg blocks using familiar HTML/PHP templates instead of complex JavaScript and React code.

#### Core Concept

The plugin allows developers to create Gutenberg blocks using traditional web technologies:
- **HTML/PHP** for block structure and content
- **CSS** for styling  
- **JSON** for block configuration
- **JavaScript** for optional frontend functionality

#### Key Features

##### Simple Block Creation Process
1. Create a folder in your theme's `zen-blocks` directory
2. Add a PHP template file with the same name as the folder
3. Optionally add JSON configuration, CSS styles, and JS scripts
4. The plugin automatically registers your blocks

##### Editable Content System
- Use the `zen-edit` attribute to make any element editable in the Gutenberg editor
- Multiple editor types supported:
  - `text` (default) - formatted text editing
  - `wysiwyg` - rich content editor
  - `image` - media library integration
  - `link` - link/button elements
  - `repeater` - repeatable content groups
  - `innerblocks` - nested Gutenberg blocks

##### Block Configuration Controls
Supports various control types for block settings:
- Text inputs, dropdowns, number fields
- Toggle switches, color pickers
- Range sliders, image uploads
- Full WordPress block.json standard support

##### Example Structure
```
zen-blocks/
└── my-custom-block/
    ├── my-custom-block.php    # Template file
    ├── my-custom-block.json   # Block configuration
    ├── my-custom-block.css    # Styles (optional)
    └── my-custom-block.js     # Scripts (optional)
```

## **ACTION: CHECK IF YOU HAVE ACCESS TO THE PLAYWRIGHT MCP**

### **CRITICAL! If you do NOT have access to the playwright MCP:**
DO NOT PROCEED TO THE NEXT STEP, ask the user to install the playwright MCP before proceeding.
**ACTION: STOP**

## **CRITICAL! YOU MUST INFORM IF THE PLAYWRIGHT MCP IS AVAILABLE, IF IT IS NOT AVAILABLE ASK THE USER TO INSTALL IT, OTHERWISE ADVISE THE USER THE PLAYWRIGHT MCP IS AVAILABLE AND THAT YOU'LL BE USING IT DURING THE PROCESS**

## **ACTION: CHECK IF YOU HAVE ACCESS TO THE FIGMA MCP**

### **CRITICAL! If the user does not provide a figma link or image reference:**
DO NOT PROCEED TO THE NEXT STEP, ask for the figma design link or the reference image before proceeding.
**ACTION: STOP**

## **ACTION: REVIEW THE IMAGE OR FIGMA LINK PROVIDED BY THE USER**

### If the user provides an image reference:
Get all the details from the design to create a component as pixel perfect as possible, once you have all the details, proceed to the next tool.

### If the user provides a figma reference:
YOU MUST USE THE FIGMA MCP server to get all the details from the design to create a component as pixel perfect as possible, once you have all the details, proceed to the next tool.

## QUESTIONS YOU MUST ASK BEFORE CONTINUING:

* Ask for the theme folder name so you can locate the right theme where you will create the zenblocks
* Create a ``zen-blocks`` folder in your theme directory if there is none
* You MUST ALWAYS ask for the block name, make 3 proposals for the name, You MUST use kebab-case for the folder name and the block name, you MUST NOT skip this step, ALWAYS ask for the name of the component before creating the folder and files.
* You MUST ALWAYS ask once and only once if the user is going to be using Tailwind or nested CSS for their styling, Once you have their answer, keep it so you don't ask it again. Always ask this before creating the first component. You MUST NOT accept any other answer other than Tailwind or Nested CSS.
* You MUST ALWAYS ask once and only once if the user is going to be using GSAP or vanilla JS for their animations and interactions, Once you have their answer, keep it so you don't ask it again. Always ask this before creating the first component. You MUST NOT accept any other answer other than GSAP or Vanilla JS.


## **ACTION: CREATE THE FOLDER AND EMPTY PHP, CSS, JS & JSON FILES WITH THE COMPONENT**

Follow this file structure when creating Zen block components: 
```
theme-name/
└── zen-blocks/
    └── component-name/
        ├── component-name.php
        ├── component-name.css
        ├── component-name.js
        └── component-name.json
```


## **CRITICAL! NEXT TOOL:**
ZenBlocks PHP template