const timeline = gsap.timeline({
  defaults: {
    duration: 1,
    ease: Power3.easeOut
  }
})

timeline.fromTo(
  ".hero-img",
  {scale: 1.25},
  {scale: 1, delay: 0.25, duration: 2, ease: "elastic.out(1.5, 1)"}
)
timeline.fromTo(
  ".cta4",
  {x: -100, opacity: 0},
  {x: 0, opacity: 1},
  "<30%" 
)
timeline.fromTo(
  ".cta5",
  {y: -30, opacity: 0}, 
  {y: 0, opacity: 1},
  "<20%" 
)
timeline.fromTo(
  ".cta6",
  {x: 100, opacity: 0}, 
  {x: 0, opacity: 1},
  "<10%"   
)

document.querySelector('.cta-btn').addEventListener('click', (e) => {
  e.preventDefault()
  timeline.fromTo(
    ".cta",
    {x: 0, opacity: 1}, 
    {x: 200, opacity: 0}    
  )
})

// Split logo text animation
const logo = document.querySelector('.logo')
const logoLetters = logo.textContent.split("")
logo.textContent = ""

logoLetters.forEach(item => {
    logo.innerHTML += `<span class="letter">${item}</span>`
})
gsap.fromTo(
  ".letter",
  {y: 30},
  {y: 0, delay: 0.75, stagger: 0.1} 
)