export interface ResourceMapping {
    uri: string;
    filename: string;
    title: string;
    description: string;
    mimeType: string;
}
export declare const resourceMappings: ResourceMapping[];
export declare function findResourceMapping(uri: string): ResourceMapping | undefined;
export declare function getAllResourceMappings(): ResourceMapping[];
//# sourceMappingURL=resourceMappings.d.ts.map