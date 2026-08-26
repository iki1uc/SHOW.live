import { QI_IQQ } from '../PUBLIC/VECTOR_SYSTEM/qi-iqq.js';

CONTINUUM_BRIDGE.energy = function() {
    const energie = QI_IQQ.status();
    this.öffentlich.qi = energie.qi;
    this.öffentlich.iqq = energie.iqq;
    this.öffentlich.flow = energie.flow;
    this.öffentlich.stabilität = energie.stabilität;
};
