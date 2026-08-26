// ============================================================
// NChoch81 · NC.respo · Etage 81 · Tiefen-Responder (NEU)
// ============================================================

export const NChoch81 = (info = {}) => {

    return {
        NC: "NC_HOCH_81",
        etage: 81,
        farbe: "blau",
        impuls: "tief",
        info,
        zeit: new Date().toISOString()
    };
};
