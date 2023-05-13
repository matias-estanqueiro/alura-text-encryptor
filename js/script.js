function encriptString(message) {
    let encMessage = "";
    const a = "ai";
    const e = "enter";
    const i = "imes";
    const o = "ober";
    const u = "ufat";

    message.split('').forEach(element => {
        char = element;
        if (element == 'a') { char = element.replace('a', a) };
        if (element == 'e') { char = element.replace('e', e) };
        if (element == 'i') { char = element.replace('i', i) };
        if (element == 'o') { char = element.replace('o', o) };
        if (element == 'u') { char = element.replace('u', u) };
        encMessage = encMessage + char;
    });
    return encMessage;
}

function encriptButton() {

    let regExp = /[A-Z]/;
    
    let imageEmpty = document.getElementById('img-empty');
    let messageEmpty1 = document.getElementById('message1-empty');
    let messageEmpty2 = document.getElementById('message2-empty');
    let displayMessage = document.getElementById('display-message');

    message = document.getElementById("user-message").value;

    if (message == '') { 
        Swal.fire({
            title: 'Warning!',
            text: 'You didn\'t enter any message!',
            icon: 'error',
            confirmButtonText: 'OK'
        });
        displayMessage.style.display = 'none'
        imageEmpty.style.display = 'block';
        messageEmpty1.style.display = 'block';
        messageEmpty2.style.display = 'block';
    } else if (regExp.test(message)) {
        Swal.fire({
            title: 'Uppercase characters found!',
            text: "Please replace uppercase characters with lowercase and try again.",
            icon: 'warning',
            confirmButtonText: 'OK'
        })
    } else {
        if (window.matchMedia("(min-width: 992px)")) { displayMessage.style.display = 'block'; }
        displayMessage.innerText = encriptString(message);
        imageEmpty.style.display = 'none';
        messageEmpty1.style.display = 'none';
        messageEmpty2.style.display = 'none';
    }
}