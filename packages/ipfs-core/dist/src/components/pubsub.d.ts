declare function _exports({ network, config }: {
    network: import('../types').NetworkService;
    config?: import("ipfs-core-types/src/config").Config | undefined;
}): {
    subscribe: (topic: string, handler: import("ipfs-core-types/src/pubsub").MessageHandlerFn, options?: any) => Promise<void>;
    unsubscribe: (topic: string, handler: import("ipfs-core-types/src/pubsub").MessageHandlerFn, options?: any) => Promise<void>;
    publish: (topic: string, data: Uint8Array, options?: any) => Promise<void>;
    ls: (options?: any) => Promise<string[]>;
    peers: (topic: string, options?: any) => Promise<string[]>;
};
export = _exports;
//# sourceMappingURL=pubsub.d.ts.map