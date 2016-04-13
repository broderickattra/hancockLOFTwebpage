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
      //steps intro content
      var step_intro_data = data['steps_intro'];
      $('#step-intro-header').html(step_intro_data['header']);
      $('#step-intro-tagline').html(step_intro_data['tagline']);
      $('#step-intro-copy').html(step_intro_data['copy']);
      //step1 content
      var step_1 = data['step_1'];
      $('#step1-header').html(step_1['header']);
      $('#step1-copy').html(step_1['copy']);
      //step2 content
      var step_2 = data['step_2'];
      $('#step2-header').html(step_2['header']);
      $('#step2-copy').html(step_2['copy']);
      //step3 content
      var step_3 = data['step_3'];
      $('#step3-header').html(step_3['header']);
      $('#step3-copy').html(step_3['copy']);
      //step outro content
      var step_outro = data['step_outro'];
      $('#step-outro-header').html(step_outro['header']);
      $('#step-outro-copy').html(step_outro['copy']);
      //erp content
      var erp_data = data['erp_example'];
      $('#erp-header').html(erp_data['header']);
      //contact us content
      var contact_us = data['contact_us'];
      $('#contact-header').html(contact_us['header']);
      $('#contact-copy').html(contact_us['copy']);
      //geek out content
      var geek_out = data['geek_out'];
      $('#geek-out-header').html(geek_out['header']);
      $('#link-1').html(geek_out['link_1']);
      $('#link-2').html(geek_out['link_2']);
      $('#link-3').html(geek_out['link_3']);
      $('#link-4').html(geek_out['link_4']);
      $('#link-5').html(geek_out['link_5']);
      $('#link-6').html(geek_out['link_6']);
    });
  });
}
