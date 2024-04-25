var player = document.getElementById("musicinfo");
var previous = document.getElementById("previous");
var next = document.getElementById("next");

previous.addEventListener("click", function(event){
    event.preventDefault();
    player.style.animation = "FadeOutLeft 1s"
    previous.style.animation = "FadeOut 1s"
    next.style.animation = "FadeOut 1s"
    player.addEventListener('animationend', function() {
        player.style.animation = "FadeInRight 1s"
        previous.style.animation = "FadeIn 1s"
        next.style.animation = "FadeIn 1s"
    })
});

next.addEventListener("click", function(event){
    event.preventDefault();
    player.style.animation = "FadeOutRight 1s"
    previous.style.animation = "FadeOut 1s"
    next.style.animation = "FadeOut 1s"
    player.addEventListener('animationend', function(){
        player.style.animation = "FadeInLeft 1s"
        previous.style.animation = "FadeIn 1s"
        next.style.animation = "FadeIn 1s"
    })
});
async function treehole() {
    const formDiary = await document.querySelector('.upside')
    try {
        let res = await (await fetch('http://localhost:8000/api/show_music_all'))
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


// var playlist = document.getElementById("playlist");
// var playlistwrap = document.querySelector(".playlist-wrap");
// var isMouseDown = false;
// var startX, scrollLeft, initialPosition;

// playlist.addEventListener('mousedown', function (e) {
//     isMouseDown = true;
//     startX = e.pageX;
//     scrollLeft = playlist.scrollLeft;
//     initialPosition = parseInt(playlistwrap.style.transform.replace('translateX(', '').replace('px)', ''));
//     if (isNaN(initialPosition)) {
//         initialPosition = 0;
//     }
//     playlist.style.cursor = 'grabbing';
// });

// playlist.addEventListener('mouseleave', function () {
//     isMouseDown = false;
//     playlist.style.cursor = 'grab';
// });

// playlist.addEventListener('mouseup', function () {
//     isMouseDown = false;
//     playlist.style.cursor = 'grab';
// });

// playlist.addEventListener('mousemove', function (e) {
//     if (!isMouseDown) return;
//     e.preventDefault();
//     var x = e.pageX;
//     var walk = (x - startX);
//     var newPosition = initialPosition + scrollLeft - walk;
//     var playlistWidth = playlist.offsetWidth;
//     var itemsWidth = playlistwrap.offsetWidth;

//     if (newPosition > 0) {
//         newPosition = 0; // 到达第一个物件时禁止继续向左拖曳
//     } else if (playlistWidth - itemsWidth > newPosition) {
//         newPosition = playlistWidth - itemsWidth;
//     }

//     playlistwrap.style.transform = 'translateX(' + newPosition + 'px)';
// });

// playlist.addEventListener('selectstart', function (e) {
//     e.preventDefault();
// });