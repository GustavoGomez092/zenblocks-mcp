import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { createResources } from "./resources.js";
import { createTools } from "./tools.js";

export const createCapabilities = (server: McpServer) => {
	createResources(server);
	createTools(server);
};
