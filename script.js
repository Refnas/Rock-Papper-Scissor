


const totalScore = {playerScore : 0,computerScore : 0};

function getComputerChoice(){
    const rpsChoice = ['Rock','Papper','Scissor'];
    const randomNumber = Math.floor(Math.random()*3);
    return rpsChoice[randomNumber];  
}

function getResult(playerChoice,computerChoice){
     let score;

     if(playerChoice == computerChoice){
        score = 0;
     }
     else if(playerChoice == 'Rock' && computerChoice == 'Scissor') {
        score = 1;
     }
     else if(playerChoice == 'Papper' && computerChoice == 'Rock'){
        score = 1;
     }
     else if(playerChoice == 'Scissor' && computerChoice == 'Papper'){
        score = 1;
     }
     else{
        score = -1;
     }
     return score; 
}

function showResult(score,playerChoice,computerChoice){
   const scoreDiv = document.getElementById('player-score');
   const playerHandSpan = document.getElementById('playerHand');
   const botHandSpan = document.getElementById('botHand');
   const vsSpan = document.getElementById('vs');
   const resultDiv = document.getElementById('result');

   if(score == 1){
      resultDiv.innerText = 'You won... :)';
   }
   else if(score == -1){
      resultDiv.innerText = 'You lose... :(';
   }
   else{
      resultDiv.innerText = "It's tie... :|";
   }
   playerHandSpan.innerText = `You :${playerChoice} `;
   vsSpan.innerText = "VS";
   botHandSpan.innerText = ` Bot :${computerChoice}`;
   scoreDiv.innerText = `Your Score = ${totalScore['playerScore']}`;

}

function onClickRps(playerChoice){
    const computerChoice = getComputerChoice();
    const score = getResult(playerChoice,computerChoice);
    
    totalScore['playerScore'] += score;
    totalScore['computerScore'] += score;
    showResult(score,playerChoice,computerChoice);

    const endButton = document.getElementById('endGameBtn');
    endButton.onclick = () =>{
      endGame(totalScore);
    }

}

function playGame(){
    const rpsButtons = document.querySelectorAll('.rpsButton');
    rpsButtons.forEach(rpsbutton =>{
      rpsbutton.onclick = () =>{
         onClickRps(rpsbutton.value);
      }
    })
}

function endGame(totalScore){
   totalScore['playerScore'] = 0;
   totalScore['computerScore'] = 0;

   const scoreDiv = document.getElementById('player-score');
   const playerHandSpan = document.getElementById('playerHand');
   const botHandSpan = document.getElementById('botHand');
   const vsSpan = document.getElementById('vs');
   const resultDiv = document.getElementById('result');

   scoreDiv.innerText = '';
   playerHandSpan.innerText = '';
   botHandSpan.innerText = '';
   vsSpan.innerText = '';
   resultDiv.innerText = '';

}

playGame();