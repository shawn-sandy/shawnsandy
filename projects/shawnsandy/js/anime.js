// var animation = anime({
//   targets: "#lead-text",
//   delay: 1000,
//   translateX: -100,
//   opacity: 0.05,
//   duration: 800,
//   easing: "linear",
//   direction: "alternate",
// });

document.addEventListener("DOMContentLoaded", function () {
  // console.log("loaded");
  const cover = document.querySelector("main");
  const content = document.querySelector(".ss-cover");
  cover.classList.add("loaded");
  content.classList.add("loaded");
});
