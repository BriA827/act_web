openNav = document.querySelector(".menu-open")
closeNav = document.querySelector(".menu-close")
navMobile = document.querySelector(".nav")
portlandMain = document.querySelector(".main-portland")
portlandSubs = document.querySelector(".portland")
outsideMain = document.querySelector(".main-outside")
outsideSubs = document.querySelector(".outside")
screen = document.querySelector("main")
footer = document.querySelector("footer")

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

let portlandOpen = false
let outsideOpen = false

deskPortland.addEventListener("click", ()=>{
    if (portlandOpen == false){
        deskSubsPortland.style.display = "flex"
        deskSubsOutside.style.display = "none"
        headNavHr.style.display = "flex"
        deskPortland.style.transform = "none"
        deskPortland.style.scale = "1.35"
        portlandOpen = true
        outsideOpen = false
    }
    else{
        deskSubsPortland.style.display = "none"
        headNavHr.style.display = "none"
        deskPortland.style.hover.transform.scale = "1.35"
        deskPortland.style.scale = "1"
        portlandOpen = false
        outsideOpen = false
    }
})

deskOutside.addEventListener("click", ()=>{
    if (outsideOpen == false){
        deskSubsPortland.style.display = "none"
        deskSubsOutside.style.display = "flex"
        headNavHr.style.display = "flex"
        outsideOpen = true
        portlandOpen = false
    }
    else{
        deskSubsOutside.style.display = "none"
        headNavHr.style.display = "none"
        outsideOpen = false
        portlandOpen = false
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