let frontItem=document.querySelectorAll(".front-item"),backItem=document.querySelectorAll(".back-item"),frontItem2=document.querySelectorAll(".front-item-reverse"),backItem2=document.querySelectorAll(".back-item-reverse"),observer=new IntersectionObserver((e,t)=>{e.forEach(e=>{e.isIntersecting&&(e.target.classList.add("visible"),t.unobserve(e.target))})},{threshold:.8});function animateOnScroll({boxSelector:e,containerSelector:t,triggerRatio:o=.8}){let r=document.querySelectorAll(e),n=window.innerHeight*o,a=!1,l=document.querySelector(t);document.addEventListener("scroll",()=>{r.forEach((e,t)=>{var o=e.getBoundingClientRect().top;(a=o<n&&(e.classList.add("animate"),t<2)?!0:a)&&l.classList.add("animate")})})}function openVideo(){var e=document.getElementById("video-container"),t=document.getElementById("video-player"),o=document.getElementById("button-play");t.src="https://www.youtube.com/embed/dQw4w9WgXcQ",e.style.display="flex",o.style.display="none"}function highlightRandomImage(){var e=document.querySelectorAll(".circle-avatar"),t=Math.floor(Math.random()*e.length);e.forEach(e=>e.classList.remove("highlight")),e[t].classList.add("highlight")}frontItem.forEach(e=>{observer.observe(e)}),backItem.forEach(e=>{observer.observe(e)}),frontItem2.forEach(e=>{observer.observe(e)}),backItem2.forEach(e=>{observer.observe(e)}),new Swiper(".swiper",{loop:!0,spaceBetween:8,slidesPerView:"auto",pagination:{el:".swiper-pagination",type:"bullets",clickable:!0},navigation:{nextEl:".arrow-right",prevEl:".arrow-left"},breakpoints:{0:{slidesPerView:1.15,pagination:{el:".swiper-pagination",type:"bullets",clickable:!0}},577:{pagination:{el:".pagination-desktop",type:"bullets",clickable:!0}}}}),animateOnScroll({containerSelector:".tariff-container-3",boxSelector:".box"}),animateOnScroll({boxSelector:".wyg-box",containerSelector:".wyg-center-up",triggerRatio:.7}),document.addEventListener("DOMContentLoaded",function(){document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach(function(e){new bootstrap.Tooltip(e,{trigger:"hover",container:"body",customClass:"custom-tooltip"})})}),setInterval(highlightRandomImage,1e3);