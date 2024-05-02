const form = document.querySelector("#form");
const error = document.querySelector("#messageError");


form.addEventListener("submit", function(event) {
    const email = document.querySelector("#Email");
    const password = document.querySelector("#Password");
    event.preventDefault();
    if(email.value == "student@gmail.com" && password.value == "120921") {
        window.location.href ="mainpage.html";
    } else {
        error.textContent="diso ioo";
    }
})