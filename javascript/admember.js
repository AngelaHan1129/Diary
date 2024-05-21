//未完成editMember
async function showMember() {
    let head = '';
    let tab = '';
    let res = await fetch('http://localhost:8000/api/admin_show_user_all');
    let data = await res.json();

    head += `
        <div class="sort">
            <div class="account" onclick="sortDivs(0)">帳號</div>
            <div class="name" onclick="sortDivs(1)">姓名</div>
            <div class="mail" onclick="sortDivs(2)">信箱</div>
            <div class="sex" onclick="sortDivs(3)">性別</div>
        </div>
        <div id="container">
        </div>
    `
    data.data[0].forEach(function (user) {
        let Gender = '';
        if (user.Gender == 0) {
            Gender = '不透漏';
        } else if (user.Gender == 1) {
            Gender = '男';
        } else if (user.Gender == 2) {
            Gender = '女';
        }
        tab += `
        <div class="column">
            <div class="account">${user.Account}</div>
            <div class="name">${user.Name}</div>
            <div class="mail">${user.Email}</div>
            <div class="sex">${Gender}</div>
            <div class="btns">
                <div>
                    <input type="submit" value="刪除" class="delete" data-id="${user.Account}">
                    <input type="submit" value="修改" class="edit" data-id="${user.Account}">
                </div>
            </div>
        </div>
        `;
    });
    // console.log(tab)
    document.getElementById('content').innerHTML = head;
    document.getElementById('container').innerHTML = tab;
}
showMember()

async function deleteMember() {
    let content = document.querySelector('#content');
    console.log(content)
    content.addEventListener('click', function (user) {
        console.log(user.target.className)
        if (user.target.tagName === 'INPUT') {
            if (user.target.className === 'delete') {
                console.log(user.target.dataset.id)
                fetch('http://localhost:8000/api/user_del', {
                    method: 'post',
                    body: JSON.stringify({
                        "Account": `${user.target.dataset.id}`
                    })
                })
                    .then(res => res.json())
                    .then(body => console.log(body))
                showMember()
            }
            if (user.target.className === 'edit') {
                console.log(user.target.dataset.id)
                fetch('http://localhost:8000/api/change_user', {
                    method: 'post',
                    body: JSON.stringify({
                        "oldAccount": `${user.target.dataset.id}`,
                        "Account": `${user.target.dataset.id}`,
                        "Name": "xfafad",
                        "Email": "2127w"
                    })
                })
                    .then(res => res.json())
                    .then(body => console.log(body))
            }
        }
    })

}
deleteMember()