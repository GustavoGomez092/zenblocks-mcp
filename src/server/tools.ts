import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { readFileFromDocs } from "../utils/fileReader.js";
import { getAllResourceMappings } from "./resourceMappings.js";

export const createTools = async (server: McpServer) => {
	// use the resource mappings file to create a single tool that returns all the contents of all the resources
	const mappings = getAllResourceMappings();
	const allResources: string[] = [];

	for (const mapping of mappings) {
		// get the resource content
		const content = await readFileFromDocs(mapping?.filename);

		allResources.push(content);
	}

	server.registerTool(
		"zenblocks-docs",
		{
			title: "ZenBlocks docs",
			description: "Complete documentation on how to make ZenBlocks",
			// Add more tool configuration here
		},
		async () => {
			return {
				content: [
					{
						type: "text",
						text: allResources.join("\n"),
					},
				],
			};
		},
	);
};
