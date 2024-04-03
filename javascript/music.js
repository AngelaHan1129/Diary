var musicinfo = document.getElementById('musicinfo')

document.getElementById('previous').addEventListener('click',function(event){
    event.preventDefault();
    musicinfo.style.transition = "transform 0.5s ease"
    musicinfo.style.animation = "fade-in"
    
    // setTimeout(function(){
    //     musicinfo.style.transform = "translate(100%)"
    // },500)
})