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
    for(var i = 0; i < reveals.length; i++){
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150
        if(revealtop < windowheight - revealpoint){
            reveals[i].classList.add('active');   
        }
        else{
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


