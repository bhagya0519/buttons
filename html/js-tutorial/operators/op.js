/*let age =18;
if (age >=18){
    alert("you can vote!")
}
else{
    alert("You cannot vote!")
}*/



/*let age=18;
let hasVoterCard="no";
if(age>=18 && hasVoterCard == "Yes"){
    alert("You can vote!");
} else if(age>=18 && hasVoterCard == "no"){
    alert("Get your voter id-Card");
} else {
    alert("You cannot vote!");
}*/



/*let isLoggedin = 1; //if 0 loggedout if 1 login

if(isLoggedin == 0){
    document.write("Login");
} else {
    document.write("Logout");
}*/

(or)

let isLoggedin = 0;
let option = isLoggedin == 1 ? "Logout" : "Login";
        //condition             true      false
    document.write(option);