async function addemoji() {
    // let newtext = await document.querySelector('.newFace');
    let btn = document.querySelector(".newFace");
    let infoModal = document.querySelector("#infoModal");
    let close=document.querySelector("#closeFace");
    btn.addEventListener("click", function () {
        infoModal.showModal();
    })
    close.addEventListener("click", function(){
        infoModal.close();
      })
    try {
        let api = await fetch('http://localhost:8000/api/emoji_add', {
            method: 'post',
            body: JSON.stringify({
                "Photo":"123",
                "Emoji_Name":"123"
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
addemoji()

async function addweather() {
    let btn = document.querySelector(".newWeather");
    let infoModal = document.querySelector("#infoModalWeather");
    let close=document.querySelector("#closeWeather");
    btn.addEventListener("click", function () {
        infoModal.showModal();
    })
    close.addEventListener("click", function(){
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
addweather()

async function showemoji(){
    let tab = '';
    let res = await fetch('http://localhost:8000/api/admin_show_emoji_all');
    let data = await res.json();
    data.data[0].forEach(function (emoji) {
        tab += `
        <tr>
            <td class="icon"><img src="image/img-emoji/${emoji.Photo}" alt=""></td>
            <td class="name">${emoji.Emoji_Name}</td>
        </tr>                   
        `;
    });
    document.getElementById('items').innerHTML = tab;
}
showemoji()

async function showweather(){
    let tab = '';
    let res = await fetch('http://localhost:8000/api/admin_show_weather_all');
    let data = await res.json();
    console.log(data)
    data.data[0].forEach(function (weather) {
        console.log(weather.Emoji_Name)
        tab += `
        <tr>
            <td class="icon"><img src="image/img-weather/${weather.Photo}" alt=""></td>
            <td class="name">${weather.Weather_Name}</td>
        </tr>                   
        `;
    });
    document.getElementById('Weather').innerHTML = tab;
}
showweather()

