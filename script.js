$(document).ready(function(){
  insertContent();

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

  $('#learn-btn').click(function(){
    goToByScroll('start-content');
  });
});

document.getElementById('main-body').onclick = function(e) {
    if(e.target != document.getElementById('side-menu')) {
        $('.side-menu').slideUp(350);
    }
}

function goToByScroll(id){
    id = id.replace("link", "");
    $('html,body').animate({scrollTop: $("#"+id).offset().top-100}, 'slow');
}

function insertContent() {
  $.getJSON( "content.json", function( data ) {
    $.each( data, function() {
    $('#start-content').text((data['start_content']));
    });
  });
}
