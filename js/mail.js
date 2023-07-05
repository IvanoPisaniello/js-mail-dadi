const inputEmail = document.getElementById("exampleInputEmail1");

const btnLogin = document.getElementById("btn-login");



btnLogin.addEventListener("click", function () {
    const valueEmail = inputEmail.value;

    const emailList = ["ivanop92@gmail.com", "aldobaglio@gmail.com", "giovannistorti@libero.it", "giacomoporetti@gmail.com"];
    const emailDaCercare = valueEmail;
    let emailRight = false;
    for (let i = 0; i < emailList.length; i++) {
        const currentEmail = emailList[i];

        if (currentEmail === emailDaCercare) {
            emailRight = true;

        }
    }

    if (emailRight === true) {
        document.getElementById("emailHelp").innerHTML = ("L'email fa già parte del database, prova ad effettuare il login")

    } else {
        document.getElementById("emailHelp").innerHTML = ("L'email non fa parte del database, clicca Registra per Registrarti")
    }

});






