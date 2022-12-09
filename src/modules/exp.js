let tab1 = document.querySelector('.tab1');
let tab2 = document.querySelector('.tab2');
let tab3 = document.querySelector('.tab3');
let tab4 = document.querySelector('.tab4');
let tab5 = document.querySelector('.tab5');

let tabScroll = document.querySelector('.exp__tablist-scroll');

let pageWidth = window.innerWidth;

tab1.addEventListener('click', () =>{
  if (pageWidth > 600) {
    tabScroll.style.transform = 'translateY(0)';
  }
  else {
    tabScroll.style.transform = 'translateX(0)';
  }
})

tab2.addEventListener('click', () =>{
  if (pageWidth > 600) {
    tabScroll.style.transform = 'translateY(40px)';
  }
  else {
    tabScroll.style.transform = 'translateX(120px)';
  }
})

tab3.addEventListener('click', () =>{
  if (pageWidth > 600) {
    tabScroll.style.transform = 'translateY(80px)';
  }
  else {
    tabScroll.style.transform = 'translateX(240px)';
  }
})

tab4.addEventListener('click', () =>{
  if (pageWidth > 600) {
    tabScroll.style.transform = 'translateY(120px)';
  }
  else {
    tabScroll.style.transform = 'translateX(360px)';
  }
})

tab5.addEventListener('click', () =>{
  if (pageWidth > 600) {
    tabScroll.style.transform = 'translateY(160px)';
  }
  else {
    tabScroll.style.transform = 'translateX(480px)';
  }
})