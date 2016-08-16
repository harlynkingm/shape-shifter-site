jQuery(document).ready(function(){
  $('#sign-up').on('click', function(){
    $('#sign-up').fadeOut(400, function(){
      $('#form-section').fadeIn(400);
    });
  });
  
  $('#docs-data').submit(function(event){
    event.preventDefault();
    var firstname = $('#firstname').val();
    var lastname = $('#lastname').val();
    var email = $('#email').val();
    var device = $('#device').val();
    $.ajax({
      url:'https://script.google.com/macros/s/AKfycby_TZvughQ6_poeXlRWSAVinPHCI0Qyl_C_TVB7GSv_ZnaSh4es/exec',
      type:'post',
      data:{
        'Apple ID or Google Play Email': email,
        'First Name': firstname,
        'Last Name': lastname,
        'Device Type': device
      },
      success: function(){
        $('#form-section').fadeOut(400, function(){
          $('#success').fadeIn(400);
        });
      },
      error: function(){
        $('#form-section').fadeOut(400, function(){
          $('#error').fadeIn(400);
        });
      }
    });
  });
});