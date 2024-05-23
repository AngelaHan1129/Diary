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

async function showMusic(pagenow) {
    try {
        let str = '<table id="page-sentence"><tr>';
        let tab = '';
        let res = await fetch('http://localhost:8000/api/admin_show_music_all');
        let body = await res.json();
        let musicData = body.data[0];
        console.log(musicData)
        let MaxPage = Math.ceil(musicData.length / 5);
        let NowPage = Math.max(1, Math.min(pagenow, MaxPage || 1));
        let itemsPerPage = 5;
        let start = (NowPage - 1) * itemsPerPage;
        let end = start + itemsPerPage;

        let pageItems = musicData.slice(start, end);
        if (NowPage > 1) {
            str += `<td><a href="#" onclick="showMusic(1)">&lt;&lt;</a></td>`;
            str += `<td><a href="#" onclick="showMusic(${NowPage - 1})">&lt;</a></td>`;
        }
        for (let page = Math.max(1, NowPage - 2); page <= Math.min(NowPage + 2, Math.ceil(musicData.length / itemsPerPage)); page++) {
            if (page === NowPage) {
                str += `<td>${page}</td>`;
            } else {
                str += `<td><a href="#" onclick="showMusic(${page})">${page}</a></td>`;
            }
        }
        if (NowPage < MaxPage) {
            str += `<td><a href="#" onclick="showMusic(${NowPage + 1})">&gt;</a></td>`;
            str += `<td><a href="#" onclick="showMusic(${MaxPage})">&gt;&gt;</a></td>`;
        }
        pageItems.forEach(function (music) {
            console.log(music)
            tab += `
            <div class="column">
                <div class="singer">${music.singer}</div>
                <div class="song">${music.music_name}</div>
                <div class="address">${music.music}</div>
                <div class="btns">
                    <div>
                        <input type="submit" value="刪除" class="delete" data-id="${music.Music_Id}">
                        <input type="submit" value="修改" class="edit" data-id="${music.Music_Id}">
                    </div>
                </div>
            </div>                    
            `;
        });

        str += '</tr></table>';
        document.getElementById('container').innerHTML = tab;
        document.getElementById('page-music').innerHTML = str;
    } catch (err) {
        console.error('Failed to fetch data:', err);
        document.getElementById('container').innerHTML = '<p>Error loading data.</p>';
    }
}

async function handleSentenceAction(event) {
    if (event.target.tagName === 'INPUT') {
        let musicId = event.target.dataset.id;
        //delete member
        if (event.target.classList.contains('delete')) {
            try {
                let res = await fetch('http://localhost:8000/api/music_del', {
                    method: 'DELETE',
                    headers: { 
                        'Content-Type': 'application/json' 
                    },
                    body: JSON.stringify({
                        "Music_Id": musicId 
                    })
                });
                let body = await res.json();
                console.log(body);
                showMusic(1);
            } catch (err) {
                console.error(err);
            }
        } 
        //edit member
        else if (event.target.classList.contains('edit')) {
            let newName = prompt("輸入新歌名:");
            let newPath = prompt("輸入新網址:");
            let newSinger = prompt("輸入新歌手:");
            let newEmoji = prompt("輸入新表情:");
            if (newName || newPath || newSinger || newEmoji) {
                try {
                    let res = await fetch('http://localhost:8000/api/change_music', {
                        method: 'PUT',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            "Music_Id": musicId,
                            "Music_Name": newName,
                            "Path": newPath,
                            "Singer": newSinger,
                            "Emoji_Name": newEmoji
                        })
                    });
                    let body = await res.json();
                    console.log(body);
                    showMusic(1);
                } catch (err) {
                    console.error(err);
                }
            }
        }
    }
}

document.querySelector('#container').addEventListener('click', handleSentenceAction);


showMusic(1);

