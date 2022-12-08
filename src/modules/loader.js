const myPreloader = document.querySelector('.preloader');
const overflowHidden = document.querySelector('body');

function myLoader() {
  overflowHidden.classList.toggle('overflow-hidden')

  myPreloader.style.display = 'none'
}


setTimeout(myLoader, 1700)