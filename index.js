openNav = document.querySelector(".menu-open")
closeNav = document.querySelector(".menu-close")
navMobile = document.querySelector(".nav")
portlandMain = document.querySelector(".main-portland")
portlandSubs = document.querySelector(".portland")
outsideMain = document.querySelector(".main-outside")
outsideSubs = document.querySelector(".outside")
screen = document.querySelector("main")

openNav.addEventListener("click", () =>{
    openNav.style.display = "none"
    closeNav.style.display = "flex"
    navMobile.style.display = "flex"
    screen.style.height = "0vh"
})

closeNav.addEventListener("click", () =>{
    openNav.style.display = "flex"
    closeNav.style.display = "none"
    navMobile.style.display = "none"
    portlandSubs.style.display = "none"
    outsideSubs.style.display = "none"
    screen.style.height = "auto"
})

portlandMain.addEventListener("click", () =>{
    portlandSubs.style.display = "flex"
})

outsideMain.addEventListener("click", () =>{
    outsideSubs.style.display = "flex"
})