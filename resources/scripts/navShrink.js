const navbar = document.querySelector('nav.navbar')
const navLogoImage = document.querySelector('img#logo')
const navMenuButton = document.querySelector('button.navbar-toggler')
const navLinks = document.querySelectorAll('a.nav-link')

navLinks.forEach(link => {
    link.classList.add('fs-5')
})

const shrinkNav = () => {
    if (document.body.scrollTop > 90 || document.documentElement.scrollTop > 90) {
        navMenuButton.style.transform = "scale(0.8)"
        navLogoImage.width = 50
        if (navbar.classList.contains('py-3')) {
            navbar.classList.remove('py-3')
        }
        navLinks.forEach(link => {
            if (link.classList.contains('fs-5')) {
                link.classList.remove('fs-5')
                link.classList.add('fs-6')
            }
        })
    } else {
        navMenuButton.style.transform = "none"
        navLogoImage.width = 60
        if (!navbar.classList.contains('py-3')) {
            navbar.classList.add('py-3')
        }
        navLinks.forEach(link => {
            if (link.classList.contains('fs-6')) {
                link.classList.remove('fs-6')
                link.classList.add('fs-5')
            }
        })
    }
}

window.onscroll = shrinkNav
