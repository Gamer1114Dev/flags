let nav = document.querySelector('nav')

function scrolling() {
    console.log(window.scrollY)
    if (window.scrollY > 10) {
        nav.style.background = "#1B262F"
    } else {
        nav.style.background = "transparent"
    }
}


window.addEventListener('scroll', scrolling)