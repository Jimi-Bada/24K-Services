const navButton = document.getElementById("nav-button");
const links = document.querySelectorAll('.nav-item a');
// let screenwidth = window.innerWidth

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