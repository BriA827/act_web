storyTitle = document.querySelector(".story_start")
storyStuff = document.querySelector(".story_stuff")
storyEnd = document.querySelector(".story_end")

titleBtns = document.querySelectorAll(".down_arrow")
closeBtns = document.querySelectorAll(".up_arrow")
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
            if (info.id.includes(titleBtn.id)){
                info.style.display = "flex"
                titleBtn.style.display = "none"
                for (const close of closeBtns) {
                    if (close.id.includes(info.id)){
                        close.style.display = "flex"
                    }
                }
            }
        }
    })
})

closeBtns.forEach((closeBtn) => {
    closeBtn.addEventListener("click", ()=>{
        for (const info of infoPs) {
            if (info.id.includes(closeBtn.id)){
                info.style.display = "none"
                closeBtn.style.display = "none"
                for (const titleBtn of titleBtns) {
                    if (titleBtn.id.includes(info.id)){
                        titleBtn.style.display = "flex"
                    }
                }
            }
        }
    })
})