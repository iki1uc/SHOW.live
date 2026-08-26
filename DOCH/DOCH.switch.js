import DOO from '../DOO/DOO.js';
import DOOR from '../DOOR/DOOR.js';

export const DOCH_SWITCH = {

    mode: "NE",

    matrix: {
        DA: { doo: true,  door: true,  doch: true },
        NE: { doo: false, door: false, doch: true },
        BEN:{ doo: true,  door: false, doch: true }
    },

    set(mode) {
        this.mode = mode;
        const m = this.matrix[mode];

        // DOO Engine
        if (m.doo) DOO.activate();
        else DOO.deactivate();

        // DOOR Gateway
        if (m.door) DOOR.openDoor();
        else DOOR.closeDoor();

        return {
            status: "ok",
            mode: this.mode,
            doo: DOO.getStatus(),
            door: DOOR.getStatus()
        };
    }
};

export default DOCH_SWITCH;
