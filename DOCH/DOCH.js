// DOCH – 3×3 DA/NE/BEN ODER-Schalter

import DOO from '../DOO/DOO.js';
import DOOR from '../DOOR/DOOR.js';

export const DOCH = {

    mode: "NE",   // Default: NE = neutral

    // 3×3 Schalter
    switch(input) {
        this.mode = input;

        // Matrix
        const matrix = {
            DA: { doo: true, door: true, doch: true },
            NE: { doo: false, door: false, doch: true },
            BEN:{ doo: true, door: false, doch: true }
        };

        const state = matrix[input];

        // DOO Engine
        if (state.doo) DOO.activate();
        else DOO.deactivate();

        // DOOR Gateway
        if (state.door) DOOR.openDoor();
        else DOOR.closeDoor();

        // DOCH bleibt immer aktiv
        return {
            status: 'ok',
            mode: this.mode,
            doo: DOO.getStatus(),
            door: DOOR.getStatus()
        };
    }
};

export default DOCH;
