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
                Emoji = 'caim';
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
            console.log(Emoji);
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
                                <p>查看</p>
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

treehole();

