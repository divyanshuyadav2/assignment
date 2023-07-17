$(document).ready(function() {
  var SectionView = Backbone.View.extend({
    el: '.wrap-2',
    events: {
      'click .section-link': 'navigateToSection'
    },
    initialize: function() {
      this.render();
    },
    render: function() {
      this.$('.section').eq(0).addClass('active-section');
    },
    navigateToSection: function(e) {
      e.preventDefault();
      var sectionId = $(e.target).data('section-id');
      var targetSection = $('#' + sectionId);
      var targetPosition = targetSection.offset().top;

      $('html, body').animate({
        scrollTop: targetPosition
      }, 1000);

      $('.section').removeClass('active-section');
      targetSection.addClass('active-section');
    }
  });

  var sectionView = new SectionView();
});
