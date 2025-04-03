const images = document.querySelectorAll('.scroll-reveal');

const config = {
  root: '.container-scroll',
  rootMargin: '30px',
  threshold: 1.0
};

observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.intersectionRatio > 0) {      
      //entry.target.classList.remove('hidden');
      entry.target.classList.add('visible');
    } 
  });
});

images.forEach(image => {
  observer.observe(image);
});