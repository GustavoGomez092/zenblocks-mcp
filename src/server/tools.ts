import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { readFileFromDocs } from "../utils/fileReader.js";
import { getAllToolMappings } from "./toolsMapping.js";

export const createTools = async (server: McpServer) => {
	// Use the tool mappings to recursively create tools
	const toolMappings = getAllToolMappings();

	for (const mapping of toolMappings) {
		// Register each tool with its own content from the MD file
		server.registerTool(
			mapping.name,
			{
				title: mapping.title,
				description: mapping.description,
			},
			async () => {
				try {
					// Get the content from the corresponding MD file
					const content = await readFileFromDocs(mapping.filename);

					return {
						content: [
							{
								type: "text",
								text: content,
							},
						],
					};
				} catch (error) {
					return {
						content: [
							{
								type: "text",
								text: `Error reading file ${mapping.filename}: ${error}`,
							},
						],
					};
				}
			},
		);
	}
};
