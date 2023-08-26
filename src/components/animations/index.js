import gsap from 'gsap';

const tl = gsap.timeline();

export const preLoaderAnim = () => {
  tl.to('.texts-container', {
    duration: 0,
    opacity: 1,
    ease: 'Power3.easeOut'
  })
    .from('.texts-container span', {
      duration: 1.5,
      delay: 1,
      y: 80,
      skewY: 10,
      stagger: 0.4,
      ease: 'Power3.easeOut'
    })
    .to('.texts-container span', {
      duration: 3,
      y: 80,
      skewY: -10,
      stagger: 0.2,
      ease: 'Power3.easeOut'
    })

    .to(
      '.preloader',
      {
        duration: 2,
        ease: 'Power3.easeOut',
        opacity: 0,
        onComplete: mobileLanding(),
        delay: 0.15
      },
      '-=2'
    )

    .to('.preloader', {
      duration: 0,
      css: { display: 'none' }
    });
};

export const mobileLanding = () => {
  window.innerWidth < 763 &&
    tl.from('.landing__main2', {
      duration: 1,
      delay: 0,
      opacity: 0,
      y: 80,
      ease: 'expo.easeOut'
    });
};
