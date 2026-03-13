


/* ====================
Constants & Variables
==================== */
const $moMenuOpenBtn = document.getElementById('moMenuOpenBtn');
const $mobileMenu = document.getElementById('mobileMenu');
const $moMenuCloseBtn = document.getElementById('moMenuCloseBtn');
const $mobileGnbs = document.querySelectorAll('.mobile-gnb__li');
const $mobileLnbWraps = document.querySelectorAll('.mobile-lnb-wrap');
const $lnbCloseBtns = document.querySelectorAll('.lnb-close-btn');








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