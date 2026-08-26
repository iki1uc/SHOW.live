export function buildDashboard(result){
    const panel = document.getElementById("dashboard");
    panel.innerHTML = `
        <h2>ON3‑Dashboard</h2>
        <pre>${JSON.stringify(result, null, 2)}</pre>
    `;
}
