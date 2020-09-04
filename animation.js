const waveContent = document.querySelector('#wave-content')
const options = {
    root: null,
    threshold: 0,
    rootMargin: "-50px"
}

const observer = new IntersectionObserver((entries, observer)=> {
    entries.forEach(entry => {
        entry.target.classList.toggle('slide-from-left')
    });

}, options)

observer.observe(waveContent)