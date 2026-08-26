export const MIND = {
    qi: 50,          // Lebensenergie
    iqq: 0.50,       // Intelligenz-Qualität
    flow: 0.50,      // Energiefluss
    stabilität: 0.50,

    absorb(vektoren) {
        const sum = Object.values(vektoren).reduce((a, b) => a + b, 0);

        this.qi = Math.min(100, this.qi + sum * 2);
        this.iqq = Math.min(1, this.iqq + sum * 0.01);
        this.flow = Math.min(1, this.flow + sum * 0.02);

        this.stabilität = 1 - Math.abs(this.flow - this.iqq);

        return this.status();
    },

    status() {
        return {
            qi: this.qi,
            iqq: this.iqq,
            flow: this.flow,
            stabilität: this.stabilität
        };
    }
};
