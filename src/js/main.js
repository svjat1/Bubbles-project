/////////////////scroll slider////////////
document.querySelectorAll(".wrapper-item").forEach((wrapper) => {
    const front = wrapper.querySelector(".front-item");
    const back = wrapper.querySelector(".back-item");

    gsap.timeline({
        scrollTrigger: {
            trigger: wrapper,
            scrub: 0,
            start: "top bottom",
            end: "center center",
        }
    })
        .fromTo(
            front,
            { xPercent: 0 },
            { xPercent: 30.5,duration: 2,ease: "none" }
        )
        .fromTo(
            back,
            { xPercent: 0 },
            { xPercent: -30.5,duration: 2,ease: "none" }, "<"
        );
});

document.querySelectorAll(".wrapper-item-reverse").forEach((wrapper) => {
    const front = wrapper.querySelector(".front-item-reverse");
    const back = wrapper.querySelector(".back-item-reverse");

    gsap.timeline({
        scrollTrigger: {
            trigger: wrapper,
            scrub: 0,
            start: "top bottom",
            end: "center center",
        }
    })
        .fromTo(
            front,
            { xPercent: 0 },
            { xPercent: -36.8, duration: 2,ease: "none" }
        )
        .fromTo(
            back,
            { xPercent: 0 },
            { xPercent: 24.9, duration: 2,ease: "none" }, "<"
        );
});

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

