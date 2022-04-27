window.addEventListener("scroll", () => {
  let content = document.querySelector(".div5 img");
  let contentPosition = content.getBoundingClientRect().top;
  let screenPosition = window.innerHeight;
  if (contentPosition < screenPosition) {
    content.classList.add("div5animation");
    content.classList.remove("hidden");
  }
});

window.addEventListener("scroll", () => {
  let content = document.querySelector(".div4 img");
  let contentPosition = content.getBoundingClientRect().top;
  let screenPosition = window.innerHeight;
  if (contentPosition < screenPosition) {
    content.classList.add("div4animation");
    content.classList.remove("hidden2");
  }
});

window.addEventListener("scroll", () => {
  let content = document.querySelector(".div1 img");
  let contentPosition = content.getBoundingClientRect().top;
  let screenPosition = window.innerHeight;
  if (contentPosition < screenPosition) {
    content.classList.add("div1animation");
    content.classList.remove("hidden1");
  }
});
