function onlyLetters(event){

    const pressedKey = event.key;
    const letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", 
                    "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
                    "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",
                    "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
                    " ", "á", "é", "í", "ó", "ú", "Á", "É", "Í", "Ó", "Ú", "ñ", "Ñ"];

    if(!letters.includes(pressedKey)){
        return false
    }

}

function onlyNumbers(event){
    const pressedKey = event.key;
    const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

    if(!numbers.includes(pressedKey)){
        return false
    }

}

function validateEmail() {
    const email = document.getElementById("correo").value;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailRegex.test(email)) {
        
        return false;
    }
    return true;
    
}

function validateBio(event) {
    const key = event.key;
    const regex = /^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑ\s.,!?()-]$/;

    if (!regex.test(key)) {
        return false;
    }

    return true;
}

