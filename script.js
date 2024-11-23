import burger from './classes.js'

const b1 = document.querySelector('.b1')
const b2 = document.querySelector('.b2')
const b3 = document.querySelector('.b3')
const b4 = document.querySelector('.b4')
const music = document.querySelector('.music')
const line = document.querySelector('.line')
const logo = document.querySelector('.logo')
const songname = document.querySelector('.songname')
const hearts = document.querySelectorAll('.heart')
const special = document.querySelectorAll('.special')
const osnova = document.querySelector('.osnova')
const burgerblock = document.querySelector('.burgerblock')
const search = document.querySelector('.search')
const favorite = document.querySelector('.favorite')
const selected = document.querySelector('.selected')
const burgerline4 = document.querySelector('.burgerline4')
const Home = document.querySelector('.Home')

favorite.style.display = 'none'
selected.style.display = 'none'
Home.style.display = 'none'
search.style.display = 'none'

osnova.addEventListener('click', () => {
    burgerblock.classList.toggle('newburgerblock')
    favorite.style.display = ''
    selected.style.display = ''
    Home.style.display = ''
    search.style.display = ''
    search.classList.toggle('search1')
    favorite.classList.toggle('favorite1')
    selected.classList.toggle('selected1')
    burgerline4.classList.toggle('burgerline5')
    Home.classList.toggle('Home1')
})

hearts.forEach((el) => {
    el.addEventListener('click', (e) => {
        el.classList.toggle('heart1')
        e.stopPropagation()
    })
})

special.forEach((el) => {
    el.addEventListener('click', (e) => {
        el.classList.toggle('special1')
        e.stopPropagation()
    })
})

favorite.addEventListener('click', () => {
    const clas1 = new burger()
    const favEl = clas1.filterFav()



    const favoriteTracks = Array.from(favEl).map(el => el.closest('.b1, .b2, .b3, .b4'));

    [b1, b2, b3, b4].forEach(track => {
        track.style.display = 'none';
    });

    favoriteTracks.forEach(track => {
        if (track) track.style.display = '';
    });
});


b1.addEventListener('click', () => {
    music.classList.toggle('music1')
    line.classList.toggle('line1')
    songname.classList.toggle('songname1')
    logo.classList.toggle('logo1')
    if (songname.innerHTML !== 'Музыка из трека 1') {
        songname.innerHTML = 'Музыка из трека 1'
    } else {
        songname.innerHTML = ''
    }
})

b2.addEventListener(('click'), () => {
    music.classList.toggle('music1')
    line.classList.toggle('line1')
    songname.classList.toggle('songname1')
    logo.classList.toggle('logo1')
    if (songname.innerHTML !== 'Музыка из трека 2') {
        songname.innerHTML = 'Музыка из трека 2'
    } else {
        songname.innerHTML = ''
    }
})

b3.addEventListener(('click'), () => {
    music.classList.toggle('music1')
    line.classList.toggle('line1')
    songname.classList.toggle('songname1')
    logo.classList.toggle('logo1')
    if (songname.innerHTML !== 'Музыка из трека 3') {
        songname.innerHTML = 'Музыка из трека 3'
    } else {
        songname.innerHTML = ''
    }
})

b4.addEventListener(('click'), () => {
    music.classList.toggle('music1')
    line.classList.toggle('line1')
    songname.classList.toggle('songname1')
    logo.classList.toggle('logo1')
    if (songname.innerHTML !== 'Музыка из трека 4') {
        songname.innerHTML = 'Музыка из трека 4'
    } else {
        songname.innerHTML = ''
    }
})
