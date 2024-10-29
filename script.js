const buttonBars = document.querySelector(".button-bars");
const buttonIcon = document.querySelector(".button-icon");
const navHp = document.querySelector(".nav-hp");

buttonBars.addEventListener("click", function () {
  if (!navHp.classList.contains("open")) {
    buttonIcon.classList.remove("fa-bars");
    buttonIcon.classList.add("fa-xmark");
    navHp.classList.add("open"); // Menambahkan kelas open
  } else {
    buttonIcon.classList.remove("fa-xmark");
    buttonIcon.classList.add("fa-bars");
    navHp.classList.remove("open"); // Menghapus kelas open
  }
});
