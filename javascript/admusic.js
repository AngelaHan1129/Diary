async function addMusic() {
    let btn = document.querySelector("#add");
    let infoModal = document.querySelector("#infoModalMusic");
    let close = document.querySelector("#closeMusic");
    btn.addEventListener("click", function () {
        infoModal.showModal();
    })
    close.addEventListener("click", function () {
        infoModal.close();
    })
}

addMusic()