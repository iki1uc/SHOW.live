// CUBE_MIND – Cognitive Cube Engine

window.CUBE_MIND = {
    start() {
        const map = MATRIX9x9.build();

        return {
            map,                         // kognitive Karte
            qi: this.routeQI(map),       // QI-Routing
            octa: this.routeOCTA(map),   // 8-Wege-Intelligenz
            pipe: this.routePIPE(map),   // 3/6/9/12 Routing
            reason: this.reason(map),    // MindCube Reasoning
            mode: "CUBE-MIND aktiv",
            stamp: Date.now()
        };
    },

    routeQI(map) {
        return map.matrix.map((row, r) =>
            row.map((_, c) => r * 9 + c)
        );
    },

    routeOCTA(map) {
        return map.octa;
    },

    routePIPE(map) {
        return {
            tri: map.pipe3,
            hex: map.pipe6,
            non: map.pipe9,
            dode: map.pipe12
        };
    },

    reason(map) {
        return {
            center: map.matrix[4][4],     // Mittelpunkt ◎
            flow: "map-then-reason",      // MindCube-Prinzip
            stamp: Date.now()
        };
    }
};
