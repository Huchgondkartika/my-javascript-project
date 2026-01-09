let userScore=0;
let compScore=0;

const Choices = document.querySelectorAll(".Choice");
const msg=document.querySelector("#msg");

const userScorePara =document.querySelector("#user-score");
const compScorePara =document.querySelector("#comp-score");


const genCompChoice=()=>{
    const options=["rock","paper","scissors"];
   const randIdx= Math.floor(Math.random()*3);
   return options[randIdx];

}
const drawGame=()=>{
   
     msg.innerText="game was draw ,you play agian!";
    msg.style.backgroundColor ="black";
};

const showWinner =(userWin,userChoice,CompChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText=`You win!${userChoice} beats ${CompChoice}`;
        msg.style.backgroundColor ="green";
    }else{
        compScore++;
        compScorePara.innerText=compScore;
         msg.innerText=`You lose!${CompChoice} beats your ${userChoice}`;
         msg.style.backgroundColor ="red";
    }
    };


const playGames=(userChoice) =>{
    console.log("user Choice=",userChoice);
    const CompChoice=genCompChoice();
     console.log("Comp Choice=",CompChoice);

     if(userChoice === CompChoice){
        drawGame();
     }else{
        let userWin=true;
        if(userChoice ==="rock"){
           userWin= CompChoice ==="paper" ? false:true;
        }
        else if(userChoice ==="paper"){
            userWin=CompChoice ==="scissors"? false: true;
        }else{
           userWin= CompChoice ==="rock"? false: true;
        }
        showWinner(userWin,userChoice,CompChoice);

     }


};

Choices.forEach((Choice)=>{
    console.log(Choice);
    Choice.addEventListener("click", ()=>{
        const userChoice=Choice.getAttribute("id");
        playGames(userChoice);
    });
});
