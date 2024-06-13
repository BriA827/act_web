images = document.querySelectorAll(".image")
topImage = document.querySelector(".top_img")
imgHr = document.querySelector(".img_hr")

images.forEach((image) => {
    image.addEventListener("click", ()=> {
        topImage.style.display = "block"
        imgHr.style.display = "flex"
        topImage.src = image.src
        document.documentElement.scrollTop = 50
    })
})