if (window.location.hash) {
  history.replaceState(null, "", window.location.pathname);
  window.scrollTo(0, 0);
}


const knop = document.querySelector(".kopieer");

if (knop) {
  knop.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(knop.dataset.copy);
      knop.textContent = "GEKOPIEERD ✓";
      knop.classList.add("gekopieerd");

      setTimeout(() => {
        knop.textContent = "KOPIEER ↗";
        knop.classList.remove("gekopieerd");
      }, 2000);
    } catch (error) {
      console.error("Kopiëren mislukt:", error);
    }
  });
}
