OS.KOMPASS = function(OU) {

  if (OU.aura >= 6 && OU.mana >= 6) return "Norden";
  if (OU.mana >= 6 && OU.spiegel >= 6) return "Osten";
  if (OU.mana <= 3 && OU.spiegel >= 5) return "Süden";
  if (OU.spiegel >= 6 && OU.aura <= 4) return "Westen";

  return "Zentrum";
}
