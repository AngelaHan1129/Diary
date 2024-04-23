async function treehole() {
    const url = await 'http://localhost:8000/api/show_diary'
    const formDiary = await document.querySelector('.upside')
    try {
        // let object = {};
        // formDiary.forEach((value, key) => object[key] = value);
        // let json = JSON.stringify(object);
        // fetch(url,{
        //     method:'get',
        //     body:json
        // }).then(
        //     res => res.json()
        // )
        let res = await (await fetch('http://localhost:8000/api/show_diary_all'))
    //    .then(res => res.json())
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

