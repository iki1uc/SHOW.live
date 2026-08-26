function NIR_AURA(risk){
    return risk < 15 ? "smaragd"     // tiefe Ruhe
         : risk < 35 ? "bernstein"   // leichte Spannung
         : risk < 60 ? "gelb"        // Warnung
         : risk < 80 ? "karmin"      // Gefahr
         : "schwarzrot";             // Djinn-Siegel
}
