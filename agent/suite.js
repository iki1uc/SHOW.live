// suite.js — END-RUNDE · WRAIGHT-SUITE

import { NIR } from "./nir.js";
import { WRAIGHT } from "./wa.js";
import { NA } from "./na.js";

export function SUITE(input){

    // 1. Intent isolieren
    const nir = NIR(input);

    // 2. Absicht scannen + Contínium führen
    const cont = NA(nir);

    // 3. WRAIGHT-Kernel Entscheidung
    const wr = WRAIGHT(input);

    // 4. Endrunde: alles zusammenführen
    return {
        nir,
        cont,
        wr,
        aura: nir.aura,
        djinn: nir.djinn,
        final: wr.allowed && cont.state === "stabil"
    };
}
