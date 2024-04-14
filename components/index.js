const hamburger = document.querySelector('.open');
const close = document.querySelector('.close');

close.onclick = () => {
    document.querySelector('.nav-menu ul').classList.remove('active');
    close.style.display = 'none';
    hamburger.style.display = 'block';
}

hamburger.onclick = () => {
    document.querySelector('.nav-menu ul').classList.toggle('active');
    close.style.display = 'block';
    hamburger.style.display = 'none';
};

