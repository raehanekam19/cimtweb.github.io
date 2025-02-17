// Button Menu
   btnbar = document.querySelector(".btnbar");
   btnbar.onclick = function() {
      navbarBar = document.querySelector(".navbar");
      navbarBar.classList.toggle("active");
}

// Slider
const slider = document.querySelector('.slider');
const list = document.querySelector('.list');
const thumbnail = document.querySelector('.thumbnail');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');


// Autoplay Slider
let runAutoPlay = setTimeout(() => {
   next.click();
}, 10000);

next.addEventListener('click', () => {
   initSlider('next');
});

prev.addEventListener('click', () => {
   initSlider('prev');
});

const initSlider = (type) => {
   const sliderItems = list.querySelectorAll('.item');
   const thumbnailItems = thumbnail.querySelectorAll('.item');

   if(type === 'next') {
      list.appendChild(sliderItems[0]);
      thumbnail.appendChild(thumbnailItems[0]);
      slider.classList.add('next');
   } else {
      const lastItemPosition = sliderItems.length - 1;
      list.prepend(sliderItems[lastItemPosition]);
      thumbnail.prepend(thumbnailItems[lastItemPosition]);
      slider.classList.add('prev');
   }

   setTimeout(() => {
      slider.classList.remove('next');
      slider.classList.remove('prev');
   }, 2000);

   clearTimeout(runAutoPlay);
   runAutoPlay = setTimeout(() => {
      next.click();
   }, 10000);
};





// let list = document.querySelector('.slider .list');
// let items = document.querySelectorAll('.slider .list .item');
// let dots = document.querySelectorAll('.slider .dots li');
// let prev = document.getElementById('prev');
// let next = document.getElementById('next');

// let active = 0;
// let lengthItems = items.length - 1; 

// next.onclick = function(){
//    if(active + 1 > lengthItems){
//       active = 0;
//    }
//    else {
//       active = active + 1;
//    }
//    reloadSlider();
// }

// prev.onclick = function(){
//    if(active - 1 < 0){
//       active = lengthItems;
//    }
//    else {
//       active = active - 1;
//    }
//    reloadSlider();
// }

// let refreshSlider = setInterval(()=> {next.click()}, 5000);

// function reloadSlider(){
//    let checkLeft = items[active].offsetLeft;
//    list.style.left = -checkLeft + 'px'; 

//    let lastActiveDot = document.querySelector('.slider .dots li.active');
//    lastActiveDot.classList.remove('active');
//    dots[active].classList.add('active');
//    clearInterval(refreshSlider);
//    refreshSlider = setInterval(()=> {next.click()}, 5000);
// }

// dots.forEach((li, key) => {
//    li.addEventListener('click', function(){
//       active = key;
//       reloadSlider();
//    })
// })