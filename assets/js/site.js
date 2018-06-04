//Functions

function getCurrentYear() {
  var today = new Date();
  var year = today.getFullYear();

  return year;
}

function renderYear() {
  var elem = document.getElementById('year');
  elem.innerHTML = getCurrentYear();
}

var Site = (function($){

  return {

    init: function () {
      this.cacheDom();
      this.animateSiteOnLoad(function() {
        this.animateElem(this.$header);
        this.animateElem(this.$filters);
        this.initGallery();
        this.initProjectFilters();
      }.bind(this));
    },

    cacheDom: function() {
      this.$body = $('body');
      this.$header = this.$body.find('.header');
      this.$filters = this.$body.find('.filters');
      this.$gallery = this.$body.find('.swipebox');
      this.$projects = this.$body.find('.projects');
    },

    animateSiteOnLoad: function(callback) {
      this.$body.attr('data-state', 'loaded');
      if (callback !== undefined) {
        callback();
      };
    },

    animateElem: function(elem) {
      setTimeout(function(){
        elem.addClass('animated');
      }, 500)
    },

    initGallery: function(){
      this.$gallery.swipebox({
        hideBarsDelay: 10000
      });
    },

    initProjectFilters: function() {
      var options = {
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
      };
      this.$projects.mixItUp(options);
    }

  }

})(jQuery);

//On window load
$(window).load(function() {
  Site.init();
  renderYear();
});
