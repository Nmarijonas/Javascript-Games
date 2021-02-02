const gameSymbols = {
    x: "X",
    o: "O"
}
var lastPlacedSymbol = gameSymbols.x;

function play(element) {
    if (!element.textContent) {
        element.textContent = lastPlacedSymbol;
        switch (lastPlacedSymbol) {
            case gameSymbols.x:
                lastPlacedSymbol = gameSymbols.o;
                break;
            case gameSymbols.o:
                lastPlacedSymbol = gameSymbols.x;
                break;
        }
    }
    checkGameCondition();
}

function checkGameCondition() {
    let gameBoard = document.getElementById('board').querySelectorAll('div');
    let values = [];
    gameBoard.forEach(element => {
        values.push(element.textContent);
    });
    let winner = "";

    //  __ __ __
    // |__|__|__|  ----> rows check     |                   \     /
    // |__|__|__|                       |  colums check      \   /  diagonals check
    // |__|__|__|                       v                     v v

    if (values[0] != "" && values[0] == values[1] && values[1] == values[2]) {
        winner = values[0];
    } else if (values[3] != "" && values[3] == values[4] && values[4] == values[5]) {
        winner = values[3];
    } else if (values[6] != "" && values[6] == values[7] && values[7] == values[8]) {
        winner = values[6];
    } else if (values[0] != "" && values[0] == values[3] && values[3] == values[6]) {
        winner = values[0];
    } else if (values[1] != "" && values[1] == values[4] && values[4] == values[7]) {
        winner = values[1];
    } else if (values[2] != "" && values[2] == values[5] && values[5] == values[8]) {
        winner = values[2];
    } else if (values[0] != "" && values[0] == values[4] && values[4] == values[8]) {
        winner = values[0];
    } else if (values[2] != "" && values[2] == values[4] && values[4] == values[6]) {
        winner = values[2];
    }
    if (winner != "") {
        restartGame(winner + " WON! CONGRATULATIONS!");
    } else if (!values.includes("")) {
        restartGame("IT'S A TIE GAME! PLAY AGAIN!");
    }
}

function restartGame(msg) {
    setTimeout(() => {
        alert(msg);
        let gameBoard = document.getElementById('board').querySelectorAll('div');
        gameBoard.forEach(element => {
            element.textContent = "";
        });
    });
}