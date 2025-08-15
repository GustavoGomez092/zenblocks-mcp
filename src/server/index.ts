import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { logError, logInfo } from "../utils/logger.js";
import { readVersion } from "../utils/readVersion.js";
import { createServer } from "./createServer.js";

export async function start() {
	try {
		logInfo("Starting ZenBlocks MCP Server...");

		const version = await readVersion();
		const server = createServer(version);

		const transport = new StdioServerTransport();
		logInfo("Transport initialized: stdio");

		await server.connect(transport);
		logInfo("Server started successfully");
	} catch (error) {
		logError("Failed to start server", error as Error);
		process.exit(1);
	}
}
