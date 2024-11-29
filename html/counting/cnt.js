let de=document.getElementById("de");
let re=document.getElementById("re");
let inc=document.getElementById("inc");
let a=document.getElementById("a");

let count=0;

function updateDisplay(){
    a.innerText = count;
}

de.addEventListener("click", () => {
    count--;
    updateDisplay();
}); 

re.addEventListener("click", () => {
    count=0;
    updateDisplay();
}); 

inc.addEventListener("click", () =>{
    count++;
    updateDisplay();
}); 
updateDisplay();


