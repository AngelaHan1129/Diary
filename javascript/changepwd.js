let account = ''
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

function changepwd(){
    const opwd = document.getElementById("originpwd_input").value
    const npwd = document.getElementById("newpwd_input").value
    const cpwd = document.getElementById("confirmpwd_input").value

    fetch('http://localhost:8000/api/change_password',{
        method: 'POST',
        body: JSON.stringify({
            acc:account,
            pwd:opwd,
            newpwd:npwd,
            cnewpwd:cpwd
        })
    })
    .then(res =>{
        return res.json()
    })
    .then(data =>{
        console.log(data)
        alert("密碼修改成功！");
        history.back(); // 返回上一頁
        
    })
}