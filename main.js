const email =document.querySelector("#email");
const username =document.querySelector("#name");
const password =document.querySelector("#password1");
const confirmPassword =document.querySelector("#password2");
const error = document.querySelectorAll(".control-form .error");
const submit = document.querySelector(".submit")
const form = document.querySelector("form");
const parent = document.querySelector(".control-form")
const spanBar = document.querySelectorAll(".spanBar")
const inputs = document.querySelectorAll('input');


function checkError(){

  for(let i = 0; i < inputs.length; i++) {
    if (inputs[i].value.length === 0) {
      showError(inputs[i], "Type something..");
    } else if(inputs[i].value.length <=6) {
      showError(inputs[i], "You must have more than 6 character")
    }else {
      showSuccess(inputs[i],"Success")
    }
  }
}

function showError (input, message){
  const error = input.nextElementSibling;
  const spanBar = error.previousElementSibling;
  
  error.innerHTML = message;
  error.classList.add("errorColor");
  spanBar.classList.add("errorBar");
  error.classList.remove("successColor");
  spanBar.classList.remove("successBar");
}

function showSuccess (input, message){
  const error = input.nextElementSibling;
  const spanBar = error.previousElementSibling;
  error.innerHTML = message;
  error.classList.add("successColor");
  spanBar.classList.add("successBar");
  error.classList.remove("errorColor");
  spanBar.classList.remove("errorBar");
}
      function checkPassword(){
        
          if(password.value.trim().length <=6 && password.value.trim().length > 0  ){
              showError(password,"Type more than 6 character")         
       }
        if(password.value.trim().length >6 ){
            showSuccess(password,"Success")
            return true     
       }
       
    }
    function checkConfirmPassword(){
      if(confirmPassword.value !== password.value && checkPassword() === true ){
        showError(confirmPassword,"Wrong password");
        confirmPassword.value = "";
      } else if (confirmPassword.value.length <=6){
        showError(confirmPassword,"type more than 6 characters");
      }else if (password.value === confirmPassword.value){
        showSuccess(confirmPassword,"Success");
      }else {
        showError(confirmPassword,"The password not match")
      }
      
    }
    function isEmailError(input) {
      const emailRegex =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    
      let emailError = !emailRegex.test(input.value);
      if (!emailError) {
        showSuccess(input, "Success");
      } else {
        showError(input, "Please enter a valid email address");
      }
    }
submit.addEventListener("click",(e)=>{
    e.preventDefault();
    checkError();
    checkPassword();
     checkConfirmPassword()
     isEmailError(email)
})
