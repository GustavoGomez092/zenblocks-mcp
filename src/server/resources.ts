import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";

export const createResources = (server: McpServer) => {
	server.registerResource(
		"zenblocks:resources:overview",
		"zenblocks://overview",
		{
			title: "Overview",
			description: "An overview of how to use Zenblocks",
			mimetype: "text/markdown",
		},
		async (uri) => {
			// Implementation for the overview resource
			console.log(uri);
			const content = await fetch(uri.href).then((res) => res.text());

			return {
				contents: [
					{
						uri: uri.href,
						text: content,
						mimeType: "text/markdown",
					},
				],
			};
		},
	);
};
