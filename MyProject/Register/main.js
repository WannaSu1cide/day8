const email =document.querySelector("#email");
const username =document.querySelector("#Name");
const password =document.querySelector("#password1");
const confirmPassword =document.querySelector("#password2");
const error = document.querySelectorAll(".control-form .error");
const submit = document.querySelector(".submit");
const form = document.querySelector("form");
const parent = document.querySelector(".control-form")
const spanBar = document.querySelectorAll(".spanBar")
const inputs = document.querySelectorAll('input');


function checkError(){
  for(let i = 0; i < inputs.length; i++) {
    if (inputs[i].value.length === 0) {
      showError(inputs[i], "Type something..");
      return false;
    } else if(inputs[i].value.length <=6) {
      showError(inputs[i], "You must have more than 6 character");
      return false
    }else {
      showSuccess(inputs[i],"Success");
      return true
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
  function checkName(input){
  
    if(input.value === ""){
        showError(username,"type something");
        return false;
    }
    else if (input.value.length <=6 ){
      showError(username,"Type more than 6 characters");
      return false;
    }else {
      showSuccess(username,"Success");
      return true;
    }
 

  }


      function checkPassword(){
          if(password.value.trim().length <=6 && password.value.trim().length > 0  ){
              showError(password,"Type more than 6 character");
              return false  
       }else if(password.value.length ===0){
          showError(password,"Type something....");
          return false
       }
        if(password.value.trim().length > 6 ){
            showSuccess(password,"Success");
            return true;
       }
       
    }
    function checkConfirmPassword(){
      if(confirmPassword.value !== password.value && checkPassword() === true ){
        showError(confirmPassword,"Wrong password");
        confirmPassword.value = "";
        return false
      } else if (confirmPassword.value.length <=6){
        showError(confirmPassword,"type more than 6 characters");
        return false
      }else if (password.value === confirmPassword.value){
        showSuccess(confirmPassword,"Success");
        return true
      }else {
        showError(confirmPassword,"The password not match");
        confirmPassword.value = "";
        return false
      }
      
    }
    function isEmailError(input) {
      const emailRegex =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
      let emailError = emailRegex.test(input.value);
      if (emailError === false) {
        showError(email,"Invalid email");
        return false;
      } else {
        showSuccess(email,"Success");
        return true;
      }
    }
    




function saveNameToLocalStorage(email,username,password) {


  const users = JSON.parse(localStorage.getItem('users')) || []

  users.push({
    email: email.value,
    password : password.value,
    username: username.value
  })
  
  localStorage.setItem("user" ,JSON.stringify(users));
}


function isNameInLocalStorage() {
  return localStorage.getItem('username') !== null&&
   localStorage.getItem('password') !== null &&
   localStorage.getItem('email') !== null;
}

  function checkAll(){
    if(checkError()=== true && checkPassword() === true &&  isEmailError(email) === true && checkName(username) && checkConfirmPassword()===true){
      return true
    }else {
      return false
    }
  }






submit.addEventListener("click",(e)=>{
    e.preventDefault();
    checkError();
    checkPassword();
     checkConfirmPassword();
     isEmailError(email);
     checkName(username);
     
    if(checkAll() === true ){
      saveNameToLocalStorage(email,username,password)
      window.location.href= "/MyProject/Loggin/loggin.html"
    }
    
    
})




