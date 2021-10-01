const banner = document.querySelector(".banner")
const title = document.querySelector(".title")
const desc = document.querySelector(".desc")
const dp = document.querySelector(".dp")
const name = document.querySelector(".name")
const date = document.querySelector(".date")

const animatedBg = document.querySelectorAll(".animated-bg")
const animatedBgText = document.querySelectorAll(".animated-bg-text")

const loadData = () => {
    banner.innerHTML = '<img src="./images/hero-lg.png" alt="large-hero" />'
    title.innerHTML = "Lorem, ipsum dolor."
    desc.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    dp.innerHTML = '<img src="./images/hero-sm.png" alt="small-hero" />'
    name.innerHTML = "Peter Keating"
    date.innerHTML = "15 Aug 2010"

    animatedBg.forEach(node => node.classList.remove("animated-bg"))
    animatedBgText.forEach(node => node.classList.remove("animated-bg-text"))
}

setTimeout(() => {
    loadData()
}, 2500)
