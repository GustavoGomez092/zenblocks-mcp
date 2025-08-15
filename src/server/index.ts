import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { parseArgs } from "../utils/cli-args.js";
import { logError, logInfo, logWarning } from "../utils/logger.js";
import { readVersion } from "../utils/readVersion.js";
import { createServer } from "./createServer.js";

export async function start() {
	try {
		logInfo("Starting ZenBlocks MCP Server...");

		const { githubApiKey } = parseArgs();

		const axios = await import("../utils/axios.js").then(
			(module) => module.axios,
		);
		if (githubApiKey) {
			axios.setGitHubApiKey(githubApiKey);
			logInfo("GitHub API configured with token");
		} else {
			logWarning(
				"No GitHub API key provided. Rate limited to 60 requests/hour.",
			);
		}

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
