export const VECTOR_SYSTEM = {
    earn: { wert: 0 },
    qi: { wert: 50 },
    iqq: { wert: 0.5 },

    vektoren: {
        tiefe: 0.5,
        energie: 0.5,
        flow: 0.5,
        pover: 0.5,
        schlag: 0.5,
        ankunft: 0.5
    },

    mind: {
        qi: 50,
        iqq: 0.5,
        flow: 0.5,
        stabilität: 0.5
    },

    continuum: "geöffnet",
    brücke: {
        verbindungen: [],
        verbinden(ziel, vektor) {
            this.verbindungen.push({ ziel, vektor });
        }
    },

    setzeEarn(rolle, ort, home) {
        this.earn.wert = rolle + ort + home;
        this.qi.wert = 50 + rolle - home;
    },

    setzeIQQ(suite, bildung) {
        this.iqq.wert = suite + bildung;
        this.mind.iqq = suite + bildung;
    },

    updateVektoren() {
        this.vektoren.tiefe = this.qi.wert / 100;
        this.vektoren.energie = this.iqq.wert;
        this.vektoren.flow = (this.qi.wert + this.iqq.wert) / 100;
        this.vektoren.pover = this.earn.wert / 100;
        this.vektoren.schlag = Math.random();
        this.vektoren.ankunft = Math.random();
    },

    status() {
        return {
            earn: this.earn,
            qi: this.qi.wert,
            iqq: this.iqq.wert,
            vektoren: this.vektoren,
            continuum: this.continuum,
            mind: this.mind,
            brücke: this.brücke.verbindungen.length
        };
    }
};
