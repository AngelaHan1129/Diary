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
                method: 'POST',
                body: json
            })
<<<<<<< HEAD
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    errmsg = msg.replace("", data.msg);
                    document.getElementById('loginmsg').innerText = errmsg;
                    if (errmsg === "登入成功") {
                        const responseData = JSON.parse(data.data);
                        console.log(responseData);
                        if (responseData.user !== undefined) {
                            localStorage.setItem('userData', JSON.stringify(responseData));
                            const logoutLinks = document.querySelectorAll('header .logintext');
                            logoutLinks.forEach(link => {
                                link.href = 'logout.html';
                                link.querySelector('div').innerText = '登出';
                            });
=======
            .then(res => res.json())
            .then(data => {
                console.log(data);
                errmsg = msg.replace("", data.msg);
                document.getElementById('loginmsg').innerText = errmsg;
                if(errmsg === "登入成功") {
                    const responseData = data.data;
                    console.log(responseData);
                    if (responseData.user !== undefined) {
                        localStorage.setItem('userData', JSON.stringify(responseData));
                        const logoutLinks = document.querySelectorAll('header .logintext');
                        logoutLinks.forEach(link => {
                            link.href = 'logout.html'; 
                            link.querySelector('div').innerText = '登出';
                        });
>>>>>>> ed4ff74dff098c87e8e9bf2868213bd3b9c79362

                            window.location.href = 'http://127.0.0.1:5501/index.html';
                        }
                    }
                })
                .catch(error => {
                    console.error('Fetch error:', error);
                });
        });
    }
    catch (err) {
        console.log(err);
    }
}
loginData()

async function registerData() {
    const forRegister = await document.querySelector('.registerform');
    let acc = await document.querySelector('.acc').value
    // let myname = document.querySelector('.myname')
    // let email = document.querySelector('.email')
    // let pwd = document.querySelector('.pwd')
    // let ckeckpwd = document.querySelector('.checkpwd')
    // var button = document.querySelector('.prompttest');
    var showtxt = await document.querySelector('.show');
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
                    errmsg = msg.replace("", data.msg)
                    console.log(registermsg)
                    document.getElementById('registermsg').innerHTML = errmsg;
                    if (errmsg == '註冊成功，請收取驗證信') {
                        var guest = window.prompt('您好!註冊成功，請收取驗證信');
                        if (guest == null || "") {
                            showtxt.innerHTML = '您已取消輸入'
                        } else {
                            showtxt.innerHTML = ''
                        }
                        fetch('http://localhost:8000/api/AuthCode', {
                            method: 'post',
                            body: JSON.stringify({
                                "account": `${object.account}`,
                                "AuthCode": `${guest}`
                            })
                        }).then(res => res.json())
                            .then(data => {
                                console.log("不要生氣 不要生氣")
                                console.log(data)
<<<<<<< HEAD
                                errmsg = msg.replace("", data.msg)
                                document.getElementById('registermsg').innerText = errmsg;
                            })
=======
                                // errmsg = msg.replace("", data.msg)
                                resultMsg = data.data.msg
                                if(resultMsg == "驗證失敗"){
                                    document.getElementById('registermsg').innerText = resultMsg;
                                }else{
                                    document.getElementById('registermsg').innerText = "註冊成功，可以返回登入";
                                }
                        })
>>>>>>> ed4ff74dff098c87e8e9bf2868213bd3b9c79362

                    }

                })
        })
    }
    catch (err) {
        console.log(err)
    }
}
registerData();

async function AuthCode() {

}

async function getData() {
    let res = await fetch('http://localhost:8000/api/AuthCode', {
        method: 'get',
        body: json
    })
    console.log(res)
    console.log(res.ok)
    console.log(res.status)
    console.log(res.statusText)
    console.log(res.url)
}
// getData()