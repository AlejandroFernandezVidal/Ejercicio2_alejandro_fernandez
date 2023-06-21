var input = document.getElementById("input");
var lista = document.getElementById("lista");
var boton = document.getElementById("boton");

boton.addEventListener("click",function(){
    var newElement = document.createElement("li");
    newElement.textContent = input.value;
    lista.appendChild(newElement);
    input.value = "";
});