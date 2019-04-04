$("document").ready(function() {
    $('#submit').prop('disabled', true);
    
    $('.form').submit(function(e) {
        e.preventDefault();
        let unameValue = $('#username').val();
        let ageValue = $('#age').val();
        let retypeValue = $('#retype').val();
        let passwordValue = $('#password').val();
        
        $(".error").remove();
     
        if (unameValue.length < 6) {
          $('#username').after('<span class="error">Username must be at least 6 characters long</span>');
        }
        if (ageValue < 18) {
          $('#age').after('<span class="error">Valid age required!</span>');
        } 
        if (passwordValue.length < 8) {
          $('#password').after('<span class="error">Password must be at least 8 characters long</span>');
        }
        if (retypeValue.length < 8) {
          $('#retype').after('<span class="error">Password must be at least 8 characters long</span>');
        }
        if (retypeValue !== passwordValue) {
          $('#retype').after('<span class="error">Password does not match</span>');
        }
        else if (ageValue >= 18){
          $('#age').after('<span class="error">OK!</span>');
        }
        console.log('submitted');
        
    });
    $("input").blur(function(){
      let unameValue = $('#username').val();
      let ageValue = $('#age').val();
      let retypeValue = $('#retype').val();
      let passwordValue = $('#password').val();
        
        const allValid = unameValue && (ageValue >= 18) && retypeValue && passwordValue;
        
        if (allValid) {
            $('#submit').prop('disabled', false);    
        } else {
            $('#submit').prop('disabled', true);    
        }

    });
    // $('#username').on('input', function() {
    // $('input').on('input', function(event) {
      // const input = $(this);
      // const info = input.val();
      // let unameValue = $('#username').val();
      // let ageValue = $('#age').val();
      // let retypeValue = $('#retype').val();
      // let passwordValue = $('#password').val();
      // const allValid = UnameValue.length || ageValue.length || (retypeValue !== passwordValue) || passwordValue.length;

      // console.log('E', event, event.data)
      // check8Char(event);
    // });
    $('#username').on('input', check6Char);

    function check6Char(e) {
      const inputElement = $(e.target);
      let val = inputElement.val();
      let reg6Char = new RegExp(/^[0-9a-zA-Z]{6,}$/);
      const is6Char = reg6Char.test(val);

      isValid(inputElement, is6Char);
    }

    $('#password').on('input', check8Char);
    $('#retype').on('input', check8Char);
    
    function check8Char(e) {
      // console.log('E', e, e.data)
      const inputElement = $(e.target);
      let val = inputElement.val();
      let reg8Char = new RegExp(/^[0-9a-zA-Z]{8,}$/);
      const is8Char = reg8Char.test(val);
      
      isValid(inputElement, is8Char);
    }

    // $('#age').on('input', checkAge);

    // function checkAge(e) {

    //   const inputElement = $(e.target);
    //   let val = inputElement.val();
    //   let regAge = new RegExp(/^(?=.*\d)$/);
    //   const isAge = regAge.test(val);
      
    //   isValid(inputElement, isAge);
    // }

    function isValid(inputElement, isValid) {
      
      if(isValid) {
        inputElement.removeClass("invalid").addClass("valid");
      } else {
        inputElement.removeClass("valid").addClass("invalid");}
    }
    
});
