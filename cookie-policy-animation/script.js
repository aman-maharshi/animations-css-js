const timeline = gsap.timeline({
  defaults: {
    duration: 0.75,
    ease:Power1.easeOut
  }
})

timeline.fromTo(
  ".cookie-container",
  {scale: 0},
  {scale: 1}
)
timeline.fromTo(
  ".cookie",
  {opacity: 0, x: -50, rotation: "-45deg"},
  {opacity: 1, x: 0, rotation: "0deg"}
)
timeline.fromTo(
  ".text",
  {opacity: 0, x: 50},
  {opacity: 1, x: 0},
  "<" // to sync .text animation to the above .cookie one
)

timeline.fromTo(
  ".cookie",
  {y: 0, rotation: "0deg"},
  {y: -20, rotation: "-20deg", yoyo: true, repeat: 1}
)
timeline.fromTo(
  "#crumbs",
  {y: 0},
  {y: -10, yoyo: true, repeat: 1},
  "<"
)

document.querySelector('button').addEventListener("click", () => {
  timeline.to(
    ".cookie-container",
    {opacity: 0, y: 100, duration: 0.5, ease:Power1.easeOut}
  )
})