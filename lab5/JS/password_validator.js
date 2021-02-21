function showPassword() {
    let tipo = document.getElementById("pwd").type;
    if(tipo === "password") {
        document.getElementById("pwd").type = ("type", "text"); 
    }
    else if(tipo === "text") {
        document.getElementById("pwd").type = ("type", "password"); 
    }

    return;
}
