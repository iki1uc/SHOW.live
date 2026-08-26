// P01 – API / ANKER / PASS-THROUGH
// Public-Modul für DOO / DOOR / GEO / TMP

export const P01 = {

    state: "idle",
    anchor: false,
    transition: false,
    controller: false,

    enable() {
        this.state = "enabled";
        return "P01 aktiviert";
    },

    setAnchor() {
        this.anchor = true;
        this.state = "anchor-set";
        return "🔱 ANKER gesetzt";
    },

    requireTransition() {
        this.transition = true;
        this.state = "transition-required";
        return "🌀 Transition aktiviert";
    },

    enableController() {
        this.controller = true;
        this.state = "controller-ready";
        return "🎛 Controller bereit";
    },

    geoPhysBridge() {
        if (!this.transition) {
            this.transition = true;
            this.state = "geo-mapped";
            return "🌍 GEO/PHYSIK Mapping erzeugt";
        }
        return "Mapping bereits aktiv";
    },

    pass(data) {
        if (!this.transition) {
            return "❌ Kein Übergang – PASS blockiert";
        }
        return `🔌 PASS-THROUGH: ${data}`;
    },

    reset() {
        this.state = "idle";
        this.anchor = false;
        this.transition = false;
        this.controller = false;
        return "⟲ P01 zurückgesetzt";
    }
};

window.P01 = P01;
export default P01;
