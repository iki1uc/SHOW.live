// vector.schlag.js
// Impuls-Vektor – der Moment-Schlag
// PICASSO integriert · iki1uc · industry-6.0

import { PICASSO } from './PICASSO.js';

// QI = Reinheit des Tatbestands
export function QI(rolle, ort, home) {
    const base = rolle + ort + home;
    const p = PICASSO.run(base);
    return { base, picasso: p };
}

// IQQ = Reinheit des Vorgangs
export function IQQ(suite, bildung) {
    const base = suite + bildung;
    const p = PICASSO.run(base);
    return { base, picasso: p };
}

// VECTOR.SCHLAG = Momentimpuls (QI * IQQ) / 9
export function VECTOR_SCHLAG(qi, iqq) {
    const impuls = (qi.base * iqq.base) / 9;
    const p = PICASSO.run(impuls);

    return {
        typ: "vector.schlag",
        impuls,
        ausgang: impuls,
        picasso: p
    };
}
