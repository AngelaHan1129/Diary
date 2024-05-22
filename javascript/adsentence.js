async function addMusic() {
    let btn = document.querySelector("#add");
    let infoModal = document.querySelector("#infoModalSentence");
    let close = document.querySelector("#closeSentence");
    btn.addEventListener("click", function () {
        infoModal.showModal();
    })
    close.addEventListener("click", function () {
        infoModal.close();
    })
}

addMusic()
async function showMusic() {
    let tab = '';
    let res = await fetch('http://localhost:8000/api/admin_show_sentence_all');
    let data = await res.json();
    console.log(data)
    data.data[0].forEach(function (music) {
        console.log(music.Content)
        tab += `
        <tr>
            <td class="type">${music.Type_Name}</td>
            <td class="content">${music.Content}</td>
            <td class="btns">
                <div>
                    <input type="submit" value="刪除" class="delete">
                    <input type="submit" value="修改" class="edit">
                </div>
            </td>
        </tr>            
        `;
    });
    document.getElementById('items').innerHTML = tab;
}
showMusic()
