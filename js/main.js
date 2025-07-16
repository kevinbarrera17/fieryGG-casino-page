// ~~~~~~~~~~~~~~~~~~~~~~~~~~  LINKS BARRA DE NAVEGACION  ~~~~~~~~~~~~~~~~~~~~~~~~~~ //
// Mandar a llamar los enlaces dentro d nav-links
const navLinks = document.querySelectorAll(".nav-links a");

// Iterar los enlaces y crear evento del click
navLinks.forEach((link) => {
  link.addEventListener("click", function () {
    navLinks.forEach((link) => link.classList.remove("active"));
    this.classList.add("active");

    // Animacion
    this.classList.add("blink");
    setTimeout(() => {
      this.classList.remove("blink");
    }, 300);
  });
});

// ~~~~~~~~~~~~~~~~~~~~  SWITCH PARA CAMBIAR TEMA DE LA PÁGINA  ~~~~~~~~~~~~~~~~~~~~ //
// Mandar a llamar los botones y el main
const firstThemeMain = document.getElementById("firstTheme");
const secondThemeMain = document.getElementById("secondTheme");
const main = document.querySelector("main");

// Funcion para activar el primer tema y resaltar el boton correspondiente
firstThemeMain.addEventListener("click", () => {
  main.classList.remove("second-theme");
  main.classList.add("first-theme");

  // Modifica la clase active para resaltar el boton seleccionado
  firstThemeMain.classList.add("active");
  secondThemeMain.classList.remove("active");
});

// Funcion para activar el segundo tema y resaltar el boton correspondiente
secondThemeMain.addEventListener("click", () => {
  main.classList.remove("first-theme");
  main.classList.add("second-theme");

  // Modifica la clase active para resaltar el boton seleccionado
  secondThemeMain.classList.add("active");
  firstThemeMain.classList.remove("active");
});

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  MOSTRAR CHAT  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //
// Selección de elementos
const floatingArrow = document.getElementById("floatingArrow");
const arrowIcon = document.getElementById("arrowIcon");
const sidebarRight = document.getElementById("sidebarRight");

// Evento para mostrar/ocultar el menú lateral y cambiar el icono
floatingArrow.addEventListener("click", () => {
  // Alterna la clase 'show' en el sidebar
  sidebarRight.classList.toggle("show");

  // Cambia el icono dentro del botón
  if (arrowIcon.classList.contains("fa-chevron-right")) {
    arrowIcon.classList.remove("fa-chevron-right");
    arrowIcon.classList.add("fa-chevron-left");
  } else {
    arrowIcon.classList.remove("fa-chevron-left");
    arrowIcon.classList.add("fa-chevron-right");
  }

  // Animación de zoom al hacer clic en el botón
  floatingArrow.classList.add("scale");
  setTimeout(() => {
    floatingArrow.classList.remove("scale");
  }, 200);
});

// ~~~~~~~~~~~~~~~~~~~~~~~~~  ACTIVAR BOTONES SIDEBAR IZQ  ~~~~~~~~~~~~~~~~~~~~~~~~~ //
// Mandar a llamar los botones del sidebar izquierdo
const sidebarLinks = document.querySelectorAll(".list-sidebar .button-sidebar");
const pvpGame = document.getElementById("text-pvp-game");

// Iterar los enlaces y crear evento del click
sidebarLinks.forEach((link) => {
  link.addEventListener("click", function () {
    sidebarLinks.forEach((link) => link.classList.remove("active"));
    this.classList.add("active");
    var atributo = link.getAttribute("numero");
    pvpGame.innerHTML = "PvP Game " + atributo * 2;
  });
});

// ~~~~~~~~~~~~~~~~~~~~~~~~  ACTIVAR BOTONES DE TOP MATCHES  ~~~~~~~~~~~~~~~~~~~~~~~ //
document.addEventListener("DOMContentLoaded", () => {
  const containers = document.querySelectorAll(
    ".bet-btn-live-container, .bet-btn-container"
  );

  containers.forEach((container) => {
    const articles = container.querySelectorAll("article");

    articles.forEach((article) => {
      article.addEventListener("click", () => {
        if (article.classList.contains("active")) {
          article.classList.remove("active");
        } else {
          articles.forEach((a) => a.classList.remove("active"));
          article.classList.add("active");
        }
      });
    });
  });
});

// ~~~~~~~~~~~~~~~~~~~~~~~~  ACTIVAR BOTONES NOTI & LOG-OUT  ~~~~~~~~~~~~~~~~~~~~~~~ //
const notifications = document.querySelector(".button-notifications");
const logOut = document.querySelector(".button-logOut");

notifications.addEventListener("click", () => {
  const isActive = notifications.classList.contains("notiLight");

  notifications.classList.toggle("notiLight", !isActive);

  if (!isActive) {
    logOut.classList.remove("outLight");
  }
});

logOut.addEventListener("click", () => {
  const isActive = logOut.classList.contains("outLight");

  logOut.classList.toggle("outLight", !isActive);

  if (!isActive) {
    notifications.classList.remove("notiLight");
  }
});

// ~~~~~~~~~~~~~~~~~~~~~  MOSTRAR/OCULTAR MENÚ FOTO DE PERFIL  ~~~~~~~~~~~~~~~~~~~~~ //
document.addEventListener("DOMContentLoaded", () => {
  const profilePhoto = document.querySelector(".profile-photo");
  const menuProfile = document.querySelector(".menu-profile");

  document.addEventListener("click", (event) => {
    const isProfilePhoto = profilePhoto.contains(event.target);
    const isMenuProfile = menuProfile.contains(event.target);

    if (isProfilePhoto) {
      menuProfile.classList.toggle("show");
    } else if (!isMenuProfile) {
      menuProfile.classList.remove("show");
    }
  });
});

// ~~~~~~~~~~~~~~~~~~~~~~~~~~  CARRUSEL CARDS TOP MATCHES  ~~~~~~~~~~~~~~~~~~~~~~~~~ //
const carousel = document.getElementById("carousel");
const cards = document.querySelectorAll(".carousel-cards div");
const cardsToShow = 4;
let currentIndex = 0;

function moveCarousel(direction) {
  currentIndex += direction;
  currentIndex = Math.max(
    0,
    Math.min(currentIndex, cards.length - cardsToShow)
  );
  updateCarousel();
}

function updateCarousel() {
  let offsetValue = 103;

  if (window.innerWidth <= 576) {
    offsetValue = 412;
  } else if (window.innerWidth <= 992) {
    offsetValue = 206;
  }

  const offset = -currentIndex * (offsetValue / cardsToShow);
  carousel.style.transform = `translateX(${offset}%)`;
}

document
  .getElementById("next")
  .addEventListener("click", () => moveCarousel(1));
document
  .getElementById("prev")
  .addEventListener("click", () => moveCarousel(-1));

window.addEventListener("resize", updateCarousel);
updateCarousel();

const counter = document.getElementById("csgo");
const valorant = document.getElementById("valorant");
const card1 = document.getElementById("card1show");

counter.addEventListener("click", () => {
  card1.classList.add("showCard1");
});

valorant.addEventListener("click", () => {
  card1.classList.remove("showCard1");
});

const fifa = document.getElementById("fifa23");
const valorantTwo = document.getElementById("valorant2");
const titles = ["Roulette", "Jackpot", "Crash", "Cases", "Slots"];

fifa.addEventListener("click", () => {
  for (let i = 0; i <= 4; i++) {
    document.getElementById("card" + (i + 2)).innerHTML =
      i + 1 + "." + titles[i];
  }
});

valorantTwo.addEventListener("click", () => {
  for (let i = 0; i <= 4; i++) {
    document.getElementById("card" + (i + 2)).innerHTML = titles[i];
  }
});
