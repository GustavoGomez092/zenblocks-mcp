export interface ToolMapping {
    name: string;
    filename: string;
    title: string;
    description: string;
    mimeType: string;
}
export declare const toolMappings: ToolMapping[];
export declare function findToolMapping(name: string): ToolMapping | undefined;
export declare function getAllToolMappings(): ToolMapping[];
//# sourceMappingURL=toolsMapping.d.ts.map