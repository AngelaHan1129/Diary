function isValidEmail(email) {
  var emailRegex = /.+@(gmail.com|yahoo.com.tw|live.com|mail.com)$/;
  return emailRegex.test(email);
}

function validateRegister() {
  var email = document.getElementById('email');
  var password = document.getElementById('password');
  var confirmrwd = document.getElementById('confirmpwd');

  if (!isValidEmail(email.value)) {
    alert('請輸入符合格式的電子信箱');
    return false;
  }

  if (password !== confirmrwd) {
    alert('前後密碼不相符')
    return false;
  }
  
  return true;
}

var loginform = document.getElementById('loginform')
var registerfrom = document.getElementById('registerform')

document.getElementById("registerlink").addEventListener("click", function(event) {
  event.preventDefault();
  loginform.style.transition =  "transform 0.5s ease"
  registerfrom.style.transition = "transform 0.5s ease"
  loginform.style.transform = "translateX(-90%) rotate(15deg)"
  registerfrom.style.transform = "rotate(0)"
  
  setTimeout(function() {
    loginform.style.zIndex = "0"
    registerfrom.style.zIndex = "1"
    loginform.style.transform = "translateX(0) rotate(15deg)";
  }, 500);
});

document.getElementById("loginlink").addEventListener("click", function(event) {
  event.preventDefault();
  loginform.style.transition =  "transform 0.5s ease"
  registerfrom.style.transition = "transform 0.5s ease"
  registerfrom.style.transform = "translateX(90%) rotate(15deg)"
  loginform.style.transform = "rotate(0)"
  
  setTimeout(function() {
    registerfrom.style.zIndex = "0"
    loginform.style.zIndex = "1"
    registerfrom.style.transform = "translateX(0) rotate(15deg)";
  }, 500);
});