// 時計の更新処理
function clock() {
    const el = document.getElementById("clock");
    const now = new Date();

    // 時刻をフォーマット
    const h = String(now.getHours()).padStart(2, '0');
    const m = String(now.getMinutes()).padStart(2, '0');
    const s = String(now.getSeconds()).padStart(2, '0');

    // 時計を更新
    el.textContent = `${h}:${m}:${s}`;
}

// ページロード時に時計を開始
document.addEventListener("DOMContentLoaded", () => {
    clock(); // 初期表示
    setInterval(clock, 1000); // 毎秒更新
});