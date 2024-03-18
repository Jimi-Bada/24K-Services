var swiper = new Swiper('.swiper-container', {
  slidesPerView: 'auto',
  loop: true,
  autoplay: {
    delay: 2000, // 2 seconds
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  // breakpoints: {
  //   // when window width is >= 992px
  //   992: {
  //     slidesPerView: 3
  //   },
  //   // when window width is >= 768px and < 992px
  //   768: {
  //     slidesPerView: 2
  //   },
  //   // when window width is < 768px
  //   0: {
  //     slidesPerView: 1
  //   }
  // }
  // Coverflow effect
  // effect: 'coverflow',
  // coverflowEffect: {
  //   rotate: 50,
  //   stretch: 0,
  //   depth: 100,
  //   modifier: 1,
  //   slideShadows: true,
  // }
 
});
var container = document.querySelector('.swiper-container');
      var prevButton = document.querySelector('.swiper-button-prev');
      var nextButton = document.querySelector('.swiper-button-next');

      container.addEventListener('mouseenter', function () {
        prevButton.style.display = 'block';
        nextButton.style.display = 'block';
        swiper.autoplay.stop();
      });

      container.addEventListener('mouseleave', function () {
        prevButton.style.display = 'none';
        nextButton.style.display = 'none';
        swiper.autoplay.start();
      });


      
const navButton = document.getElementById("nav-button");
const links = document.querySelectorAll('.nav-item a');



links.forEach(function(link){
    link.addEventListener('click',function(event){
        links.forEach(function(link){
            link.classList.remove('active');
        })
        event.target.classList.add('active');
        
    })
})
function toggleBackgroundColor() {
    if (navButton.classList.contains('background-change')) {
        navButton.classList.remove('background-change')
    } else {
        navButton.classList.add('background-change');
    }
}
navButton.addEventListener('click', toggleBackgroundColor);
// function setActiveLinks(){
//     const currentUrl = window.location.pathname;
//     links.forEach(link => {
//         if(link.href === window.location.href || link.getAttribute('href') === currentUrl){
//             link.classList.add('active');
//         }else{
//             link.classList.remove('active');
//         }
//         });
// }
// links.forEach(link =>{
//     link.addEventListener('click', setActiveLinks);
// });
// setActiveLinks();

    