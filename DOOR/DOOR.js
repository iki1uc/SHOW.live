// DOOR.js
// Übergangsmodul – Durchgang mit TRANS, WARB, KANAL

export const DOOR = {
    // Status
    open: false,
    transition: false,
    warb: false,
    kanal: false,
    api: false,
    
    // Zähler
    count: { door: 0, trans: 0, warb: 0, kanal: 0, api: 0 },

    // ========================================
    // DOOR – Tür öffnen/schließen
    // ========================================
    openDoor() {
        this.open = true;
        this.count.door++;
        return { status: 'ok', message: '🚪 DOOR geöffnet', count: this.count.door };
    },

    closeDoor() {
        this.open = false;
        this.transition = false;
        this.warb = false;
        this.kanal = false;
        return { status: 'ok', message: '🚪 DOOR geschlossen' };
    },

    isOpen() {
        return this.open;
    },

    // ========================================
    // TRANS – Transition (Durchgang)
    // ========================================
    trans() {
        if (!this.open) {
            return { status: 'error', message: '❌ DOOR nicht geöffnet – TRANS blockiert' };
        }
        this.transition = true;
        this.count.trans++;
        return { 
            status: 'ok', 
            message: '🌀 TRANSITION aktiviert – Durchgang bereit', 
            count: this.count.trans 
        };
    },

    // ========================================
    // WARB – Warp (Beschleunigung)
    // ========================================
    warb() {
        if (!this.open) {
            return { status: 'error', message: '❌ DOOR nicht geöffnet – WARB blockiert' };
        }
        if (!this.transition) {
            return { status: 'error', message: '❌ TRANS nicht aktiv – WARB benötigt TRANS' };
        }
        this.warb = true;
        this.count.warb++;
        return { 
            status: 'ok', 
            message: '⚡ WARB aktiviert – Beschleunigung läuft', 
            count: this.count.warb 
        };
    },

    // ========================================
    // KANAL – Kanal (Verbindung)
    // ========================================
    kanal() {
        if (!this.open) {
            return { status: 'error', message: '❌ DOOR nicht geöffnet – KANAL blockiert' };
        }
        if (!this.transition) {
            return { status: 'error', message: '❌ TRANS nicht aktiv – KANAL benötigt TRANS' };
        }
        this.kanal = true;
        this.count.kanal++;
        return { 
            status: 'ok', 
            message: '🔗 KANAL verbunden – Datenfluss aktiv', 
            count: this.count.kanal 
        };
    },

    // ========================================
    // API – Durchlass
    // ========================================
    api() {
        if (!this.open) {
            return { status: 'error', message: '❌ DOOR nicht geöffnet – API blockiert' };
        }
        this.api = true;
        this.count.api++;
        return { 
            status: 'ok', 
            message: '🔌 API durchgelassen – Verbindung aktiv', 
            count: this.count.api 
        };
    },

    // ========================================
    // Full Pipeline: DOOR → TRANS → WARB → KANAL → API
    // ========================================
    fullPipeline() {
        const steps = [];
        
        // 1. DOOR öffnen
        const door = this.openDoor();
        steps.push(door);
        
        // 2. TRANS
        const trans = this.trans();
        steps.push(trans);
        if (trans.status === 'error') return { steps, error: 'TRANS fehlgeschlagen' };
        
        // 3. WARB
        const warb = this.warb();
        steps.push(warb);
        if (warb.status === 'error') return { steps, error: 'WARB fehlgeschlagen' };
        
        // 4. KANAL
        const kanal = this.kanal();
        steps.push(kanal);
        if (kanal.status === 'error') return { steps, error: 'KANAL fehlgeschlagen' };
        
        // 5. API
        const api = this.api();
        steps.push(api);
        
        return {
            status: 'ok',
            message: '✅ FULL PIPELINE COMPLETE – DOOR → TRANS → WARB → KANAL → API',
            steps: steps,
            state: this.getStatus()
        };
    },

    // ========================================
    // Reset
    // ========================================
    reset() {
        this.open = false;
        this.transition = false;
        this.warb = false;
        this.kanal = false;
        this.api = false;
        this.count = { door: 0, trans: 0, warb: 0, kanal: 0, api: 0 };
        return { status: 'ok', message: '⟲ DOOR zurückgesetzt' };
    },

    // ========================================
    // Status
    // ========================================
    getStatus() {
        return {
            open: this.open,
            transition: this.transition,
            warb: this.warb,
            kanal: this.kanal,
            api: this.api,
            count: this.count,
            phase: this.open ? (this.api ? 'API' : this.kanal ? 'KANAL' : this.warb ? 'WARB' : this.transition ? 'TRANS' : 'DOOR') : 'CLOSED'
        };
    }
};

export default DOOR;
