// Übergangs-Controller für DOOR / DOO / API
// Vorläufige Version – stabil, neutral, ohne Abhängigkeiten

const System = {
    state: "idle",
    anchor: false,
    door: false,
    controller: false,
    transition: false
};

// DOO = Controller
function enableDOO() {
    System.controller = true;
    System.state = "control-ready";
    return "DOO enabled";
}

// DOOR = Durchgang
function enableDOOR() {
    if (!System.controller) {
        // Übergang wo keiner ist (tmp)
        System.transition = true;
        System.state = "tmp-transition";
        return "DOOR opened temporarily (tmp)";
    }

    // Stabiler Übergang
    System.door = true;
    System.transition = true;
    System.state = "stable-transition";
    return "DOOR opened with controller";
}

// GEO/PHYSIK Übergang (Mapping)
function geoPhysBridge() {
    if (!System.transition) {
        // künstlicher Übergang
        System.transition = true;
        System.state = "mapped-transition";
        return "Mapping-Übergang erzeugt";
    }
    return "Übergang bereits aktiv";
}

// API = Durchlassachse
function API_pass(data) {
    if (!System.transition) {
        return "Kein Übergang aktiv – API blockiert";
    }
    return `API durchgelassen: ${data}`;
}

// Export für dein System
module.exports = {
    enableDOO,
    enableDOOR,
    geoPhysBridge,
    API_pass,
    System
};
