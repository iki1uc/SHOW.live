// cause.js — END-RUNDE · URSACHEN-OFFENLEGUNG
// Dieser Raum zeigt nur die Ursache (cause), niemals die Wirkung (effect).

import { NIR } from "./nir.js";
import { NA } from "./na.js";
import { WRAIGHT } from "./wa.js";

export function CAUSE(input){

    // 1. Intent isolieren (Augen zu)
    const nir = NIR(input);

    // 2. Absicht scannen + Contínium führen (Augen halb offen)
    const cont = NA(nir);

    // 3. WRAIGHT-Kernel Entscheidung (Augen auf)
    const wr = WRAIGHT(input);

    // 4. Ursache bestimmen
    const cause =
        nir.sense === "ghost"    ? "versteckte Absicht" :
        nir.sense === "error"    ? "fehlerhafte Absicht" :
        nir.sense === "miss"     ? "unvollständige Absicht" :
        nir.sense === "help"     ? "korrigierende Absicht" :
        nir.sense === "bioldung" ? "aufbauende Absicht" :
        nir.sense === "fit"      ? "geordnete Absicht" :
        nir.sense === "fin"      ? "abgeschlossene Absicht" :
        nir.sense === "rdy"      ? "bereite Absicht" :
                                   "unbekannte Absicht";

    // 5. Endrunde: Ursache sichtbar machen, Wirkung blockieren
    return {
        nir,
        cont,
        wr,
        cause,
        aura: nir.aura,
        djinn: nir.djinn,
        effect: false,     // Wirkung immer blockiert
        allowed: false,    // niemals ausführen
        sealed: nir.djinn.sealed  // Djinn-Siegel
    };
}
