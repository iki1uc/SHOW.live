// vector.ankunft.js
// Der Ankunfts-Vektor – Endpunkt der Bewegung

// QI = Reinheit des Tatbestands
function QI(rolle, ort, home) {
    return rolle + ort + home;
}

// IQQ = Reinheit des Vorgangs
function IQQ(suite, bildung) {
    return suite + bildung;
}

// VECTOR.ENERGIE = rohe Kraft
function VECTOR_ENERGIE(qi, iqq) {
    return (qi * 0.6) + (iqq * 0.4);
}

// VECTOR.POVER = Potenzkraft
function VECTOR_POVER(qi, iqq) {
    return ((qi * qi) + (iqq * iqq)) / 9;
}

// VECTOR.SCHLAG = Momentimpuls
function VECTOR_SCHLAG(qi, iqq) {
    return (qi * iqq) / 9;
}

// VECTOR.ANKUNFT = Endpunkt der Bewegung
function VECTOR_ANKUNFT(qi, iqq) {
    const energie = VECTOR_ENERGIE(qi, iqq);
    const pover = VECTOR_POVER(qi, iqq);
    const schlag = VECTOR_SCHLAG(qi, iqq);

    const ankunft = (qi + iqq + energie + pover + schlag) / 9;

    return {
        typ: "vector.ankunft",
        energie,
        pover,
        schlag,
        ankunft,
        ausgang: ankunft
    };
}

// Export
module.exports = {
    QI,
    IQQ,
    VECTOR_ENERGIE,
    VECTOR_POVER,
    VECTOR_SCHLAG,
    VECTOR_ANKUNFT
};
