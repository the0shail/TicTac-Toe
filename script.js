

startGame();



function startGame() {
    const map = document.querySelectorAll('.map tbody td');
    const title = document.querySelector('.title');
    let matrix = {
        1: null,
        2: null,
        3: null,
        4: null,
        5: null,
        6: null,
        7: null,
        8: null,
        9: null,
    }

    map.forEach(ceil => {
        ceil.addEventListener("click", () => {
            // Проверка на дабл клик
            if (ceil.classList[1] == undefined) {
                moveTicPlayer(ceil, matrix);
                botMove(map, title, matrix);

                endGame(matrix, title);
            }
        });
    });
}


function botMove(maps, title, historyMove) {
    let rand = String(Math.floor(Math.random() * (10 - 1) + 1));
    let button = maps[rand];

    try {
        if (button === undefined || (button.classList[1] == 'selectTic' || button.classList[1] == 'selectTac')) {
            botMove(maps, title, historyMove);
        }
        else {
            moveTacPlayer(button, historyMove);

        }
    } catch (e) {
        if (e instanceof RangeError) {
            title.innerText = "Ничья !";
        }
    }
}


function moveTicPlayer(button, historyMove) {

    button.innerHTML = `<img src="tic.png">`;
    button.classList.add('selectTic');

    let ceil = button.id.slice(-1);
    let figure = button.classList[1].slice(6);

    historyMove[ceil] = figure;
}


function moveTacPlayer(button, historyMove) {
    button.innerHTML = `<img src="tac.png">`;
    button.classList.add('selectTac');

    let ceil = button.id.slice(-1);
    let figure = button.classList[1].slice(6);

    historyMove[ceil] = figure;
}


function endGame(mat, title) {

    if ((mat[1] == "Tic" && mat[2] == "Tic" && mat[3] == "Tic") ||
        (mat[4] == "Tic" && mat[5] == "Tic" && mat[6] == "Tic") ||
        (mat[7] == "Tic" && mat[8] == "Tic" && mat[9] == "Tic") ||

        (mat[1] == "Tic" && mat[4] == "Tic" && mat[7] == "Tic") ||
        (mat[2] == "Tic" && mat[5] == "Tic" && mat[8] == "Tic") ||
        (mat[3] == "Tic" && mat[6] == "Tic" && mat[9] == "Tic") ||

        (mat[1] == "Tic" && mat[5] == "Tic" && mat[9] == "Tic") ||
        (mat[3] == "Tic" && mat[5] == "Tic" && mat[7] == "Tic")) {

        title.innerHTML = "Победитель: Крестик !";
    }
    if ((mat[1] == "Tac" && mat[2] == "Tac" && mat[3] == "Tac") ||
        (mat[4] == "Tac" && mat[5] == "Tac" && mat[6] == "Tac") ||
        (mat[7] == "Tac" && mat[8] == "Tac" && mat[9] == "Tac") ||

        (mat[1] == "Tac" && mat[4] == "Tac" && mat[7] == "Tac") ||
        (mat[2] == "Tac" && mat[5] == "Tac" && mat[8] == "Tac") ||
        (mat[3] == "Tac" && mat[6] == "Tac" && mat[9] == "Tac") ||

        (mat[1] == "Tac" && mat[5] == "Tac" && mat[9] == "Tac") ||
        (mat[3] == "Tac" && mat[5] == "Tac" && mat[7] == "Tac")) {

        title.innerHTML = "Победитель: Нолик !";
    }
}
