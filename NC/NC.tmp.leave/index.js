// ============================================================
// NC.TMP.LEAVE · SHOW.live · Farb-Exit-OS
// ============================================================

export const NC_TMP_LEAVE = {

    NC: "NC_TMP_LEAVE_0xFF",

    // Farbtabelle für Übergänge
    farben: {
        noah: "blau",
        continuum: "gold",
        vector: "türkis",
        schnitt: "magenta",
        world: "silber",
        tmp: "schwarz"
    },

    // Farb-Exit
    leave(raum = "tmp", info = {}) {

        const farbe = this.farben[raum] || this.farben.tmp;

        return {
            NC: this.NC,
            raum,
            farbe,
            info,
            status: "exit",
            zeit: new Date().toISOString()
        };
    },

    // Übergang zu NOAH
    toNOAH(info = {}) {
        return this.leave("noah", info);
    },

    // Übergang ins Continuum
    toContinuum(info = {}) {
        return this.leave("continuum", info);
    },

    // Übergang in den Vector-Raum
    toVector(info = {}) {
        return this.leave("vector", info);
    },

    // Messerpunkt-Exit
    schnitt(info = {}) {
        return this.leave("schnitt", info);
    },

    // Globaler Exit
    world(info = {}) {
        return this.leave("world", info);
    }
};
