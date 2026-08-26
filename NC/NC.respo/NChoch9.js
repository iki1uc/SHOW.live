// ============================================================
// NChoch9 · NC.respo · Etage 9 · Mittel-Responder (NEU)
// ============================================================

export const NChoch9 = (info = {}) => {

    return {
        NC: "NC_HOCH_9",
        etage: 9,
        farbe: "gold",
        impuls: "mittel",
        info,
        zeit: new Date().toISOString()
    };
};
