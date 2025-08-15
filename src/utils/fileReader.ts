import { readFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export async function readFileFromDocs(filename: string): Promise<string> {
	const docsPath = join(__dirname, "..", "docs", filename);
	try {
		const content = await readFile(docsPath, "utf-8");
		return content;
	} catch (error) {
		throw new Error(`Failed to read file ${filename} from docs: ${error}`);
	}
}
