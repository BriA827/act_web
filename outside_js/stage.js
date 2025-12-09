fwdBtn = document.querySelector(".forward-button")
bckBtn = document.querySelector(".backward-button")
slideMain = document.querySelector(".slides-img")
selectBtnDonkey = document.querySelector(".select_donkey")
selectBtnCrown = document.querySelector(".select_crown")
const slideSourceDonkey = ["donkey_front", "donkey_right", "donkey_back", "donkey_left", "donkey_top"]
const slideSourceCrown = ["crown_front", "crown_right", "crown_back", "crown_left"]
let slideSource = slideSourceDonkey
let slideCount = 0

function update_photo(slideSourceValue) {
    slideCount = 0
    slideSource = slideSourceValue
    slideMain.src = "../designs/crafts/" + slideSource[slideCount] + ".png"
    console.log("click")
}

selectBtnDonkey.addEventListener("click", () => update_photo(slideSourceDonkey))
selectBtnCrown.addEventListener("click", () => update_photo(slideSourceCrown))

fwdBtn.addEventListener("click", () =>{
    slideCount += 1
    if (slideCount >= (slideSource.length)){
        slideCount=0
    }
    slideMain.src = "../designs/crafts/" + slideSource[slideCount] + ".png"
})

bckBtn.addEventListener("click", () =>{
    slideCount -= 1
    if (slideCount < 0){
        slideCount = slideSource.length - 1
    }
    slideMain.src = "../designs/crafts/" + slideSource[slideCount] + ".png"
})