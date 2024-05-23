async function addEmoji() {
    // let newtext = await document.querySelector('.newFace');
    let btn = document.querySelector(".newFace");
    let infoModal = document.querySelector("#infoModal");
    let close = document.querySelector("#closeFace");
    btn.addEventListener("click", function () {
        infoModal.showModal();
    })
    close.addEventListener("click", function () {
        infoModal.close();
    })
    try {
        let api = await fetch('http://localhost:8000/api/emoji_add', {
            method: 'post',
            body: JSON.stringify({
                "Photo": "234",
                "Emoji_Name": "234"
            })
        })
            .then(response => response.json())
            .then(json => {
                console.log(json);
            });
        // newtext.addEventListener('click',)
    }
    catch (err) {
        console.log(err)
    }
}
addEmoji()

async function addWeather() {
    let btn = document.querySelector(".newWeather");
    let infoModal = document.querySelector("#infoModalWeather");
    let close = document.querySelector("#closeWeather");
    btn.addEventListener("click", function () {
        infoModal.showModal();
    })
    close.addEventListener("click", function () {
        infoModal.close();
    })
    try {
        let api = await fetch('http://localhost:8000/api/weather_add', {
            method: 'post',
            body: JSON.stringify({
                "Weather_Name": "123",
                "Photo": "123"
            })
        })
            .then(response => response.json())
            .then(json => {
                console.log(json);
            });
        var button = document.querySelector('.newWeather');
        var showtxt = document.querySelector('.show');

        function popup3(e) {
            // let guest = window.prompt('請輸入新天氣');
            // if (guest == null || "") {
            //     showtxt.innerHTML = '您已取消輸入'
            // } else {
            //     showtxt.innerHTML = 'Good Day' + guest + '^^'
            // }

        }
        button.addEventListener('click', popup3);
    }
    catch (err) {
        console.log(err)
    }
}
addWeather()



async function showEmoji(pagenow) {
    try {
        let str = '<table class="pages" id="page-emotion"><tr>';
        let tab = '';
        let res = await fetch('http://localhost:8000/api/admin_show_emoji_all');
        let body = await res.json();
        let emojiData = body.data[0];
        let MaxPage = Math.ceil(emojiData.length / 5);
        let NowPage = Math.max(1, Math.min(pagenow, MaxPage || 1));
        let itemsPerPage = 5;
        let start = (NowPage - 1) * itemsPerPage;
        let end = start + itemsPerPage;

        let pageItems = emojiData.slice(start, end);
        if (NowPage > 1) {
            str += `<td><a href="#" onclick="showEmoji(1)">&lt;&lt;</a></td>`;
            str += `<td><a href="#" onclick="showEmoji(${NowPage - 1})">&lt;</a></td>`;
        }
        for (let page = Math.max(1, NowPage - 2); page <= Math.min(NowPage + 2, Math.ceil(emojiData.length / itemsPerPage)); page++) {
            if (page === NowPage) {
                str += `<td>${page}</td>`;
            } else {
                str += `<td><a href="#" onclick="showEmoji(${page})">${page}</a></td>`;
            }
        }
        if (NowPage < MaxPage) {
            str += `<td><a href="#" onclick="showEmoji(${NowPage + 1})">&gt;</a></td>`;
            str += `<td><a href="#" onclick="showEmoji(${MaxPage})">&gt;&gt;</a></td>`;
        }
        pageItems.forEach(function (emoji) {
            let photo = emoji.Photo ? emoji.Photo : 'smile.png';
            tab += `
            <tr>
                <td class="icon"><img src="image/img-emoji/${photo}" alt=""></td>
                <td class="name">${emoji.Emoji_Name}</td>
                <td class="btns">
                    <div>
                        <input type="submit" value="刪除" class="delete" data-id="${emoji.Emoji_Id}">
                        <input type="submit" value="修改" class="edit" data-id="${emoji.Emoji_Id}">
                    </div>
                </td>
            </tr>                   
            `;
        });

        str += '</tr></table>';
        document.getElementById('items').innerHTML = tab;
        document.getElementById('page-emotion').innerHTML = str;
    } catch (err) {
        console.error('Failed to fetch weather data:', err);
        document.getElementById('items').innerHTML = '<p>Error loading weather data.</p>';
    }
}
async function handleEmojiAction(event) {
    if (event.target.tagName === 'INPUT') {
        let emojiId = event.target.dataset.id;
        //delete
        if (event.target.classList.contains('delete')) {
            try {
                let res = await fetch('http://localhost:8000/api/emoji_del', {
                    method: 'DELETE',
                    headers: { 
                        'Content-Type': 'application/json' 
                    },
                    body: JSON.stringify({
                        "Emoji_Id": emojiId 
                    })
                });
                let body = await res.json();
                console.log(body);
                showEmoji(1);
            } catch (err) {
                console.error(err);
            }
        } 
        //edit
        // else if (event.target.classList.contains('edit')) {
        //     let newName = prompt("輸入新歌名:");
        //     let newPath = prompt("輸入新網址:");
        //     let newSinger = prompt("輸入新歌手:");
        //     let newEmoji = prompt("輸入新表情:");
        //     if (newName || newPath || newSinger || newEmoji) {
        //         try {
        //             let res = await fetch('http://localhost:8000/api/change_weather', {
        //                 method: 'PUT',
        //                 headers: { 'Content-Type': 'application/json' },
        //                 body: JSON.stringify({
        //                     "Music_Id": musicId,
        //                     "Music_Name": newName,
        //                     "Path": newPath,
        //                     "Singer": newSinger,
        //                     "Emoji_Name": newEmoji
        //                 })
        //             });
        //             let body = await res.json();
        //             console.log(body);
        //             showEmoji(1);
        //         } catch (err) {
        //             console.error(err);
        //         }
        //     }
        // }
    }
}

document.querySelector('#items').addEventListener('click', handleEmojiAction);

showWeather(1);

showEmoji(1);

async function showWeather(pagenow) {
    try {
        let str = '<table id="page-weather"><tr>';
        let tab = '';
        let res = await fetch('http://localhost:8000/api/admin_show_weather_all');
        let body = await res.json();
        let weathers = body.data[0];

        let MaxPage = Math.ceil(weathers.length / 5);
        let NowPage = Math.max(1, Math.min(pagenow, MaxPage || 1));
        let itemsPerPage = 5;
        let start = (NowPage - 1) * itemsPerPage;
        let end = start + itemsPerPage;

        let pageItems = weathers.slice(start, end);
        if (NowPage > 1) {
            str += `<td><a href="#" onclick="showWeather(1)">&lt;&lt;</a></td>`;
            str += `<td><a href="#" onclick="showWeather(${NowPage - 1})">&lt;</a></td>`;
        }
        for (let page = Math.max(1, NowPage - 2); page <= Math.min(NowPage + 2, Math.ceil(weathers.length / itemsPerPage)); page++) {
            if (page === NowPage) {
                str += `<td>${page}</td>`;
            } else {
                str += `<td><a href="#" onclick="showWeather(${page})">${page}</a></td>`;
            }
        }
        if (NowPage < MaxPage) {
            str += `<td><a href="#" onclick="showWeather(${NowPage + 1})">&gt;</a></td>`;
            str += `<td><a href="#" onclick="showWeather(${MaxPage})">&gt;&gt;</a></td>`;
        }
        pageItems.forEach(weather => {
            let photo = weather.Photo || 'cloud.png';
            tab += `<tr>
            <td class="icon"><img src="image/img-weather/${photo}" alt=""></td>
            <td class="name">${weather.Weather_Name}</td>
            <td class="btns">
                    <div>
                        <input type="submit" value="刪除" class="delete" data-id="${weather.Weather_Id}">
                        <input type="submit" value="修改" class="edit" data-id="${weather.Weather_Id}">
                    </div>
                </td>
            </tr>`;
        });

        str += '</tr></table>';
        document.getElementById('items-Weather').innerHTML = tab;
        document.getElementById('page-weather').innerHTML = str;
    } catch (err) {
        console.error('Failed to fetch data:', err);
        document.getElementById('items-Weather').innerHTML = '<p>Error loading data.</p>';
    }
}

async function handleSentenceAction(event) {
    if (event.target.tagName === 'INPUT') {
        let musicId = event.target.dataset.id;
        //delete member
        if (event.target.classList.contains('delete')) {
            try {
                let res = await fetch('http://localhost:8000/api/weather_del', {
                    method: 'DELETE',
                    headers: { 
                        'Content-Type': 'application/json' 
                    },
                    body: JSON.stringify({
                        "Weather_Id": musicId 
                    })
                });
                let body = await res.json();
                console.log(body);
                showWeather(1);
            } catch (err) {
                console.error(err);
            }
        } 
        //edit member
        // else if (event.target.classList.contains('edit')) {
        //     let newName = prompt("輸入新歌名:");
        //     let newPath = prompt("輸入新網址:");
        //     let newSinger = prompt("輸入新歌手:");
        //     let newEmoji = prompt("輸入新表情:");
        //     if (newName || newPath || newSinger || newEmoji) {
        //         try {
        //             let res = await fetch('http://localhost:8000/api/change_weather', {
        //                 method: 'PUT',
        //                 headers: { 'Content-Type': 'application/json' },
        //                 body: JSON.stringify({
        //                     "Music_Id": musicId,
        //                     "Music_Name": newName,
        //                     "Path": newPath,
        //                     "Singer": newSinger,
        //                     "Emoji_Name": newEmoji
        //                 })
        //             });
        //             let body = await res.json();
        //             console.log(body);
        //             showWeather(1);
        //         } catch (err) {
        //             console.error(err);
        //         }
        //     }
        // }
    }
}

document.querySelector('#items-Weather').addEventListener('click', handleSentenceAction);

showWeather(1);

