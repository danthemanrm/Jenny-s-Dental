(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();

    $(document).ready(function(){
      $('.carousel').carousel();
    });

    $('.carousel.carousel-slider').carousel({full_width: true});


    $(document).ready(function(){
      $('.scrollspy').scrollSpy();
    });

    $(document).ready(function() {
      $('select').material_select();
    });
        

  }); // end of document ready
})(jQuery); // end of jQuery name space