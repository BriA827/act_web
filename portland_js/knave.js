storyTitle = document.querySelector(".story_start")
storyStuff = document.querySelector(".story_stuff")
storyEnd = document.querySelector(".story_end")

titleBtns = document.querySelectorAll(".title")
infoPs = document.querySelectorAll(".info")

storyTitle.addEventListener("click", ()=>{
    storyStuff.style.display = "flex"
    storyTitle.style.cursor = "default"
})

storyEnd.addEventListener("click", ()=>{
    storyStuff.style.display = "none"
    document.documentElement.scrollTop = 20
    storyTitle.style.cursor = "pointer"
})

titleBtns.forEach((titleBtn) => {
    titleBtn.addEventListener("click", ()=>{
        for (const info of infoPs) {
            if (info.className.includes(titleBtn.textContent)){
                info.style.display = "flex"
            }
        }
    })
})