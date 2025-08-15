import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";

export const createTools = (server: McpServer) => {
	server.registerTool(
		"zenblocks-overview",
		{
			title: "ZenBlocks Overview",
			description: "A brief overview of ZenBlocks",
			// Add more tool configuration here
		},
		async () => {
			return {
				content: [
					{
						type: "text",
						text: "ZenBlocks is a powerful tool for creating and managing blocks in WordPress.",
					},
				],
			};
		},
	);
};
