const email = document.querySelector(".email");
const password = document.querySelector(".password");
const confirmPassword = document.querySelector(".confirm");
const inputs = document.querySelectorAll(".input__forgot")
const btn = document.querySelector(".submit__btn")

function showError(input ,message){
    let span = input.nextElementSibling;
    let errorMessage = span.nextElementSibling;
    span.classList.add("error");
    errorMessage.classList.remove("success")
    errorMessage.classList.add("show__message");
    errorMessage.innerText = message;    
}
function showSuccess(input,message){
    let span = input.nextElementSibling;
    let errorMessage = span.nextElementSibling
    span.classList.remove("error");
    span.classList.add("successBar");
    errorMessage.classList.add("success");
    errorMessage.innerText = message;
}
function CheckError(inputs) {
    let hasError = false;
    for (let i = 0; i < inputs.length; i++) {
        let input = inputs[i];
        if (input.value === "") {
            showError(input, "Type something...");
            hasError = true;
        } else if (input.value.length <= 6) {
            showError(input, "Have more than 6 characters");
            hasError = true;
        } else {
            showSuccess(input, "Success");
        }
    }
    return !hasError;
}

    function checkEmailIvalid(input){
            const emailRegex =
            /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
            let emailError = emailRegex.test(input.value);
            if (emailError === false) {
              showError(email,"Invalid email");
              console.log(false)
              return false;
            } else {
              showSuccess(email,"Success");
              console.log(true)
              return true;
            }
    }
        function checkConfirmPassword(){
            if(confirmPassword.value === password.value && confirmPassword.value !== ""){
                showSuccess(confirmPassword,"Success");
                console.log(true)
                return true;
            }else {
                showError(confirmPassword,"Not the same password");
                confirmPassword.value ="";
                console.log(false);
                return false;
            }
        }

      function checkAll(){
    const MainFunction = [CheckError([email,password,confirmPassword]), checkConfirmPassword(), checkEmailIvalid(email)];
    if(MainFunction.every(func => {
        return func === true;
    })) {
        const user = JSON.parse(localStorage.getItem('users')) || []
        user.push({
            email:email.value,
            password:password.value
        })
        localStorage.setItem("users",JSON.stringify(user));
    } else {
        return false;
    }
}

function alert(){
    const  alert = [CheckError([email,password,confirmPassword]), checkConfirmPassword(), checkEmailIvalid(email)];
    if(alert.every(func => {
        return func === true;
    })) {
        confirm("are u remember all infomation ?")
        if( confirm("are u remember all infomation ?")){
            window.location.href = "/Loggin/loggin.html"
        }
    }


}



btn.addEventListener("click",(e)=>{
    e.preventDefault();
    CheckError([email,password,confirmPassword]);
    checkEmailIvalid(email);
    checkConfirmPassword();
    checkAll();
    alert();
})

