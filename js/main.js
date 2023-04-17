// telegram


const telegramIcon = document.querySelector('.telegram');

window.addEventListener('scroll', function() {
  if (window.scrollY > (document.documentElement.scrollHeight - window.innerHeight) / 2) {
    telegramIcon.classList.add('telegram-visible');
  } else {
    telegramIcon.classList.remove('telegram-visible');
  }
});

window.addEventListener("scroll", function () {
  toggleBacktop();
});

let backtop = document.getElementById("backtop");

function toggleBacktop() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    backtop.style.bottom = "50px";
  } else {
    backtop.style.bottom = "-50px";
  }
}



$('.owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  nav:true,
  autoplay:true,
  autoplayTimeout: 2000,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:3
      },
      1000:{
          items:4
      }
  }
})

$('.owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  nav:true,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:2
      },
      1000:{
          items:3
      }
  }
})

// $('#photo_to').owlCarousel({
//   loop:true,
//   margin:10,
//   nav:true,
//   responsive:{
//       0:{
//           items:1
//       },
//       600:{
//           items:2
//       },
//       1000:{
//           items:3
//       }
//   }
// })

window.addEventListener("scroll", function () {
    shrink();
  });
  
  let navbar = document.getElementById("navbar");
  
  function shrink() {
    if (scrollY > 100) {
      navbar.classList.add("navbar-shrink");
    } else {
          navbar.classList.remove("navbar-shrink");
      }
  }


  // SLIDER START
  const slider = document.querySelector('.slider');
  const images = slider.querySelectorAll('img');
  let current = 0;
  
  function reset() {
    for (let i = 0; i < images.length; i++) {
      images[i].classList.remove('active');
    }
  }
  
  function startSlide() {
    reset();
    images[0].classList.add('active');
  }
  
  function slideRight() {
    reset();
    current++;
    if (current >= images.length) {
      current = 0;
    }
    images[current].classList.add('active');
  }
  
  function slideLeft() {
    reset();
    current--;
    if (current < 0) {
      current = images.length - 1;
    }
    images[current].classList.add('active');
  }
  
  startSlide();
  
  let interval = setInterval(() => {
    slideRight();
  }, 2000);
  
  slider.addEventListener('mouseenter', () => {
    clearInterval(interval);
  });
  
  slider.addEventListener('mouseleave', () => {
    interval = setInterval(() => {
      slideRight();
    }, 2000);
  });



// /*=====================================toggle style switcher=====================*/
// const styleSwitcherToggle =document.querySelector(".style-switcher-toggler");
// styleSwitcherToggle.addEventListener("click", () => {
//     document.querySelector(".style-switcher").classList.toggle("open");
// })
// //hide style switcher on scroll
// window.addEventListener("scroll", () => {
//     if(document.querySelector(".style-switcher").classList.contains("open"))
//     {
//         document.querySelector(".style-switcher").classList.remove("open");
//     }
// })
// /*=====================================Theme Colors=====================*/
// const alternateStyles = document.querySelectorAll(".alternate-style");
// function setActiveStyle(color)
// {
//     alternateStyles.forEach((style) => {
//         if(color === style.getAttribute("title"))
//         {
//             style.removeAttribute("disabled");
//         }
//         else
//         {
//             style.setAttribute("disabled", "true");
//         }
//     })
// }



// /*=====================================Dark mode=====================*/
// const dayNight = document.querySelector(".day-night");
// dayNight.addEventListener("click", () => {
//     dayNight.querySelector("i").classList.toggle("fa-sun")
//     dayNight.querySelector("i").classList.toggle("fa-moon")
//     document.body.classList.toggle("dark");
// })
// window.addEventListener("load", () => {
//     if(document.body.classList.contains("dark"))
//     {
//         dayNight.querySelector("i").classList.add("fa-sun")
//     }
//     else
//     {
//         dayNight.querySelector("i").classList.add("fa-moon")
//     }
// })



function addToBalance(price) {
  let balanceElement = document.getElementById("balance");
  let balanceText = balanceElement.textContent;
  let currentBalance = parseFloat(balanceText.split("$")[1]);
  let newBalance = currentBalance + price;
  balanceElement.textContent = "Balance: $" + newBalance.toFixed(2);
}





