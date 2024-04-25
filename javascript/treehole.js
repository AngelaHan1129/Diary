async function treehole() {
    const url = await 'http://localhost:8000/api/show_diary'
    const formDiary = await document.querySelector('.upside')
    try {
        let res = await (await fetch('http://localhost:8000/api/show_diary_all'))
        console.log(res)
        console.log(res.ok)
        console.log(res.status)
        console.log(res.statusText)
        console.log(res.url)

    }
    catch (err) {
        console.log(err);
    }
}
treehole()

