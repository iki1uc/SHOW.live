OS.mind = {

  // 1 · Energetische Grundwerte (OUreal)
  aura: 1–9,     // Außenwirkung / Präsenz
  mana: 1–9,     // Energie / Motivation
  spiegel: 1–9,  // Resonanz / soziale Wahrnehmung

  // 2 · Sichtbarkeit
  sicht: function() {
    return (this.aura + this.mana + this.spiegel) / 3;
  },

  // 3 · Blockade
  blockade: function() {
    let b = 0;
    if (this.aura < 3) b++;
    if (this.mana < 3) b++;
    if (this.spiegel < 3) b++;
    return b;
  },

  // 4 · Status
  status: function() {
    if (this.blockade() >= 2) return "unsichtbar";
    if (this.sicht() >= 6) return "sichtbar";
    return "neutral";
  },

  // 5 · Kompass (N/O/S/W/C)
  kompass: function() {

    if (this.aura >= 6 && this.mana >= 6)
      return "Norden";   // Präsenz · Klarheit · Fokus

    if (this.mana >= 6 && this.spiegel >= 6)
      return "Osten";    // Öffnung · Lernen · Wachstum

    if (this.mana <= 3 && this.spiegel >= 5)
      return "Süden";    // Ruhe · Regeneration · Tiefe

    if (this.spiegel >= 6 && this.aura <= 4)
      return "Westen";   // Reflexion · Abschluss · Spiegelung

    return "Zentrum";     // Balance · Mitte · Stabilität
  },

  // 6 · Verhalten (legal, statistisch)
  verhalten: function() {

    return {

      wirkung:
        this.aura >= 6 ? "hohe Präsenz" :
        this.aura <= 3 ? "geringe Sichtbarkeit" :
        "neutral",

      energie:
        this.mana >= 6 ? "aktive Handlung" :
        this.mana <= 3 ? "niedrige Aktivität" :
        "stabile Aktivität",

      resonanz:
        this.spiegel >= 6 ? "hohe soziale Resonanz" :
        this.spiegel <= 3 ? "geringe Resonanz" :
        "normale Resonanz"
    };
  },

  // 7 · Statistik (nur legale Bewegungen)
  stats: function() {

    let s = [];

    if (this.aura >= 7) s.push("starke Außenwirkung");
    if (this.mana >= 7) s.push("hohe Energieentwicklung");
    if (this.spiegel >= 7) s.push("soziale Resonanzsteigerung");

    if (this.aura <= 2) s.push("niedrige Sichtbarkeit");
    if (this.mana <= 2) s.push("Energieverlust");
    if (this.spiegel <= 2) s.push("soziale Isolation");

    return s;
  }
}
