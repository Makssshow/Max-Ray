$(function() {
   
  
  const swiper = new Swiper('.swiper-container', {
    spaceBetween: 30,
    slidesPerView: 6,
  });
  
  
  
  
  
  gsap.registerPlugin(ScrollTrigger);
    
    ScrollTrigger.defaults({
      scrub: 0.05,
    });
    
    var header = gsap.timeline({
      scrollTrigger: {
        trigger: "header",
        start: "top top",
        end: "bottom top",
      },
    });
    
    header.to(".header__title", {marginLeft: 0})
    .to(".header__subtitle", {marginRight: 0}, 0);

    gsap.to(".about__image img", {
      scale: 1.4,
      scrollTrigger: {
        trigger: ".about__image",
        start: "top bottom",
        end: "bottom top",
      }
    });


    var mvHeader = gsap.timeline({
      scrollTrigger: {
        trigger: ".mv",
        start: "top top",
        end: "bottom bottom",
      },
      defaults: {
        ease: Linear.easeNone,
      },
    });

    mvHeader.to(".mv__title", {
      color: "#f3f3f3",
      duration: .3
    }, 0)
    .to(".mv", {
      backgroundColor: "#1a1c25",
      duration: .3,
    }, 0)
    .from(".mv__text div", {
      yPercent: 110,
      duration: 1/($(".slide").length * 2),
    }, .3 + (1/($(".slide").length)))
    .to(".mv__container", {
      xPercent: -100 * ($(".slide").length - 1),
    }, .3)


});
