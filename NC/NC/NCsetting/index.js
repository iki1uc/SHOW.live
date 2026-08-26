// ============================================================
// NC.SETTING · SHOW.live · Konfigurations-OS
// ============================================================

export const NCSETTING = {

    NC: "NC_SETTING_22x7",

    farben: {
        noah: "blau",
        continuum: "gold",
        vector: "türkis",
        schnitt: "magenta",
        world: "silber",
        tmp: "schwarz"
    },

    // Globale Settings
    settings: {
        debug: false,
        speed: 1.0,
        flowBoost: 1.14,
        vectorBoost: 3.81,
        mode: "normal"
    },

    // Setzt einen Wert
    set(key, value, raum = "world") {

        const farbe = this.farben[raum] || this.farben.tmp;
        this.settings[key] = value;

        return {
            NC: this.NC,
            key,
            value,
            raum,
            farbe,
            status: "gesetzt",
            zeit: new Date().toISOString()
        };
    },

    // Holt einen Wert
    get(key) {
        return {
            NC: this.NC,
            key,
            value: this.settings[key],
            zeit: new Date().toISOString()
        };
    },

    // Aktiviert Debug-Modus
    debug(on = true) {
        this.settings.debug = on;
        return this.set("debug", on, "world");
    },

    // Setzt Flow-Modus
    flowMode(boost = 1.14) {
        return this.set("flowBoost", boost, "continuum");
    },

    // Setzt Vector-Modus
    vectorMode(boost = 3.81) {
        return this.set("vectorBoost", boost, "vector");
    },

    // Setzt Messerpunkt-Modus
    schnittMode(mode = "sharp") {
        return this.set("mode", mode, "schnitt");
    }
};
