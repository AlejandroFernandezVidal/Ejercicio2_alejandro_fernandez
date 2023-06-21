var input = document.getElementById("input");
var lista = document.getElementById("lista");
var boton = document.getElementById("boton");

boton.addEventListener("click",function(){

    let elementosLista = document.getElementsByTagName("LI");

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
    input.value = "";
});