export = PubSubAPI;
declare class PubSubAPI {
    /**
     * @param {Object} config
     * @param {import('../../ipns')} config.ipns
     * @param {import('../../../types').Options} config.options
     */
    constructor({ ipns, options }: {
        ipns: import('../../ipns');
        options: import('../../../types').Options;
    });
    cancel: (name: string, options?: any) => Promise<import("ipfs-core-types/src/name/pubsub").PubsubCancelResult>;
    state: (_options?: any) => Promise<import("ipfs-core-types/src/name/pubsub").PubsubStateResult>;
    subs: (options?: any) => Promise<string[]>;
}
//# sourceMappingURL=index.d.ts.map