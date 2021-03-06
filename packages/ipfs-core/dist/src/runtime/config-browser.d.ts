declare function _exports(): {
    Addresses: {
        Swarm: never[];
        Announce: never[];
        NoAnnounce: never[];
        API: string;
        Gateway: string;
        RPC: string;
        Delegates: string[];
    };
    Discovery: {
        MDNS: {
            Enabled: boolean;
            Interval: number;
        };
        webRTCStar: {
            Enabled: boolean;
        };
    };
    Bootstrap: string[];
    Pubsub: {
        Enabled: boolean;
    };
    Swarm: {
        ConnMgr: {
            LowWater: number;
            HighWater: number;
        };
        DisableNatPortMap: boolean;
    };
    Routing: {
        Type: string;
    };
};
export = _exports;
//# sourceMappingURL=config-browser.d.ts.map