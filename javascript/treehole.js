async function treehole() {
    try {
        // const forRegister = await document.querySelector('#upside');
        // event.preventDefault();
        // const formDataR = new FormData();
        let object = {
            acc:1
        };
        let json = JSON.stringify(object);
        fetch('http://localhost:8000/api/show_diary_all', {
            method: 'post',
            body: json,
            mode: "cors"
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
        // fetch("flowers.jpg")
        //     .then(function (response) {
        //         if (response.ok) {
        //             return response.blob();
        //         }
        //         throw new Error("Network response was not ok.");
        //     })
        //     .then(function (myBlob) {
        //         var objectURL = URL.createObjectURL(myBlob);
        //         myImage.src = objectURL;
        //     })
        //     .catch(function (error) {
        //         console.log(
        //             "There has been a problem with your fetch operation: ",
        //             error.message,
        //         );
        //     });

        const responseData = data.json();
        

        let tab = '';
        console.log(responseData);
        JSON.parse(responseData.data).forEach(function (user) {
            tab += `
            <div class="diarys">
                <div class="diary-left">
                    <div class="date">${user.Day}</div>
                    <div class="title">
                        <p>${user.Title}</p>
                        <hr>
                    </div>
                    <a href="" class="checklink">
                        <img src="image/${user.emoji}" class="check">
                        <div class="checktext">
                            <p>查看</p>
                        </div>
                    </a>
                </div>
                <hr>
                <div class="diary-right">
                    <img src="image/${user.img}.png" class="emoticon">
                </div>
            </div>
            `
        });
        // 假設這裡是顯示日記的地方，你可能要根據你的 HTML 結構進行修改
        document.getElementById('upside').innerHTML = tab;

    } catch (err) {
        console.log(err);
    }
}

treehole();
