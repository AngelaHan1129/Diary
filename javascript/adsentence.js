async function addMusic() {
    let btn = document.querySelector("#add");
    let infoModal = document.querySelector("#infoModalSentence");
    let close = document.querySelector("#closeSentence");
    btn.addEventListener("click", function () {
        infoModal.showModal();
    })
    close.addEventListener("click", function () {
        infoModal.close();
    })
}

addMusic()