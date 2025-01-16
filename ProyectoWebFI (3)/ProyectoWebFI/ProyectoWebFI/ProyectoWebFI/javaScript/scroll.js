window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 600) {
        nav.classList.add('scrolled'); // Añadir clase cuando el usuario se desplaza
    } else {
        nav.classList.remove('scrolled'); // Quitar clase cuando el usuario vuelva arriba
    }
});