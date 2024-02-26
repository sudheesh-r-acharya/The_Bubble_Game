function bubblemaker(){

    let bubble = "";
    let rn = 0;
    
    for(i = 1 ; i <= 90 ; i++){
        rn = Math.floor(Math.random()*10)
       bubble +=  `<div class="bubble">${rn}</div>`
    }
    document.querySelector(".pbtm").innerHTML = bubble ;
}

let time = 60;
function Timer(){
    let SetTime  = setInterval(() => {
        if(time > 0){
            time--;
            document.querySelector("#time").innerHTML = time;
        }
        else{
            clearInterval(SetTime);
            document.querySelector("#pbtm").textContent = "";

        }
    }, 1000);
}
let num = 0
function newnum(){
     num = Math.floor(Math.random()*10);
    document.querySelector("#num").innerHTML = num;
}
let Score = 0;
function ScoreIncrement(){
    Score += 10;
    document.querySelector("#Score").innerHTML = Score;
    
}

document.querySelector(".pbtm").addEventListener("click" , function(e){
    let NumClicked = (Number(e.target.innerHTML))
    if(NumClicked === num){
        ScoreIncrement();
        newnum();
        bubblemaker();
    }
})

newnum();
bubblemaker();
Timer();
