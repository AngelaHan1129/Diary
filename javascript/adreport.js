async function musicReport() {
    try {
        const res = await fetch('http://localhost:8000/api/form_music');
        const data = await res.json();
        if (data.data && data.data[0]) {
            const emojiNames = [];
            const emojidata = [];
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
            const labels = emojiNames;
            const datas = emojidata;

            const chartMusic = document.getElementById('myMusic');
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
    const res = await fetch('http://localhost:8000/api/form_Sentence');
    const data = await res.json();
    const Type_Name = [];
    const sentencedata = [];
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

    const labels = Type_Name;
    const datas = sentencedata;


    const chartSentence = document.getElementById('mySentence');
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
    const res = await fetch('http://localhost:8000/api/form_emoji');
    const data = await res.json();
    const Face_Name = [];
    const facedata = [];
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
    const labels = Face_Name;
    const datas = facedata;

    const chartFace = document.getElementById('myFace');
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
    const res = await fetch('http://localhost:8000/api/form_sex');
    const data = await res.json();
    const Gender = [];
    const Memberdata = [];
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
    const labels = Gender;
    const datas = Memberdata;
    const chartMember = document.getElementById('myMember');
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

