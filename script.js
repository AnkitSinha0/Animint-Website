const navDialog = document.getElementById('nav-dialog');
function hamBurger() {
    navDialog.classList.toggle('hidden');
}

document.addEventListener("DOMContentLoaded", () => {
  const bubble = document.getElementById("bubbleSound");

  const cards = document.querySelectorAll(".anime-card");

  cards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      bubble.currentTime = 0; 
      bubble.play();
    });
  });
});


  document.addEventListener("DOMContentLoaded", () => {
    const bubble = document.getElementById("bubbleSound");
    const cards = document.querySelectorAll(".anime-card");

    cards.forEach((card) => {
      card.addEventListener("touchstart", () => {
        bubble.currentTime = 0; 
      }); 
    });
  });

