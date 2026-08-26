# DOOR – Übergangsmodul des iki1uc-Systems

## Zweck
DOOR ist ein Übergangsmodul, das zwischen Kontrollinstanz (DOO) und Durchlassachse (API) arbeitet.  
Es erzeugt stabile oder temporäre Übergänge, abhängig vom Systemzustand.

## Struktur
- Modul: DOOR
- Typ: Passage
- Zustand: dynamisch
- Kontrolle: optional (über DOO)
- Übergang: stabil oder tmp

## Funktionen
- Übergang erzeugen, wo keiner ist (Mapping)
- API-Durchlass aktivieren
- DOO-Kontrolle nutzen oder umgehen
- GEO/PHYSIK-Schichtwechsel simulieren

## Dateien
- API.raw – Rohdefinitionen
- API.system.js – Funktionslogik
- ID.html – Modul-Identität
