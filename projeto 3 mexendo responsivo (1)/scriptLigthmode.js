const chk = document.getElementById('chk')

chk.addEventListener('change', () => {
    alert("Modulo de exibição alterado");

    const bg = document.getElementById("bg");

    bg.classList.toggle('lightmode');

    const logo = document.getElementById("logoId")
    logo.classList.toggle('ligth')

    const barras = document.getElementById("barra")
    barras.classList.toggle('ligthbar')

    const lb = document.getElementById("mobile-menu")

    lb.style.background = "#0E273C";
    lb.style.borderRadius = "50%";
    lb.style.width = "45px";
    lb.style.opacity = ".3"

})