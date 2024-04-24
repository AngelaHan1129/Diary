
async function sentenctData() {
    const url = await 'http://localhost:8000/api/sentence'
    try {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                let msg = data.data.sentence
                console.log(msg)
                msg += `<h2>${data.data.sentence}</h2>`
                // sentencemsg = msg.replace("",data.data.sentence)
                document.getElementById('sentence').innerHTML = msg;
            })
    }
    catch (err) {
        console.log(err)
    }

}
sentenctData()