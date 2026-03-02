document.addEventListener("DOMContentLoaded", () => {
  const bgm = document.getElementById("bgm");
  const btn = document.getElementById("playBtn");

  if (!bgm || !btn) {
    alert("bgm veya playBtn bulunamadı");
    return;
  }

  btn.addEventListener("click", async () => {
    try {
      await bgm.play();
      btn.innerText = "⏸️ Durdur";
    } catch (e) {
      alert("Hata: " + e.name);
      console.log(e);
    }
  });
});
