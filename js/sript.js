let burgerElement = document.querySelector(".burger");

burgerElement.addEventListener("click", function () {
   this.classList.toggle("active");
   document.querySelector(".header__shell").classList.toggle("active");
   document.body.classList.toggle("lock");
});

var swiper = new Swiper(".intro__swiper", {
   // Настройки Swiper, если нужно
   loop: true, // Зацикливание слайдов
   pagination: {
      el: ".swiper-pagination",
      clickable: true,
   },
});
var roomsSwiper = new Swiper(".rooms__swiper", {
   // Настройки Swiper, если нужно
   loop: true, // Зацикливание слайдов
   scrollbar: {
      el: ".swiper-scrollbar",
      hide: false,
      dragSize: "100%", // Размер активного скроллбара
   },
});

var newSwipe = new Swiper(" #roomsswipe", {
   loop: true,
   breakpoints: {
      220: {
         slidesPerView: 1.1,
         slidesPerGroup: 1,
         spaceBetween: 35,
      },
      811: {
         slidesPerView: 1,
         slidesPerGroup: 1,
         spaceBetween: 24,
      },
   },

   navigation: {
      nextEl: "#roomswrap1 .arrow_next",
      prevEl: "#roomswrap1 .arrow_prev",
   },
});
var newSwipe = new Swiper("#roomsswipe2", {
   loop: true,
   breakpoints: {
      220: {
         slidesPerView: 1.1,
         slidesPerGroup: 1,
         spaceBetween: 35,
      },
      811: {
         slidesPerView: 1,
         slidesPerGroup: 1,
         spaceBetween: 24,
      },
   },
   navigation: {
      nextEl: "#roomswrap2 .arrow_next",
      prevEl: "#roomswrap2 .arrow_prev",
   },
});
var newSwipe = new Swiper("#roomsswipe3", {
   loop: true,
   breakpoints: {
      220: {
         slidesPerView: 1.1,
         slidesPerGroup: 1,
         spaceBetween: 35,
      },
      811: {
         slidesPerView: 1,
         slidesPerGroup: 1,
         spaceBetween: 24,
      },
   },
   navigation: {
      nextEl: "#roomswrap3 .arrow_next",
      prevEl: "#roomswrap3 .arrow_prev",
   },
});

var roomsDesign = new Swiper("#roomsswipe-design", {
   loop: false,
   breakpoints: {
      220: {
         slidesPerView: 1.1,
         slidesPerGroup: 1,
         spaceBetween: 35,
         loop: true,
      },
      1199: {
         slidesPerView: 3,
         slidesPerGroup: 1,
         spaceBetween: 24,
      },
      811: {
         slidesPerView: 2,
         slidesPerGroup: 1,
         spaceBetween: 24,
      },
   },
   navigation: {
      nextEl: "#roomswrap1-design .arrow_next",
      prevEl: "#roomswrap1-design .arrow_prev",
   },
});
var roomsDesign2 = new Swiper("#roomsswipe2-design", {
   loop: false,
   breakpoints: {
      220: {
         slidesPerView: 1.1,
         slidesPerGroup: 1,
         spaceBetween: 35,
         loop: true,
      },
      1199: {
         slidesPerView: 3,
         slidesPerGroup: 1,
         spaceBetween: 24,
      },
      811: {
         slidesPerView: 2,
         slidesPerGroup: 1,
         spaceBetween: 24,
      },
   },
   navigation: {
      nextEl: "#roomswrap2-design .arrow_next",
      prevEl: "#roomswrap2-design .arrow_prev",
   },
});
var roomsDesign3 = new Swiper("#roomsswipe3-design", {
   loop: false,
   breakpoints: {
      220: {
         slidesPerView: 1.1,
         slidesPerGroup: 1,
         spaceBetween: 35,
         loop: true,
      },
      1199: {
         slidesPerView: 3,
         slidesPerGroup: 1,
         spaceBetween: 24,
      },
      811: {
         slidesPerView: 2,
         slidesPerGroup: 1,
         spaceBetween: 24,
      },
   },
   navigation: {
      nextEl: "#roomswrap3-design .arrow_next",
      prevEl: "#roomswrap3-design .arrow_prev",
   },
});
var roomsDesign4 = new Swiper("#roomsswipe4-design", {
   loop: false,
   breakpoints: {
      220: {
         slidesPerView: 1.1,
         slidesPerGroup: 1,
         spaceBetween: 35,
         loop: true,
      },
      1199: {
         slidesPerView: 3,
         slidesPerGroup: 1,
         spaceBetween: 24,
      },
      811: {
         slidesPerView: 2,
         slidesPerGroup: 1,
         spaceBetween: 24,
      },
   },
   navigation: {
      nextEl: "#roomswrap4-design .arrow_next",
      prevEl: "#roomswrap4-design .arrow_prev",
   },
});
var roomsDesign5 = new Swiper("#roomsswipe5-design", {
   loop: false,
   breakpoints: {
      220: {
         slidesPerView: 1.1,
         slidesPerGroup: 1,
         spaceBetween: 35,
         loop: true,
      },
      1199: {
         slidesPerView: 3,
         slidesPerGroup: 1,
         spaceBetween: 24,
      },
      811: {
         slidesPerView: 2,
         slidesPerGroup: 1,
         spaceBetween: 24,
      },
   },
   navigation: {
      nextEl: "#roomswrap5-design .arrow_next",
      prevEl: "#roomswrap5-design .arrow_prev",
   },
});
var roomsDesign6 = new Swiper("#roomsswipe6-design", {
   loop: false,
   breakpoints: {
      220: {
         slidesPerView: 1.1,
         slidesPerGroup: 1,
         spaceBetween: 35,
         loop: true,
      },
      1199: {
         slidesPerView: 3,
         slidesPerGroup: 1,
         spaceBetween: 24,
      },
      811: {
         slidesPerView: 2,
         slidesPerGroup: 1,
         spaceBetween: 24,
      },
   },
   navigation: {
      nextEl: "#roomswrap6-design .arrow_next",
      prevEl: "#roomswrap6-design .arrow_prev",
   },
});

const aboutSwiper = new Swiper(".workforce__swiper", {
   // Optional parameters

   loop: false,
   slidesPerView: 1.4, // Показываем текущий слайд полностью и часть предыдущего и следующего слайдов

   // Выравниваем текущий слайд по центру
   breakpoints: {
      220: {
         slidesPerView: 1.4,
         spaceBetween: 25,
      },
      811: {
         slidesPerView: 1,
         spaceBetween: 40,
      },
   },
   // spaceBetween: 50,

   // Navigation arrows
   navigation: {
      nextEl: ".workforce__container .arrow_next",
      prevEl: ".workforce__container .arrow_prev",
   },
});

const tenderSwiper = new Swiper(".view__swiper", {
   // Optional parameters

   loop: true,
   slidesPerView: 1.1,
   spaceBetween: 35,

   // Показываем текущий слайд полностью и часть предыдущего и следующего слайдов

   // Выравниваем текущий слайд по центру
   // breakpoints: {
   //    220: {
   //       spaceBetween: 25,
   //    },
   //    811: {
   //       spaceBetween: 40,
   //    },
   // },
   // spaceBetween: 50,

   // Navigation arrows
   navigation: {
      nextEl: ".view__contain .arrow_next",
      prevEl: ".view__contain .arrow_prev",
   },
});

// document.querySelectorAll(".faq__contain").forEach((faqPlus, index) => {
//    faqPlus.addEventListener("click", function () {
//       this.querySelector(".faq__plus").classList.toggle("clicked");

//       document
//          .querySelectorAll(".plus-icon")
//          [index].classList.toggle("clicked");
//       document
//          .querySelectorAll(".faq__question")
//          [index].classList.toggle("show");
//    });
// });

const faqContains = document.querySelectorAll(".faq__contain");

faqContains.forEach((faqPlus, index) => {
   faqPlus.addEventListener("click", function (event) {
      const isActive = this.classList.contains("active");

      // Сбрасываем все классы для всех блоков
      faqContains.forEach((element, i) => {
         element.querySelector(".faq__plus").classList.remove("clicked");
         element.classList.remove("active");
         document.querySelectorAll(".plus-icon")[i].classList.remove("clicked");
         document
            .querySelectorAll(".faq__question")
            [i].classList.remove("show");
      });

      // Если уже активен или клик был по пустому месту, то просто выходим
      if (isActive || !event.target.closest(".faq__contain")) return;

      // Навешиваем классы на текущий блок
      this.querySelector(".faq__plus").classList.add("clicked");
      faqPlus.classList.add("active");
      document.querySelectorAll(".plus-icon")[index].classList.add("clicked");
      document.querySelectorAll(".faq__question")[index].classList.add("show");
   });
});

// Обработчик события на document для клика по пустому месту
document.addEventListener("click", function (event) {
   if (!event.target.closest(".faq__contain")) {
      // Сбрасываем все классы для всех блоков
      faqContains.forEach((element, i) => {
         element.querySelector(".faq__plus").classList.remove("clicked");
         element.classList.remove("active");
         document.querySelectorAll(".plus-icon")[i].classList.remove("clicked");
         document
            .querySelectorAll(".faq__question")
            [i].classList.remove("show");
      });
   }
});

if (document.querySelectorAll(".modal").length > 0) {
   Fancybox.bind('[data-fancybox="modal"]', {
      groupAttr: false,
   });
}

if (document.querySelectorAll(".intro__cart-box").length > 0) {
   let cart = document.querySelector(".intro__cart-box");
   let introCart = document.querySelector(".intro__cart");
   cart.addEventListener("click", function () {
      // console.log("n");
      introCart.classList.toggle("active");
   });
   document.addEventListener("click", function (event) {
      // Проверяем, был ли клик вне блока .intro__cart-box
      if (!cart.contains(event.target) && !introCart.contains(event.target)) {
         introCart.classList.remove("active");
      }
   });
}

// let cb = document.querySelectorAll(".checkbox");

// let cbSvg = document.querySelector(".checkbox-svg");

// cb.forEach((item) => {
//    let svg = item.querySelector(".checkbox-svg");
//    item.addEventListener("click", function () {
//       svg.classList.toggle("cls");
//    });
// });

let cb = document.querySelectorAll(".popup-cart__services-check");

cb.forEach((item) => {
   let svg = item.querySelector(".checkbox-svg");

   item.addEventListener("click", function () {
      document.querySelectorAll(".checkbox-svg").forEach(function (svg) {
         svg.classList.add("cls");
      });
      document.querySelectorAll(".popup-cart__services").forEach((item) => {
         if (!item.classList.contains("margin")) {
            item.classList.toggle("frame");
         }
      });
      svg.classList.toggle("cls");
   });
});

let cBox = document.querySelectorAll(".popup-cart__services");

cBox.forEach((item) => {
   let svg = item.querySelector(".check-svg");
   item.addEventListener("click", function () {
      svg.classList.toggle("del");
   });
});

let removeEl = document.querySelectorAll(".remove");
let removeElement = document.querySelectorAll(".remove-cross");

let popWrap = document.querySelector(".pop-wrap");

// removeEl.forEach((item) => {
//    let el = item.closest(".popup-cart__add-roooms");

//    item.addEventListener("click", function () {
//       if (el) {
//          el.classList.add("delete");
//       }
//    });
// });
// removeElement.forEach((item) => {
//    let el = item.closest(".popup-cart__add-roooms");

//    item.addEventListener("click", function () {
//       if (el) {
//          el.classList.add("delete");
//          let remainingElements = document.querySelectorAll(
//             ".popup-cart__add-roooms:not(.delete)"
//          );
//          if (remainingElements.length === 0) {
//             targetBlock.classList.add("all-deleted");
//          }
//       }
//    });
// });

removeElement.forEach((item) => {
   item.addEventListener("click", function () {
      let el = item.closest(".popup-cart__add-roooms");
      if (el) {
         el.classList.add("delete");
         checkRemainingBlocks();
      }
   });
});

function checkRemainingBlocks() {
   let remainingBlocks = document.querySelectorAll(
      ".popup-cart__add-roooms:not(.delete)"
   );
   if (remainingBlocks.length === 0) {
      popWrap.querySelector(".popup-cart__title").classList.add("all-deleted");
   }
}
removeEl.forEach((item) => {
   item.addEventListener("click", function () {
      let el = item.closest(".popup-cart__add-roooms");
      if (el) {
         el.classList.add("delete");
         checkRemainingBlocks();
      }
   });
});

function checkRemainingBlocks() {
   let remainingBlocks = document.querySelectorAll(
      ".popup-cart__add-roooms:not(.delete)"
   );
   if (remainingBlocks.length === 0) {
      popWrap.querySelector(".popup-cart__title").classList.add("all-deleted");
   }
}
