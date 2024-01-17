// Video aula: https://www.youtube.com/watch?v=29vJqTa53gs&ab_channel=Sujeitoprogramador
// bilbioteca para revelar os icones:
// https://scrollrevealjs.org/guide/customization.html 

window.sr = ScrollReveal({ reset: true });

// https://dev.to/uitalorss/animando-elementos-ao-rolar-a-pagina-com-o-scrollreveal-3b8e

// Aplicando efeitos da biblioteca SrollReveal.
// Lembrando que colcamos uma tag em nosso html que está abaixo  da stag metas

// na classes .hiden ihid2 e .hid3 e hid4 criamos em nosso css e aplicamos nos elementos do html para aparecer de acordo com que está configurado abaixo.

sr.reveal(' .hiden  ', { duration: 2500 });

sr.reveal('.hid2', {
    delay: 500,
    rotate: { x: 100, Y: 80, z: 0 },
    duration: 1000,
});

sr.reveal('.hid3', {
    delay: 1100,
    rotate: { x: 0, Y: 100, z: 0 },
    duration: 3000,
});
sr.reveal('.hid4', {
    origin: "left",
    distance: "200px",
    duration: 1200,
    delay: 1000,
    rotate: { x: 0, Y: 100, z: 180 }

});
sr.reveal('.hid5', {
    origin: "left",
    distance: "200px",
    duration: 1800,
    delay: 1100,
    rotate: { x: 0, Y: 0, z: 0 }
});
sr.reveal('.hid5-1', {
    origin: "left",
    distance: "200px",
    duration: 1800,
    delay: 2000,
    rotate: { x: 0, Y: 0, z: 0 }
});
sr.reveal('.hid5-2', {
    origin: "left",
    distance: "200px",
    duration: 1800,
    delay: 2500,
    rotate: { x: 0, Y: 0, z: 0 }
});
sr.reveal('.hid6', {
    origin: "left",
    distance: "200px",
    duration: 1800,
    delay: 1100,
    rotate: { x: 0, Y: 0, z: 100 }
});
// cards
sr.reveal('.hid7', {
    origin: "top",
    distance: "900px",
    duration: 1800,
    delay: 1000,
    rotate: { x: 0, Y: 0, z: 380 }
});
sr.reveal('.hid7-1', {
    origin: "top",
    distance: "900px",
    duration: 1800,
    delay: 1500,
    rotate: { x: 0, Y: 0, z: 180 }
});
sr.reveal('.hid7-2', {
    origin: "top",
    distance: "900px",
    duration: 1800,
    delay: 2000,
    rotate: { x: 0, Y: 0, z: 90 }
});