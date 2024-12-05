const sliderWrapper = document.querySelector('.slider-wrapper');
const WhatSliderWrapper = document.querySelector('.what-you-get-slider');
const tariffsWrapper = document.querySelector('.tariffs-bottom-section')

const dots = document.querySelectorAll('.dot');
const dots2 = document.querySelectorAll('.dot-s');
const dots3 = document.querySelectorAll('.tariffs-dot');

// slider dots
sliderWrapper.addEventListener('scroll', () => {

    const scrollPosition = sliderWrapper.scrollLeft;
    const itemWidth = sliderWrapper.querySelector('.wrapper-item').offsetWidth + 15;
    const totalItems = sliderWrapper.querySelectorAll('.wrapper-item').length;

    const activeIndex = Math.floor(scrollPosition / itemWidth);

    dots.forEach((dot, index) => {
        if (index === activeIndex) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
});
// what will you get dots
WhatSliderWrapper.addEventListener('scroll', () => {

    const scrollPosition = WhatSliderWrapper.scrollLeft;
    const itemWidth = WhatSliderWrapper.querySelector('.item').offsetWidth + 15;

    const activeIndex = Math.round(scrollPosition / itemWidth);

    dots2.forEach((dots2, index) => {
        if (index === activeIndex) {
            dots2.classList.add('active');
        } else {
            dots2.classList.remove('active');
        }
    });
});
// tariffs dots
tariffsWrapper .addEventListener('scroll', () => {

    const scrollPosition = tariffsWrapper .scrollLeft;
    const itemWidth = tariffsWrapper .querySelector('.tariff-item').offsetWidth + 15;

    const activeIndex = Math.round(scrollPosition / itemWidth);

    dots3.forEach((dots3, index) => {
        if (index === activeIndex) {
            dots3.classList.add('active');
        } else {
            dots3.classList.remove('active');
        }
    });
});



function openVideo() {
    let videoContainer = document.getElementById("video-container");
    let videoPlayer = document.getElementById("video-player");
    let play = document.getElementById("button-play")

    videoPlayer.src = "https://www.youtube.com/embed/dQw4w9WgXcQ";

    videoContainer.style.display = "flex";
    play.style.display ="none"
}
// function closeVideo() {
//     let  videoContainer = document.getElementById("video-container");
//     let videoPlayer = document.getElementById("video-player");
//     let play = document.getElementById("button-play");
//

//     videoPlayer.src = "";
//     videoContainer.style.display = "none";
//     play.style.display = "flex"
// }


 // feedback pagination
const feedbackWrapper = document.querySelector('.feedback-wrapper-down');
const feedbackDots = document.querySelectorAll('.dot-feedback');

// Функція прокрутки (1 - вправо, -1 - вліво)
function scrollFeedback(direction) {
    const itemWidth = feedbackWrapper.querySelector('.feedback-item').offsetWidth + 10; // Враховуємо відступи
    feedbackWrapper.scrollBy({ left: itemWidth * direction, behavior: 'smooth' });
}
// Відстеження активної крапки
feedbackWrapper.addEventListener('scroll', () => {
    const scrollPosition = feedbackWrapper.scrollLeft;
    const itemWidth = feedbackWrapper.querySelector('.feedback-item').offsetWidth + 10;
    const activeIndex = Math.round(scrollPosition / itemWidth);

    feedbackDots.forEach((dot, index) => {
        if (index === activeIndex) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
});

// Клік по крапкам для перемикання
feedbackDots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        const itemWidth = feedbackWrapper.querySelector('.feedback-item').offsetWidth + 10;
        feedbackWrapper.scrollTo({ left: itemWidth * index, behavior: 'smooth' });
    });
});




