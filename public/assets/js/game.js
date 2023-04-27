window.addEventListener("DOMContentLoaded", init)
let canvas;
let ctx;
ballPositions = [];
playerPositions = [[], [], [], [], [], [], [], [],[], [], [], [],[], [], [], [],[], [], [], [],[], []];
let time = 0;


function init(){
let canvas = document.getElementById('pitch');
let ctx = canvas.getContext('2d');
fetch("./assets/js/tracking.json")
.then((response) => 
    response.json()
)
.then((json) => {
    json.tracks.period.frame.forEach(frame => {
        ballPositions.push([JSON.parse(frame.ball['_loc'])[0]*(800/105) + 400, JSON.parse(frame.ball['_loc'])[1]* (518/69) + 259])
        let i = 0;
        frame.player.forEach(player =>{
            playerPositions[i].push([(JSON.parse(player['_loc'])[0]*(800/105)) + 400, (JSON.parse(player['_loc'])[1] * (518/69)) + 259])
            i++
        })
    })
})
.then( (response) => {window.requestAnimationFrame(update)})
}

function update(){
    let canvas = document.getElementById('pitch');
    let ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, 800 ,600)
    setup()
    let i = 0
    playerPositions.forEach(player => {
        if(i < 11){
        renderPlayer(player[time][0], player[time][1], "player")
        }else{
            renderPlayer(player[time][0], player[time][1], "oppplayer")  
        }
        i++
    })
    renderPlayer(ballPositions[time][0], ballPositions[time][1], "ball")
    time++
    setTimeout(function() {window.requestAnimationFrame(update)}, 1000)
}

function setup(){  
    let canvas = document.getElementById('pitch');
    let ctx = canvas.getContext('2d');
        // Outer lines
        ctx.beginPath();
        ctx.rect(0,0, canvas.width, canvas.height);
        ctx.fillStyle = "#060";
        ctx.fill();
        ctx.lineWidth = 1;
        ctx.strokeStyle = "#FFF";
        ctx.stroke();
        ctx.closePath();
        
        ctx.fillStyle = "#FFF";
        
        // Mid line
        ctx.beginPath();
        ctx.moveTo(canvas.width / 2, 0);
        ctx.lineTo(canvas.width / 2, canvas.height);
        ctx.stroke();
        ctx.closePath();
        
        //Mid circle
        ctx.beginPath()
        ctx.arc(canvas.width / 2, canvas.height / 2, 73, 0, 2*Math.PI, false);
        ctx.stroke();
        ctx.closePath();
        //Mid point
        ctx.beginPath()
        ctx.arc(canvas.width / 2, canvas.height / 2, 2, 0, 2*Math.PI, false);
        ctx.fill();
        ctx.closePath();
        
        //Home penalty box
        ctx.beginPath();
        ctx.rect(0, (canvas.height - 322) / 2, 132, 322);
        ctx.stroke();
        ctx.closePath();
        //Home goal box
        ctx.beginPath();
        ctx.rect(0, (canvas.height - 146) / 2, 44, 146);
        ctx.stroke();
        ctx.closePath();
        //Home goal 
        ctx.beginPath();
        ctx.moveTo(1, (canvas.height / 2) - 22);
        ctx.lineTo(1, (canvas.height / 2) + 22);
        ctx.lineWidth = 2;
        ctx.stroke();
        ctx.closePath();
        ctx.lineWidth = 1;
  
        //Home penalty point
        ctx.beginPath()
        ctx.arc(88, canvas.height / 2, 1, 0, 2*Math.PI, true);
        ctx.fill();
        ctx.closePath();
        //Home half circle
        ctx.beginPath()
        ctx.arc(88, canvas.height / 2, 73, 0.29*Math.PI, 1.71*Math.PI, true);
        ctx.stroke();
        ctx.closePath();
        
        //Away penalty box
        ctx.beginPath();
        ctx.rect(canvas.width-132, (canvas.height - 322) / 2, 132, 322);
        ctx.stroke();
        ctx.closePath();
        //Away goal box
        ctx.beginPath();
        ctx.rect(canvas.width-44, (canvas.height - 146) / 2, 44, 146);
        ctx.stroke();
        ctx.closePath();      
        //Away goal 
        ctx.beginPath();
        ctx.moveTo(canvas.width-1, (canvas.height / 2) - 22);
        ctx.lineTo(canvas.width-1, (canvas.height / 2) + 22);
        ctx.lineWidth = 2;
        ctx.stroke();
        ctx.closePath();
        ctx.lineWidth = 1;
        //Away penalty point
        ctx.beginPath()
        ctx.arc(canvas.width-88, canvas.height / 2, 1, 0, 2*Math.PI, true);
        ctx.fill();
        ctx.closePath();
        //Away half circle
        ctx.beginPath()
        ctx.arc(canvas.width-88, canvas.height / 2, 73, 0.71*Math.PI, 1.29*Math.PI, false);
        ctx.stroke();
        ctx.closePath();
              
        //Home L corner
        ctx.beginPath()
        ctx.arc(0, 0, 8, 0, 0.5*Math.PI, false);
        ctx.stroke();
        ctx.closePath();
        //Home R corner
        ctx.beginPath()
        ctx.arc(0, canvas.height, 8, 0, 2*Math.PI, true);
        ctx.stroke();
        ctx.closePath();
        //Away R corner
        ctx.beginPath()
        ctx.arc(canvas.width, 0, 8, 0.5*Math.PI, 1*Math.PI, false);
        ctx.stroke();
        ctx.closePath();
        //Away L corner
        ctx.beginPath()
        ctx.arc(canvas.width, canvas.height, 8, 1*Math.PI, 1.5*Math.PI, false);
        ctx.stroke();
        ctx.closePath();
      
}; 


function renderPlayer(x, y, sort){
    let canvas = document.getElementById('pitch');
    let ctx = canvas.getContext('2d');

    ctx.beginPath()
    if(sort === "player"){
    ctx.strokeStyle = "orange";
    ctx.fillStyle = "red";
    }else if (sort === "oppplayer"){
    ctx.strokeStyle = "yellow";
    ctx.fillStyle = "blue";
    }else{
    ctx.strokeStyle = "black";
    ctx.fillStyle = "white";
    }
    ctx.lineWidth = 3;
    ctx.arc(x, y, 10, 0, Math.PI * 2, false);
    ctx.fill()
    ctx.stroke();
    ctx.arc(x, y, 13, 0, Math.PI * 2, false);
    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.closePath()

}
  











