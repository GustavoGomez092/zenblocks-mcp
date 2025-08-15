import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { createCapabilities } from "./capabilities.js";

export function createServer(version: string) {
	const server = new McpServer(
		{
			name: "zenblocks-mcp-server",
			version,
		},
		{
			capabilities: {
				resources: {},
				tools: {},
			},
		},
	);

	createCapabilities(server);

	return server;
}
