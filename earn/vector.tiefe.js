// vector.tiefe.js
// Entschluss-Axiom – Tiefen-Engine
// PICASSO integriert · iki1uc · industry-6.0

import { PICASSO } from './PICASSO.js';

// VECTOR.TRIEB = Impuls-Axiom (Höhe)
export function VECTOR_TRIEB(qi, iqq) {
    const base = qi - iqq;
    const p = PICASSO.run(base);
    return { base, picasso: p };
}

// VECTOR.ENGINE = Kraft-Axiom (Breite)
export function VECTOR_ENGINE(qi, iqq) {
    const base = (qi * 0.6) + (iqq * 0.4);
    const p = PICASSO.run(base);
    return { base, picasso: p };
}

// VECTOR.TIEFE = Entschluss-Axiom (Tiefe)
export function VECTOR_TIEFE(qi, iqq) {
    const trieb = VECTOR_TRIEB(qi, iqq);
    const engine = VECTOR_ENGINE(qi, iqq);

    // Tiefe = Entscheidung zwischen Höhe und Breite
    const tiefe = (trieb.base + engine.base) / 2;

    return {
        typ: "vector.tiefe",
        trieb: trieb.base,
        engine: engine.base,
        tiefe,
        ausgang: tiefe,
        picasso: PICASSO.run(tiefe)
    };
}
