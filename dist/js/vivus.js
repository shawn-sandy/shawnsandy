new Vivus(
  "logo-svg",
  {
    type: "delayed",
    duration: 200,
    animTimingFunction: Vivus.EASE
  },
  function() {
    console.log("hello");
  }
);
