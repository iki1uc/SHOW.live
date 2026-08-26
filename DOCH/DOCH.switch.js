import DOO from '../DOO/DOO.js';
import DOOR from '../DOOR/DOOR.js';
import SCHWEBE from "./schwebe.js";

export const DOCH_SWITCH = {

    engineMode: "NE",
    publicMode: "ja",

    matrix: {
        DA:  { doo: true,  door: true,  doch: true },
        NE:  { doo: false, door: false, doch: true },
        BEN: { doo: true,  door: false, doch: true }
    },

    // ENGINE-MODUS
    setEngine(mode) {
        this.engineMode = mode;
        const m = this.matrix[mode];

        if (m.doo) DOO.activate();
        else DOO.deactivate();

        if (m.door) DOOR.openDoor();
        else DOOR.closeDoor();

        return {
            status: "ok",
            engineMode: this.engineMode,
            doo: DOO.getStatus(),
            door: DOOR.getStatus()
        };
    },

    // PUBLIC-MODUS (SCHWEBE)
    setPublic(mode) {
        this.publicMode = mode;

        if (mode === "ja") return SCHWEBE.enable();
        if (mode === "nein") return SCHWEBE.disable();

        return { status: "error", message: "❌ Unbekannter Public‑Mode" };
    },

    // GESAMTSTATUS
    getStatus() {
        return {
            engine: this.engineMode,
            public: this.publicMode,
            schwebestatus: SCHWEBE.getStatus(),
            doo: DOO.getStatus(),
            door: DOOR.getStatus()
        };
    }
};

export default DOCH_SWITCH;
