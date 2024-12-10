/////////////////scroll slider////////////
const frontItem = document.querySelectorAll('.front-item');
const backItem = document.querySelectorAll('.back-item')
const frontItem2 = document.querySelectorAll('.front-item-reverse');
const backItem2 = document.querySelectorAll('.back-item-reverse')

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // Зупиняє спостереження після додавання класу
        }
    });
}, {
    threshold: 0.8
});
frontItem.forEach(block => {
    observer.observe(block);
});
backItem.forEach(block => {
    observer.observe(block)
})
frontItem2.forEach(block => {
    observer.observe(block);
});
backItem2.forEach(block => {
    observer.observe(block)
})


/////////////////////////Mobile const for 4 block////////////////////
const sliderWrapper = document.querySelector('.slider-wrapper');
const WhatSliderWrapper = document.querySelector('.what-you-get-slider');
const tariffsWrapper = document.querySelector('.tariffs-bottom-section')
const feedbackWrapper = document.querySelector('.feedback-container-bottom');

const sliderDots = document.querySelectorAll('.dot');
const whatYouGetDots = document.querySelectorAll('.dot-s');
const trafficsDots = document.querySelectorAll('.tariffs-dot');
const feedbackDots = document.querySelectorAll('.dot-feedback');

/////////////// Mobile scrolling ///////////////////////////
function handleScroll(wrapper, itemClass, dots, gap = 15) {
    wrapper.addEventListener('scroll', () => {
        const scrollPosition = wrapper.scrollLeft;
        const itemWidth = wrapper.querySelector(itemClass).offsetWidth + 15;

        const activeIndex = Math.round(scrollPosition / itemWidth);

        dots.forEach((dot, index) => {
            if (index === activeIndex) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    });
}
handleScroll(sliderWrapper, '.wrapper-item', sliderDots, 55);
handleScroll(WhatSliderWrapper, '.item', whatYouGetDots);
handleScroll(tariffsWrapper, '.tariff-item', trafficsDots);
handleScroll(feedbackWrapper, '.feedback-item', feedbackDots, 150);


////////////////Tariffs animation////////////////
document.addEventListener('scroll', () => {
    const boxes = document.querySelectorAll('.box');
    const triggerPoint = window.innerHeight * 0.8;
    let firstTwoAnimated = false;
    const thirdBox = document.querySelector('.tariff-container-3');

    boxes.forEach((box, index) => {
        const boxTop = box.getBoundingClientRect().top;

        if (boxTop < triggerPoint) {
            box.classList.add('animate');
            if (index < 2) {
                firstTwoAnimated = true;
            }
        }
        if (firstTwoAnimated) {
            thirdBox.classList.add('animate');
        }
    });
});
//////////////////// Tariffs tooltips/////////////////////
document.addEventListener('DOMContentLoaded', function () {
    let tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    tooltipTriggerList.forEach(function (tooltipEl) {
        new bootstrap.Tooltip(tooltipEl, {
            trigger: 'hover',
            container: 'body',
            customClass: 'custom-tooltip'
        });
    });
});


/////////////////////Video appearance/////////////////
function openVideo() {
    let videoContainer = document.getElementById("video-container");
    let videoPlayer = document.getElementById("video-player");
    let play = document.getElementById("button-play")

    videoPlayer.src = "https://www.youtube.com/embed/dQw4w9WgXcQ";

    videoContainer.style.display = "flex";
    play.style.display = "none"
}

//////////////feedback pagination//////////////////////

// Функція прокрутки (1 - вправо, -1 - вліво)
function scrollFeedback(direction) {
    const itemWidth = feedbackWrapper.querySelector('.feedback-item').offsetWidth + 150
    feedbackWrapper.scrollBy({left: itemWidth * direction, behavior: 'smooth'});
}

// Клік по крапкам для перемикання
feedbackDots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        const itemWidth = feedbackWrapper.querySelector('.feedback-item').offsetWidth + 10;
        feedbackWrapper.scrollTo({left: itemWidth * index, behavior: 'smooth'});
    });
});

