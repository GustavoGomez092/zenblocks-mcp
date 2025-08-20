"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createResources = void 0;
var fileReader_js_1 = require("../utils/fileReader.js");
var resourceMappings_js_1 = require("./resourceMappings.js");
var createResources = function (server) {
    var mappings = (0, resourceMappings_js_1.getAllResourceMappings)();
    // Register all resources based on mappings
    for (var _i = 0, mappings_1 = mappings; _i < mappings_1.length; _i++) {
        var mapping = mappings_1[_i];
        server.registerResource("zenblocks:resources:".concat(mapping.filename.replace(".md", "")), mapping.uri, {
            title: mapping.title,
            description: mapping.description,
            mimetype: mapping.mimeType,
        }, function (uri) { return __awaiter(void 0, void 0, void 0, function () {
            var content, resourceMapping, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        content = "";
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 5, , 6]);
                        resourceMapping = (0, resourceMappings_js_1.findResourceMapping)(uri.href);
                        if (!resourceMapping) return [3 /*break*/, 3];
                        return [4 /*yield*/, (0, fileReader_js_1.readFileFromDocs)(resourceMapping.filename)];
                    case 2:
                        content = _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        content = "Resource not found.";
                        _a.label = 4;
                    case 4: return [3 /*break*/, 6];
                    case 5:
                        error_1 = _a.sent();
                        console.error("Error reading resource:", error_1);
                        content = "Error loading resource content.";
                        return [3 /*break*/, 6];
                    case 6: return [2 /*return*/, {
                            contents: [
                                {
                                    uri: uri.href,
                                    text: content,
                                    mimeType: "text/markdown",
                                },
                            ],
                        }];
                }
            });
        }); });
    }
};
exports.createResources = createResources;
