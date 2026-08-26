export function drawON3(ctx){
    const cx = 300, cy = 300;
    let t = 0;

    function loop(){
        ctx.clearRect(0,0,600,600);

        // Hintergrund
        ctx.fillStyle = "#000";
        ctx.fillRect(0,0,600,600);

        // Frame‑Tunnel
        for(let i=0;i<12;i++){
            const radius = 40 + i*25 + Math.sin(t + i)*10;

            ctx.strokeStyle = `hsl(${i*30}, 90%, 60%)`;
            ctx.lineWidth = 3;

            ctx.beginPath();
            ctx.arc(cx, cy, radius, 0, Math.PI*2);
            ctx.stroke();
        }

        // ON3‑Frame‑Punkt
        ctx.fillStyle = "#0f0";
        ctx.beginPath();
        ctx.arc(cx, cy, 12 + Math.sin(t)*3, 0, Math.PI*2);
        ctx.fill();

        t += 0.05;
        requestAnimationFrame(loop);
    }

    loop();
}
