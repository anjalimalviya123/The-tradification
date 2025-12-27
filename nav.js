// fetch("nav.html")
//   .then(res => res.text())
//   .then(data => {
//     document.getElementById("header").innerHTML = data;

//     const menuBtn = document.querySelector("#menu-btn");
//     const closeBtn = document.querySelector("#close-btn");
//     const info = document.querySelector("#info");

//     menuBtn.onclick = () => info.classList.add("active");
//     closeBtn.onclick = () => info.classList.remove("active");
//   })
//   .catch(err => console.error(err));


fetch("nav.html")
  .then(res => res.text())
  .then(data => {
    // Load navbar HTML
    document.getElementById("header").innerHTML = data;

    /* ===============================
       MENU OPEN / CLOSE JS
    ================================ */
    const menuBtn = document.querySelector("#menu-btn");
    const closeBtn = document.querySelector("#close-btn");
    const info = document.querySelector("#info");

    if (menuBtn && closeBtn && info) {
      menuBtn.onclick = () => info.classList.add("active");
      closeBtn.onclick = () => info.classList.remove("active");
    }

    /* ===============================
       SCROLL NAVBAR JS
    ================================ */
    const scrollNav = document.querySelector(".scrollnav");

    if (scrollNav) {
      window.addEventListener("scroll", () => {
        if (window.scrollY > 120) {
          scrollNav.classList.add("show");
        } else {
          scrollNav.classList.remove("show");
        }
      });
    }
  })
  .catch(err => console.error(err));