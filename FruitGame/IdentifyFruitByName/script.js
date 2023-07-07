const start = document.querySelector(".start");
const startBtn = document.querySelector(".start2");
const nav = document.querySelector(".openDiv");
const navOpen = document.querySelector(".open");
const navClose = document.querySelector(".close");
const sidebar = document.querySelector(".sidebar");
const restart = document.querySelector(".restart");
const resumeBtn = document.querySelector(".resume");


startBtn.addEventListener("click", function() {
    hideShow1();
});

resumeBtn.addEventListener("click", function() {
    resume();
});

restart.addEventListener("click", function() {
    nav.style.display = "none";
    start.style.display = "flex";
    sidebar.style.display = "none";
    navClose.style.display = "none";


});

function hideShow1() {
    start.style.display = "none";
    nav.style.display = "block";
}

function hideShow2() {
    sidebar.style.display = "flex";
    navClose.style.display = "block";

}

function resume() {
    sidebar.style.display = "none";
    navClose.style.display = "none";
    navOpen.style.display = "block";
}

navOpen.addEventListener("click", function() {
    hideShow2();


});

navClose.addEventListener("click", function() {
    resume();


});
theme = document.getElementById("theme");
theme.onclick = function() {
    document.body.classList.toggle("dark-theme");
    if (document.body.classList.contains('dark-theme')) {
        theme.innerHTML = "LIGHT MODE";
    } else {
        theme.innerHTML = "DARK MODE";
    }
}