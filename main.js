var question = document.querySelectorAll('.question');
var readyForSubmit = false;

// Next button function
const nextQuestion = (id) => {

  // Picking up all the questions
  var q = document.getElementsByName(`q${id}`);
  var checked = [];

  // check if element is valid and checked if yes push i in array "checked"
  if (`q${id}` === 'q2' || `q${id}` === 'q3' || `q${id}` === 'q14' || `q${id}` === 'q15') {
    q.forEach(element => {
      if (element.checkValidity() == true && element.value !== '') {
        checked.push(element)
      }
      else {
        return;
      }
    })
  }
  else {
    q.forEach(element => {
      if (element.checked) {
        checked.push(element);
      }
      else {
        return;
      }
    })
  }

  // Ask if the array "checked" has more than one element if it log the value of the element
  if (checked.length > 0) {
    if (id < question.length) {
      question[id - 1].style.display = 'none'
      question[id].style.display = 'block'
      question[id].style.animation = "next .3s 1";
    }
    else{
      readyForSubmit = true;
    }
  }
  // If submited value is not valid start animation 
  else {
    document.querySelector(`.q${id}`).style.animation = "animation .3s 1";
    setTimeout(() => {
      document.querySelector(`.q${id}`).style.animation = "stop";
    }, '300')
  }
}

// Back button function
const backQuestion = (id) => {
  if (id) {
    question[id - 1].style.display = 'none' 
    question[id - 2].style.display = 'block'
    question[id - 2].style.animation = "previous .3s 1";
  }
}

// Form submit
const scriptURL = " https://script.google.com/macros/s/AKfycbxUkB9KRmkZ9wUTKjjR4avIj-j1puJPyy2_ph-LSWhkzHs4qlc0k5Z6AFyBCGXJ4CGv/exec";
const form = document.forms['myForm'];
const submitNameBtn = document.querySelector('.submitNameBtn')
const submitFormBtn = document.querySelector('.submitFormBtn')

// Button for submit email adress and name
submitNameBtn.addEventListener('click', (e) => {
  const nameInput = document.getElementsByName('q3')[0].value;
  if(nameInput !== ''){
      e.preventDefault()
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
          console.log('Success!', response)
          if(readyForSubmit){
            location.href = './pages/thank-you/thanks.html'
          }
        })
        .catch(error => console.error('Error!', error.message))
  }
  else return;
})

// Button for submiting whole form
submitFormBtn.addEventListener('click', (e) => {
  const formInput = document.getElementsByName('q15')[0].value;
  if(formInput !== ''){
      e.preventDefault()
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
          console.log('Success!', response)
          if(readyForSubmit){
            location.href = './pages/thank-you/thanks.html'
          }
        })
        .catch(error => console.error('Error!', error.message))
      submitFormBtn.setAttribute('disabled', 'true');
  }
  else return;
})

  $(window).ready(function(){
    $(".boton").wrapInner('<div class=botontext></div>');
        
        $(".botontext").clone().appendTo( $(".boton") );
        
        $(".boton").append('<span class="twist"></span><span class="twist"></span><span class="twist"></span><span class="twist"></span>');
        
        $(".twist").css("width", "26%");
    });

    $(window).ready(function(){
      $(".botonNext").wrapInner('<div class=botonNextText></div>');
          
          $(".botonNextText").appendTo( $(".botonNext") );
          
          $(".botonNext").append('<span class="twist"></span><span class="twist"></span><span class="twist"></span><span class="twist"></span>');
          
          $(".twist").css("width", "26%");
      });
    
      $(window).ready(function(){
        $(".botonBack").wrapInner('<div class=botonBackText></div>');
            
            $(".botonBackText").clone().appendTo( $(".botonBack") );
            
            $(".botonBack").append('<span class="twist"></span><span class="twist"></span><span class="twist"></span><span class="twist"></span>');
            
            $(".twist").css("width", "26%");
        });
    
  