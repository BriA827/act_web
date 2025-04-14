storyTitle = document.querySelector(".story_start")
storyStuff = document.querySelector(".story_stuff")
storyEnd = document.querySelector(".story_end")

storyTitle.addEventListener("click", ()=>{
    storyStuff.style.display = "flex"
    storyTitle.style.cursor = "default"
})

storyEnd.addEventListener("click", ()=>{
    storyStuff.style.display = "none"
    document.documentElement.scrollTop = 20
    storyTitle.style.cursor = "pointer"
})