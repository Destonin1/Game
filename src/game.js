import board7 from './img/board7.png'
import board9 from './img/board9.png'
import board11 from './img/board11.png'

let board;
let game;
let players;

export default function initGame (backBlock) {
    backBlock.addEventListener('click', ()=>{
        board = null;
        game = null;
        players = null;
    })
    root.innerHTML= " ";
    root.appendChild(backBlock)

    const titleWrap = createElem('div','title-wrap');
    const title = createElem('h1','game-title');
    titleWrap.appendChild(title);
    root.appendChild(titleWrap);

    const container = createElem('div','game-container');
    root.appendChild(container);

    const background = createElem('div','game-background');
    const redLine = createElem('div','game-background-line');
    background.appendChild(redLine);
    root.appendChild(background);

    game = Game();
    game.chooseMode();
}

const Game = () => {
    const playersReady = [false,false];
    let firstPlayerTurn = true;
    
    let modeAI;
    const setMode = (mode) => modeAI = mode;
    const getIsAIMode = () => modeAI;

    let boardSize;
    const setBoardSize = (size) => boardSize = size;
    const getBoardSize = () => boardSize;

    const chooseMode = () => {
        const title = document.querySelector('.game-title');
        title.textContent = 'Choose the mode you want to play';

        let p = new Promise((resolve, reject) => {
            const modeContainer = createElem('div','mode');

            const btnPlsyer = createElem('button','mode-selection-player',"Player vs Player");
            btnPlsyer.onclick = resolve;

            const btnAI = createElem('button','mode-selection-AI',"Player vs AI");
            btnAI.onclick = reject;

            modeContainer.appendChild(btnPlsyer);
            modeContainer.appendChild(btnAI);
            append(modeContainer);
        })
        p.then(() => {
            setMode(false);
            chooseBoardSize();
        }).catch(() => {
            setMode(true);
            chooseBoardSize();;
        })
    }
    
    const chooseBoardSize = () => {
        const chooseBlock = createBoardSizeContent()
        append(chooseBlock);
    }
    
    const createBoardSizeContent = () => {
        const title = document.querySelector('.game-title');
        title.textContent = 'Choose board size';

        const wrapper = createElem("div","board-size");
        const btnswrapper = createElem("div","choose-size-btns-wrapper");
    
        const btnBlock1 = createElem("div","choose-size-block");
        const btnImage1 = createBtnImage(board7,'board7x7',7);
        btnBlock1.appendChild(btnImage1);
        btnswrapper.appendChild(btnBlock1);
    
        const btnBlock2 = createElem("div","choose-size-block");
        const btnImage2 = createBtnImage(board9,'board9x9',9);
        btnBlock2.appendChild(btnImage2);
        btnswrapper.appendChild(btnBlock2);
    
        const btnBlock3 = createElem("div","choose-size-block");
        const btnImage3 = createBtnImage(board11,'board11x11',11);
        btnBlock3.appendChild(btnImage3);
        btnswrapper.appendChild(btnBlock3);
    
        wrapper.appendChild(btnswrapper);
        return wrapper
    }
    
    const createBtnImage = (source,alt,i) => {
        const btnImage = createElem('img','choose-size-img')
        btnImage.src = source;
        btnImage.alt = alt;
        btnImage.addEventListener('click', ()=>{
            setBoardSize(i);
            start()
        })
        return btnImage
    }
    
    const start = () => {
        append(" ");
        board = Board();
        if(modeAI){
            players = [Player("Player",0),AIPlayer()];
        }
        else players = [Player("Player 1",0),Player("Player 2",1)];
        createScoreBoard(modeAI ? "player vs AI":"player vs player");
    }

    const restart = () => {
        board.destroyBoard();
        game.firstPlayerTurn = true;
        board = Board();
        players[0].resetScore();
        players[1].resetScore();
        board.createBoard();
    }

    const createScoreBoard = (mode) => {
        const colors = ["#2852DF","#DC2B36","#1CBE29", "#f2dc11"];
        let player1Name;
        let player2Name;
        let isAI = false;
        switch(mode) {
            case "player vs player":
                player1Name = "Player 1";
                player2Name = "Player 2";
                break
            case "player vs AI":
                player1Name = "Player";
                player2Name = "AI";
                isAI = true;
                break
        }
        
        const title = document.querySelector('.game-title');
        title.textContent = 'Every player must choose color before the game starts';
        title.insertAdjacentHTML('beforebegin',`
        <div class="player">
            <h2 class="player-nickname">${player1Name}</h2>
            <div class="player-score">Squares = <span class="player-score-number" data-player-score="0">0</span></div>
            <div class="player-colors"><p class="player-colors-text">Choose color:</p></div>
        </div>`)

        title.insertAdjacentHTML('afterend',`
        <div class="player">
            <h2 class="player-nickname">${player2Name}</h2>
            <div class="player-score">Squares = <span class="player-score-number" data-player-score="1">0</span></div>
            <div class="player-colors"><p class="player-colors-text">Choose color:</p></div>
        </div>`)

        const colorsChoice = document.getElementsByClassName("player-colors");
        if(isAI){
            createColors(colors,colorsChoice[0],0);
            setPlayerColor(1,players[1].getColor());
        }
        else {
            createColors(colors,colorsChoice[0],0);
            createColors(colors,colorsChoice[1],1);
        }
    }

    const createColorBlock = (count,color) => {
        const playerColor = createElem('div','player-color')
        playerColor.setAttribute('data-color-numder', count);
        playerColor.style.backgroundColor = color;
        return playerColor
    }

    const createColors = (colors,colorsChoice,i) => {
        let count = 0;
        colors.forEach(color => {
            const playerColor = createColorBlock(count,color);
            playerColor.addEventListener("click",  () => clickColor(i,color)); 
            colorsChoice.appendChild(playerColor);
            count++;
        })
    }

    const clickColor = (i,color) => {
        const colorNumber = event.target.getAttribute("data-color-numder");
        document.querySelectorAll(`[data-color-numder="${colorNumber}"]`).forEach(element => {
            element.remove();
        });
        setPlayerColor(i,color)
        players[i].setColor(color);
        checkStartGame();
    }

    const setPlayerColor = (i,color) => {
        const playerColor = createColorBlock(10,color);
        document.getElementsByClassName("player-nickname")[i].style.color = color;
        const colorsChoice = document.getElementsByClassName("player-colors");
        colorsChoice[i].innerHTML = " ";
        colorsChoice[i].appendChild(playerColor);
        playersReady[i] = true;
    }

    const checkStartGame = () => {
        if(playersReady[0] && playersReady[1]) {
            board.createBoard();
        }
    }

    const endGame = (isFirstPlayerWon) => {
        const title = document.querySelector('.game-title');
        title.textContent = '';
        
        const text = createElem('div','winner-text')

        const name = document.createElement('span');
        let winnerText = isFirstPlayerWon ? players[0].getName():players[1].getName();
        winnerText = winnerText + ' is won';
        name.textContent = winnerText;
        name.style.color = isFirstPlayerWon ? players[0].getColor():players[1].getColor();
        text.appendChild(name);
        title.appendChild(text);

        const createBoardButton = createElem('button','board-button','Restart');
        createBoardButton.onclick = restart;
        title.appendChild(createBoardButton);
    }

    return {chooseMode,setMode,getIsAIMode,setBoardSize,getBoardSize,createScoreBoard,firstPlayerTurn,endGame}
}

const Board = () => {
    let squares = {};
    let remainingSquares;
    let lastLine;
    const boardSize = game.getBoardSize();
    const setRemainingSquares = (arr) => remainingSquares = arr;
    const getRemainingSquares = () => remainingSquares;
    const createBoard = () => {
        let upSize = Math.ceil(boardSize/2);
        let numb = 1,c=0;
        const board = document.createElement('div');
        board.classList.add("board");
        for(let i = 0; i < upSize; i++){
            board.appendChild(createRowHor(numb,i,c));
            board.appendChild(createRowVert(numb+1,i));
            numb=numb+2;
        }
    
        c=-1;  // coefficient for making the board
        for(let i = 0; i < boardSize-upSize; i++){
            numb=numb-2;
            board.appendChild(createRowHor(numb,i+upSize,c));
            board.appendChild(createRowVert(numb-1,i+upSize));
        }

        board.appendChild(createRowHor(1,9,c));
        board.querySelector("[data-numbs='00']").style.background= "#b5b0b0";
        board.querySelector(`[data-numbs='${boardSize-upSize}0']`).style.background= "#b5b0b0";
        board.querySelector(`[data-numbs='${(boardSize-upSize).toString() + boardSize-1}']`).style.background= "#b5b0b0";
        board.querySelector(`[data-numbs='${boardSize-1}0']`).style.background= "#b5b0b0";

        const container = document.getElementsByClassName('game-container');
        container[0].appendChild(board);
        setRemainingSquares(Object.keys(squares));

        const title = document.querySelector('.game-title');
        title.textContent = '';
        const turnText = createTurnText();
        title.appendChild(turnText);
    }

    const createRowHor = (numb,i,c) => {
        const row1 = document.createElement('div');
        row1.classList.add("row-hor");
        for(let h = 0; h < numb; h++) {
            if(h === 0 || h === numb-1 || numb < 4) {
                row1.appendChild(createBorderLine("line-hor", (i+c).toString() + h));
            }
            else {
                row1.appendChild(createLine("line-hor", (i+c).toString() + h, (i-1+Math.abs(c)).toString() + h-1));
            }
        }
        return row1
    }

    const createRowVert = (numb,i) => {
        const row2 = createElem('div','row-vert')
        for(let v = 0; v < numb; v++) {
            if(v === 0 || v === numb-1) {
                if(v !== numb-1){
                    row2.appendChild(createBorderLine("line-vert", (i).toString() + v));
                    row2.appendChild(createSquare(i.toString() + v));
                }
                else row2.appendChild(createBorderLine("line-vert", (i).toString() + v-1));
            }
            else if(numb === boardSize +1)
            {
                if(v === 1 || v === numb-2){
                    row2.appendChild(createBorderLine("line-vert", (i).toString() + v));
                    row2.appendChild(createSquare(i.toString() + v));
                }
                else {
                    row2.appendChild(createLine("line-vert",(i).toString() + (v-1),(i).toString() + v));
                    row2.appendChild(createSquare(i.toString() + v));
                }
            } 
            else {
                row2.appendChild(createLine("line-vert", (i).toString() + (v-1), (i).toString() + v));
                row2.appendChild(createSquare(i.toString() + v));
            }
        }
        return row2
    }

    const createBorderLine = (nameClass,index) => {
        let line = createElem('div','line');
        line.classList.add("line-game");
        line.classList.add(nameClass);
        line.setAttribute('data-numb1', index);
        return line
    }
    
    const createLine = (nameClass,index1,index2) => {
        let line = createElem('div','line');
        line.classList.add(nameClass);
        line.setAttribute('data-numb1', index1);
        line.setAttribute('data-numb2', index2);
        let index3 = (index1).toString() + index2;
        if(squares[index1] == undefined){
            squares[index1] = {[index3] : false};
        }
        else {
            squares[index1] = Object.assign(squares[index1], {[index3] : false});
        }
    
        if(squares[index2] == undefined){
            squares[index2] = {[index3] : false};
        }
        else {
            squares[index2] = Object.assign(squares[index2], {[index3] : false});
        }
    
        line.addEventListener("click", lineClick);
        return line
    }
    
    const createSquare = (index) => {
        const square = createElem('div','square')
        square.setAttribute('data-numbS', index);
        return square
    }

    const createTurnText = () => {
        const turnText = createElem('h1','turn-text')
        const turnNickname = document.createElement("span");
        turnNickname.setAttribute("id", "turn-nickname");
        turnNickname.textContent = "Player";
        turnNickname.style.color = `${players[0].getColor()}`
        turnText.appendChild(turnNickname);
        turnText.insertAdjacentHTML("beforeend"," turn");
        return turnText
    }

    const lineChangeColor = (line,i,change) => {
        if(lastLine !== undefined){
            lastLine.style.backgroundColor = '#000';
        }
        line.classList.add('line-game');
        if(change){
            line.style.backgroundColor = players[i].getColor();
        }
        lastLine = line;
    }

    const lineHandle = (index1,index2,index3,line,i) => {
        let isSquareClosed = false;
        squares[index1][index3] = true;
        squares[index2][index3] = true;
        const indexKeys1 = Object.keys(squares[index1]);
        const indexKeys2 = Object.keys(squares[index2]);
        if(checkIsSquareClosed(index1,indexKeys1)){
            isSquareClosed = true;
            lineChangeColor(line,i,false);
            closedSquare(index1);
        }
        if(checkIsSquareClosed(index2,indexKeys2)){
            isSquareClosed = true;
            lineChangeColor(line,i,false);
            closedSquare(index2);
        }
        if(!isSquareClosed) {
            lineChangeColor(line,i,true);
            game.firstPlayerTurn = !game.firstPlayerTurn;
            document.getElementById("turn-nickname").style.color = `${game.firstPlayerTurn ? players[0].getColor():players[1].getColor()}`;
        }
        else {
            if(remainingSquares.length === 0){
                if(players[0].getScore() > players[1].getScore()){
                    game.endGame(true);
                }
                else  game.endGame(false);
            }
        }
    }

    const checkIsSquareClosed = (index, indexKeys) => {
        for(let i = 0; i < indexKeys.length; i++) {
            if(!board.squares[index][indexKeys[i]]){
                return false
            }
        }

        return true
    }

    const closedSquare = (index) => {
        const squareElement = document.querySelector(`[data-numbS="${index}"]`);
        const i = game.firstPlayerTurn ? 0:1;
        squareElement.style.background = `${players[i].getColor()}`; //change the color of the closed square

        players[i].scoreCount();
        const playerScore = document.querySelector(`[data-player-score="${i}"]`);
        playerScore.textContent = `${players[i].getScore()}`; //update score display

        deleteSquareFromRemaining(index);
    }

    const deleteSquareFromRemaining = (index) => {  //deleting present square from non closed
        let sqaureNumbers = getRemainingSquares();
        for(let i = 0; i < sqaureNumbers.length; i++){ 
            if (sqaureNumbers[i] == index) { 
                sqaureNumbers.splice(i, 1);
                break
            }
        }
        setRemainingSquares(sqaureNumbers);
    }

    const destroyBoard = () => {
        const board = document.getElementsByClassName("board");
        board[0].remove();
    }

    return {getRemainingSquares,createBoard,squares,lineHandle,destroyBoard}
}

const Player = (playerName,i) => {
    let name = playerName
    let score = 0;
    let color;
    const getName = () => name;
    const setColor = (chosenColor) => {color = chosenColor};
    const getColor = () => color;
    const getScore = () => score;
    const resetScore = () => {
        score = 0;
        document.querySelector(`[data-player-score="${i}"]`).textContent = score;
    }
    const scoreCount = () => {
        score++;
    }
    return {getName,setColor,getColor,getScore,resetScore,scoreCount}
}

const AIPlayer = () => {
    let score = 0;
    let color = "#fa6c00";
    const getName = () => "AI";
    const getColor = () => color;
    const getScore = () => score;
    const resetScore = () => {
        score = 0;
        document.querySelector(`[data-player-score="${1}"]`).textContent = score;
    }
    const scoreCount = () => {
        score++;
    }

    const getRandomFreeLine = (squaresObj) => {
        const squaresCopyKeys = board.getRemainingSquares();
        let randomSquare = getRandomNumb(0,squaresCopyKeys.length);
        const squareKeys = Object.keys(squaresObj[squaresCopyKeys[randomSquare]]);
        for(let j = 0; j < squareKeys.length; j++){
            if(!squaresObj[squaresCopyKeys[randomSquare]][squareKeys[j]]){ // if that random line not activated, return it
                return squareKeys[j]
            }
        }
    }

    const getRandomLine = (squaresObj,count) => {
        let squaresObj1 = JSON.parse(JSON.stringify(squaresObj));
        let randomLine = getRandomFreeLine(squaresObj1);
        const twoSquares = sliceLine(randomLine);
        squaresObj1[twoSquares[0]][randomLine] = true;
        squaresObj1[twoSquares[1]][randomLine] = true;
        let checkBadMove = closureMove(squaresObj1);
        if(checkBadMove == null){
            return randomLine
        }
        else if(count >= 9){
            return findLessClosureToPlayer(squaresObj)
        }
        else return false
    }

    const closureMove = (squaresObj) => {
        const squaresKeys = Object.keys(squaresObj);
        for(let i = 0; i < squaresKeys.length; i++){
            const squareKeys = Object.keys(squaresObj[squaresKeys[i]]);
            let chosenLine;
            let linesLeft = 0;
            squareKeys.forEach(key1 => {
                if(!squaresObj[squaresKeys[i]][key1]){
                    linesLeft++;
                    chosenLine = key1;
                }
            })
            if(linesLeft == 1){
               return chosenLine;
            }
        }
        return null
    }

    const addLineToBoard = (line,squaresObj) => {
        const twoSquares = sliceLine(line);
        squaresObj[twoSquares[0]][line] = true;
        squaresObj[twoSquares[1]][line] = true;
        return squaresObj
    }

    const findLessClosureToPlayer = (squaresObj) => {
        let resultCount = {};
        let chosenLine;
        const remainingSquares = board.getRemainingSquares();
        remainingSquares.forEach((square) => {
            Object.keys(squaresObj[square]).forEach((squareLine) => {
                if(!squaresObj[square][squareLine]){
                    let ClosedSquares = 0;
                    let squaresObjModel = JSON.parse(JSON.stringify(squaresObj));
                    squaresObjModel = addLineToBoard(squareLine,squaresObjModel)
                    while(true){
                        let closureLine = closureMove(squaresObjModel);
                        if(closureLine != null){
                            squaresObjModel = addLineToBoard(closureLine,squaresObjModel)
                            ClosedSquares++;
                        }
                        else {
                            resultCount[squareLine] = ClosedSquares;
                            break
                        }
                    }
                }
            })
        })
        let minClosedSquares = 37;
        Object.keys(resultCount).forEach((line) =>{
            if(minClosedSquares > resultCount[line]){
                minClosedSquares = resultCount[line];
                chosenLine = line;
            } 
        })
        return chosenLine
    }
    
    const findBestNove = () => {
        let bestMove;
        let squaresCopy = JSON.parse(JSON.stringify(board.squares));
        bestMove = closureMove(squaresCopy);
        if(bestMove == null){
            for(let t = 0; t < 10; t++) {
                let res = getRandomLine(squaresCopy,t);
                if(res != false){
                    bestMove = res;
                    break
                }
            }
        }
        
        return bestMove
    }
    
    const AIMove = () => {
        const index3AI = findBestNove();
        const twoSquares = sliceLine(index3AI);
        const chosenLine = document.querySelectorAll(`[data-numb1="${twoSquares[0]}"]`);
        let line;
        for(let i = 0;i < chosenLine.length;i++){
            if(chosenLine[i].dataset.numb1 == twoSquares[0] && chosenLine[i].dataset.numb2 == twoSquares[1]){
                line = chosenLine[i];
                break 
            }
        }

        board.lineHandle(twoSquares[0],twoSquares[1],index3AI,line,1);
    };

    const AITurn = () => {
        AIMove()
        if(!game.firstPlayerTurn && board.getRemainingSquares().length >= 1) {
            setTimeout(AITurn,500);
        }
    }

    return {getName,getColor,getScore,resetScore,scoreCount,AITurn}
}

function lineClick(e){ // Player click on empty line
    if(!(game.getIsAIMode() && !game.firstPlayerTurn)){ 
        const index1 = e.currentTarget.getAttribute("data-numb1");
        const index2 = e.currentTarget.getAttribute("data-numb2");
        const index3 = (index1).toString() + index2;
        board.lineHandle(index1,index2,index3,e.currentTarget,0);

        e.currentTarget.removeEventListener("click", lineClick);

        if(game.getIsAIMode() && !game.firstPlayerTurn){ //if its Player vs AI and Player turn over, start AI turn
            setTimeout(players[1].AITurn,500);
        }
    }
}

function sliceLine(fullLine) {
    return [fullLine.slice(0,2),fullLine.slice(2,4)]
}

function append(elem){ //add element to DOM 
    const container = document.getElementsByClassName('game-container');
    container[0].innerHTML = ' ';
    if(typeof elem === 'object'){
        container[0].appendChild(elem);
    }
}

function createElem(tag,className,textContent){ //short way to create an element
    const elem = document.createElement(tag);
    if(className){
        elem.classList.add(className);
    }
    if(textContent){
        elem.textContent = textContent;
    }
    return elem
}

function getRandomNumb(min, max) {
    const number = Math.floor(Math.random() * (max - min)) + min;
    return number
}