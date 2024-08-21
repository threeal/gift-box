not sure where to put this.

for (const el of document.getElementsByClassName("message")) {
  el.innerHTML = el.innerHTML
    .split("")
    .map((el) => `<span>${el}</span>`)
    .join("");
}

const timeline = new TimelineMax();
timeline
  .from(".person", 0.5, {
    scale: 3.5,
    opacity: 0,
    x: 25,
    y: -25,
    rotationZ: -45,
  })
  .staggerFrom(
    ".message span",
    0.7,
    {
      opacity: 0,
      y: -50,
      rotation: 150,
      skewX: "30deg",
      ease: Elastic.easeOut.config(1, 0.5),
    },
    0.1,
  )
  .staggerFromTo(
    ".message span",
    0.7,
    {
      scale: 1.4,
      rotationY: 150,
    },
    {
      scale: 1,
      rotationY: 0,
      color: "#ff69b4",
      ease: Expo.easeOut,
    },
    0.1,
  );
