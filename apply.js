var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    var currScrollpos = window.pageYOffset;
    if (prevScrollpos > currScrollpos) {
        document.getElementById("nav-container").style.top = "0";
    } else {
        document.getElementById("nav-container").style.top = "-100px";
    }
    prevScrollpos = currScrollpos;
}


const toggleButton = document.getElementsByClassName('toggle-menu')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})