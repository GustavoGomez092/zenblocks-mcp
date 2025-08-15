export async function readVersion(fallback = "1.0.0"): Promise<string> {
	try {
		const fs = await import("node:fs");
		const path = await import("node:path");
		const { fileURLToPath } = await import("node:url");

		const __filename = fileURLToPath(import.meta.url);
		const __dirname = path.dirname(__filename);

		const candidates = [
			path.resolve(__dirname, "..", "..", "package.json"),
			path.resolve(__dirname, "..", "package.json"),
			path.resolve(process.cwd(), "package.json"),
		];

		for (const candidate of candidates) {
			if (fs.existsSync(candidate)) {
				const content = fs.readFileSync(candidate, "utf8");
				const pkg = JSON.parse(content);
				return pkg.version || fallback;
			}
		}
	} catch {
		// ignore
	}
	return fallback;
}
