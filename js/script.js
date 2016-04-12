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

});

document.getElementById('main-body').onclick = function(e) {
    if(e.target != document.getElementById('side-menu')) {
        $('.side-menu').slideUp(350);
    }
}

function insertHtml() {
  $('#side-menu').load('../includes/_sideMenu.html');
  $('#why-content').load('../includes/_why.html');
  $('#how-content').load('../includes/_how.html');
  $('#what-content').load('../includes/_what.html');
  $('#_stepIntro').load('../includes/_stepIntro.html');
  $('#_step1').load('../includes/_step1.html');
  $('#_step2').load('../includes/_step2.html');
  $('#_step3').load('../includes/_step3.html');
  $('#_stepOutro').load('../includes/_stepOutro.html');
  $('#_erpExample').load('../includes/_erpExample.html');
  $('#_geekOut').load('../includes/_geekOut.html');
  $('#_callToAction').load('../includes/_callToAction.html');
}

function insertContent() {
  $.getJSON( "content.json", function( data ) {
    $.each( data, function() {
  //  $('#start-content').text((data['start_content']));
    });
  });
}
