let message = document.getElementById("message")
let form = document.getElementById("form")
let button = document.getElementById("button")
let link = document.getElementById("link")
const input = document.getElementById("input")

const SecretNumber = Math.floor(Math.random() * 100);
let attempts = 0 ;

function MyFunction(){
    let TxtValue = document.getElementById("input");
    
    if(TxtValue.value != ""){
            if(TxtValue.value != SecretNumber){
                if(TxtValue.value < SecretNumber){
                    message.innerText = "le nombre est plus grand que " + TxtValue.value;
                    message.style.color = "LightSteelBlue"
                    attempts++
                }else{
                    message.innerText = "le nombre est plus petit que " + TxtValue.value;
                    message.style.color = "LightSteelBlue"
                    attempts++
                }

            }else{
               message.innerText = "Bravo! vous l'avez trouve en " + attempts + " tentative";
               message.style.color = "green";
               link.style.display = "block"

            }
    }else{
        message.innerText = "Le champ est vide";
        message.style.color = "indianred"
    }

}

input.addEventListener('keydown', function(event){
    if(event.key === 'Enter'){
        let TxtValue = document.getElementById("input");
    
    if(TxtValue.value != ""){
            if(TxtValue.value != SecretNumber){
                if(TxtValue.value < SecretNumber){
                    message.innerText = "le nombre est plus grand que " + TxtValue.value;
                    message.style.color = "LightSteelBlue"
                    attempts++
                }else{
                    message.innerText = "le nombre est plus petit que " + TxtValue.value;
                    message.style.color = "LightSteelBlue"
                    attempts++
                }

            }else{
               message.innerText = "Bravo! vous l'avez trouve en " + attempts + " tentative";
               message.style.color = "green";
               link.style.display = "block"

            }
    }else{
        message.innerText = "Le champ est vide";
        message.style.color = "indianred"
    }
    }

})