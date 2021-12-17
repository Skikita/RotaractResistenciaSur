document.getElementById("btnEnviar").addEventListener("click", function(e){
    e.preventDefault();
    var nombres = document.getElementById("nombres").value;
    var apellidos = document.getElementById("apellidos").value;
    var apellidos = document.getElementById("apellidos").value;
    alert("Muchas gracias por registrarte "+nombres+" "+apellidos+", nos estaremos comunicando a la brevedad.");
    });