// ============================================================
// NC · SYNC.ROOM · SHOW.live
// ============================================================

export const SYNC_ROOM = {

    NC: "NC_SYNC_ROOM_0x00",

    init() {
        return {
            NC: this.NC,
            status: "bereit",
            zeit: new Date().toISOString(),
            sync: false
        };
    },

    start(syncCode = 1.14) {
        const stamp = new Date().toISOString();

        return {
            NC: this.NC,
            sync: true,
            syncCode,
            continuum: syncCode * 3.81,
            stamp
        };
    }
};
