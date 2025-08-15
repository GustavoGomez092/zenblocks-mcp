import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { createCapabilities } from "./capabilities.js";

export async function createServer(version: string) {
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

	await createCapabilities(server);

	return server;
}
