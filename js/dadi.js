const numRandomPc = Math.random();
const NumRandomUtente = Math.random();

const btnLogin = document.getElementById("btn-login");


const min = 1;
const max = 6;

const finalNumber = Math.floor(Math.random() * (max - min + 1)) + min;
const finalNumberUtente = Math.floor(Math.random() * (max - min + 1)) + min;


console.log(finalNumber);

console.log(finalNumberUtente)

document.getElementById("box1").innerHTML = (finalNumber);
document.getElementById("box2").innerHTML = (finalNumberUtente);


btnLogin.addEventListener("click", function () {

    const finalNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    const finalNumberUtente = Math.floor(Math.random() * (max - min + 1)) + min;


    console.log(finalNumber);

    console.log(finalNumberUtente)

    document.getElementById("box1").innerHTML = (finalNumberUtente);
    document.getElementById("box2").innerHTML = (finalNumber);

    if (finalNumberUtente > finalNumber) {
        document.getElementById("win-1").innerHTML = ("HAI VINTO!");
    } else if (finalNumberUtente === finalNumber) {
        document.getElementById("win-1").innerHTML = ("PAREGGIO!");
    }
    else {
        document.getElementById("win-1").innerHTML = ("HAI PERSO!");
    }
});



