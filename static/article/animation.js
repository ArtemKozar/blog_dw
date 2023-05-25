
const svgObject = document.querySelector('.svg-object');

svgObject.addEventListener('load', function() {
  const svgDocument = svgObject.contentDocument;
  const line = svgDocument.querySelector('.Line_1');

  gsap.from(line, {
    x: -400,
    duration: 2,
    ease: "power2.out",
  });


  // //  Це б могло працювати. Але - DrawSVGPlugin.min.js is a Club GreenSock perk
  // gsap.set(line, { drawSVG: "0%" });
  //
  // gsap.to(line, {
  //   duration: 2,
  //   drawSVG: "100%",
  //   ease: "power2.out",
  // });

});
