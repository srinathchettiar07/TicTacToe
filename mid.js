let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector(".reset");
let newbtn = document.querySelector(".new");
let msg = document.querySelector("#msg");
let msgcontainer= document.querySelector(".msg-container");
let mid = document.querySelector(".rad");



let winPattern = [ [0,1,2],
                [0,3,6],
                [0,4,8],
                [1,4,7],
                [2,5,8],
                [2,4,6],
                [3,4,5],
                [6,7,8],
            ];
            let turn=true;
            let count;
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked");
        if(turn===true)
        {
            box.innerText = "O";
            turn=false;
        }
        else{
            box.innerText = "X";
            turn=true;
        }
       
        box.disabled=true;
        checkwinner();
    });
    });
        const checkwinner = () => {
            for( let pattern of winPattern)
                {
                      let pos1= boxes[pattern[0]].innerText;
                      let pos2= boxes[pattern[1]].innerText;
                      let pos3= boxes[pattern[2]].innerText;
        
                      if(pos1!="" && pos2!="" && pos3!=""){
                        if(pos1===pos2 && pos2===pos3)
                            {
                                console.log(" winner" , pos1)
                                mid.classList.remove("heading")
                                showWinner(pos1);

                            }
                        }

                }
                
        };
        
        const showWinner = (winner) => {
         msg.innerText=`The winner is ${winner}`;
         msgcontainer.classList.remove("hide");    
        disabled(); 
        

        };
        const resetGame  = () => {
            turn=true;
            for(let box of boxes)
                {
                    box.disabled=false;
                    box.innerText="";
                }
            msgcontainer.classList.add("hide");  
            
        };
        const disabled = () => {
            for(let box of boxes )
                {
                    box.disabled=true;
                }
    
        }

        resetbtn.addEventListener("click",resetGame);
        newbtn.addEventListener("click",resetGame);
        
        