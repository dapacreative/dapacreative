(function(){
  var Site = {
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

	Site.animateLogo();
	Site.gallery();
	Site.projectFilters();
	
})();