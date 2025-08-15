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
* the main PHP file MUST have the same name as the containing folder (e.g., ``my-custom-block/my-custom-block.php``)
* When adding a new zen block you MUST ALWAYS Create its corresponding style, script and JSON files, so they are always available for the user even if they are not needed. The naming for all files MUST ALWAYS be the same as the containing folder (e.g., ``my-custom-block/my-custom-block.css``, ``my-custom-block/my-custom-block.js``, ``my-custom-block/my-custom-block.json``)
* you MUST always ask if the name for the new Zen component you are going to build is OK with the user, you MUST NOT skip this step, ALWAYS ask for the name of the component before creating the folder and files.
* You MUST ALWAYS ask once and only once if the user is going to be using tailwind for their styling, Once you have their answer, keep it so you don't ask it again. Always ask this before creating the first component.
* If the user is going to use tailwind to style the zen block components, you MUST always use the @apply approach for separating the styles from the markup, you MUST use relevant naming conventions for creating the component clasess and then bind the styles inside the CSS file using @apply, you MUST NOT use tailwind classess inside the markup.
* When creating markup for a Zen block component you MUST make sure that you wrap all block content in a single parent element this component MUST have it's first class name be the same name as the containing folder name. (e.g., ``<div class="my-custom-block">...</div>``)
