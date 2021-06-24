const tl = gsap.timeline({default: {ease: "power1.out"} });
tl.fromTo(".navbar", {opacity: 0}, {opacity: 1, duration: 0.5, stagger: 0.3});
tl.fromTo("#mainText", {opacity: 0}, {opacity: 1, duration: 0.8});
tl.fromTo("#secondText", {opacity: 0}, {opacity: 1, duration: 0.15});

