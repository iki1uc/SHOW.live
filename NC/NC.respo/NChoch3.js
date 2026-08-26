// ============================================================
// NChoch3 · NC.respo · Etage 3 · Schnell-Responder (NEU)
// ============================================================

export const NChoch3 = (info = {}) => {

    return {
        NC: "NC_HOCH_3",
        etage: 3,
        farbe: "türkis",
        impuls: "schnell",
        info,
        zeit: new Date().toISOString()
    };
};
