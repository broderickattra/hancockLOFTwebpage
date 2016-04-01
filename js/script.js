$(document).ready(function(){
  insertHtml();
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

  $('.nav-wizard li').click(function(){
    if ($(this).hasClass('active')) {
      return;
    } else {
      $('.nav-wizard li').removeClass('active');
      $(this).addClass('active');
      var aID = $(this).find('a').attr('id');
      var stepHTML = aID + ".html";
      $('#step-content').load('../includes/'+stepHTML);
    }
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

function insertHtml() {
  $('#side-menu').load('../includes/_sideMenu.html');
  $('#step-content').load('../includes/_step1.html');
}

function insertContent() {
  $.getJSON( "content.json", function( data ) {
    $.each( data, function() {
    $('#start-content').text((data['start_content']));
    });
  });
}
