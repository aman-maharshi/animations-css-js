const blogSection = document.querySelector(".blog")
const progressBar = document.querySelector(".progressBar")

const animateProgressBar = () => {
    const scrollDistance = -blogSection.getBoundingClientRect().top
    // console.log(scrollDistance)
    if (scrollDistance <= 0) {
        progressBar.style.width = "0%"
    } else {
        const documentHeight = document.body.scrollHeight - document.documentElement.clientHeight
        // console.log(documentHeight)
        const width = (scrollDistance / documentHeight) * 100
        // console.log(width)
        if (width < 97) {
            progressBar.style.width = `${width}%`
        } else {
            progressBar.style.width = "100%"
        }
    }
}

document.addEventListener("scroll", animateProgressBar)
