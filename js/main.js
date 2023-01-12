//!    Preloader

window.onload = function () {
   document.body.classList.add("loaded_hiding");
   window.setTimeout(function () {
      document.body.classList.add("loaded");
      document.body.classList.remove("loaded_hiding");
   }, 500);
};

//! Плавная прогрузка Элементов

function onEntry(entry) {
   entry.forEach((change) => {
      if (change.isIntersecting) {
         change.target.classList.add("element-show");
      }
   });
}

let options = {
   threshold: [0.5],
};
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll(".element-animation");

for (let elm of elements) {
   observer.observe(elm);
}

$(document).ready(function () {
   let burger = $(".burger");
   let menu_wrapper = $(".menu_wrapper");
   let body = $("body");
   let body_cont = $(".body_container");
   let menu_link = $(".menu_link");
   burger.click(function () {
      menu_wrapper.toggleClass("menu_open");
      burger.toggleClass("transform_rotate");
      body.toggleClass("overflow_hidden");
      body_cont.toggleClass("d-none");
   });
   menu_link.click(function () {
      menu_wrapper.toggleClass("menu_open");
      burger.toggleClass("transform_rotate");
      body.toggleClass("overflow_hidden");
      body_cont.toggleClass("d-none");
   });
});
