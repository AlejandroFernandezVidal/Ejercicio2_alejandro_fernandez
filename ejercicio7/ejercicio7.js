var input = document.getElementById("input");
var lista = document.getElementById("lista");
var boton = document.getElementById("boton");
var contador = document.getElementById("contador");
var elementosLista = document.getElementsByTagName("LI");

boton.addEventListener("click",function(){
    
    let verificarEspacio = /\s/;

    if(input.value === "" || verificarEspacio.test(input.value)){
        alert("Debe introducir algún valor y que no contenga espacios");
    }else {
        var newElement = document.createElement("li");
        newElement.textContent = input.value;

        if(elementosLista.length > 0){
            let i = 0;
            let encontrado = false;
            while(i < elementosLista.length && encontrado == false){
                if(newElement.textContent == elementosLista[i].textContent){
                    encontrado = true;
                    alert("Ya existe un elemento con el mismo valor");
                }
                i++
            }
            if(encontrado == false){
                newElement.textContent = input.value;
                lista.appendChild(newElement);
            }
        }else{
            newElement.textContent = input.value;
            lista.appendChild(newElement);
        }
        contador.innerHTML = elementosLista.length;
    }
    input.value = "";
});

lista.addEventListener("click", function(event) {
    if (event.target.tagName.toLowerCase() == "li") {
      lista.removeChild(event.target);
      contador.innerHTML = elementosLista.length;
    }
  });