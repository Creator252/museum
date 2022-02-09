let forMap = document.querySelectorAll('.click-for-map');
let mapFrame = document.querySelectorAll('.map-frame');
let frame = document.querySelectorAll('iframe');
let ticketBtn = document.querySelector('.tickets-button');
let form2 = document.querySelector('.buy-tickets-form');
let closeForm = document.querySelector('.line');
const progress = document.querySelector('.progress');
let volume = document.querySelector('.volume');

forMap.forEach(element => {
    element.addEventListener('mouseover', event => {
        element.style.display = 'none';
        let i = element.getAttribute('data-i');
        mapFrame[i].style.display = 'block';
    })
});

forMap.forEach(element => {
    element.addEventListener('mouseout', event => {
        element.style.display = 'block';
        let i = element.getAttribute('data-i');
        mapFrame[i].style.display = 'none';
    })
});

ticketBtn.addEventListener('click', event => {
    form2.style.display = 'block';
});

closeForm.addEventListener('click', event => {
    form2.style.display = 'none';
});

progress.addEventListener('input', function () {
    const value = this.value;
    this.style.background = `linear-gradient(to right, #710707 0%, #710707 ${value}%, #fff ${value}%, white 100%)`
})

volume.addEventListener('input', function () {
    const value = this.value;
    this.style.background = `linear-gradient(to right, #710707 0%, #710707 ${value}%, #fff ${value}%, white 100%)`
})


//Burger

const burgerMenu = document.querySelector('.burger-menu-button');
const divBurgerMenu = document.querySelector('.burger-menu');
const overlay = document.querySelector('.overlay');

if (burgerMenu) {
    burgerMenu.addEventListener('click', function (e) {
        divBurgerMenu.classList.toggle('burger-menu-active');
        overlay.style.display = 'block';
    });
}

overlay.addEventListener('click', function () {
    overlay.style.display = 'none';
    divBurgerMenu.classList.remove('burger-menu-active');
})

overlay.addEventListener('click', function () {
    overlay.style.display = 'none';
})

let welcomeSliderBtns = document.getElementsByClassName('welcome-slider-button');
let sliderImgs = document.getElementsByClassName('slider-img');
let sliderBullets = document.getElementsByClassName('slider-item');
let sliderCount = 0;
sliderBullets[sliderCount].style.background = '#9d8665';

welcomeSliderBtns[0].addEventListener('click', function () {
    sliderImgs[sliderCount].classList.remove('active');
    sliderBullets[sliderCount].style.background = '#fff';
    sliderCount--;
    if (sliderCount < 0) {
        sliderCount = 4;
    }
    sliderImgs[sliderCount].classList.add('active');
    sliderBullets[sliderCount].style.background = '#9d8665';
})

welcomeSliderBtns[1].addEventListener('click', function () {
    sliderImgs[sliderCount].classList.remove('active');
    sliderBullets[sliderCount].style.background = '#fff';
    sliderCount++;
    if (sliderCount > 4) {
        sliderCount = 0;
    }
    sliderImgs[sliderCount].classList.add('active');
    sliderBullets[sliderCount].style.background = '#9d8665';
})

for (let i = 0; i < sliderBullets.length; i++) {
    sliderBullets[i].addEventListener('click', function () {
        sliderImgs[sliderCount].classList.remove('active');
        sliderBullets[sliderCount].style.background = '#fff';
        let k = sliderBullets[i].getAttribute('data-k');
        sliderCount = k;
        sliderImgs[k].classList.add('active');
        sliderBullets[sliderCount].style.background = '#9d8665';
    })
}

let videoSideItem = document.getElementsByClassName('video-side-item');
let poster = document.getElementsByClassName('poster');
let hiddenVideo = document.getElementsByClassName('hidden-video');

for (let i = 0; i < videoSideItem.length; i++) {
    videoSideItem[i].addEventListener('click', function () {
        // let n = videoSideItem[i].getAttribute('data-n');
        poster[i].style.display = 'none';
        hiddenVideo[i].style.display = 'block';
    })
}

let mainPlayBtn = document.querySelector('.play');
let video = document.querySelector('.post');
let btnPlay = document.querySelector('.btn-play');

mainPlayBtn.addEventListener('click', function () {
    video.play();
    mainPlayBtn.style.display = 'none';
    btnPlay.src = './images/svg/pause.svg';
})

video.addEventListener('click', function () {
    video.pause();
    mainPlayBtn.style.display = 'block';
    btnPlay.src = './images/svg/btn-play.svg';
})

btnPlay.addEventListener('click', function () {
    let method = video.paused ? 'play' : 'pause';
    video[method]();
    let display = video.paused ? 'block' : 'none';
    mainPlayBtn.style.display = display;
    let source = video.paused ? './images/svg/btn-play.svg' : './images/svg/pause.svg';
    btnPlay.src = source;
})

video.addEventListener('timeupdate', function () {
    let length = Math.round((video.currentTime / video.duration) * 100);
    progress.style.background = `linear-gradient(to right, #710707 0%, #710707 ${length}%, #fff ${length}%, white 100%)`;
    progress.value = length;
})

let volumeImg = document.querySelector('.volume-img');

volumeImg.addEventListener('click', function () {
    let muted = video.muted ? false : true;
    video.muted = muted;
    let mute = video.muted ? './images/svg/volume.svg' : './images/svg/mute.svg';
    volumeImg.src = mute;
})

let fullscreen = document.querySelector('.fullscreen');

fullscreen.addEventListener('click', function () {
    video.requestFullscreen();
})

video.addEventListener('seeked', function () {
    video.currentTime = (progress.value / 100) * video.duration;
    progress.style.background = `linear-gradient(to right, #710707 0%, #710707 ${progress.value}%, #fff ${progress.value}%, white 100%)`;
})

document.addEventListener('keyup', (e) => {
    e.preventDefault();
    if (e.code == 'Space' && window.scrollY > 3000 && window.scrollY < 4500) {
        if (video.paused) {
            video.play();
            mainPlayBtn.style.display = 'none';
        } else {
            video.pause();
            mainPlayBtn.style.display = 'block';
        }
    }
})


let slidContent = document.querySelector('.slid-content');
let slidContentResize = document.querySelector('.slid-content-resize');
let slider = document.querySelector('.slider');

slidContent.addEventListener('mousemove', (e) => {
    let x = e.offsetX;
    slidContentResize.style.width = x + 'px';
    slider.style.left = x + 'px';
})

// let numberInputs = document.getElementsByClassName('number');
// let minuses = document.getElementsByClassName('minus');
// let pluses = document.getElementsByClassName('plus');
// let total = document.querySelector('.total');
// let totalCount = 0;

// minuses[0].addEventListener('click', function () {
//     totalCount = totalCount + numberInputs[0].value * 20;
//     total.textContent = `Total €${totalCount}`;
// })

// pluses[1].addEventListener('click', function () {
//     totalCount = numberInputs[1].value * 20;
//     total.textContent = `Total €${totalCount}`;
// })

let reg = /[A-Za-zА-Яа-яЁё\s]/;
let fname = document.querySelector('#name');
let mail = document.querySelector('#mail');
let bookBtn = document.querySelector('.book-button');
let regMail = /[0-9A-Za-z_\-]{3,}@[a-z]{4,}\.[a-z]{2,}/;
let regTel = /[0-9]{12}/;
let tel = document.querySelector('#tel');
let messege = document.querySelectorAll('.messege');

bookBtn.addEventListener('click', function (e) {
    e.preventDefault();
    if (!reg.test(fname.value)) {
        messege[0].textContent = 'Name error';
        messege[0].style.color = 'red';
        messege[0].style.fontSize = '28px';
    }
});

bookBtn.addEventListener('click', function (e) {
    e.preventDefault();
    if (!regMail.test(mail.value)) {
        messege[1].textContent = 'Mail error';
        messege[1].style.color = 'red';
        messege[1].style.fontSize = '28px';
    }
});

bookBtn.addEventListener('click', function (e) {
    e.preventDefault();
    if (!regTel.test(tel.value)) {
        messege[2].textContent = 'Telephone error';
        messege[2].style.color = 'red';
        messege[2].style.fontSize = '28px';
    }
});

let dark = document.querySelector('.dark');
let tour = document.querySelector('#Visiting');
let videoSection = document.querySelector('#Video');
let ticketsSection = document.querySelector('#Tickets');
let contactsSection = document.querySelector('#Contacts');
let contactsInfo = document.querySelectorAll('.contacts-ref');

dark.addEventListener('click', function () {
    tour.style.background = '#000';
    tour.style.color = '#fff';
    videoSection.style.background = '#000';
    videoSection.style.color = '#fff';
    ticketsSection.style.background = '#000';
    ticketsSection.style.color = '#fff';
    ticketBtn.style.background = '#fff';
    ticketBtn.style.color = '#000';
    contactsSection.style.background = '#000';
    contactsSection.style.color = '#fff';
})