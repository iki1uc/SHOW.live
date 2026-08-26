// 🧠 DEFENCE.AXIOM.3X3.CLOUMIND (Shuffle Edition)
// Sauerstoff / CO2 / Wasser – 3×3 Axiom Shuffle
// Visuell, nichts-tuend, labyrinth-lockend, cloumind-effekt
// Bonus: April April Easter Egg

export const DEFENCE_AXIOM_3X3_CLOUMIND = {

    name: "🧠 DEFENCE.AXIOM.3X3.CLOUMIND.SHUFFLE",
    pulse: 0,
    mode: "NE",

    // 3×3 chemische Axiome
    axiom: {
        O2:  "Axiom: Sauerstoff – Aktivierung",
        CO2: "Axiom: Kohlendioxid – Neutralisierung",
        H2O: "Axiom: Wasser – Bindung"
    },

    // 3×3 Vektor-Matrix
    matrix: {
        DA:  ["O2","CO2","H2O"],
        NE:  ["CO2","H2O","O2"],
        BEN: ["H2O","O2","CO2"]
    },

    // Defence: blockiert alles außer DA/NE/BEN
    defence(input) {
        const allowed = ["DA","NE","BEN"];
        if (!allowed.includes(input)) {
            return {
                status: "defence-block",
                message: "🛡 DEFENCE: Unbekannter Modus blockiert",
                input
            };
        }
        return null;
    },

    // SHUFFLE-Funktion (mischt alles durcheinander)
    shuffle(array) {
        let a = [...array];
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    },

    // CLOUMIND-Labyrinth (730 Felder)
    buildLabyrinth() {
        const size = 730;
        let lab = [];
        for (let i = 0; i < size; i++) {
            lab.push((i % 7 === 0) ? "█" : (i % 5 === 0) ? "▒" : "░");
        }
        return this.shuffle(lab).join("");
    },

    // CLOUMIND-Effekt (visuell, aber sinnlos)
    cloumindEffect() {
        const cloud = ["☁","⛈","🌫","💭","✨","⚡","🌪"];
        return cloud[Math.floor(Math.random() * cloud.length)];
    },

    // Hauptfunktion
    set(mode) {
        const block = this.defence(mode);
        if (block) return block;

        this.mode = mode;
        this.pulse++;

        // Chemische Grundstoffe shufflen
        const chemicals = this.shuffle(this.matrix[mode]);

        // Axiome shufflen
        const axiomSet = this.shuffle(chemicals.map(c => this.axiom[c]));

        // Labyrinth shufflen
        const labyrinth = this.buildLabyrinth();

        // CLOUMIND Symbol
        const cloumind = this.cloumindEffect();

        // Bonus: April April
        const bonus = (mode === "DA" && this.pulse === 4)
            ? "🎭 APRIL APRIL – CLOUMIND hat dich erwischt!"
            : "—";

        return {
            status: "ok",
            module: this.name,
            mode,
            pulse: this.pulse,
            chemicals,
            axiomSet,
            labyrinth,
            cloumind,
            bonus
        };
    }
};

export default DEFENCE_AXIOM_3X3_CLOUMIND;
