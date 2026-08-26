function CONT_FUEHRUNG(risk){
    return risk >= 80 ? "versiegeln"
         : risk >= 60 ? "dämpfen"
         : risk >= 40 ? "leiten"
         : "frei fließen lassen";
}
