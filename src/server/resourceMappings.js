"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resourceMappings = void 0;
exports.findResourceMapping = findResourceMapping;
exports.getAllResourceMappings = getAllResourceMappings;
exports.resourceMappings = [
    {
        uri: "zenblocks://overview",
        filename: "overview.md",
        title: "Overview",
        description: "An overview of how to use Zenblocks",
        mimeType: "text/markdown",
    },
    {
        uri: "zenblocks://important",
        filename: "important.md",
        title: "Important Information",
        description: "Key details about using Zenblocks",
        mimeType: "text/markdown",
    },
    {
        uri: "zenblocks://examples",
        filename: "examples.md",
        title: "Examples",
        description: "Code examples for using Zenblocks",
        mimeType: "text/markdown",
    },
    {
        uri: "zenblocks://documentation",
        filename: "documentation.md",
        title: "Documentation",
        description: "Comprehensive guide to using Zenblocks",
        mimeType: "text/markdown",
    },
];
function findResourceMapping(uri) {
    return exports.resourceMappings.find(function (mapping) { return mapping.uri === uri; });
}
function getAllResourceMappings() {
    return exports.resourceMappings;
}
