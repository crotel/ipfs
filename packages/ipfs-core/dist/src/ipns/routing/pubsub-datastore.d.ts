export = IpnsPubsubDatastore;
declare class IpnsPubsubDatastore {
    /**
     * @param {import('libp2p-interfaces/src/pubsub')} pubsub
     * @param {import('interface-datastore').Datastore} localDatastore
     * @param {import('peer-id')} peerId
     */
    constructor(pubsub: import('libp2p-interfaces/src/pubsub'), localDatastore: import('interface-datastore').Datastore, peerId: import('peer-id'));
    /** @type {Record<string, string>} */
    _subscriptions: Record<string, string>;
    /**
     * Modify subscription key to have a proper encoding
     *
     * @param {Uint8Array | string} key
     */
    _handleSubscriptionKey(key: Uint8Array | string): Uint8Array;
    _pubsubDs: PubsubDatastore;
    /**
     * Put a value to the pubsub datastore indexed by the received key properly encoded.
     *
     * @param {Uint8Array} key - identifier of the value.
     * @param {Uint8Array} value - value to be stored.
     */
    put(key: Uint8Array, value: Uint8Array): Promise<void>;
    /**
     * Get a value from the pubsub datastore indexed by the received key properly encoded.
     * Also, the identifier topic is subscribed to and the pubsub datastore records will be
     * updated once new publishes occur.
     *
     * @param {Uint8Array} key - identifier of the value to be obtained.
     */
    get(key: Uint8Array): Promise<Uint8Array | undefined>;
    /**
     * Get pubsub subscriptions related to ipns.
     */
    getSubscriptions(): string[];
    /**
     * Cancel pubsub subscriptions related to ipns.
     *
     * @param {string} name - ipns path to cancel the pubsub subscription.
     */
    cancel(name: string): Promise<{
        canceled: boolean;
    }>;
}
import PubsubDatastore = require("datastore-pubsub");
//# sourceMappingURL=pubsub-datastore.d.ts.map