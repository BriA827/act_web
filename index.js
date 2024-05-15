fwdBtn = document.querySelector(".forward-button")
bckBtn = document.querySelector(".backward-button")
slideMain = document.querySelector(".slides-img")
const slideSource = ["ado_dogberry", "b&b_guest_end"]
// currently only 2 images added in, more will be added
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