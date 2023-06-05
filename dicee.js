(function DiceGame (){
    let player2 = 6;
    let player1 = 6;

    document.querySelector('.img1').addEventListener('click', function (event){
        event.stopPropagation();
        diceRoll('player1');
    });

    document.querySelector('.img2').addEventListener('click', function (event){
        event.stopPropagation();
        diceRoll('player2');
    })
    function diceRoll(player) {
        if (player === 'player1') {
            player1 = Math.floor(Math.random() * 6) + 1;
            document.querySelector('.img1').src = `./images/dice${player1}.png`;
        }

        if (player === 'player2') {
            player2 = Math.floor(Math.random() * 6) + 1;
            document.querySelector('.img2').src = `./images/dice${player2}.png`;
        }

        if (player1 > player2) {
            document.querySelector('.title').innerHTML = 'Player 1 won!!!!';

        } else if (player1 < player2) {
            document.querySelector('.title').innerHTML = 'Player 2 won!!!!';
        } else {
            document.querySelector('.title').innerHTML = 'The game is tied!';
        }
        console.log(player1, player2)
    }
})();


