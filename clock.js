// 時計を更新する関数
function clock() {
    const el = document.getElementById("clock"); // clock タグを取得
    const now = new Date(); // 現在時刻を取得

    // 時刻をフォーマット
    const h = String(now.getHours()).padStart(2, '0');
    const m = String(now.getMinutes()).padStart(2, '0');
    const s = String(now.getSeconds()).padStart(2, '0');

    // 表示するテキストと属性を設定
    el.textContent = `${h}:${m}:${s}`;
    el.setAttribute("datetime", now.toISOString()); // ISO形式でdatetime属性を設定
}

// ページ読み込み時に時計を開始
document.addEventListener("DOMContentLoaded", () => {
    clock(); // 初期表示
    setInterval(clock, 1000); // 毎秒更新
});