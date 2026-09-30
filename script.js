console.log("welcome to tic tak teo");
let music1 = new Audio("song1.mp3");
let music2 = new Audio("song2.mp3");
let win = new Audio("win-game.mp3");
let turn = "x";
let gameover = false;
// change the turn 
const changeturn = () => {

    return turn === "x" ? "0" : "x";

}
// To check how to win 

let boxtext = document.getElementsByClassName('boxtext');
let winsgame = [
    [0, 1, 2 ,5 ,5, 0],
    [3, 4, 5 ,5 ,15, 0],
    [6, 7, 8 ,5 ,25, 0],
    [0, 3, 6 ,-5 ,15, 90],
    [1, 4, 7 ,5 ,15, 90],
    [2, 5, 8 ,15 ,15, 90],
    [0, 4, 8 ,5 ,15, 45],
    [2, 4, 6 ,5 ,15, 135]
];
const checkwin = () => {

    winsgame.forEach(e => {
        if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== '')) {
            document.querySelector(".info").innerText = boxtext[e[0]].innerText + "won";
            gameover = true;
            document.querySelector('.imgbox img').style.width = "200px";
            win.play();
            document.querySelector(".line").style.width = "20vw";
             document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
        }

    })
}




// Start the game 

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', () => {
        if (boxtext.innerText === '') {
            boxtext.innerText = turn;
            turn = changeturn();
            music2.play();
            checkwin();
            if (!gameover) {
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
            }

        }
    })
});


// reset  event lisntiner
reset.addEventListener('click', () => {
    let boxtext = document.querySelectorAll('.boxtext');
    Array.from(boxtext).forEach(element => {
        element.innerText = ""
    });
    turn = "x"
    gameover = false
    document.querySelector(".line").style.width = "0vw";
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;

    document.querySelector('.imgbox img').style.width = "0px";
    win.pause();
    // music2.play();


});




 