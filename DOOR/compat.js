// compat.js – 3×3 Übersetzer für DOO, DOOR, DOCH

import DOO from '../DOO/DOO.js';
import DOOR from '../DOOR/DOOR.js';
import DOCH from '../DOCH/DOCH.js';
import Axiom from './axiom.js';
import Vector from './vector.js';

export const COMPAT = {

    mode: "NE",

    set(mode) {
        this.mode = mode;

        // Axiom + Vector holen
        const axiom  = Axiom.translate(mode);
        const vector = Vector.translate(mode);

        // Vektor: [DOO, DOOR, DOCH]
        const [dooActive, doorActive, dochActive] = vector;

        // DOO Engine
        if (dooActive) DOO.activate();
        else DOO.deactivate();

        // DOOR Gateway
        if (doorActive) DOOR.openDoor();
        else DOOR.closeDoor();

        // DOCH Mode
        DOCH.mode = mode;

        return {
            status: "ok",
            mode,
            axiom,
            vector,
            doo: DOO.getStatus(),
            door: DOOR.getStatus(),
            doch: DOCH.mode
        };
    }
};

export default COMPAT;

