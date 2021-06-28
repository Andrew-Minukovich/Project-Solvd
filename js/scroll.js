gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const restart = "restart";

//header
gsap.from(".main-header__header-wrapper", {
    duration: 1,
    opacity: 0,
    translateX: 200,
    transformOrigin: "center center",  
    ease: "back"
});

//intro

gsap.timeline({
    scrollTrigger: {
        trigger: ".intro-header__content-right",
        toggleActions: restart,
        markers: true
    }
})
.from(".intro-header__content-right", {
    duration: 1,
    opacity: 0,
    translateX: 100,
    stagger: 0.2,
    ease: "back"
})
.from(".intro-header__title", {
    duration: 0.4,
    opacity: 0,
    translateX: -100,
    stagger: 0.2,
    ease: "back"
})
.from(".intro-header__description", {
    duration: 0.4,
    opacity: 0,
    translateX: -100,
    stagger: 0.2,
    ease: "back"
})
.from(".intro-header__button", {
    duration: 0.4,
    opacity: 0,
    translateX: -100,
    stagger: 0.2,
    ease: "back"
});

gsap.timeline({
    scrollTrigger: {
        trigger: ".intro-content",
        toggleActions: restart,
        markers: true
    }
})
.from(".intro-content__progress-bar", {
    duration: 1,
    opacity: 0,
    translateX: -100,
    ease: "back"
})
.from(".intro-content__point", {
    duration: 0.9,
    opacity: 0,
    translateX: -100,
    stagger: 0.5,
    ease: "back"
})
.from(".intro-content__target-item", {
    duration: 0.9,
    opacity: 0,
    translateX: -100,
    stagger: 0.5,
    ease: "back"
});

gsap.timeline({
    scrollTrigger: {
        trigger: ".intro-content",
        toggleActions: restart,
        markers: true
    }
})
.from(".intro-content__bonus-title", {
    duration: 1,
    opacity: 0,
    translateX: 100,
    ease: "back"
})
.from(".intro-content__bonus-value", {
    duration: 0.4,
    opacity: 0,
    translateX: 100,
    ease: "back"
})
.from(".intro-content__bonus-ownership", {
    duration: 0.4,
    opacity: 0,
    translateX: 100,
    ease: "back"
})
.from(".intro-content__bonus-end-title", {
    duration: 0.4,
    opacity: 0,
    translateX: 100,
    ease: "back"
})
.from(".time-section", {
    duration: 0.4,
    opacity: 0,
    translateX: 100,
    stagger: 0.4,
    ease: "back"
});


gsap.timeline({
    scrollTrigger: {
        trigger: ".intro-content__lower",
        toggleActions: restart,
        markers: true
    }
})
.from(".intro-content__item", {
    duration: 1,
    opacity: 0,
    translateX: -100,
    stagger: 0.4,
    ease: "back"
})
.from(".social-media__element", {
    duration: 0.4,
    opacity: 0,
    translateX: 100,
    stagger: 0.4,
    ease: "back"
});

//ecosystems

gsap.from(".ecosystems__header", {
    scrollTrigger: {
        trigger: ".ecosystems__header",
        toggleActions: restart,
        markers: true
    },
    duration: 0.6,
    opacity: 0,
    translateY: 40,
    ease: "back"
});

gsap.timeline({
    scrollTrigger: {
        trigger: ".ecosystems__advantages",
        start: "top bottom",
        toggleActions: restart,
        markers: true
    },
    delay: 0.6
})
.from(".ecosystems__advantage", {
    duration: 1,
    opacity: -0.5,
    translateY: 40,
    stagger: 0.1,
    ease: "back"
});

//platform

gsap.from(".platform__header", {
    scrollTrigger: {
        trigger: ".platform__header",
        toggleActions: restart,
        markers: true
    },
    duration: 0.6,
    opacity: 0,
    translateY: 40,
    ease: "back"
});

gsap.from(".platform__complex-tabs", {
    scrollTrigger: {
        trigger: ".platform__complex-tabs",
        toggleActions: restart,
        markers: true
    },
    duration: 0.6,
    opacity: 0,
    translateY: 40,
    ease: "back"
});

gsap.timeline({
    scrollTrigger: {
        trigger: ".platform__list-block",
        start: "top bottom",
        toggleActions: restart,
    },
    delay: 0.1
})
.from(".platform__list-title", {
    duration: 0.6,
    opacity: 0,
    scale: 0,
    ease: "back"
})
.from(".platform__list-subtitle", {
    duration: 0.6,
    opacity: 0,
    scale: 0,
    ease: "back"
});

gsap.timeline({
    scrollTrigger: {
        trigger: ".mvp-list",
        toggleActions: restart,
        markers: true
    }
})
.from(".mvp-list__item", {
    duration: 0.6,
    opacity: 0,
    stagger: 0.3,
    translateY: 40,
    ease: "back"
})
.from(".platform__wrapper-rounds", {
    duration: 0.6,
    opacity: 0,
    stagger: 0.1,
    translateY: 40,
    ease: "back"
});

//Mvp

gsap.timeline({
    scrollTrigger: {
        trigger: ".mvp__header",
        toggleActions: restart,
        markers: true
    }
})
.from(".mvp__header", {
    duration: 1,
    opacity: 0,
    translateY: 40,
    ease: "back"
})
.from(".mvp__description", {
    duration: 0.6,
    opacity: 0,
    translateY: 40,
    ease: "back"
});

gsap.timeline({
    scrollTrigger: {
        trigger: ".mvp__content-right",
        toggleActions: restart,
        markers: true
    }
})
.from(".mvp__item", {
    duration: 0.6,
    opacity: 0,
    stagger: 0.3,
    translateY: 40,
    ease: "back"
})
.from(".mvp__button", {
    duration: 0.6,
    opacity: 0,
    stagger: 0.1,
    translateY: 40,
    ease: "back"
})
.from(".mvp__content-left", {
    duration: 0.6,
    opacity: 0,
    stagger: 0.1,
    translateY: 40,
    ease: "back"
});

//tokens

gsap.timeline({
    scrollTrigger: {
        trigger: ".tokens__header",
        toggleActions: restart,
        markers: true
    }
})
.from(".tokens__header", {
    duration: 1,
    opacity: 0,
    translateY: 40,
    ease: "back"
})
.from(".tokens_breakdown", {
    duration: 0.6,
    opacity: 0,
    translateY: 40,
    ease: "back"
});

gsap.timeline({
    scrollTrigger: {
        trigger: ".tokens__description-block",
        toggleActions: restart,
        markers: true
    }
})
.from(".tokens__tokens-card", {
    duration: 1,
    stagger: 0.5,
    opacity: 0,
    translateX: -140,
    ease: "back"
});

gsap.timeline({
    scrollTrigger: {
        trigger: ".tokens__type-wrapper",
        toggleActions: restart,
        markers: true
    }
})
.from(".tokens-type", {
    duration: 1,
    stagger: 0.2,
    opacity: 0,
    translateX: 140,
    ease: "back"
});

//roadmap

gsap.timeline({
    scrollTrigger: {
        trigger: ".road-map__header",
        toggleActions: restart,
        markers: true
    }
})
.from(".road-map__header", {
    duration: 1,
    opacity: 0,
    translateY: 40,
    ease: "back"
})
.from(".road-map-header__description", {
    duration: 0.6,
    opacity: 0,
    translateY: 40,
    ease: "back"
});

gsap.timeline({
    scrollTrigger: {
        trigger: ".road-map-content",
        toggleActions: restart,
        markers: true
    }
})
.from(".road-map-content__item", {
    duration: 1,
    opacity: 0,
    translateX: -100,
    stagger: 0.2,
    ease: "power2"
})
.from(".road-map-content__btn__buttons", {
    duration: 1,
    opacity: 0,
    translateX: -100,
    stagger: 0.2,
    ease: "power2"
});