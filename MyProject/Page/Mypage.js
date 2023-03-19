const search = document.querySelector(".li__search")
const iconSearch  =document.querySelector(".search")
const input =document.querySelector(".navbar__search")
const logo= document.querySelector(".navbar__logo");
const userInfo = document.querySelector(".navbar__btn")
const navbar  =document.querySelector(".navbar__page")
const scrollDown = window.pageYOffset;
let appear = true
search.addEventListener("click",()=>{
    if(appear){
    input.classList.toggle("seach__show");
    input.focus();
    }
})

// onclick in logo and comeback to the main page
logo.addEventListener("click",()=>{
    window.location.href= "#"
})
// onclick the user info to come to userInfo
userInfo.addEventListener("click" ,()=>{
    window.location.href = "UserInfo.html"
})
// scroll down to eliminate the navbarr

// window.onscroll = function() {
//     let currentScrollPos = window.pageYOffset;
//     if (scrollDown > currentScrollPos) {
//       navbar.style.top = "0";
//     } else {
//       navbar.style.top = "-50px";
//     }
//     scrollDown = currentScrollPos;
//   }

