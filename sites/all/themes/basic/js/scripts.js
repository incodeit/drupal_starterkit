(function ($, Drupal, window, document, undefined) {

// Menu toggle
function menuToggle(toggle, el, animate) {
  $(toggle).on('click', function(){
    $(el + 'ul.nice-menu li.menuparent ul').removeClass('open');
    $(el).toggleClass('show');
    $(animate).toggleClass('animate');
  });
}



function menuToggleSubmenu() {
  $('li.menuparent > a').on('click' function() {
    
  });
}

Drupal.behaviors.basic = {
  attach: function(context, settings) {

    $(window).ready(function() {
      // Vars
      var windowWidth = $(window).width();
      
      // Call functions
      menuToggle('#toggle-main-menu', '#header-region', '#toggle-main-menu .bar');
      if (windowWidth <= 768) { // $tablet-pr
        
      }
    });

    $(window).load(function() {

    });

    $(window).resize(function() {
      // Vars
      var windowWidth = $(window).width();
      if (windowWidth <= 768) { // $tablet-pr
        menuToggleSubmenu('ul.nice-menu li.menuparent > a', 'ul.nice-menu li.menuparent ul');
      }
    });

    $(window).scroll(function () {

    });

    $(document).ready(function() {

    });
  }
};

})(jQuery, Drupal, this, this.document);
