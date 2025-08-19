/**
 * Simple console logging wrapper
 * All logging goes to stderr to avoid interfering with JSON-RPC stdout communication
 * All methods use console.error under the hood
 */
/**
 * Simple error logging function
 */
export declare function logError(message: string, error?: unknown): void;
/**
 * Simple warning logging function
 */
export declare function logWarning(message: string): void;
/**
 * Simple info logging function
 */
export declare function logInfo(message: string): void;
//# sourceMappingURL=logger.d.ts.map
