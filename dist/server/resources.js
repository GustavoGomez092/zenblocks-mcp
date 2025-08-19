import { readFileFromDocs } from "../utils/fileReader.js";
import {
	findResourceMapping,
	getAllResourceMappings,
} from "./resourceMappings.js";
export const createResources = (server) => {
	const mappings = getAllResourceMappings();
	// Register all resources based on mappings
	for (const mapping of mappings) {
		server.registerResource(
			`zenblocks:resources:${mapping.filename.replace(".md", "")}`,
			mapping.uri,
			{
				title: mapping.title,
				description: mapping.description,
				mimetype: mapping.mimeType,
			},
			async (uri) => {
				let content = "";
				try {
					const resourceMapping = findResourceMapping(uri.href);
					if (resourceMapping) {
						content = await readFileFromDocs(resourceMapping.filename);
					} else {
						content = "Resource not found.";
					}
				} catch (error) {
					console.error("Error reading resource:", error);
					content = "Error loading resource content.";
				}
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
	}
};
//# sourceMappingURL=resources.js.map
