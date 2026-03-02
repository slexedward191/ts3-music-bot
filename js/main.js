document.addEventListener("DOMContentLoaded", () => {
  const bgm = document.getElementById("bgm");
  const btn = document.getElementById("playBtn");

  if (!bgm || !btn) {
    console.error("bgm veya playBtn bulunamadı");
    return;
  }

  let playing = false;

  btn.addEventListener("click", async () => {
    try {
      if (!playing) {
        await bgm.play();
        playing = true;
        btn.textContent = "⏸️ Durdur";
      } else {
        bgm.pause();
        playing = false;
        btn.textContent = "🔊 Müziği Başlat";
      }
    } catch (e) {
      alert("Hata: " + e.name);
      console.log(e);
    }
  });
});
