var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    keyboard: {
      enabled: true,
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});
const cardModal = document.querySelectorAll('.cards-modal')
const btn = document.querySelector('.open1')
const modal1 = document.querySelector('.modal1');

const btn2 = document.querySelector('.open2')
const modal2 = document.querySelector('.modal2');

const btn3 = document.querySelector('.open3')
const modal3 = document.querySelector('.modal3');

const close1 = document.querySelector('.close1');
const close2 = document.querySelector('.close2');
const close3 = document.querySelector('.close3');

const openVideo=document.querySelectorAll('.open-video')
const sectionVideo = document.querySelectorAll('.seccion-video')
const closeSectionVideo = document.querySelectorAll('.close-video-section')
btn.onclick=()=>{
    modal1.style.display="block";   
}

close1.onclick=()=>{
    modal1.style.display="none";
}

btn2.onclick=()=>{
    modal2.style.display="block";   
}

close2.onclick=()=>{
    modal2.style.display="none";
}

btn3.onclick=()=>{
    modal3.style.display="block";   
}

close3.onclick=()=>{
    modal3.style.display="none";
}

openVideo.forEach(open=>{
    open.onclick=()=>{
        sectionVideo.style.display="block"
    }
})
closeSectionVideo.forEach(closeVideo=>{
    closeVideo.onclick=()=>{
        sectionVideo.style.display="none"
    }
})
