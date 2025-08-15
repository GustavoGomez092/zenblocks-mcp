export interface ResourceMapping {
	uri: string;
	filename: string;
	title: string;
	description: string;
	mimeType: string;
}

export const resourceMappings: ResourceMapping[] = [
	{
		uri: "zenblocks://overview",
		filename: "overview.md",
		title: "Overview",
		description: "An overview of how to use Zenblocks",
		mimeType: "text/markdown",
	},
	{
		uri: "zenblocks://important",
		filename: "important.md",
		title: "Important Information",
		description: "Key details about using Zenblocks",
		mimeType: "text/markdown",
	},
	{
		uri: "zenblocks://examples",
		filename: "examples.md",
		title: "Examples",
		description: "Code examples for using Zenblocks",
		mimeType: "text/markdown",
	},
	{
		uri: "zenblocks://documentation",
		filename: "documentation.md",
		title: "Documentation",
		description: "Comprehensive guide to using Zenblocks",
		mimeType: "text/markdown",
	},
];

export function findResourceMapping(uri: string): ResourceMapping | undefined {
	return resourceMappings.find((mapping) => mapping.uri === uri);
}

export function getAllResourceMappings(): ResourceMapping[] {
	return resourceMappings;
}
