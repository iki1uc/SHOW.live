// ============================================================
// NChoch3 · NC.respo · Etage 3 · Schnell-Responder
// ============================================================

export const NChoch3 = {

    NC: "NC_HOCH_3",

    farbe: "türkis",

    respo(info = {}) {
        return {
            NC: this.NC,
            etage: 3,
            farbe: this.farbe,
            impuls: "schnell",
            info,
            zeit: new Date().toISOString()
        };
    }
};
