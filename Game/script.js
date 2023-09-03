var _a;
function beginGame() {
    var _a, _b;
    (_a = document.getElementsByClassName("winScreen")[0]) === null || _a === void 0 ? void 0 : _a.classList.add("disabled");
    (_b = document.getElementById("gameBegin")) === null || _b === void 0 ? void 0 : _b.classList.add('w3-disabled');
    var random = Math.round(Math.random());
    if (random == 1)
        aiTurn();
}
;
//idk why this happens but needs to be like this or else html wont update immediately on game end
var firstMove = false;
var wins = 1;
var draws = 1;
var losses = 1;
var board = document.getElementsByClassName("ticTac");
(_a = document.getElementsByClassName("winScreen")[0]) === null || _a === void 0 ? void 0 : _a.classList.add("disabled");
var winStates = [[1, 4, 7], [2, 5, 8], [3, 6, 9], [1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 5, 9], [3, 5, 7]];
// vertical = [[1,4,7], [2,5,8], [3,6,9]]
// horizontal= [[1,2,3], [4,5,6], [7,8,9]]
// diagonal = [[1,5,9], [3,5,7]]
var boardState = {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
    8: 0,
    9: 0
};
//changes the box on click
function boardClick(boardNumber) {
    var _a;
    (_a = document.getElementsByClassName("winScreen")[0]) === null || _a === void 0 ? void 0 : _a.classList.add("disabled");
    var number = JSON.stringify(boardNumber);
    if (boardState[number] == 0) {
        boardState[number] = 1;
        boardNumber--;
        board[boardNumber].innerHTML = "X";
        checkVictory();
        aiTurn();
    }
    ;
}
;
function checkVictory() {
    for (var i = 0; i < winStates.length; i++) {
        var result = [];
        for (var j = 0; j < winStates[i].length; j++) {
            if (boardState[JSON.stringify(winStates[i][j])] == 1) {
                result.push(true);
            }
            else if (boardState[JSON.stringify(winStates[i][j])] == 2) {
                result.push(false);
            }
        }
        ;
        switch (result.join(" ")) {
            case "true true true":
                {
                    console.log(winStates[i]);
                    onWin("Player");
                }
                break;
            case "false false false":
                {
                    console.log(winStates[i]);
                    onWin("Computer");
                }
                break;
        }
        ;
    }
}
function aiTurn() {
    var moved = false;
    //find the best move
    var temp = 0;
    //firsdtmove
    while (!firstMove) {
        var x = Math.round(Math.random() * 4);
        moved = true;
        var space = 0;
        switch (x) {
            case 0:
                space = 0;
                break;
            case 1:
                space = 2;
                break;
            case 2:
                space = 4;
                break;
            case 3:
                space = 6;
                break;
            case 4:
                space = 8;
                break;
        }
        space++;
        if (boardState[JSON.stringify(space)] !== 1) {
            boardState[JSON.stringify(space)] = 2;
            space--;
            board[space].innerHTML = "O";
            firstMove = true;
        }
    }
    //atk
    if (moved) {
        checkVictory();
        return;
    }
    for (var i = 0; i < winStates.length; i++) {
        var result = [];
        for (var j = 0; j < winStates[i].length; j++) {
            if (boardState[JSON.stringify(winStates[i][j])] == 2) {
                result.push(true);
            }
            else if (boardState[JSON.stringify(winStates[i][j])] == 0) {
                result.push(false);
            }
        }
        ;
        switch (result.join(" ")) {
            case "true true false":
                {
                    boardState[JSON.stringify(winStates[i][2])] = 2;
                    temp = winStates[i][2];
                    temp--;
                    board[temp].innerHTML = "O";
                    console.log(winStates[i][2]);
                    moved = true;
                }
                ;
                break;
            case "true false true":
                {
                    boardState[JSON.stringify(winStates[i][1])] = 2;
                    temp = winStates[i][1];
                    temp--;
                    board[temp].innerHTML = "O";
                    console.log(winStates[i][1]);
                    moved = true;
                }
                ;
                break;
            case "false true true":
                {
                    boardState[JSON.stringify(winStates[i][0])] = 2;
                    temp = winStates[i][0];
                    temp--;
                    board[temp].innerHTML = "O";
                    console.log(winStates[i][0]);
                    moved = true;
                }
                ;
                break;
        }
        ;
        if (moved) {
            checkVictory();
            break;
        }
        ;
    }
    ;
    //def
    if (moved) {
        checkVictory();
        return;
    }
    for (var i = 0; i < winStates.length; i++) {
        var result = [];
        for (var j = 0; j < winStates[i].length; j++) {
            if (boardState[JSON.stringify(winStates[i][j])] == 1) {
                result.push(true);
            }
            else if (boardState[JSON.stringify(winStates[i][j])] == 0) {
                result.push(false);
            }
        }
        ;
        switch (result.join(" ")) {
            case "true true false":
                {
                    boardState[JSON.stringify(winStates[i][2])] = 2;
                    temp = winStates[i][2];
                    temp--;
                    board[temp].innerHTML = "O";
                    console.log(winStates[i][2]);
                    moved = true;
                }
                ;
                break;
            case "true false true":
                {
                    boardState[JSON.stringify(winStates[i][1])] = 2;
                    temp = winStates[i][1];
                    temp--;
                    board[temp].innerHTML = "O";
                    console.log(winStates[i][1]);
                    moved = true;
                }
                ;
                break;
            case "false true true":
                {
                    boardState[JSON.stringify(winStates[i][0])] = 2;
                    temp = winStates[i][0];
                    temp--;
                    board[temp].innerHTML = "O";
                    console.log(winStates[i][0]);
                    moved = true;
                }
                ;
                break;
        }
        ;
        if (moved) {
            break;
        }
        ;
    }
    ;
    if (moved) {
        checkVictory();
        return;
    }
    //middle attack
    for (var i = 0; i < winStates.length; i++) {
        var result = [];
        for (var j = 0; j < winStates[i].length; j++) {
            if (boardState[JSON.stringify(winStates[i][j])] == 2) {
                result.push(true);
            }
            else if (boardState[JSON.stringify(winStates[i][j])] == 0) {
                result.push(false);
            }
        }
        ;
        switch (result.join(" ")) {
            case "false true false":
                {
                    boardState[JSON.stringify(winStates[i][2])] = 2;
                    temp = winStates[i][2];
                    temp--;
                    board[temp].innerHTML = "O";
                    console.log(winStates[i][2]);
                    moved = true;
                }
                ;
                break;
            case "true false false":
                {
                    boardState[JSON.stringify(winStates[i][1])] = 2;
                    temp = winStates[i][1];
                    temp--;
                    board[temp].innerHTML = "O";
                    console.log(winStates[i][1]);
                    moved = true;
                }
                ;
                break;
            case "false false true":
                {
                    boardState[JSON.stringify(winStates[i][0])] = 2;
                    temp = winStates[i][0];
                    temp--;
                    board[temp].innerHTML = "O";
                    console.log(winStates[i][0]);
                    moved = true;
                }
                ;
                break;
        }
        ;
        if (moved) {
            break;
        }
        ;
    }
    ;
    if (!moved) {
        drawGame();
    }
}
;
function drawGame() {
    onWin("Draw");
}
function onWin(winner) {
    var _a, _b;
    //adds point to score board
    switch (winner) {
        case "Computer":
            document.getElementById(winner).innerHTML = JSON.stringify(losses++);
            break;
        case "Player":
            document.getElementById(winner).innerHTML = JSON.stringify(wins++);
            break;
        case "Draw":
            document.getElementById(winner).innerHTML = JSON.stringify(draws++);
            break;
    }
    for (var i = 0; i < board.length; i++) {
        board[i].innerHTML = "-";
        boardState[JSON.stringify(i + 1)] = 0;
    }
    firstMove = false;
    (_a = document.getElementById("gameBegin")) === null || _a === void 0 ? void 0 : _a.classList.remove('w3-disabled');
    (_b = document.getElementsByClassName("winScreen")[0]) === null || _b === void 0 ? void 0 : _b.classList.remove("disabled");
    switch (winner) {
        case "Computer":
            document.getElementById("win").innerHTML = "You couldn't even beat an ai. 😭😭";
            break;
        case "Player":
            document.getElementById("win").innerHTML = "Congratulations, you could beat an AI.";
            break;
        case "Draw":
            document.getElementById("win").innerHTML = "You couldn't even beat an ai. Pitiful";
            break;
    }
}
