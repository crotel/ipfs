export = IpnsPublisher;
declare class IpnsPublisher {
    /**
     * @param {import('ipfs-core-types/src/utils').BufferStore} routing
     * @param {import('interface-datastore').Datastore} datastore
     */
    constructor(routing: import('ipfs-core-types/src/utils').BufferStore, datastore: import('interface-datastore').Datastore);
    _routing: import("ipfs-core-types/src/utils").BufferStore;
    _datastore: import("interface-datastore/dist/src/types").Datastore;
    /**
     * Publish record with a eol
     *
     * @param {PrivateKey} privKey
     * @param {Uint8Array} value
     * @param {number} lifetime
     */
    publishWithEOL(privKey: PrivateKey, value: Uint8Array, lifetime: number): Promise<import("ipns/dist/src/types").IPNSEntry>;
    /**
     * Accepts a keypair, as well as a value (ipfsPath), and publishes it out to the routing system
     *
     * @param {PrivateKey} privKey
     * @param {Uint8Array} value
     */
    publish(privKey: PrivateKey, value: Uint8Array): Promise<import("ipns/dist/src/types").IPNSEntry>;
    /**
     * @param {IPNSEntry} record
     * @param {PeerId} peerId
     */
    _putRecordToRouting(record: IPNSEntry, peerId: PeerId): Promise<import("ipns/dist/src/types").IPNSEntry>;
    /**
     * @param {Key} key
     * @param {IPNSEntry} entry
     */
    _publishEntry(key: Key, entry: IPNSEntry): Promise<void>;
    /**
     * @param {Key} key
     * @param {PublicKey} publicKey
     */
    _publishPublicKey(key: Key, publicKey: PublicKey): Promise<void>;
    /**
     * Returns the record this node has published corresponding to the given peer ID.
     *
     * If `checkRouting` is true and we have no existing record, this method will check the routing system for any existing records.
     *
     * @param {PeerId} peerId
     * @param {object} options
     * @param {boolean} [options.checkRouting]
     */
    _getPublished(peerId: PeerId, options?: {
        checkRouting?: boolean | undefined;
    }): Promise<import("ipns/dist/src/types").IPNSEntry>;
    /**
     * @param {Uint8Array} data
     */
    _unmarshalData(data: Uint8Array): import("ipns/dist/src/types").IPNSEntry;
    /**
     * @param {PrivateKey} privKey
     * @param {Uint8Array} value
     * @param {number} lifetime
     * @param {PeerId} peerId
     */
    _updateOrCreateRecord(privKey: PrivateKey, value: Uint8Array, lifetime: number, peerId: PeerId): Promise<{
        value: Uint8Array;
        signature: Uint8Array;
        validityType: number;
        validity: Uint8Array;
        sequence: bigint;
        ttl: bigint;
        signatureV2: Uint8Array;
        data: Uint8Array;
    }>;
}
declare namespace IpnsPublisher {
    export { defaultRecordLifetime, PrivateKey, PublicKey, IPNSEntry };
}
type PrivateKey = import('libp2p-crypto').PrivateKey;
type IPNSEntry = import('ipns').IPNSEntry;
import PeerId = require("peer-id");
import { Key } from "interface-datastore";
type PublicKey = import('libp2p-crypto').PublicKey;
declare const defaultRecordLifetime: number;
//# sourceMappingURL=publisher.d.ts.map