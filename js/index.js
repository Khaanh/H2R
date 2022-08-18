let img = document.querySelector(".icon");

const options = {
  root: null,
  rootMargin: "0px",
  threshold: [0],
};

let observer = new IntersectionObserver((entry, observe) => {
  let [elem] = entry;
  if (elem.isIntersecting) {
    let img = elem.target;
    img.classList.add("is-scale");
  } else {
    // console.log("2");
  }
}, options);

setTimeout(() => {
  observer.observe(img);
}, 1500);

VanillaTilt.init(document.querySelector(".icon"), {
  max: 25,
  speed: 400,
});
