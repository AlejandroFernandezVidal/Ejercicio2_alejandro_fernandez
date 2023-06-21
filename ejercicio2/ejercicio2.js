var boton = document.getElementById("boton");
var input = document.getElementById("input");
var resultado = document.getElementById("respuesta");

boton.addEventListener("click",function(){
    resultado.textContent = input.value;
    input.value = "";
});