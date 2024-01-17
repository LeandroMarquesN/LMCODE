

window.addEventListener('scroll', () => {
    let head = document.querySelector('#head')
    head.classList.toggle('rolagem', window.scrollY > 900)
})