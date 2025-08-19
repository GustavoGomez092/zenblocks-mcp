export const toolMappings = [
	{
		name: "zenblocks-scaffolding",
		filename: "scaffolding.md",
		title: "ZenBlocks Scaffolding",
		description:
			"First tool to use when creating ZenBlocks This tool MUST be run before any other ZenBlocks tools.",
		mimeType: "text/markdown",
	},
	{
		name: "zenblocks-create-php",
		filename: "create-php.md",
		title: "ZenBlocks PHP template",
		description: "PHP template information for creating ZenBlocks.",
		mimeType: "text/markdown",
	},
	{
		name: "zenblocks-create-css",
		filename: "create-css.md",
		title: "ZenBlocks Create CSS file",
		description: "CSS file information for creating ZenBlocks.",
		mimeType: "text/markdown",
	},
	{
		name: "zenblocks-create-json",
		filename: "create-json.md",
		title: "ZenBlocks Create JSON file",
		description: "JSON block file information for creating ZenBlocks.",
		mimeType: "text/markdown",
	},
	{
		name: "zenblocks-create-js",
		filename: "create-js.md",
		title: "ZenBlocks Create JavaScipt file",
		description: "JavaScript file information for creating ZenBlocks.",
		mimeType: "text/markdown",
	},
	{
		name: "zenblocks-quality-assurance",
		filename: "quality-assurance.md",
		title: "ZenBlocks Quality Assurance",
		description: "Quality assurance information for creating ZenBlocks.",
		mimeType: "text/markdown",
	},
];
export function findToolMapping(name) {
	return toolMappings.find((mapping) => mapping.name === name);
}
export function getAllToolMappings() {
	return toolMappings;
}
//# sourceMappingURL=toolsMapping.js.map
