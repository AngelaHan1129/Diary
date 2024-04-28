async function treehole() {
    const url = await 'http://localhost:8000/api/show_diary'
    const formDiary = await document.querySelector('.upside')
    try {
        const res = await fetch('http://localhost:8000/api/show_diary_all');
        const sentenceShow = document.getElementById('sentence');
        const data = await res.json();
        console.log(sentenceShow);
        sentenceShow.innerText = data.data.sentence;

    }
    catch (err) {
        console.log(err);
    }
}
treehole()

