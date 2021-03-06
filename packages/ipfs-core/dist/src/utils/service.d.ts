export = Service;
/**
 * @template T
 * @typedef {import('ipfs-core-types/src/utils').Await<T>} Await
 */
/**
 * @template {(options:any) => any} T
 * @typedef {Parameters<T>[0]} Options
 */
/**
 * @template {(options:any) => any} T
 * @typedef {ReturnType<T> extends ? Promise<infer U> ? U : ReturnType<T>} State
 */
/**
 * Represents service state which can be not started in which case
 * it is instance of `Error`. Pending in which case it's promise or
 * ready in which case it is the value itself.
 *
 * @template T
 * @typedef {{ status: 'stopped' }
 * | { status: 'starting', ready: Await<T> }
 * | { status: 'started', value: T }
 * | { status: 'stopping', ready: Await<void> }
 * } ServiceState
 */
/**
 * @typedef {import('ipfs-core-types/src/utils').AbortOptions} AbortOptions
 */
/**
 * @template Options, T
 *
 * Allows you to create a handle to service that can be started or
 * stopped. It enables defining components that need to use service
 * functionality before service is started.
 *
 */
declare class Service<Options, T> {
    /**
     * Takes `activation` function that takes `options` and (async) returns
     * an implementation.
     *
     * @template {(options:any) => Await<any>} T
     *
     * @param {Object} config
     * @param {T} config.start
     * @param {(state:State<T>) => Await<void>} [config.stop]
     * @returns {Service<Parameters<T>[0], State<T>>}
     */
    static create<T_1 extends (options: any) => Await<any>>({ start, stop }: {
        start: T_1;
        stop?: ((state: State<T_1>) => Await<void>) | undefined;
    }): import("./service")<Parameters<T_1>[0], State<T_1>>;
    /**
     * Starts the service (by running actiavtion function). Will (async) throw
     * unless service is stopped.
     *
     * @template Options, T
     * @param {Service<Options, T>} service
     * @param {Options} options
     * @returns {Promise<T>}
     */
    static start<Options_1, T_2>(service: import("./service")<Options_1, T_2>, options: Options_1): Promise<T_2>;
    /**
     * Stops the service by executing deactivation. If service is stopped
     * or is stopping this is noop. If service is starting up when called
     * it will await for start to complete and then retry stop afterwards.
     * This may (async) throw if `deactivate` does.
     *
     * @template T
     * @param {Service<any, T>} service
     * @returns {Promise<void>}
     */
    static stop<T_3>(service: import("./service")<any, T_3>): Promise<void>;
    /**
     * @template T
     * @param {Service<any, T>} service
     * @returns {T|null}
     */
    static try<T_4>({ state }: import("./service")<any, T_4>): T_4 | null;
    /**
     * Unwraps state and returns underlying value. If state is in idle state it
     * will throw an error. If state is pending it will wait and return the
     * result or throw on failure. If state is ready returns result.
     *
     * @template T
     * @param {Service<any, T>} service
     * @param {AbortOptions} [options]
     * @returns {Promise<T>}
     */
    static use<T_5>({ state }: import("./service")<any, T_5>, options?: import("ipfs-core-types/src/utils").AbortOptions | undefined): Promise<T_5>;
    /**
     * @private
     * @param {Service<any, any>} service
     * @returns {never}
     */
    private static panic;
    /**
     * Takes `activation` function that takes `options` and (async) returns
     * an implementation.
     *
     * @private
     * @param {(options:Options) => Await<T>} activate
     * @param {(state:T) => Await<void>} [deactivate]
     */
    private constructor();
    activate: (options: Options) => Await<T>;
    deactivate: ((state: T) => Await<void>) | undefined;
    /**
     * A state machine for this service.
     *
     * @private
     * @type {ServiceState<T>}
     */
    private state;
    /**
     * Allows you to asynchronously obtain service implementation. If service
     * is starting it will await for completion. If service is stopped or stopping
     * this will (async) throw exception. This allows components that need to use
     * this service convenient API to do it.
     *
     * @param {AbortOptions} [options] - Abort options.
     * @returns {Promise<T>}
     */
    use(options?: import("ipfs-core-types/src/utils").AbortOptions | undefined): Promise<T>;
    /**
     * @returns {T|null}
     */
    try(): T | null;
}
declare namespace Service {
    export { Await, Options, State, ServiceState, AbortOptions };
}
type Await<T> = import('ipfs-core-types/src/utils').Await<T>;
type State<T extends (options: any) => any> = ReturnType<T> extends Promise<infer U> | null ? U : ReturnType<T>;
type Options<T extends (options: any) => any> = Parameters<T>[0];
/**
 * Represents service state which can be not started in which case
 * it is instance of `Error`. Pending in which case it's promise or
 * ready in which case it is the value itself.
 */
type ServiceState<T> = {
    status: 'stopped';
} | {
    status: 'starting';
    ready: Await<T>;
} | {
    status: 'started';
    value: T;
} | {
    status: 'stopping';
    ready: Await<void>;
};
type AbortOptions = import('ipfs-core-types/src/utils').AbortOptions;
//# sourceMappingURL=service.d.ts.map