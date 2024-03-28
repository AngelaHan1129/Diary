var musiclist = document.getElementById('musiclist')

document.getElementById('previous').addEventListener('click',function(event){
    event.preventDefault();
    musiclist.style.transition = "transform 0.5s ease"
    musiclist.style.transform = "translate(-100%)"
    
    setTimeout(function(){
        musiclist.style.transform = "translate(100%)"
    })
})