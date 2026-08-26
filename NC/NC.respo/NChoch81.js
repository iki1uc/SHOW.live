// ============================================================
// NChoch81 · NC.respo · Etage 81 · Tiefen-Responder
// ============================================================

export const NChoch81 = {

    NC: "NC_HOCH_81",

    farbe: "blau",

    respo(info = {}) {
        return {
            NC: this.NC,
            etage: 81,
            farbe: this.farbe,
            impuls: "tief",
            info,
            zeit: new Date().toISOString()
        };
    }
};
