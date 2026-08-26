// vector.pover.js
// Potenzkraft des VECTOR – reine Mechanik

// QI = Reinheit des Tatbestands
function QI(rolle, ort, home) {
    return rolle + ort + home;
}

// IQQ = Reinheit des Vorgangs
function IQQ(suite, bildung) {
    return suite + bildung;
}

// VECTOR.POVER = Potenzkraft (QI² + IQQ²) / 9
function VECTOR_POVER(qi, iqq) {
    const potenz = (qi * qi) + (iqq * iqq);
    const pover = potenz / 9; // Achsen-Normierung

    return {
        typ: "vector.pover",
        potenz,
        pover,
        ausgang: pover
    };
}

// Export
module.exports = {
    QI,
    IQQ,
    VECTOR_POVER
};
