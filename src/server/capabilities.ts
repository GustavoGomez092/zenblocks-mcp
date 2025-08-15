import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { createResources } from "./resources.js";
import { createTools } from "./tools.js";

export const createCapabilities = async (server: McpServer) => {
	createResources(server);
	await createTools(server);
};
