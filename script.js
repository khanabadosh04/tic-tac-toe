let boxes= document.querySelectorAll(".box");
let reset= document.querySelector(".reset");
let newbtn= document.querySelector(".new");
let hide= document.querySelector(".hide");
let msg = document.querySelector(".msg"); 
let turn = "x"
const winpatterns= [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("the box is clicked");
        if(turn === "x"){
            box.innerHTML= "<p>X</p>"
            turn = "o"
        }
        else{
            box.innerHTML= "<p>O</p>"
            turn = "x"
        }
        box.disabled= true
        checkwinner()
    })
})

const checkwinner= ()=>{
    for(let pattern of winpatterns){
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;
        if(pos1 != "" && pos2!="" && pos3!=""){
            if(pos1 === pos2 && pos2=== pos3){
                showwinner()
            }
        }
    }
}
const showwinner= ()=>{
    msg.innerText= 'Congratulations'
    hide.classList.remove("hide")
    dis()
}
const dis= () =>{
    for (let box of boxes){
        box.disabled= "true"
    }
}
const resetgame =() =>{
    enable()
    turn = "x"
}
const enable= () =>{
    box.disabled = "false"
    box.innerText= ""
    hide.classList.add("hide")
}
newbtn.addEventListener("click", resetgame)
reset.addEventListener("click", resetgame)
