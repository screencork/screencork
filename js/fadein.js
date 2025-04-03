$(document).on("scroll", function () {
    var pageTop = $(document).scrollTop()
    var pageBottom = pageTop + $(window).height()
    var tags = $("section")
    
    for (var i = 0; i < tags.length; i++) {
    var tag = tags[i]
    
    if ($(tag).position().top < pageBottom) {
    $(tag).addClass("visible")
    } else {  $(tag).removeClass("visible")
    }
    }
})

$(document).on("scroll", function () {
    var pageTop = $(document).scrollTop()
    var pageBottom = pageTop + $(window).height()
    var tags = $(".fadeUp, .fadeUpDelayed, .fadeLeft, .fadeRight")
    
    for (var i = 0; i < tags.length; i++) {
    var tag = tags[i]
    
    if ($(tag).position().top < pageBottom) {
    $(tag).addClass("visible")
    } else {  $(tag).removeClass("visible")
    }
    }
})

window.onload = $(function() {
    $('#truckRoll').addClass('visible');
  });

  /**
 * Create new class for sliding text
 *
 * @params {Element} wrapper - HTML element with text content
 */
class TextSliderUpper {
    constructor(wrapper) {
      this.wrapper = wrapper;
  
      // Set delay between characters (in ms)
      this.delay = 40;
  
      // Wrap content in relevant wrappers
      this._wrapContent();
    }
  
    _wrapContent() {
      let words = this.wrapper.textContent.split(' ');
      let delay = 0;
      let content = '';
  
      // Loop through each word, wrap each character in a span
      words.forEach((word, multiplier) => {
        let word_split = word.split();
        let word_content = '';
  
        // Look through each letter, add a delay (incremented)
        word_split.forEach((char, index) => {
          delay += this.delay;
  
          word_content += `<span style="animation-delay: ${delay}ms">${char}</span>`;
        });
  
        // Add spacing between words
        if (content !== '') content += ' ';
  
        // Add wrapped words to content
        content += `<span>${word_content}</span>`;
      })
  
      // Add content to wrapper
      this.wrapper.innerHTML = content;
    }
  
    init() {
      this.wrapper.classList.add('show');
    }
  }
  
  // Get a list of all headers
  let headers = document.querySelectorAll('[data-animate]');
  
  // Loop through, add relevant class
  Array.from(headers).forEach(header => {
    let slideHeader = new TextSliderUpper(header);
  
    // Allow for delays? Sure!
    let delay = header.dataset.delay || 0;
  
    // Delay class (if necessary)
    setTimeout(() => {
      slideHeader.init();
    }, delay)
  })




