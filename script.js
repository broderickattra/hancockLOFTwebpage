$(document).ready(function(){
  $('.sub-section-right-content').click( function(){
    if ($(this).hasClass('right-content-expanded')) {
      $(this).removeClass('right-content-expanded', 500);
    } else {
      $(this).addClass('right-content-expanded', 500);
    }
  });
});
