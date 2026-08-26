// CLOCK_PIPE.js
export function CLOCK_PIPE(clock) {
    return {
        pipe: clock,
        flow: clock % 12,
        direction: (clock % 2 === 0) ? "out" : "in",
        strength: (clock % 9) + 1
    };
}
