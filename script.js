const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const close = document.getElementById('close');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}
if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}

const latest_bar = document.getElementById('latest_bar');
const latest_navbar = document.getElementById('latest_navbar');
const latest_close = document.getElementById('latest_close');

if (latest_bar) {
    latest_bar.addEventListener('click', () => {
        latest_navbar.classList.add('active');
    })
}
if (latest_close) {
    latest_close.addEventListener('click', () => {
        latest_navbar.classList.remove('active');
    })
}

const gallery_bar = document.getElementById('gallery_bar');
const gallery_navbar = document.getElementById('gallery_navbar');
const gallery_close = document.getElementById('gallery_close');

if (gallery_bar) {
    gallery_bar.addEventListener('click', () => {
        gallery_navbar.classList.add('active');
    })
}
if (gallery_close) {
    gallery_close.addEventListener('click', () => {
        gallery_navbar.classList.remove('active');
    })
}