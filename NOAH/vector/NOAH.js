export const NOAH = {

    NC: "NC_NOAH_14_3x9x81",

    start(etage = 14, code = 3**9) {

        const energie = VECTOR.etage(etage);
        const flow = VECTOR.korridor(code);
        const schnitt = VECTOR.schnittpunkt(energie);
        const continuum = VECTOR.continuum(flow);
        const on3 = VECTOR.on3(energie);

        console.log("NC:", this.NC);
        console.log("NOAH · Etage:", etage);
        console.log("Korridor:", code);
        console.log("Energie:", energie);
        console.log("Flow:", flow);
        console.log("Schnittpunkt:", schnitt);
        console.log("Continuum:", continuum);
        console.log("ON3:", on3);

        return {
            NC: this.NC,
            etage,
            code,
            energie,
            flow,
            schnitt,
            continuum,
            on3
        };
    }
};
