var main=document.getElementById("main");
let arr= [
    "./1.jpg",
    "./balb.jpg", 
    "./blue.jpg", 
    "./chu.jpg", 
    "./green.jpg", 
    "./orng.jpg", 
    "./pika.jpg",
    "./pink.jpg"];

let s ='';
for (let i =1; i<=110; i++){
    let r= Math.floor(Math.random()*arr.length);
    s += `<div class="card"><img src="${arr[r]}"></div>`;
}
 main.innerHTML =s;



