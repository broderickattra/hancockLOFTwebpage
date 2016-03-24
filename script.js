$(document).ready(function(){
  $('.sub-section-right-content').click( function(){
    if ($(this).hasClass('right-content-expanded')) {
      $(this).removeClass('right-content-expanded', 500);
    } else {
      $(this).addClass('right-content-expanded', 500);
    }
  });

  $('.nav-button').click(function(){
    $('.side-menu').slideToggle(350);
  });

  $('.share-btn-div').mouseenter(function(){
    $(this).animate({'background-color': 'rgba(255,255,255,0.5)'}, 'slow');
  }).mouseleave(function(){
    $(this).animate({'background-color': 'rgba(255,255,255,0.5)'}, 'slow');
  });

});
