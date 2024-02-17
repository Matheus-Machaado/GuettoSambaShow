function intro() {
    document.getElementById('intro').style.opacity = '1'
    setTimeout(() => {
        document.getElementById('intro').style.top = '-100vh'
        document.getElementById('header').style.display = 'flex'
        document.getElementById('inicio').style.display = 'flex'
        document.getElementById('sobre').style.display = 'flex'
        document.getElementById('servicos').style.display = 'flex'
        document.getElementById('integrantes').style.display = 'flex'
        document.getElementById('contato').style.display = 'flex'
        document.getElementById('footer').style.display = 'flex'
    }, 2300)
}

window.addEventListener('scroll', reveal);
function reveal() {
    var reveals = document.querySelectorAll('.reveal');
    for (var i = 0; i < reveals.length; i++) {
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150
        if (revealtop < windowheight - revealpoint) {
            reveals[i].classList.add('active');
        }
        else {
            reveals[i].classList.remove('active');
        }
    }
}

function openMenu() {
    document.getElementById('nav-bar-lateral').style.width = '75vw';
}

function closeMenu() {
    document.getElementById('nav-bar-lateral').style.width = '0';
}

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a'); 
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);
};

