(function(){

    'use strict';


    var $projects = $('.projects');

    $projects.isotope({
        itemSelector: '.item',
        layoutMode: 'fitRows'
    });

    $('ul.filters > li').on('click', function(e){

        e.preventDefault();

        var filter = $(this).attr('data-filter');

        $('ul.filters > li').removeClass('active');
        $(this).addClass('active');

        $projects.isotope({filter: filter});

    });


})(jQuery);




  
  (function($){
  
  $(function(){
    
      $('html').toggleClass('no-js js');
    
    $('.toggle-box .toggle').click(function(e){
        e.preventDefault();
        
        $(this).next('.content').fadeToggle();
    });
    
  });
  
})(jQuery);


