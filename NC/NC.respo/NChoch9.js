// ============================================================
// NChoch9 · NC.respo · Etage 9 · Mittel-Responder
// ============================================================

export const NChoch9 = {

    NC: "NC_HOCH_9",

    farbe: "gold",

    respo(info = {}) {
        return {
            NC: this.NC,
            etage: 9,
            farbe: this.farbe,
            impuls: "mittel",
            info,
            zeit: new Date().toISOString()
        };
    }
};
