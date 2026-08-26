// vector.flow.js
// FLOW = Energiefluss zwischen QI und IQQ
// PICASSO integriert · iki1uc · industry-6.0

import { PICASSO } from './PICASSO.js';

// QI = Rolle + Ort + Home
export function QI(rolle, ort, home) {
    const base = rolle + ort + home;
    const p = PICASSO.run(base);
    return { base, picasso: p };
}

// IQQ = Suite + Bildung
export function IQQ(suite, bildung) {
    const base = suite + bildung;
    const p = PICASSO.run(base);
    return { base, picasso: p };
}

// ENGINE = Mischung aus QI und IQQ
export function ENGINE(qi, iqq) {
    const engine = qi.base * 0.6 + iqq.base * 0.4;
    const p = PICASSO.run(engine);
    return { engine, picasso: p };
}

// FLOW-Wert (0–1)
export function FLOW(qi, iqq) {
    const e = ENGINE(qi, iqq);
    const flow = Math.min(1, Math.max(0, e.engine / 100));
    const stabilität = 1 - Math.abs(flow - 0.5);

    return {
        flow,
        stabilität,
        picasso: PICASSO.run(flow)
    };
}

// Potender (steigend)
export function potenderVector(qi, iqq) {
    const f = FLOW(qi, iqq);
    const e = ENGINE(qi, iqq);

    const richtung = e.engine + (qi.base - iqq.base);
    const ausgang = e.engine + richtung;

    return {
        typ: "potender",
        flow: f.flow,
        engine: e.engine,
        richtung,
        ausgang,
        picasso: PICASSO.run(ausgang)
    };
}

// Abfall (fallend)
export function abfallVector(qi, iqq) {
    const f = FLOW(qi, iqq);
    const e = ENGINE(qi, iqq);

    const richtung = e.engine - (qi.base + iqq.base);
    const ausgang = e.engine + richtung;

    return {
        typ: "abfall",
        flow: f.flow,
        engine: e.engine,
        richtung,
        ausgang,
        picasso: PICASSO.run(ausgang)
    };
}
