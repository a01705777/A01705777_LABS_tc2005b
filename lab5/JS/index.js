const boton = document.getElementById("boton");

boton.addEventListener('click', function() {
    let user = document.getElementById("user").value;
    let password = document.getElementById("password").value;
    
    let botonSiguiente = document.getElementById("boton-siguiente");
    let veredicto = document.getElementById("veredicto");

    if(user === "3251" && password === "hola") {
        botonSiguiente.innerHTML = '<a href="../HTML/final.html"/><button>Siguiente</button></a>';
        veredicto.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;Adelante agente...";
    }
    else {
        veredicto.innerHTML = "Identidad Desconocida";
    }    
});