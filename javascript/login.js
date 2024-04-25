//正則表達式
function isValidEmail(email) {
    var emailRegex = /.+@(gmail.com|yahoo.com.tw|live.com|mail.com)$/;
    return emailRegex.test(email);
}
  
function validateRegister() {
    var email = document.getElementById('email');
    var passwd = document.getElementById('passwd');
    var confirmrwd = document.getElementById('confirmpwd');
  
    if (!isValidEmail(email.value)) {
        alert('請輸入符合格式的電子信箱');
        return false;
    }
  
    let password = passwd.value;
    let checkpsw = confirmrwd.value;
    if (password !== checkpsw) {
        console.log(password);
        alert('前後密碼不相符')
        return false;
    }
    return true;
}
  
var loginform = document.getElementById('loginform')
var registerfrom = document.getElementById('registerform')
  
document.getElementById("registerlink").addEventListener("click", function (event) {
    event.preventDefault();
    loginform.style.transition = "transform 0.5s ease"
    registerfrom.style.transition = "transform 0.5s ease"
    loginform.style.transform = "translateX(-90%) rotate(15deg)"
    registerfrom.style.transform = "rotate(0)"
  
    setTimeout(function () {
        loginform.style.zIndex = "0"
        registerfrom.style.zIndex = "1"
        loginform.style.transform = "translateX(0) rotate(15deg)";
    }, 500);
});
  
document.getElementById("loginlink").addEventListener("click", function (event) {
    event.preventDefault();
    loginform.style.transition = "transform 0.5s ease"
    registerfrom.style.transition = "transform 0.5s ease"
    registerfrom.style.transform = "translateX(90%) rotate(15deg)"
    loginform.style.transform = "rotate(0)"
  
    setTimeout(function () {
      registerfrom.style.zIndex = "0"
      loginform.style.zIndex = "1"
      registerfrom.style.transform = "translateX(0) rotate(15deg)";
    }, 500);
});

async function loginData() {
    const formLogin = await document.querySelector('.loginform');
    let msg = '';
    try {
        formLogin.addEventListener('submit', event => {
            event.preventDefault();
            const formData = new FormData(formLogin);
            let object = {};
            formData.forEach((value, key) => object[key] = value);
            let json = JSON.stringify(object);
            fetch('http://localhost:8000/api/login', {
                method: 'post',
                body: json
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                errmsg = msg.replace("",data.msg)
                document.getElementById('loginmsg').innerText = errmsg;
            })
        });
    }
    catch (err) {
        console.log(err);
    }
}
loginData();
  

  async function registerData() {
    const forRegister = await document.querySelector('.registerform');
    let msg = '';
    try {
        forRegister.addEventListener('submit', event => {
            event.preventDefault();
            const formDataR = new FormData(forRegister);
            let object = {};
            formDataR.forEach((value, key) => object[key] = value);
            let json = JSON.stringify(object);
            fetch('http://localhost:8000/api/register', {
                method: 'post',
                body: json
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                errmsg = msg.replace("",data.msg)
                document.getElementById('.registermsg').innerHTML = errmsg;
            })
        })
    }
    catch (err) {
        console.log(err)
    }
}
registerData();