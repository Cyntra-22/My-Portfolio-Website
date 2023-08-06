var menuBtn = document.querySelector("#menu-bar");
var sideBar = document.querySelector("#sidebar");
var container = document.querySelector("#my-container");

menuBtn.addEventListener("click", () =>{
    sideBar.classList.toggle("active-nav")
    container.classList.toggle("active-content");
})