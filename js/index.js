// 모바일에서 아래로 스크롤 하면 헤더가 위로 슬라이딩 돼서 감춰짐
// 그러다 위로 스크롤 하면 다시 나옴


/* 모바일 메인 비주얼에서
.swiper-slide의 노드 리스트 배열을 변수에 담음
.swiper-scroll-wrap span의 너비는 (100% / 노드 리스트 length)
.swiper-scroll-wrap span의 left는 (자기의 너비값 * .swiper-slide 중 swiper-slide-active를 같이 가진 것의 인덱스 번호)
이 이벤트가 swiper slide가 on 될 때마다 함수를 적용해야 할 듯
*/




/* ====================
Constants & Variables
==================== */
const $moMenuOpenBtn = document.getElementById('moMenuOpenBtn');
const $mobileMenu = document.getElementById('mobileMenu');
const $moMenuCloseBtn = document.getElementById('moMenuCloseBtn');
const $mobileGnbs = document.querySelectorAll('.mobile-gnb__li');
const $mobileLnbWraps = document.querySelectorAll('.mobile-lnb-wrap');
const $lnbCloseBtns = document.querySelectorAll('.lnb-close-btn');

const mainSwiper = new Swiper("#mainSwiper", {
  loop: true,
  /* autoplay: {
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











/* ====================
Resonsive Functions
==================== */