// Script using Jquery to dynamically change colors of Background, MM logo and navbar according to window position.
$(window).scroll(function() {
    // selectors
    let $window = $(window),
        $body = $('body'),
        $logo = $('.logoContainer__img'),
        $nav = $('.bullet'),
        $navItem = $('.bullet__number')
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

