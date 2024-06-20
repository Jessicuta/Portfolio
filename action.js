// script.js
let lastScrollTop = 0;
const header = document.querySelector('.header');

window.addEventListener("scroll", function() {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    if (currentScroll > lastScrollTop) {
        // Scroll down
        header.style.top = "-100px"; // Adjust the value as needed
    } else {
        // Scroll up
        header.style.top = "0";
    }
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
}, false);

function hideMenu() {
    document.getElementById('navLinks').style.display = 'none';
}

function showMenu() {
    document.getElementById('navLinks').style.display = 'flex';
}



function validateEmail() {
    var email = document.getElementById("email").value;
    var emailError = document.getElementById("email-error");

    if (email.length == 0) {
        emailError.innerHTML = "Email is required";
        return false;
    }
    if (!email.match(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/)) {
        emailError.innerHTML = "Email is invalid";
        return false;
    }
    emailError.innerHTML = ""; // Clear the error message if email is valid
    return true;
}

function validateName() {
    var name = document.getElementById("name").value;
    var nameError = document.getElementById("name-error");

    if (name.length == 0) {
        nameError.innerHTML = "A name is required";
        return false;
    }
    if (!name.match(/^[A-Za-z]+([ '-][A-Za-z]+)*$/)) {
        nameError.innerHTML = "A full name is invalid";
        return false;
    }
    nameError.innerHTML = "";
    return true;
}

function validateMessage() {
    var message = document.getElementById("message").value;
    var messageError = document.getElementById("message-error");

    if (message.length == 0) {
        messageError.innerHTML = "A message is required";
        return false;
    }
    if (message.length < 10) { // Assuming a minimum message length of 10 characters
        messageError.innerHTML = "Message is too short";
        return false;
    }
    messageError.innerHTML = "";
    return true;
}

