(function($){
  var Site = {
    init: function () {
      Site.animateLogo();
      Site.animateFilters();
      Site.gallery();
      Site.headerScroll();
      Site.projectFilters();
    },
    isLoaded: function() {
      $("body").addClass('loaded');
    },
		animateLogo: function() {
			setTimeout(function(){
  		  $('.logo').addClass('animated');
			}, 500)
		},
    animateFilters: function(){
      setTimeout(function(){
        $('.filters').addClass('animated');
      }, 500)
    },
		gallery: function(){
  		$('.swipebox').swipebox({
    		hideBarsDelay: 10000
  		});
		},
		headerScroll: function() {
  		var $body = $("body");
      $(window).scroll(function() {
          var scroll = $(window).scrollTop();
  
          if (scroll >= 250) {
              $body.addClass("animated");
          } else {
              $body.removeClass("animated");
          }
          
          if (scroll >= 300) {
              $body.addClass("fixed");
          } else {
              $body.removeClass("fixed");
          }
      });
		},
		projectFilters: function() {
      var $projects = $('.projects');
      
      setTimeout(function(){
  		  $projects.mixItUp({
  		    animation: {
        		effects: 'fade translateY(50px)',
        		duration: 300
        	},
          selectors: {
        		target: '.project'
        	},
        	load: {
        		filter: '.development'
        	}
        });
			}, 1200)
		}
	}

  //On window load
  window.onload = function() {
    Site.isLoaded();
    Site.init();
  }

  //On doucment load
  $(function() {
    // Do stuff
  });
	
})(jQuery);