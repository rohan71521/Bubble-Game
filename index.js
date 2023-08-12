
var timer = 60;
var hit = 0;
var score = 0;
function createBubbles() {
    var bubbles = '';
for (let index = 0; index < 160; index++) {
    let rn = Math.floor(Math.random()*10);
    bubbles += `<div class="bubble">${rn}</div>`   
}
document.querySelector('.section-1-btm').innerHTML = bubbles
}

function setTimer() {

   var timeInt = setInterval(() => {
        if (timer>0) {
            timer --;
            document.querySelector('#timer').textContent = timer;
        }else{
            clearInterval(timeInt);
            document.querySelector('.section-1-btm').innerHTML = `<h2>Game Over</h2>`
        }
        
    }, 1000);
}

function hitNew() {
    hit =   Math.floor(Math.random()*10);
    document.querySelector('#hit').innerHTML = hit;
}
 function increaseScore() {
    score += 10;
    document.querySelector('#score').innerHTML = score
 }

  function matchBubble() {
    document.querySelector('.section-1-btm').addEventListener("click",(e)=>{
    var element = Number(e.target.innerHTML);
    if(hit === element){
        increaseScore() ;
        hitNew();
        createBubbles();
    }
    })
  }
createBubbles();
setTimer();
hitNew();
matchBubble() 
