let boxes=document.querySelectorAll(".box")
let rset=document.querySelector("#reset-game")
let newgame=document.querySelector("#new-game")
let msgcontainer=document.querySelector(".msg-container")
let msg=document.querySelector("#msg")



let turno=true;

const winpattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const resetgame=()=>{
    turno=true;
    enableboxes();
    msgcontainer.classList.add("hide")
}


boxes.forEach((box)=> {
   box.addEventListener("click",()=>{
    console.log("happy birthday mera baccha");
    if(turno){
        box.innerHTML="O"
        turno=false
    }else{
        box.innerHTML="X"
        turno=true;
    }
    box.disabled=true;

    checkwinner();
   })
});

const disableboxes=()=>{
    for (const box of boxes) {
        box.disabled=true;
    }
};

const enableboxes=()=>{
    for (const box of boxes) {
        box.disabled=false;
        box.innerHTML=""
    }
};

const showwinner=(winner)=>{
   msg.innerHTML=`congratulation winner is${winner}`
   msgcontainer.classList.remove("hide")
   disableboxes()
}

const checkwinner=()=>{
    for(let pattern of winpattern){
       

let pas1val=boxes[pattern[0]].innerHTML;
let pas2val=boxes[pattern[1]].innerHTML;
let pas3val=boxes[pattern[2]].innerHTML;


if (pas1val !="" && pas2val!="" && pas3val!=""){
    if(pas1val===pas2val && pas2val===pas3val){
        console.log("winner");

        showwinner(pas1val);
    }
}
    }
}

newgame.addEventListener("click",resetgame)
rset.addEventListener("click",resetgame)
