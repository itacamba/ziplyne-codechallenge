// target mobile menu
const mobileMenu = document.getElementById('mobile-nav')
let ismobileMenuClicked = false

mobileMenu.addEventListener("click", (e) => {
    const mobileItems = document.getElementById('mobile-items')
    ismobileMenuClicked = !ismobileMenuClicked
    ismobileMenuClicked? mobileItems.style.display = 'flex' : mobileItems.style.display ='none'

})