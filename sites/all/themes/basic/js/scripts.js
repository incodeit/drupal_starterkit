(function ($, Drupal, window, document, undefined) {

// Menu toggle
function menuToggle() {
  $('#toggle-main-menu').click(function(){
    $('ul.nice-menu li.menuparent ul').removeClass('open');
    $('#header-region').toggleClass('show');
    $('#toggle-main-menu .bar').toggleClass('animate');
  });
}

Drupal.behaviors.basic = {
  attach: function(context, settings) {

    $(window).ready(function() {
      // Call functions
      menuToggle();
      
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
