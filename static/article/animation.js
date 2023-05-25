const svgObject = document.querySelector('.svg-object');

svgObject.addEventListener('load', function () {
  const svgDocument = svgObject.contentDocument;
  const line = svgDocument.querySelector('.Line_1');

  gsap.from(line, {
    x: -400,
    duration: 2,
    ease: "power2.out",
  });

  // //  Це б можливо могло працювати. Але - DrawSVGPlugin.min.js is a Club GreenSock perk
  // gsap.set(line, { drawSVG: "0%" });
  //
  // gsap.to(line, {
  //   duration: 2,
  //   drawSVG: "100%",
  //   ease: "power2.out",
  // });


});


// gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", function () {
  gsap.fromTo(".content_column-animation",
    {
      scale: 0.5,
      opacity: 0.40,
    },
    {
      scale: 1,
      opacity: 1,
      duration: 1,
      scrollTrigger: {
        trigger: ".scroll-container",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    })
})


