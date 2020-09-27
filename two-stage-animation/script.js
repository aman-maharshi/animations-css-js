const box = document.querySelector(".box")

box.addEventListener("click", () => {
    console.log("click")
    box.classList.toggle("box-enlarge")
})
