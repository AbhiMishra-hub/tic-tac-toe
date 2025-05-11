let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset_btn");
let newgame=document.querySelector("#new_start");
let msgcontainer=document.querySelector(".msg_container");
let msg=document.querySelector("#msg");
let turnO = true;   //player x, player o
const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8],
];
const resetGame=()=>{
turnO=true;
    enableBoxes();
    msgcontainer.classList.add("hide") 
}
boxes.forEach((box)=>{
    box.addEventListener("click",() =>{
        console.log("box is clicked");
        if(turnO){
            box.innerText="O";
            turnO=false;
        }
        else{
            box.innerText="X";  // to display the 
            turnO=true;
        }
        box.disabled=true;
        checkWinner();
    });
});

const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }}

    const enableBoxes=()=>{
        for(let box of boxes){
            box.disabled=false;
            box.innerText="";
        }}

        

    const showWinner=(winner)=>{
        msg.innerText=`Congratulations, Winner is ${winner}`;
        msgcontainer.classList.remove("hide");
        disableBoxes();
    }

const checkWinner=()=>{
    for(let pattern of winPatterns){
        
        // console.log(pattern[0],pattern[1],pattern[2]);
    
        let pos1Val= boxes[pattern[0]].innerText;
        let pos2Val= boxes[pattern[1]].innerText;
        let pos3Val= boxes[pattern[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val==pos2Val && pos2Val==pos3Val){
                console.log("winner",pos1Val);

                showWinner(pos1Val);
            }
        }
    }
    };
newgame.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);