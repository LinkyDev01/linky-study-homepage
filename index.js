// 간단한 스크립트: 버튼 클릭 시 콘솔 로그
document.querySelectorAll('.btn-primary').forEach(btn => {
    btn.addEventListener('click', () => {
        console.log('스터디 페이지로 이동합니다.');
    });
});

// Fade-in animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in-up').forEach(el => {
    observer.observe(el);
});

// Image Slider
const sliderTrack = document.getElementById('sliderTrack');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentIndex = 0;
const items = document.querySelectorAll('.slider-item');
const itemWidth = items[0].offsetWidth + 20; // margin 포함

// 자동 슬라이드
let autoSlide = setInterval(() => {
    nextBtn.click();
}, 3000); // 3초마다 자동 이동

// 버튼 클릭 시 자동 슬라이드 리셋
function resetAutoSlide() {
    clearInterval(autoSlide);
    autoSlide = setInterval(() => {
        nextBtn.click();
    }, 3000);
}

nextBtn.addEventListener('click', () => {
    currentIndex++;
    if (currentIndex >= items.length / 2) { // 복제 이미지 고려
        currentIndex = 0;
        sliderTrack.style.transition = 'none';
        sliderTrack.style.transform = `translateX(0)`;
        setTimeout(() => {
            sliderTrack.style.transition = 'transform 0.5s ease';
        }, 50);
    } else {
        sliderTrack.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
    }
    resetAutoSlide();
});

prevBtn.addEventListener('click', () => {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = (items.length / 2) - 1;
        sliderTrack.style.transition = 'none';
        sliderTrack.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
        setTimeout(() => {
            sliderTrack.style.transition = 'transform 0.5s ease';
        }, 50);
    } else {
        sliderTrack.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
    }
    resetAutoSlide();
});