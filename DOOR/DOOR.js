// DOOR.js – Übergangsmodul
// DOOR → TRANS → WARB → KANAL → API

export const DOOR = {

    // Statusflags
    state: {
        door: false,
        trans: false,
        warb: false,
        kanal: false,
        api: false
    },

    // Zähler
    count: { door: 0, trans: 0, warb: 0, kanal: 0, api: 0 },

    // Sicherheitscheck
    safe() {
        return typeof window.DOO !== "undefined";
    },

    // DOOR öffnen
    openDoor() {
        if (!this.safe()) return { status: "error", message: "❌ DOO nicht geladen – DOOR blockiert" };

        this.state.door = true;
        this.count.door++;
        return { status: "ok", message: "🚪 DOOR geöffnet", count: this.count.door };
    },

    // DOOR schließen
    closeDoor() {
        this.state = { door: false, trans: false, warb: false, kanal: false, api: false };
        return { status: "ok", message: "🚪 DOOR geschlossen" };
    },

    // TRANS
    trans() {
        if (!this.state.door) return { status: "error", message: "❌ DOOR nicht geöffnet – TRANS blockiert" };

        this.state.trans = true;
        this.count.trans++;
        return { status: "ok", message: "🌀 TRANS aktiviert", count: this.count.trans };
    },

    // WARB
    warb() {
        if (!this.state.trans) return { status: "error", message: "❌ TRANS nicht aktiv – WARB blockiert" };

        this.state.warb = true;
        this.count.warb++;
        return { status: "ok", message: "⚡ WARB aktiviert", count: this.count.warb };
    },

    // KANAL
    kanal() {
        if (!this.state.trans) return { status: "error", message: "❌ TRANS nicht aktiv – KANAL blockiert" };

        this.state.kanal = true;
        this.count.kanal++;
        return { status: "ok", message: "🔗 KANAL verbunden", count: this.count.kanal };
    },

    // API
    api() {
        if (!this.state.door) return { status: "error", message: "❌ DOOR nicht geöffnet – API blockiert" };

        this.state.api = true;
        this.count.api++;
        return { status: "ok", message: "🔌 API durchgelassen", count: this.count.api };
    },

    // Full Pipeline
    fullPipeline() {
        const steps = [];

        steps.push(this.openDoor());
        steps.push(this.trans());
        steps.push(this.warb());
        steps.push(this.kanal());
        steps.push(this.api());

        return {
            status: "ok",
            message: "✅ FULL PIPELINE COMPLETE",
            steps,
            state: this.state
        };
    },

    // Reset
    reset() {
        this.state = { door: false, trans: false, warb: false, kanal: false, api: false };
        this.count = { door: 0, trans: 0, war
