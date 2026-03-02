document.addEventListener("DOMContentLoaded", () => {
  const musicToggle = document.getElementById("musicToggle");
  const bgMusic = document.getElementById("bgMusic");
  const volumeControl = document.getElementById("volumeControl");

  let isPlaying = false;

  musicToggle.addEventListener("click", async () => {
    try {
      if (!isPlaying) {
        await bgMusic.play();
        musicToggle.textContent = "⏸️ Müziği Durdur";
      } else {
        bgMusic.pause();
        musicToggle.textContent = "🔊 Müziği Başlat";
      }
      isPlaying = !isPlaying;
    } catch (e) {
      console.error("Müzik çalma hatası:", e);
      alert("Tarayıcı müziği engelliyor olabilir. Tekrar dene.");
    }
  });

  volumeControl.addEventListener("input", (e) => {
    bgMusic.volume = e.target.value / 100;
  });

  // İlk ses
  bgMusic.volume = volumeControl.value / 100;
});
