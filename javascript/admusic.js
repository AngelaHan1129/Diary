async function addMusic() {
    let btn = document.querySelector("#add");
    let infoModal = document.querySelector("#infoModalMusic");
    let close = document.querySelector("#closeMusic");
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
    let res = await fetch('http://localhost:8000/api/admin_show_music_all');
    let data = await res.json();
    console.log(data)
    data.data[0].forEach(function (music) {
        console.log(music.Content)
        tab += `
        <div class="column">
            <div class="singer">${music.singer}</div>
            <div class="song">${music.music_name}</div>
            <div class="address">${music.music}</div>
            <div class="btns">
                <div>
                    <input type="submit" value="刪除" class="delete">
                    <input type="submit" value="修改" class="edit">
                </div>
            </div>
        </div>                    
        `;
    });
    document.getElementById('container').innerHTML = tab;
}
showMusic()

