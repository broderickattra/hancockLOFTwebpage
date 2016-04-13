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
    $('#side-menu').slideDown(350);
  });

});

document.getElementById('main-body').onclick = function(e) {
    if(e.target != document.getElementById('side-menu')) {
        $('#side-menu').slideUp(350);
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
      //load why section text
      var why_data = data['why_content'];
      $('#why-header').html(why_data['header']);
      $('#why-copy').html(why_data['copy']);
      //how content
      var how_data = data['how_content'];
      $('#secure-header').html(how_data['secure_header']);
      $('#secure-copy').html(how_data['secure_copy']);
      $('#fast-header').html(how_data['fast_header']);
      $('#fast-copy').html(how_data['fast_copy']);
      $('#transparent-header').html(how_data['transparent_header']);
      $('#transparent-copy').html(how_data['transparent_copy']);
      //load what content
      var what_data = data['what_content'];
      $('#what-header').html(what_data['header']);
      $('#what-section-one').html(what_data['section_1']);
      $('#what-section-two').html(what_data['section_2']);
    });
  });
}
