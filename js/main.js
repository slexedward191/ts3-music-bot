document.addEventListener("DOMContentLoaded", () => {
  // MUSIC
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
  bgMusic.volume = volumeControl.value / 100;

  // GUEST LOGIN
  const guestBtn = document.getElementById("guestLogin");
  const guestWelcome = document.getElementById("guestWelcome");

  if (guestBtn && guestWelcome) {
    guestBtn.addEventListener("click", () => {
      const id = Math.floor(1000 + Math.random() * 9000);
      const guestName = "Misafir#" + id;

      localStorage.setItem("guestUser", guestName);
      guestWelcome.textContent = "Hoş geldin, " + guestName + " 😎";
      guestWelcome.classList.remove("hidden");

      guestBtn.disabled = true;
      guestBtn.textContent = "Giriş Yapıldı ✔️";
    });

    const savedGuest = localStorage.getItem("guestUser");
    if (savedGuest) {
      guestWelcome.textContent = "Hoş geldin, " + savedGuest + " 😎";
      guestWelcome.classList.remove("hidden");
      guestBtn.disabled = true;
      guestBtn.textContent = "Giriş Yapıldı ✔️";
    }
  }
});
