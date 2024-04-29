function resetlink(formid) {
    document.getElementById(formid).reset();
    window.location.href = "userinfo.html";
}

function adreset(formid) {
    document.getElementById(formid).reset();
    window.location.href = "aduser.html";
}

var changeshot = document.getElementById('changeshot');
var inputimg = document.getElementById('inputimg');
var userimg = document.getElementById('userimg');
let account = ''

changeshot.addEventListener('click', function (event) {
    event.preventDefault();
    inputimg.click();
});

inputimg.addEventListener('change', function () {
    var selectfile = inputimg.files[0];
    if (selectfile) {
        if (selectfile.type.match('image.*')) {
            var reader = new FileReader();
            reader.onload = function (e) {
                userimg.src = e.target.result;
                userimg.style.display = 'block';
            }
            reader.readAsDataURL(selectfile);
            
            changePicture(selectfile)
        } else {
            alert('請選擇圖片文件');
            changeshot.value = '';
        }
    } else {
        console.log('未選擇文件');
    }
});

function changePicture(pic){
    let formdata = new FormData()
    const acc = JSON.parse(localStorage.getItem('userData')).user
    formdata.append("account",acc)
    formdata.append("file",pic)
    fetch('http://localhost:8000/api/change_shot',
{
    method:"post",
    body:formdata
})
    .then(res=>res.json())
    .then(data =>{
        console.log(data)
    })
}

function getUserData(){
    const token = JSON.parse(localStorage.getItem('userData')).token
    fetch(`http://localhost:8000/api/getuser_by_token?token=${token}`)
    .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        data = data.data
        account = data.user
        document.getElementById("username").innerText=data.Name
        document.getElementById("account").innerText = data.user
        document.getElementById("email_input").value = data.Email
      })
      .catch(error => {
        console.error('發生錯誤:', error);
      });
}

getUserData()