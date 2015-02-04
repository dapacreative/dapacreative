(function($){
  var Site = {
    init: function () {
      Site.animateLogo();
      Site.gallery();
      Site.headerScroll();
      Site.projectFilters();
    },
		animateLogo: function() {
			setTimeout(function(){
  		  $('.logo').addClass('animated');
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

	Site.init();
	
})(jQuery);