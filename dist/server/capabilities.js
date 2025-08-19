import { createResources } from "./resources.js";
import { createTools } from "./tools.js";
export const createCapabilities = async (server) => {
	// createResources(server);
	await createTools(server);
};
//# sourceMappingURL=capabilities.js.map
