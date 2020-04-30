/*
let img = document.querySelector("#like")

img.addEventListener("click",()=>{

    let linkUtl = img.getAttribute("src")
    let link = linkUtl == "img/thumbs-down-icon-14-256.png"? "img/thumb-vector-green-4.png" : "img/thumbs-down-icon-14-256.png"

    img.setAttribute("src",link) 
})

let list = document.querySelector("#list") 

let num =Number(list.dataset.num) 

for(let i = 0 ; i < num; i++){

    list.innerHTML +="<li>" + i + "</li>"
    
}
*/

let video = document.querySelector(".video")

function retroceder(){
    video.currentTime -= 5
}

function avancar() {
    video.currentTime += 5
}

function decrementar(){
    video.playbackRate -= 0.1
}

function incrementar(){
    video.playbackRate += 0.1
}

function play (){
    video.play()
}

function stopv(){
    video.pause()
    video.currentTime = 0;
}





