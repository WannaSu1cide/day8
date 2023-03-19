const loggin__email = document.querySelector(".Loggin__Email");
const loggin__password = document.querySelector(".loggin__password");
const btn  = document.querySelector(".loggin__submit")
const email__Error = document.querySelector(".control__loggin .small")
const password__Error = document.querySelector(".small2")


        const user = localStorage.getItem("user");
        const json = JSON.parse(user);
        const jsonObj = Object.assign({},json)
      const emailInLocal = json[0].email;
      const passwordInLocal = json[0].password;
        // const emailInLocal = jsonObj["email"]
        console.log(emailInLocal)
        console.log(passwordInLocal)

function showLogginError(){        
        if(loggin__email.value !== emailInLocal  ){
                email__Error.innerHTML = "Wrong message";
                loggin__email.value = "";
                return false;
        }else {
                email__Error.style.color = "lightgreen"
                email__Error.innerHTML = "Success";
                return true;
        }
}
        function checkPasswordWrong(){
                if(loggin__password.value !== passwordInLocal){
                    password__Error.innerHTML = "Wrong Password";
               loggin__password.value = "";
                 return false;
        }else {
                password__Error.style.color = "lightgreen"
                password__Error.innerHTML = "Success";
               return true;
        }

        }


        function checkSuccessAll(){
                if(checkPasswordWrong() === true && showLogginError() === true){
                       window.location.href ="/Myproject/Page/Mypage.html"
                }else {
                        console.log("fail")
                }
        }

     

        




btn.addEventListener("click",()=>{
        showLogginError();
        checkPasswordWrong();
        checkSuccessAll();
      
})