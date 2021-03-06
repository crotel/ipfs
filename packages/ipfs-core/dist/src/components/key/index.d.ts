export = KeyAPI;
/**
 * @typedef {import('libp2p/src/keychain')} Keychain
 */
declare class KeyAPI {
    /**
     * @param {Object} config
     * @param {Keychain} config.keychain
     */
    constructor({ keychain }: {
        keychain: Keychain;
    });
    gen: (name: string, options?: any) => Promise<import("ipfs-core-types/src/key").Key>;
    list: (options?: any) => Promise<import("ipfs-core-types/src/key").Key[]>;
    rm: (name: string, options?: any) => Promise<import("ipfs-core-types/src/key").Key>;
    rename: (oldName: string, newName: string, options?: any) => Promise<import("ipfs-core-types/src/key").RenameKeyResult>;
    export: (name: string, password: string, options?: any) => Promise<string>;
    import: (name: string, pem: string, password: string, options?: any) => Promise<import("ipfs-core-types/src/key").Key>;
    info: (name: string, options?: any) => Promise<import("ipfs-core-types/src/key").Key>;
}
declare namespace KeyAPI {
    export { Keychain };
}
type Keychain = import('libp2p/src/keychain');
//# sourceMappingURL=index.d.ts.map