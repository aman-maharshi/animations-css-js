const timeline = gsap.timeline({
  defaults: {
    duration: 0.7,
    ease: Power3.easeOut
  }
})

timeline.fromTo(
  ".hero-img",
  {scale: 1.25},
  {scale: 1, delay: 0.25, duration: 1.5, ease: "elastic.out(1.5, 1)"}
)
timeline.fromTo(
  ".cta1",
  {x: -100, opacity: 0},
  {x: 0, opacity: 1},
  "<30%" 
)
timeline.fromTo(
  ".cta2",
  {y: -30, opacity: 0}, 
  {y: 0, opacity: 1},
  "<20%" 
)
timeline.fromTo(
  ".cta3",
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