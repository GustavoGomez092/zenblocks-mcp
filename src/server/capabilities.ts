import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { createResources } from "./resources.js";

export const createCapabilities = (server: McpServer) => {
	createResources(server);
};
