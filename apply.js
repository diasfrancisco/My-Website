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