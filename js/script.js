// Script using Jquery to dynamically change colors of Background, MM logo and navbar according to window position.
$(window).scroll(function() {
    // selectors
    let $window = $(window),
        $body = $('body'),
        $logo = $('.logoContainer__img'),
        $nav = $('.bullet'),
        $navItem = $('.bullet__number'),
        $panel = $('.panel');
        
    
    // Change 33% earlier than scroll position so colour is there when user arrive.
    let scroll = $window.scrollTop() + ($window.height() / 3);
   
    $panel.each(function () {
      let $this = $(this);
      if ($this.position().top <= scroll && $this.position().top + $this.height() > scroll) {
        // Remove all classes on selectors with applied color class
        $body.removeClass(function (index, css) {
            return (css.match (/(^|\s)color-\S+/g) || []).join(' ');
        });
        $logo.removeClass(function (index, css) {
            return (css.match (/(^|\s)logo-\S+/g) || []).join(' ');
        });
        $nav.removeClass(function (index, css) {
            return (css.match (/(^|\s)nav-\S+/g) || []).join(' ');
        });
        $navItem.removeClass(function (index, css) {
            return (css.match (/(^|\s)navItem-\S+/g) || []).join(' ');
        });
        // Add class of currently active section
        $body.addClass('color-' + $(this).data('color'));
        $logo.addClass('logo-' + $(this).data('color'));
        $nav.addClass('nav-' + $(this).data('color'));
        $navItem.addClass('navItem-' + $(this).data('color'));
      }
    });    
  }).scroll();



// function to provide easy click on nav-links
  function toStep(step) {
    const element = document.querySelector(`#section-${step}`);
    currentStep = step;
    element.scrollIntoView({
       behavior: 'smooth',
       block: 'start',
       inline: 'end'
    })
 }

 //Active class to bullets acording to position.
 $(window).scroll(function() {
    var position = $(this).scrollTop();

    $('.panel').each(function() {
        var target = $(this).offset().top;
        var id = $(this).attr('id');

        if (position >= target) {
            $('.bullet').removeClass('active');
            $(`.bullet > a[href=\\#${id}]`).addClass('active-' + $(this).data('color'));
        }
    });
});

//The following function controls the triggering of animations on scroll. It's used jQuery to prevent the over use of the Intersection Observer API

$(function(){
    // selectors
    let section1 = $('.section-1__img');
    let section1Top = section1.offset().top;
    let section2 = $('.section-2__tittle');
    let section2P = $('.section-2__paragraph');
    let section2Top = section2.offset().top;
    let section3 = $('.section-3__tittle');
    let section3P = $('.section-3__paragraph');
    let section3Top = section3.offset().top;
    let section4 = $('.section-4__tittle');
    let section4P = $('.section-4__paragraph')
    let section4Top = section4.offset().top;
    let section5 = $('.section-5__tittle');
    let section5P = $('.section-5__paragraph');
    let section5Img = $('.section-5__midContainer');
    let section5Top = section5.offset().top;
    let windowHeight = $(window).height()
    
    $(window).scroll(function(){
        let scroll = $(window).scrollTop();
        if ( scroll >= ( section1Top - windowHeight )){
            section1.addClass("zoomed")
            section1.css("opacity", 1)
            section1.css("transform", "scale(1.2)")
        }
        if ( scroll >= ( section2Top - windowHeight )){
            section2.addClass("fromBottom")
            section2P.addClass("fromBottom")
        }
        if ( scroll >= ( section3Top - windowHeight )){
            section3.addClass("fromSide")
            section3P.addClass("fromSide")
        }
        if ( scroll >= ( section4Top - windowHeight )){
            section4.addClass("fromBottom")
            section4P.addClass("fromBottom")
        }
        if ( scroll >= ( section5Top - windowHeight )){
            section5.addClass("appear")
            section5P.addClass("appear")
            section5Img.addClass("appear")
        }
    })
})

// Parallax effect thanks to http://pixelcog.github.io/parallax.js/
$(function(){

    var parallax = document.querySelectorAll("parallaxImage"),
        speed = 0.5;
  
    $(window).scroll(function(){
      [].slice.call(parallax).forEach(function(el,i){
  
        var windowYOffset = window.pageYOffset,
            elBackgrounPos = "50% " + (windowYOffset * speed) + "px";
  
        el.style.backgroundPosition = elBackgrounPos;
  
      });
    })
});