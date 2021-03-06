declare function _exports({ network }: {
    network: import('../types').NetworkService;
}): (peerId: string, options?: any) => AsyncIterable<import("ipfs-core-types/src/root").PingResult>;
export = _exports;
/**
 * Note that not all ping response objects are "pongs".
 * A "pong" message can be identified by a truthy success property and an empty
 * text property. Other ping responses are failures or status updates.
 */
export type Packet = Pong | PingFailure | StatusUpdate;
export type Pong = {
    success: true;
    time: number;
    text: '';
};
export type PingFailure = {
    success: false;
    time: number;
    text: string;
};
export type StatusUpdate = {
    success: true;
    time: 0;
    text: string;
};
export type PingOptions = PingSettings & AbortOptions;
export type PingSettings = {
    /**
     * - The number of ping messages to send
     */
    count?: number | undefined;
};
export type AbortOptions = import('ipfs-core-types/src/utils').AbortOptions;
//# sourceMappingURL=ping.d.ts.map