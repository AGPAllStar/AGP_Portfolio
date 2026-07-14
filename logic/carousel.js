const media = document.querySelectorAll('div .carousel-media img, div .carousel-media video');
const nextBtn = document.querySelector('div .next');
const prevBtn = document.querySelector('div .prev');

let currentIndex = 0;

function showItem(index) {
    media.forEach(item => {
        item.classList.remove('active');
        if (item.tagName === "VIDEO") {
            item.pause();
            item.currentTime = 0;
        }
    });
    media[index].classList.add('active');
    if (media[index].tagName === "VIDEO") {
        media[index].play().catch(() => {});
    }
}

nextBtn.addEventListener('click', () => {
    currentIndex++;
    if (currentIndex >= media.length) {
        currentIndex = 0;
    }
    showItem(currentIndex);
});

prevBtn.addEventListener('click', () => {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = media.length - 1;
    }
    showItem(currentIndex);
});