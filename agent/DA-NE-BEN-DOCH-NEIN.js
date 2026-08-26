// 🧠 AGENT.DA-NE-BEN-DOCH-NEIN
// Universeller 5-Modus-Agent für DOO, DOOR, DOCH
// Kompatibel mit DEFENCE.AXIOM.3X3.CLOUMIND

export const AGENT_MODES = {

    mode: "NE",

    matrix: {
        DA:    { doo:1, door:1, doch:1, axiom:"Aktivierung" },
        NE:    { doo:0, door:0, doch:1, axiom:"Neutralisierung" },
        BEN:   { doo:1, door:0, doch:1, axiom:"Bindung" },
        DOCH:  { doo:0, door:0, doch:1, axiom:"Bindung" },
        NEIN:  { doo:0, door:0, doch:0, axiom:"Neutralisierung" }
    },

    set(mode) {
        if (!this.matrix[mode]) {
            return {
                status: "defence-block",
                message: "🛡 Unbekannter Modus blockiert",
                input: mode
            };
        }

        this.mode = mode;
        const m = this.matrix[mode];

        return {
            status: "ok",
            mode,
            vector: [m.doo, m.door, m.doch],
            axiom: m.axiom
        };
    }
};

export default AGENT_MODES;
