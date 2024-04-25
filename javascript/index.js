async function sentenceData() {
    try {
        const res = await fetch('http://localhost:8000/api/sentence');
        const sentenceShow = document.getElementById('sentence');
        const data = await res.json();
        console.log(sentenceShow);
        sentenceShow.innerText = data.data.sentence;
    }
    catch (err) {
        console.error(err);
    }
}

sentenceData();