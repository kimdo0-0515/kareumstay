// 모바일에서 아래로 스크롤 하면 헤더가 위로 슬라이딩 돼서 감춰짐
// 그러다 위로 스크롤 하면 다시 나옴




/* ====================
Constants & Variables
==================== */
/* ===== Responsive break points ===== */
const BREAK_POINT = {
  laptop: 1780,
  tab: 1280,
  mo: 768
};

/* ===== Header & Mobile menu ===== */
const $moMenuOpenBtn = document.getElementById('moMenuOpenBtn');
const $mobileMenu = document.getElementById('mobileMenu');
const $moMenuCloseBtn = document.getElementById('moMenuCloseBtn');
const $mobileGnbs = document.querySelectorAll('.mobile-gnb__li');
const $mobileLnbWraps = document.querySelectorAll('.mobile-lnb-wrap');
const $lnbCloseBtns = document.querySelectorAll('.lnb-close-btn');

/* ===== section: 메인 비주얼 ===== */
const $mainSwiperSlides = document.querySelectorAll('#mainSwiper .swiper-slide');
const $mainSwiperScroll = document.querySelector('#mainSwiper .swiper-scroll-wrap span');

const mainSwiper = new Swiper("#mainSwiper", {
  loop: true,
  /* 사이트 완성 후 주석 해제할 예정
    autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  }, */
  effect: "fade",
  pagination: {
    el: "#mainSwiper .swiper-pagination",
    type: "fraction",
  },
  breakpoints: {
    768.01: {
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }
    }
  },
  on: {
    init: updateMainSwiperScroll,
    slideChange: updateMainSwiperScroll
  }
});











/* ====================
Execute Functions
==================== */
$moMenuOpenBtn.addEventListener('click', moMenuOpenBtnClick);

$moMenuCloseBtn.addEventListener('click', moMenuCloseBtnClick);

$mobileGnbs.forEach(gnb => {
  gnb.addEventListener('click', mobileGnbsClick);
});

$lnbCloseBtns.forEach(btn => {
  btn.addEventListener('click', lnbCloseBtnClick);
});





/* ====================
Define Functions
==================== */
/* ===== Header & Mobile menu ===== */
/* 햄버거 버튼 클릭 시 모바일 메뉴 열기 */
function moMenuOpenBtnClick(){
  $mobileMenu.classList.add('is-open');
  document.body.style.overflowY = 'hidden';
}

/* 모바일 메뉴 닫기 */
function moMenuCloseBtnClick(){
  $mobileLnbWraps.forEach(i => i.classList.remove('is-open'));
  $mobileMenu.classList.remove('is-open');
  document.body.style.overflowY = '';
}

/* 모바일 메뉴 내 gnb 클릭 시 lnb 열기 */
function mobileGnbsClick(){
  const data_lnb = this.dataset.lnb;

  if(!data_lnb) return;

  const matchLnbWrap = [...$mobileLnbWraps].find(i => i.dataset.lnb == data_lnb);
  matchLnbWrap.classList.add('is-open');
}

/* 모바일 메뉴의 lnb에서 back 버튼 클릭 */
function lnbCloseBtnClick(){
  this.closest('.mobile-lnb-wrap').classList.remove('is-open');
}


/* ===== section: 메인 비주얼 ===== */
function updateMainSwiperScroll(){
  if(!$mainSwiperScroll) return;

  const scrollWidth = $mainSwiperScroll.offsetWidth;  // 마진 제외한 요소 전체 너비(패딩, 보더 포함)
  const activeIndex = this.realIndex;

  $mainSwiperScroll.style.left = `${scrollWidth * activeIndex}px`;
}








/* ====================
Resonsive Functions - Execute Functions
==================== */
window.addEventListener('resize', screenResize);
screenResize();



/* ====================
Resonsive Functions - Define Functions
==================== */
function screenResize(){
  const screenW = window.innerWidth;

  if(BREAK_POINT.tab < screenW && screenW <= BREAK_POINT.laptop){
    enterLaptop();
  }
  else if(BREAK_POINT.mo < screenW && screenW <= BREAK_POINT.tab){
    enterTab();
  }
  else if(screenW <= BREAK_POINT.mo){
    enterMo();
  }
  else{
    enterPc();
  }
}

function enterLaptop(){

}

function enterTab(){

}

function enterMo(){
  
}

function enterPc(){

}