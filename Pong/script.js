const playerMoveSpeed = 20
var ballMoveDirection = -1
var leftPlayerTurn = false
var ballBounceDirection = -1
const padSize = 100
const ballSize = 25

//  0,400px top movement
var leftPlayer = document.getElementById('left-player')
var rightPlayer = document.getElementById('right-player')
    //  25px,475px top/ 45px,905px left
var ball = document.getElementById('ball')

leftPlayer.style.top = '0px';
rightPlayer.style.top = '0px';
ball.style.left = '45px';
ball.style.top = '25px';

var gamePlayingState = setInterval(() => {
    let ballLeftPos = ball.style.left
    let ballTopPos = ball.style.top
    let currLeftPos = parseInt(ballLeftPos.substr(0, ballLeftPos.length - 2))
    let currTopPos = parseInt(ballTopPos.substr(0, ballTopPos.length - 2))
    if (currLeftPos >= 905 || currLeftPos <= 45) {
        console.log(currTopPos)
        if (checkCollisionWithPlayerPad(ballMoveDirection, currTopPos)) {
            ballMoveDirection *= -1
        } else {
            setTimeout(resetGame, 10)
        }
    }
    ball.style.left = `${currLeftPos + ballMoveDirection}px`
    if (currTopPos >= 475 || currTopPos <= 25) {
        ballBounceDirection *= -1
    }
    ball.style.top = `${currTopPos + ballBounceDirection}px`
}, 5);

function resetGame() {
    ballMoveDirection = -1
    leftPlayerTurn = false
    ballBounceDirection = -1
    leftPlayer.style.top = '0px';
    rightPlayer.style.top = '0px';
    ball.style.left = '45px';
    ball.style.top = '25px';
}


// not yet implemented bounce directions changes according to pad hit location
function checkCollisionWithPlayerPad(player, currTopPos) {
    let playerPad
    player > 0 ? playerPad = rightPlayer : playerPad = leftPlayer
    let playerPadPos = parseInt(playerPad.style.top.substr(0, playerPad.style.top.length - 2))
    if (playerPadPos + padSize + ballSize >= currTopPos && playerPadPos - ballSize <= currTopPos) {
        return true
    } else {
        return false
    }
}

function move(e) {
    let player;
    ballMoveDirection < 0 ? player = leftPlayer : player = rightPlayer
    let PlayerPos = player.style.top
    let currPos = parseInt(PlayerPos.substr(0, PlayerPos.length - 2))
    let key = e.key.toLowerCase();
    if (key === 's') {
        if (currPos + playerMoveSpeed <= 400)
            player.style.top = `${currPos + playerMoveSpeed}px`

    } else if (key === 'w') {
        if (currPos - playerMoveSpeed >= 0)
            player.style.top = `${currPos - playerMoveSpeed}px`
    }
}