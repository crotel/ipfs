export = TLRU;
/**
 * Time Aware Least Recent Used Cache
 *
 * @see https://arxiv.org/pdf/1801.00390
 * @todo move this to ipfs-utils or it's own package
 *
 * @template T
 * @class TLRU
 */
declare class TLRU<T> {
    /**
     * Creates an instance of TLRU.
     *
     * @param {number} maxSize
     */
    constructor(maxSize: number);
    lru: {
        has: (key: string | number) => boolean;
        remove: (key: string | number) => void;
        get: (key: string | number) => any;
        set: (key: string | number, value: any) => void;
        clear: () => void;
    };
    /**
     * Get the value from the a key
     *
     * @param {string} key
     * @returns {T|undefined}
     * @memberof TLoRU
     */
    get(key: string): T | undefined;
    /**
     * Set a key value pair
     *
     * @param {string} key
     * @param {T} value
     * @param {number} ttl - in miliseconds
     * @returns {void}
     */
    set(key: string, value: T, ttl: number): void;
    /**
     * Find if the cache has the key
     *
     * @param {string} key
     * @returns {boolean}
     */
    has(key: string): boolean;
    /**
     * Remove key
     *
     * @param {string} key
     */
    remove(key: string): void;
    /**
     * Clears the cache
     *
     * @memberof TLRU
     */
    clear(): void;
}
//# sourceMappingURL=tlru.d.ts.map