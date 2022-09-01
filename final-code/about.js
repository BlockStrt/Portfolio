// when we scroll page to about section
// check whether we passed it
// animation proceeds to fade in once in view


//elements with the '.appear' class will be the target of the fade-in animation.
const appear = document.querySelector('.appear'); 
const intro = document.querySelector('.intro')
const s4 = document.querySelector('.s4');
const s3 = document.querySelector('.s3');
const s2 = document.querySelector('.s2')



const cb = function(entries){
  entries.forEach(entry => {  //find out which elements have been intersected using 'forEach'.
    if(entry.isIntersecting){
      entry.target.classList.add('inview');
    }else{
      entry.target.classList.remove('inview');
    }
  });
}
const io = new IntersectionObserver(cb); //IntersectionObserver passes a callback function as a parameter.
 io.observe(appear);
 io.observe(intro )
 io.observe(s3);
 io.observe(s4);




