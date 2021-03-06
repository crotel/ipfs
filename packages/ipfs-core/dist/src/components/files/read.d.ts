declare function _exports(context: MfsContext): (path: import("ipfs-core-types/src/utils").IPFSPath, options?: any) => AsyncIterable<Uint8Array>;
export = _exports;
export type MfsContext = import('./').MfsContext;
export type DefaultOptions = {
    offset: number;
    length: number;
    signal?: AbortSignal | undefined;
    timeout?: number | undefined;
};
//# sourceMappingURL=read.d.ts.map