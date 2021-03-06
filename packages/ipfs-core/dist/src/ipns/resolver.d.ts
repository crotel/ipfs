export = IpnsResolver;
declare class IpnsResolver {
    /**
     * @param {import('ipfs-core-types/src/utils').BufferStore} routing
     */
    constructor(routing: import('ipfs-core-types/src/utils').BufferStore);
    _routing: import("ipfs-core-types/src/utils").BufferStore;
    /**
     * @param {string} name
     * @param {object} options
     * @param {boolean} [options.recursive]
     */
    resolve(name: string, options?: {
        recursive?: boolean | undefined;
    }): Promise<string>;
    /**
     * Recursive resolver according to the specified depth
     *
     * @param {string} name
     * @param {number} depth
     * @returns {Promise<string>}
     */
    resolver(name: string, depth: number): Promise<string>;
    /**
     * Resolve ipns entries from the provided routing
     *
     * @param {string} name
     */
    _resolveName(name: string): Promise<string>;
    /**
     * Validate a resolved record
     *
     * @param {PeerId} peerId
     * @param {import('ipns').IPNSEntry} ipnsEntry
     */
    _validateRecord(peerId: PeerId, ipnsEntry: import('ipns').IPNSEntry): Promise<string>;
}
import PeerId = require("peer-id");
//# sourceMappingURL=resolver.d.ts.map