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

const aboutSwiper = new Swiper(".workforce__swiper", {
   // Optional parameters

   loop: false,
   slidesPerView: 1.4, // Показываем текущий слайд полностью и часть предыдущего и следующего слайдов

   // Выравниваем текущий слайд по центру
   breakpoints: {
      220: {
         spaceBetween: 25,
      },
      811: {
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

Fancybox.bind('[data-fancybox="modal"]', {
   groupAttr: false,
});

const qq = document.querySelector(".intro__cart-box");
const ww = document.querySelector(".intro__cart");

qq.addEventListener("click", function () {
   ww.classList.toggle("active");
   console.log("clicked");
});
