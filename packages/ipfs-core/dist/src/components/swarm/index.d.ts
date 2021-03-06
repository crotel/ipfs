export = SwarmAPI;
declare class SwarmAPI {
    /**
     * @param {Object} config
     * @param {import('../../types').NetworkService} config.network
     */
    constructor({ network }: {
        network: import('../../types').NetworkService;
    });
    addrs: (options?: any) => Promise<import("ipfs-core-types/src/swarm").AddrsResult[]>;
    connect: (addr: string | import("multiaddr").Multiaddr, options?: any) => Promise<void>;
    disconnect: (addr: string | import("multiaddr").Multiaddr, options?: any) => Promise<void>;
    localAddrs: (options?: any) => Promise<import("multiaddr").Multiaddr[]>;
    peers: (options?: any) => Promise<import("ipfs-core-types/src/swarm").PeersResult[]>;
}
//# sourceMappingURL=index.d.ts.map