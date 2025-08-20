#!/usr/bin/env node
Object.defineProperty(exports, "__esModule", { value: true });
var index_js_1 = require("./server/index.js");
var logger_js_1 = require("./utils/logger.js");
(0, index_js_1.start)().catch((error) => {
	(0, logger_js_1.logError)("Unhandled startup error", error);
	process.exit(1);
});
