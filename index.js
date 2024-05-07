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
bckBtn = document.querySelector(".backward-button")
slideMain = document.querySelector(".slides-img")
const slideSource = ["ado_dogberry", "b&b_guest_end"]
// currently only 2 images added in, more will be added
let slideCount = 0

deskPortland = document.querySelector(".desk-portland")
deskOutside = document.querySelector(".desk-outside")
deskSubsPortland = document.querySelector(".portland-desk")
deskSubsOutside = document.querySelector(".outside-desk")
headNavHr = document.querySelector(".header-hr")

gmailDesk = document.querySelector(".google_desk")
gmailMobile = document.querySelector(".google_mobile")
emailBox = document.querySelector(".email")

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
    slideCount += 1
    if (slideCount >= (slideSource.length)){
        slideCount=0
    }
    slideMain.src = "act_web_images/" + slideSource[slideCount] + ".jpg"
})

bckBtn.addEventListener("click", () =>{
    slideCount -= 1
    if (slideCount < 0){
        slideCount = slideSource.length - 1
    }
    slideMain.src = "act_web_images/" + slideSource[slideCount] + ".jpg"
})

let portlandOpen = false
let outsideOpen = false

deskPortland.addEventListener("click", ()=>{
    if (portlandOpen == false){
        deskSubsPortland.style.display = "flex"
        deskSubsOutside.style.display = "none"
        headNavHr.style.display = "flex"
        portlandOpen = true
    }
    else{
        deskSubsPortland.style.display = "none"
        headNavHr.style.display = "none"
        portlandOpen = false
    }
})

deskOutside.addEventListener("click", ()=>{
    if (outsideOpen == false){
        deskSubsPortland.style.display = "none"
        deskSubsOutside.style.display = "flex"
        headNavHr.style.display = "flex"
        outsideOpen = true
    }
    else{
        deskSubsOutside.style.display = "none"
        headNavHr.style.display = "none"
        outsideOpen = false
    }
})

gmailDesk.addEventListener("mouseover", ()=>{
    emailBox.style.display = "flex"
})
gmailDesk.addEventListener("mouseout", ()=>{
    emailBox.style.display = "none"
})

let gmailOpen = false
gmailMobile.addEventListener("click", ()=>{
    if (gmailOpen == false){
        emailBox.style.display = "flex"
        gmailOpen = true
    }
    else{
        emailBox.style.display = "none"
        gmailOpen = false
    }
})