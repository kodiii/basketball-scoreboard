let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")
let playerTurn = document.getElementById("player-turn")

let homeScoreCount = 0
let guestScoreCount = 0

//functions to add points to HOME
function homePoint1() {
    homeScoreCount += 1
    homeScore.innerText = homeScoreCount
}

function homePoint2() {
    homeScoreCount += 2
    homeScore.innerText = homeScoreCount
}

function homePoint3() {
    homeScoreCount += 3
    homeScore.innerText = homeScoreCount
}

//functions to add points to GUEST
function guestPoint1() {
    guestScoreCount += 1
    guestScore.innerText = guestScoreCount
}

function guestPoint2() {
    guestScoreCount += 2
    guestScore.innerText = guestScoreCount
}

function guestPoint3() {
    guestScoreCount += 3
    guestScore.innerText = guestScoreCount
}

//random player function
function playerStart() {
    let start = Math.floor((Math.random() * 2) + 1)
    
    if(start == 2) {
        playerTurn.textContent = "Your turn - HOME"
    } else {
        playerTurn.textContent = "Your turn - GUEST"
    }   
}