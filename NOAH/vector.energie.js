// vector/energie.js
export const EnergieVector = {

    etage(level) {
        return level * 3.81; // Etagenenergie
    },

    korridor(code) {
        return code ** 2; // Korridorfluss
    },

    schnittpunkt(value) {
        return value / 3.9; // Messerpunkt-Schnitt
    },

    continuum(flow) {
        return flow * 1.14; // Continuumverstärkung
    },

    on3(v) {
        return {
            quad: v * v,
            vec: Math.sqrt(v),
            mind: v / 3.81
        };
    }
};
