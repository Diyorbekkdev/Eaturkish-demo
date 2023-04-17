function getActiveTab(i) {
  tabs.forEach((tab) => {
    tab.classList.remove("active-tab");
  });
  tabs_content.forEach((tabContent) => {
    tabContent.classList.remove("active-tab");
    tabContent.style.display = "none";
  });

  const selectedTab = tabs[i];
  const selectedTabContent = tabs_content[i];

  selectedTab.classList.add("active-tab");
  selectedTabContent.classList.add("active-tab");
  selectedTabContent.style.display = "block";
}

getActiveTab(0);

for (let i = 0; i < tabs.length; i++) {
  tabs[i].addEventListener("click", function (e) {
    e.preventDefault();
    getActiveTab(i);
  });
}
let stars = document.querySelectorAll('.star');

stars.forEach((star) => {
    star.addEventListener('click', (e) => {
        let clickedStar = e.target;

        if (clickedStar.classList.contains('filled')) {
            // If the clicked star is already filled, remove the filled class
            clickedStar.classList.remove('filled');
            let previousStars = clickedStar.previousElementSibling;

            while (previousStars) {
                previousStars.classList.remove('filled');
                previousStars = previousStars.previousElementSibling;
            }
        } else {
            // If the clicked star is not filled, fill it and all previous stars
            clickedStar.classList.add('filled');
            let previousStars = clickedStar.previousElementSibling;

            while (previousStars) {
                previousStars.classList.add('filled');
                previousStars = previousStars.previousElementSibling;
            }
        }
    });
});

const videos = document.querySelectorAll('.video-slider video');
const dots = document.querySelectorAll('.slider-dots .dot');
let currentVideo = 0;

function reset() {
  for (let i = 0; i < videos.length; i++) {
    videos[i].classList.remove('active');
    dots[i].classList.remove('active');
  }
}

function startSlide() {
  reset();
  videos[0].classList.add('active');
  dots[0].classList.add('active');
  setInterval(() => {
    slideRight();
  }, 5000);
}

function slideRight() {
  reset();
  currentVideo++;
  if (currentVideo >= videos.length) {
    currentVideo = 0;
  }
  videos[currentVideo].classList.add('active');
  dots[currentVideo].classList.add('active');
}

function slideLeft() {
  reset();
  currentVideo--;
  if (currentVideo < 0) {
    currentVideo = videos.length - 1;
  }
  videos[currentVideo].classList.add('active');
  dots[currentVideo].classList.add('active');
}

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    reset();
    currentVideo = index;
    videos[currentVideo].classList.add('active');
    dots[currentVideo].classList.add('active');
  });
});

startSlide();



$(document).ready(function() {
  $("#news-slider").owlCarousel({
      items : 3,
      itemsDesktop:[1199,3],
      itemsDesktopSmall:[980,2],
      itemsMobile : [600,1],
      navigation:true,
      navigationText:["",""],
      pagination:true,
      autoPlay:true
  });
});



