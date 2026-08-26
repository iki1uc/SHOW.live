// eye.js — END-RUNDE · BEOBACHTUNGS-MODUL
// Das Auge sieht alles, führt nichts aus.

import { NIR } from "./nir.js";
import { NA } from "./na.js";
import { WRAIGHT } from "./wa.js";
import { CAUSE } from "./cause.js";

export function EYE(input){

    // 1. Intent (Nirwana)
    const nir = NIR(input);

    // 2. Absicht + Contínium
    const cont = NA(nir);

    // 3. WRAIGHT-Kernel
    const wr = WRAIGHT(input);

    // 4. Ursache (cause.js)
    const cause = CAUSE(input);

    // 5. Das Auge sieht — aber greift nicht ein
    return {
        pulse: nir.pulse,
        drift: nir.drift,
        sense: nir.sense,
        aura: nir.aura,
        djinn: nir.djinn,
        continium: cont.state,
        intent: cont.intent,
        wraight: wr.allowed,
        cause: cause.cause,
        sealed: nir.djinn.sealed,
        observe: true,     // nur Beobachtung
        execute: false     // niemals ausführen
    };
}
