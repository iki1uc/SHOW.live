export function scanFrame(frame){
    return {
        addr: frame.addr,
        event: frame.event,
        state: frame.state,
        repeat: frame.repeat,
        context: frame.context ?? "NULL"
    };
}
