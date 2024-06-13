fwdBtn = document.querySelector(".forward-button")
bckBtn = document.querySelector(".backward-button")
slideMain = document.querySelector(".slides-img")
const slideSource = ["ado_dogberry", "pirate_merf", "b&b_guest_end", "merf_ariel", "ham_ger", "b&b_cast_stage"]
let slideCount = 0

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