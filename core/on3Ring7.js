export function drawRing7(ctx){
    const cx = 300, cy = 300;
    const radius = 340;

    ctx.strokeStyle = "#6cf";
    ctx.lineWidth = 4;

    ctx.beginPath();
    ctx.arc(cx, cy, radius, 0, Math.PI*2);
    ctx.stroke();

    ctx.fillStyle = "#6cf";
    ctx.font = "20px monospace";
    ctx.fillText("Ring‑7 (Relativität)", cx - 110, cy - radius - 10);
}
