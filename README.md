# ZenBlocks MCP Server

An MCP (Model Context Protocol) server that helps you create Zen Blocks for your WordPress theme. This server provides AI assistants with comprehensive guidance for building custom Gutenberg blocks using familiar HTML/PHP templates instead of complex JavaScript and React code.

## 🚀 What is ZenBlocks?

**Zen Blocks** is a WordPress plugin that revolutionizes custom Gutenberg block creation by allowing developers to use traditional web technologies:

- **HTML/PHP** for block structure and content
- **CSS** for styling (Tailwind or nested CSS)
- **JSON** for block configuration
- **JavaScript** for optional frontend functionality (GSAP or vanilla JS)

Instead of learning React and complex build processes, you can create powerful custom blocks using the skills you already have.

## 🛠 Available MCP Tools

This MCP server provides the following tools to guide you through the ZenBlocks creation process:

1. **zenblocks-scaffolding** - Initial setup and project scaffolding
2. **zenblocks-create-php** - PHP template creation guidance
3. **zenblocks-create-css** - CSS styling information
4. **zenblocks-create-json** - JSON configuration setup
5. **zenblocks-create-js** - JavaScript functionality
6. **zenblocks-quality-assurance** - Final QA and testing

## 📦 Installation

### Adding to MCP Clients

Add this configuration to your MCP client (Claude Desktop, etc.):

```json
{
  "mcpServers": {
    "ZenBlocks MCP": {
      "type": "stdio",
      "command": "npx",
      "args": ["github:GustavoGomez092/zenblocks-mcp"]
    }
  }
}
```

### Prerequisites

Before using this MCP server, ensure you have:

1. **Playwright MCP** - Required for web interactions and testing
2. **Figma MCP** (optional) - For design-to-code conversion from Figma designs

## 🎨 Workflow

### 1. Initial Setup
Start by using the `zenblocks-scaffolding` tool, which will:
- Guide you through the initial questions
- Help you choose between Tailwind CSS or nested CSS
- Help you choose between GSAP or vanilla JavaScript
- Create the proper folder structure

### 2. Design Input
Provide either:
- A Figma design link (requires Figma MCP)
- Reference images of the component you want to build

### 3. Component Creation
The MCP will guide you through creating:
- PHP template with proper `zen-edit` attributes
- CSS styling (Tailwind or nested)
- JSON configuration with controls
- JavaScript for interactions (GSAP or vanilla)

### 4. Quality Assurance
Final review and testing of your ZenBlock component.

## 🤝 Contributing

This MCP server is part of the ZenBlocks ecosystem. Contributions are welcome!

## 📄 License

MIT License - see the LICENSE file for details.

---

*Built with ❤️ for WordPress developers who love simplicity*