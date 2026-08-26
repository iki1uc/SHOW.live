import { ghostCheck } from "./core/ghost.js";
import { wraightLoop } from "./core/wraight.js";
import { helpAuto } from "./core/help.js";
import { errorTri } from "./core/error.js";

export function debugFrame(frame){
    return {
        ghost: ghostCheck(frame),
        wraight: wraightLoop(frame),
        help: helpAuto(frame),
        error: errorTri(frame)
    };
}
