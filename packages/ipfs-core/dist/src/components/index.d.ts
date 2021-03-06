export = IPFS;
/**
 * @typedef {import('../types').Options} Options
 * @typedef {import('../types').Print} Print
 * @typedef {import('./storage')} StorageAPI
 */
declare class IPFS {
    /**
     * @param {Options} options
     */
    static create(options?: Options): Promise<IPFS>;
    /**
     * @param {Object} config
     * @param {Print} config.print
     * @param {StorageAPI} config.storage
     * @param {Options} config.options
     */
    constructor({ print, storage, options }: {
        print: Print;
        storage: StorageAPI;
        options: Options;
    });
    preload: import("../types").Preload;
    name: NameAPI;
    ipld: import("ipld");
    ipns: IPNSAPI;
    pin: PinAPI;
    resolve: (path: string, opts?: any) => Promise<string>;
    block: BlockAPI;
    refs: ((ipfsPath: import("ipfs-core-types/src/utils").IPFSPath | import("ipfs-core-types/src/utils").IPFSPath[], options?: import("ipfs-core-types/src/refs").RefsOptions | undefined) => AsyncIterable<import("ipfs-core-types/src/refs").RefsResult>) & {
        local: (options?: import("ipfs-core-types/src/utils").AbortOptions | undefined) => AsyncIterable<import("ipfs-core-types/src/refs").RefsResult>;
    };
    start: () => Promise<void>;
    stop: (options?: any) => Promise<void>;
    dht: {
        get: (key: Uint8Array, options?: any) => Promise<Uint8Array>;
        put: (key: Uint8Array, value: Uint8Array, options?: any) => AsyncIterable<import("ipfs-core-types/src/dht").DHTQueryMessage>;
        findProvs: (cid: import("cids"), options?: any) => AsyncIterable<import("ipfs-core-types/src/dht").PeerResult>;
        findPeer: (peerId: string, options?: any) => Promise<import("ipfs-core-types/src/dht").PeerResult>;
        provide: (cid: import("cids") | import("cids")[], options?: any) => AsyncIterable<import("ipfs-core-types/src/dht").DHTQueryMessage>;
        query: (peerId: string, options?: any) => AsyncIterable<import("ipfs-core-types/src/dht").PeerResult>;
    };
    pubsub: {
        subscribe: (topic: string, handler: import("ipfs-core-types/src/pubsub").MessageHandlerFn, options?: any) => Promise<void>;
        unsubscribe: (topic: string, handler: import("ipfs-core-types/src/pubsub").MessageHandlerFn, options?: any) => Promise<void>;
        publish: (topic: string, data: Uint8Array, options?: any) => Promise<void>;
        ls: (options?: any) => Promise<string[]>;
        peers: (topic: string, options?: any) => Promise<string[]>;
    };
    dns: (domain: string, options?: any) => Promise<string>;
    isOnline: () => boolean;
    id: (options?: any) => Promise<import("ipfs-core-types/src/root").IDResult>;
    version: (_options?: any) => Promise<import("ipfs-core-types/src/root").VersionResult>;
    bitswap: BitswapAPI;
    bootstrap: BootstrapAPI;
    config: {
        getAll: (options?: any) => Promise<import("ipfs-core-types/src/config").Config>;
        get: (key: string, options: any) => Promise<string | object>;
        set: (key: string, value: any, options: any) => Promise<void>;
        replace: (value: import("ipfs-core-types/src/config").Config, options: any) => Promise<void>;
        profiles: {
            apply: (profileName: string, options?: any) => Promise<import("ipfs-core-types/src/config/profiles").ProfilesApplyResult>;
            list: (_options: any) => Promise<import("ipfs-core-types/src/config/profiles").Profile[]>;
        };
    };
    ping: (peerId: string, options?: any) => AsyncIterable<import("ipfs-core-types/src/root").PingResult>;
    add: (entry: import("ipfs-core-types/src/utils").ImportCandidate, options?: any) => Promise<import("ipfs-core-types/src/root").AddResult>;
    addAll: (source: import("ipfs-core-types/src/utils").ImportCandidateStream, options?: any) => AsyncIterable<import("ipfs-core-types/src/root").AddResult>;
    cat: (ipfsPath: import("ipfs-core-types/src/utils").IPFSPath, options?: any) => AsyncIterable<Uint8Array>;
    get: (ipfsPath: import("ipfs-core-types/src/utils").IPFSPath, options?: any) => AsyncIterable<import("ipfs-core-types/src/root").IPFSEntry>;
    ls: (ipfsPath: import("ipfs-core-types/src/utils").IPFSPath, options?: any) => AsyncIterable<import("ipfs-core-types/src/root").IPFSEntry>;
    dag: DagAPI;
    files: import("ipfs-core-types/src/files").API<any>;
    key: KeyAPI;
    object: ObjectAPI;
    repo: RepoAPI;
    stats: StatsAPI;
    swarm: SwarmAPI;
    commands: () => Promise<never>;
    diag: {
        cmds: () => Promise<never>;
        net: () => Promise<never>;
        sys: () => Promise<never>;
    };
    log: {
        level: () => Promise<never>;
        ls: () => Promise<never>;
        tail: () => AsyncGenerator<never, never, unknown>;
    };
    mount: () => Promise<never>;
    /**
     * `IPFS.create` will do the initialization. Keep this around for backwards
     * compatibility.
     *
     * @deprecated
     */
    init(): Promise<void>;
}
declare namespace IPFS {
    export { Options, Print, StorageAPI };
}
import NameAPI = require("./name");
import IPNSAPI = require("./ipns");
import PinAPI = require("./pin");
import BlockAPI = require("./block");
import BitswapAPI = require("./bitswap");
import BootstrapAPI = require("./bootstrap");
import DagAPI = require("./dag");
import KeyAPI = require("./key");
import ObjectAPI = require("./object");
import RepoAPI = require("./repo");
import StatsAPI = require("./stats");
import SwarmAPI = require("./swarm");
type Options = import('../types').Options;
type Print = import('../types').Print;
type StorageAPI = import('./storage');
//# sourceMappingURL=index.d.ts.map