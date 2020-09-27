const box = document.querySelector(".box")
const topText = document.querySelector(".top-text")
const bottomText = document.querySelector(".bottom-text")

box.addEventListener("click", () => {
    if (!box.classList.contains("box-enlarge")) {
        box.classList.add("box-enlarge")
        setTimeout(() => {
            topText.classList.add("pull-right")
            bottomText.classList.add("pull-left")
        }, 500)
    } else {
        topText.classList.remove("pull-right")
        bottomText.classList.remove("pull-left")
        setTimeout(() => {
            box.classList.remove("box-enlarge")
        }, 500)
    }
})
