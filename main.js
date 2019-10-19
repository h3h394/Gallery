const allImagesWrap = document.querySelector('.allImagesWrap'),
    mainImg = document.querySelector('.mainImg'),
    container = document.querySelector('.container');

mainImg.innerHTML = `<img src="img/nature1.jpg">`;

const allImages = [
    {
        url: 'img/nature2.jpg'
    },
    {
        url: 'img/nature3.jpg'
    },
    {
        url: 'img/nature4.jpg'
    },
    {
        url: 'img/nature5.jpg'
    },
    {
        url: 'img/nature6.jpg'
    },
    {
        url: 'img/nature7.jpg'
    }
];

allImages.forEach(img => {
    allImagesWrap.innerHTML += `<img src=${img.url}>`;
});

container.addEventListener('click', e => {
    if (e.target.tagName === 'IMG') {
        mainImg.innerHTML = `<img src=${e.target.getAttribute('src')}>`;
    }
});