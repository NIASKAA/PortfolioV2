const tl = gsap.timeline({default: {ease: "power1.out"} });

tl.fromTo("navbar", {opacity: 0}, {opacity: 1, duration: 1});
tl.fromTo(".mainText", {opacity: 0}, {opacity: 1, duration: 0.5});

const navButton = () => {
    const naviBtn = document.querySelector('.resButton');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    naviBtn.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

        navLinks.forEach((link, index) => {
            if(link.style.animation) {
                link.style.animation = ''
            }else {
                link.style.animation = `navFade 0.5s ease forwards ${index / 7 + 0.6}s `;
            }
        });
    });

    
}

navButton();