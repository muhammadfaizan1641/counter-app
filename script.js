const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
let count = 0 ;
const userInterface = document.getElementById("circle-new");
const reset = document.getElementById("reset");
plus.addEventListener("click",()=>{
    count++;
    userInterface.innerText = count;
})
minus.addEventListener("click",()=>{
    if(count==0){
    userInterface.innerText = 0;
    }
    else{
    count--;    
    userInterface.innerText = count;
    }

})
reset.addEventListener("click",()=>{
    count=0;
    userInterface.innerText = 0;
})

