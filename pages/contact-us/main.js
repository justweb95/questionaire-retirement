document.querySelector('#myform').addEventListener('submit', (e) => {
  e.preventDefault();
  console.log('The form has been submitted');
  return false;
})

// Custom button
$(window).ready(function(){
  $(".boton").wrapInner('<div class=botontext></div>');
      
      $(".botontext").clone().appendTo( $(".boton") );
      
      $(".boton").append('<span class="twist"></span><span class="twist"></span><span class="twist"></span><span class="twist"></span>');
      
      $(".twist").css("width", "26%");
  });
  $(window).ready(function(){
    $(".botonSubmit").wrapInner('<div class=botonSubmitText></div>');
        
        $(".botonSubmitText").clone().appendTo( $(".botonSubmit") );
        
        $(".botonSubmit").append('<span class="twist"></span><span class="twist"></span><span class="twist"></span><span class="twist"></span>');
        
        $(".twist").css("width", "26%");
    });