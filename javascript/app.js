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