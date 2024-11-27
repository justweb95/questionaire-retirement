// Custom button
$(window).ready(function(){
  $(".boton").wrapInner('<div class=botontext></div>');
      
      $(".botontext").appendTo( $(".boton") );
      
      $(".boton").append('<span class="twist"></span><span class="twist"></span><span class="twist"></span><span class="twist"></span>');
      
      $(".twist").css("width", "26%");
  });