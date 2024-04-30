openNav = document.querySelector(".menu-open")
closeNav = document.querySelector(".menu-close")
navMobile = document.querySelector(".nav")
portlandMain = document.querySelector(".main-portland")
portlandSubs = document.querySelector(".portland")
outsideMain = document.querySelector(".main-outside")
outsideSubs = document.querySelector(".outside")
screen = document.querySelector("main")
footer = document.querySelector("footer")

fwdBtn = document.querySelector(".forward-button")
bckdBtn = document.querySelector(".backward-button")
slideMain = document.querySelector(".slide-img")
const slideSource = ["b&b_gues_end", "ado_dogberry"]

openNav.addEventListener("click", () =>{
    openNav.style.display = "none"
    closeNav.style.display = "flex"
    navMobile.style.display = "flex"
    screen.style.height = "0vh"
    footer.style.position = "absolute"
    footer.style.bottom = "0px"
})

closeNav.addEventListener("click", () =>{
    openNav.style.display = "flex"
    closeNav.style.display = "none"
    navMobile.style.display = "none"
    portlandSubs.style.display = "none"
    outsideSubs.style.display = "none"
    screen.style.height = "auto"
    footer.style.position = "flex"
    footer.style.bottom = "auto"
})

portlandMain.addEventListener("click", () =>{
    portlandSubs.style.display = "flex"
})

outsideMain.addEventListener("click", () =>{
    outsideSubs.style.display = "flex"
})

fwdBtn.addEventListener("click", () =>{
    slideMain.src = "act_web_images/" + slideSource[1] + ".jpg"
    console.log(slideSource[1])
})