const label = document.querySelectorAll("label")

label.forEach(item => {
    item.addEventListener("click", () => {
        item.previousElementSibling.focus()
    })
})
