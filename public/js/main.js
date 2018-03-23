'use strict'

var Ditch = Ditch || {}


Ditch.Slideshow = (function(d) {
  const slides = document.querySelectorAll('.saying')
  let cycling,
      current = 0

  if(slides){
    cycle(slides)
    cycling = setInterval(cycle, 6000, slides)
  }

  function cycle(slides) {
    showSlide(slides)
    if(current < slides.length - 1 ) current++
    else(current = 0)
  }

  function showSlide(slides) {

    for(let [index, slide] of slides.entries()){
      slide.classList.remove('active')
      if(index === current) slide.classList.add('active')
    }
  }

  function stopCycle() {
    clearInterval(cycling);
  }

  return d;
}(Ditch.Slideshow || {}))
