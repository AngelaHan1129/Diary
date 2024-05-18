async function musicReport() {
    try {
        let res = await fetch('http://localhost:8000/api/form_music');
        let data = await res.json();
        if (data.data && data.data[0]) {
            let emojiNames = [];
            let emojidata = [];
            data.data[0].forEach(item => {
                if (item.Emoji_Name) {
                    emojiNames.push(item.Emoji_Name);
                }
            });
            data.data[0].forEach(item => {
                if (item.COUNT) {
                    emojidata.push(item.COUNT);
                }
            });
            console.log( data.data[0])
            console.log( data)
            console.log(emojidata)
            let labels = emojiNames;
            let datas = emojidata;

            let chartMusic = document.getElementById('myMusic');
            new Chart(chartMusic, {
                type: 'bar',
                data: {
                    labels: labels,
                    datasets: [{
                        label: '數量',
                        data: datas,
                        backgroundColor: 'rgb(145, 189, 217)',
                        borderColor: 'rgb(255, 255, 255)',
                        borderWidth: 1
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                    }
                }
            });
        } else {
            console.error("API 返回的資料不正确");
        }
    } catch (error) {
        console.error("獲取資料時出錯:", error);
    }
}

musicReport();



async function sentenceReport() {
    let res = await fetch('http://localhost:8000/api/form_Sentence');
    let data = await res.json();
    let Type_Name = [];
    let sentencedata = [];
    data.data[0].forEach(item => {
        if (item.Type_Name) {
            Type_Name.push(item.Type_Name);
        }
    });
    data.data[0].forEach(item => {
        if (item.COUNT) {
            sentencedata.push(item.COUNT);
        }
    });

    let labels = Type_Name;
    let datas = sentencedata;


    let chartSentence = document.getElementById('mySentence');
    new Chart(chartSentence, {
        type: 'polarArea',
        data: {
            labels: labels,
            datasets: [{
                label: '數量',
                data: datas,
                backgroundColor: 'rgb(145, 189, 217)',
                borderColor: 'rgb(255, 255, 255)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
}
sentenceReport()

async function faceReport() {
    let res = await fetch('http://localhost:8000/api/form_emoji');
    let data = await res.json();
    let Face_Name = [];
    let facedata = [];
    data.data[0].forEach(item => {
        if (item.Emoji_Name) {
            Face_Name.push(item.Emoji_Name);
        }
    });
    data.data[0].forEach(item => {
        if (item.COUNT) {
            facedata.push(item.COUNT);
        }
    });
    let labels = Face_Name;
    let datas = facedata;

    let chartFace = document.getElementById('myFace');
    new Chart(chartFace, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: '數量',
                data: datas,
                borderWidth: 1,
                tension: 0.1,
                fill: false,
                borderColor: 'rgb(145, 189, 217)',
                tension: 0.1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
}
faceReport()

async function MemberReport() {
    let res = await fetch('http://localhost:8000/api/form_sex');
    let data = await res.json();
    let Gender = [];
    let Memberdata = [];
    data.data[0].forEach(item => {
        if (item.Gender) {
            Gender.push(item.Gender);
        }
    });
    data.data[0].forEach(item => {
        if (item.COUNT) {
            Memberdata.push(item.COUNT);
        }
    });
    let labels = Gender;
    let datas = Memberdata;
    let chartMember = document.getElementById('myMember');
    new Chart(chartMember, {
        type: 'doughnut',
        data: {
            labels: labels,
            datasets: [{
                label: '數量',
                data: datas,
                backgroundColor: 'rgb(145, 189, 217)',
                borderColor: 'rgb(255, 255, 255)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
}
MemberReport()

