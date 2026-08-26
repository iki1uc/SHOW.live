// ============================================================
// VECTOR.ENERGIE · SHOW.live · Etage/Korridor/Messer/Continuum
// ============================================================

export const VECTOR = {

    // Energie pro Etage
    etage(level) {
        return level * 3.81; 
    },

    // Energiefluss im Korridor
    korridor(code) {
        return code ** 2;
    },

    // Messerpunkt: Schneidet Werte für Übergänge
    schnittpunkt(value) {
        return value / 3.9;
    },

    // Continuumfluss: Zeit-Raum-Verstärkung
    continuum(flow) {
        return flow * 1.14;
    },

    // ON3-Bindung: Quadrisierung, Vektorisierung, Mind-Flow
    on3(v) {
        return {
            quad: v * v,
            vec: Math.sqrt(v),
            mind: v / 3.81
        };
    }
};
