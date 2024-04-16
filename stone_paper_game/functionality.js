let userScore=0
let compScore=0

const Choices= document.querySelectorAll(".choice")
const msg=document.querySelector("#msg");
const userScorePara=document.querySelector("#user_score");
const compScorePara=document.querySelector("#comp_score");

const getCompChoice=()=> {
    const options=["stone","paper","scissor"]
    const ReqIdx= Math.floor(Math.random()*3)
    return options[ReqIdx];
};
const drawGame=()=>{
    // console.log("The match is draw.")
    msg.innerText="Game draw! Play again!";
    msg.style.backgroundColor="teal";
};
const showWinner=(userWin, userChoice, compChoice)=>{
       if(userWin){
        userScore++;
        // console.log("You win!");
        msg.innerText=`You win! Your ${userChoice} beats ${compChoice}`;
        userScorePara.innerText=userScore;
        msg.style.backgroundColor="green";
       }
       else{
        compScore++;
        // console.log("You Lose!");
        msg.innerText=`You lose! ${compChoice} beats your ${userChoice}`;

        compScorePara.innerText=compScore;
        msg.style.backgroundColor="maroon";
       }
};


const playGame=(userChoice)=> {
    console.log("User choice", userChoice);
    const compChoice=getCompChoice();
    console.log("Comp choice",compChoice);
    
    if(userChoice===compChoice){
        drawGame();
    }
    
    else{
        let userWin=true;
        if(userChoice==="stone"){
            // paper,scissor
            userWin=compChoice==="paper" ? false:true;
        }
        else if(userChoice==="paper"){
            //   rock,scissor
            userWin=compChoice==="scissor" ? false:true;

        }
        else{
            // rock,paper
            userWin=compChoice==="paper" ? false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }

};

Choices.forEach((choice) =>{
    //  console.log(choice);
    const userChoice= choice.getAttribute("Id");
     choice.addEventListener("click",()=>
    {
        playGame(userChoice);
        
    });
});

