(function ($, Drupal, window, document, undefined) {

// Menu toggle
function menuToggle(toggle, el, animate) {
  $(toggle).click(function(){
    $(el).toggleClass('show');
    $(animate).toggleClass('animate');
  });
}

Drupal.behaviors.basic = {
  attach: function(context, settings) {

    $(window).ready(function() {
      // Call functions
      menuToggle('#toggle-main-menu', '#header-region', '#toggle-main-menu .bar');
      
    });

    $(window).load(function() {

    });

    $(window).resize(function() {

    });

    $(window).scroll(function () {

    });

    $(document).ready(function() {

    });
  }
};

})(jQuery, Drupal, this, this.document);
