async function treehole() {
    try {
        let tab = '';

        var token = localStorage.getItem('userData');
        const response = await fetch('http://localhost:8000/api/show_diary_all', {
            headers:{
                'Authorization': token
            }
        });
        const data = await response.json();

        data.data.forEach(function (user) {
            let Emoji = ''; 
            if (user.Emoji == 1) {
                Emoji = 'calm';
            } else if (user.Emoji == 2) {
                Emoji = 'fear';
            } else if (user.Emoji == 3) {
                Emoji = 'sad';
            } else if (user.Emoji == 4) {
                Emoji = 'joy';
            } else if (user.Emoji == 5) {
                Emoji = 'happiness';
            } else if (user.Emoji == 6) {
                Emoji = 'angry';
            }
            tab += `
                <div class="diarys">
                    <div class="diary-left">
                        <div class="date">${user.Day}</div>
                        <div class="title">
                            <p>${user.Title}</p>
                            <hr>
                        </div>
                        <a href="" class="checklink">
                            <img src="image/pen.png" class="check">
                            <div class="checktext">
                                <p data-id="${user.Diary_Id}">查看</p>
                            </div>
                        </a>
                    </div>
                    <hr>
                    <div class="diary-right">
                        <img src="image/img-emoji/${Emoji}.png" class="emoticon">
                    </div>
                </div>
            `;
        });
        document.getElementById('upside').innerHTML = tab;


    } catch (err) {
        console.log(err);
    }
}
async function showDiaryContent(event){
    if (event.target.tagName === 'P') {
        let diaryId = event.target.dataset.id;
        if (event.target.classList.contains('checktext')) {
            try {
                let res = await fetch(`http://localhost:8000/api/show_diary?diary_id=${diaryId}`, {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                let body = await res.json();
                console.log(body);
            } catch (err) {
                console.error(err);
            }
        }
    }
}
document.querySelector('#upside').addEventListener('click', showDiaryContent);

treehole();

