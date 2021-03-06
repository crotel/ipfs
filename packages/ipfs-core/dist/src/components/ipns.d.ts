export = IPNSAPI;
/**
 * @typedef {import('libp2p-crypto').PrivateKey} PrivateKey
 *
 * @typedef {Object} ExperimentalOptions
 * @property {boolean} [ipnsPubsub]
 *
 * @typedef {Object} LibP2POptions
 * @property {DHTConfig} [config]
 *
 * @typedef {Object} DHTConfig
 * @property {boolean} [enabled]
 */
declare class IPNSAPI {
    /**
     * @param {Object} options
     * @param {string} options.pass
     * @param {boolean} [options.offline]
     * @param {LibP2POptions} [options.libp2p]
     * @param {ExperimentalOptions} [options.EXPERIMENTAL]
     */
    constructor(options?: {
        pass: string;
        offline?: boolean | undefined;
        libp2p?: LibP2POptions | undefined;
        EXPERIMENTAL?: ExperimentalOptions | undefined;
    });
    options: {
        pass: string;
        offline?: boolean | undefined;
        libp2p?: LibP2POptions | undefined;
        EXPERIMENTAL?: ExperimentalOptions | undefined;
    };
    /** @type {IPNS | null} */
    offline: IPNS | null;
    /** @type {IPNS | null} */
    online: IPNS | null;
    getIPNS(): IPNS;
    get routing(): import("ipfs-core-types/src/utils").BufferStore;
    /**
     * Activates IPNS subsystem in an ofline mode. If it was started once already
     * it will throw an exception.
     *
     * This is primarily used for offline ipns modifications, such as the
     * initializeKeyspace feature.
     *
     * @param {Object} config
     * @param {import('ipfs-repo')} config.repo
     * @param {import('peer-id')} config.peerId
     * @param {import('libp2p/src/keychain')} config.keychain
     */
    startOffline({ repo, peerId, keychain }: {
        repo: import('ipfs-repo');
        peerId: import('peer-id');
        keychain: import('libp2p/src/keychain');
    }): void;
    /**
     * @param {Object} config
     * @param {import('libp2p')} config.libp2p
     * @param {import('ipfs-repo')} config.repo
     * @param {import('peer-id')} config.peerId
     * @param {import('libp2p/src/keychain')} config.keychain
     */
    startOnline({ libp2p, repo, peerId, keychain }: {
        libp2p: import('libp2p');
        repo: import('ipfs-repo');
        peerId: import('peer-id');
        keychain: import('libp2p/src/keychain');
    }): Promise<void>;
    stop(): Promise<void>;
    /**
     * @param {PrivateKey} privKey
     * @param {Uint8Array} value
     * @param {number} lifetime
     */
    publish(privKey: PrivateKey, value: Uint8Array, lifetime: number): Promise<{
        name: string;
        value: Uint8Array;
    }>;
    /**
     *
     * @param {string} name
     * @param {*} [options]
     */
    resolve(name: string, options?: any): Promise<any>;
    /**
     * @param {PrivateKey} privKey
     * @param {Uint8Array} value
     */
    initializeKeyspace(privKey: PrivateKey, value: Uint8Array): Promise<{
        name: string;
        value: Uint8Array;
    }>;
}
declare namespace IPNSAPI {
    export { PrivateKey, ExperimentalOptions, LibP2POptions, DHTConfig };
}
type LibP2POptions = {
    config?: DHTConfig | undefined;
};
type ExperimentalOptions = {
    ipnsPubsub?: boolean | undefined;
};
import IPNS = require("../ipns");
type PrivateKey = import('libp2p-crypto').PrivateKey;
type DHTConfig = {
    enabled?: boolean | undefined;
};
//# sourceMappingURL=ipns.d.ts.map