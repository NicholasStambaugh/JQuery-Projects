$(document).ready(function() {
    $('.selectpicker').on('change', function() {
      var url = $(this).val();
      if (url) {
        window.location = url;
      }
    });
  });  
