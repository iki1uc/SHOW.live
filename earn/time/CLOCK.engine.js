import { FINALCLOU } from "../CLOU/4pipe.js";
import { SLIDE } from "../SLIDE/SLIDE.js";
import { RESPO } from "../RESPO/RESPO.js";

const cycle = ["axes", "lage", "ort", "ghost", "tmp"];

export function CLOCKENGINE(step, calc) {

    const tick = cycle[step % 5];     // Zeit
    const clou = FINALCLOU(calc);     // Engine
    const slide = SLIDE(clou);        // Bewegung
    const respo = RESPO(slide.shift); // Ursache-Wirkung

    return {
        step,
        tick,
        clou,
        slide,
        respo
    };
}
