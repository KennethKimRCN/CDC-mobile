const hamburger = document.querySelector(".hamburger");
const navlink = document.querySelector(".nav-link");
const links = document.querySelectorAll(".nav-link-item");


hamburger.addEventListener('click', () => {
    navlink.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    });
});

// document.getElementsByClassName("viewmore")[0].addEventListener("mouseover", mouseOver);

// function mouseOver() {
//   document.getElementsByClassName("viewmore")[0].style.transform="translateY(10px)";
// }