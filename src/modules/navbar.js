let lastScrollTop;
let navbar = document.querySelector('header')

//scroll hide
window.addEventListener('scroll',function(){
let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
if(scrollTop > lastScrollTop){
  navbar.classList.add('scroll-hide')
}
else{
  navbar.classList.remove('scroll-hide')
}
lastScrollTop = scrollTop;
});

//scroll show
window.addEventListener('scroll',function(){
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if(scrollTop > 0){
    navbar.classList.add('scroll-show')
  }
  else{
    navbar.classList.remove('scroll-show')
  }
  });