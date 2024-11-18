var urlParams = new URLSearchParams(window.location.search);
var username = urlParams.get("usuario")
document.addEventListener("DOMContentLoaded", function(){
    if(username) {
        document.getElementById("bienvenida").textContent = "Bienvenido/a, " + username + "!"
    } else {
        document.getElementById("bienvenida").textContent = "Bienvenido, usuario sin registrar."
    }
})

document.getElementById("loginForm").addEventListener("submit", function(event){
    event.preventDefault();
                    
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username === "mel" && password === "123") {
        var url = "admin.html?usuario=" + username;
        window.location.href = url;
    } else {
        alert("Usuario Incorrecto")
    }
})