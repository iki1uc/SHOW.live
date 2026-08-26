import { ghostCheck } from "./core/ghost.js";
import { wraightLoop } from "./core/wraight.js";
import { helpAuto } from "./core/help.js";
import { errorTri } from "./core/error.js";

export function runON3(frame){
    const ghost = ghostCheck(frame);
    const wraight = wraightLoop(frame);
    const help = helpAuto(frame);
    const error = errorTri(frame);

    return { ghost, wraight, help, error };
}
