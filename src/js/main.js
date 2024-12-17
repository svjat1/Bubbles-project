/////////////////scroll slider////////////
const frontItem = document.querySelectorAll('.front-item');
const backItem = document.querySelectorAll('.back-item')
const frontItem2 = document.querySelectorAll('.front-item-reverse');
const backItem2 = document.querySelectorAll('.back-item-reverse')

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
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


/////////////////////////mobile style scrolling/////////////////////////
new Swiper('.swiper', {
    loop: true,
    spaceBetween: 8,
    slidesPerView: 'auto',

    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
    },

    navigation: {
        nextEl: '.arrow-right',
        prevEl: '.arrow-left',
    },
    breakpoints:{
        0:{
            slidesPerView: 1.15,
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
                clickable: true,
            },
        },
        577:{
            pagination: {
                el: '.pagination-desktop',
                type: 'bullets',
                clickable: true,
            },
        }
    }
});


////////////////Tariffs animation////////////////
function animateOnScroll({boxSelector,  containerSelector, triggerRatio = 0.8}) {
    const boxes = document.querySelectorAll(boxSelector);
    const triggerPoint = window.innerHeight * triggerRatio;
    let firstTwoAnimated = false;
    const thirdBox = document.querySelector(containerSelector);

    document.addEventListener('scroll', () => {
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
}
animateOnScroll({
    containerSelector: '.tariff-container-3',
    boxSelector: '.box'
});
animateOnScroll({
    boxSelector: '.wyg-box',
    containerSelector: '.wyg-center-up',
    triggerRatio: 0.7
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

//////////////////// highlight Random Image/////////////////
function highlightRandomImage() {
    const images = document.querySelectorAll('.circle-avatar');
    const randomIndex = Math.floor(Math.random() * images.length);

    images.forEach(img => img.classList.remove('highlight'));

    images[randomIndex].classList.add('highlight');
}

setInterval(highlightRandomImage, 1000);

