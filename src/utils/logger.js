"use strict";
/**
 * Simple console logging wrapper
 * All logging goes to stderr to avoid interfering with JSON-RPC stdout communication
 * All methods use console.error under the hood
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.logError = logError;
exports.logWarning = logWarning;
exports.logInfo = logInfo;
/**
 * Simple error logging function
 */
function logError(message, error) {
    var errorMessage = error instanceof Error ? error.message : String(error);
    console.error("ERR: ".concat(message, " - ").concat(errorMessage));
    if (error instanceof Error && error.stack) {
        console.error("Stack: ".concat(error.stack));
    }
}
/**
 * Simple warning logging function
 */
function logWarning(message) {
    console.error("WARN: ".concat(message));
}
/**
 * Simple info logging function
 */
function logInfo(message) {
    console.error("INFO: ".concat(message));
}
