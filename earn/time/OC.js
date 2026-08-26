const cycle = ["axes", "lage", "ort", "ghost", "tmp"];

export function CLOCK(step) {
    return cycle[step % 5];
}
