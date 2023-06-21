window.addEventListener("load", function () {
    var input = document.getElementById("input");
    var lista = document.getElementById("lista");
    var boton = document.getElementById("boton");
    var contador = document.getElementById("contador");
    var elementosLista = document.getElementsByTagName("LI");
    var contadorLista = 0;
    var buscar = document.getElementById("buscar");
    var botonBuscar = document.getElementById("botonBuscar");
    var listaBuscar = [];
    var verificarEspacio = /\s/;

    boton.addEventListener("click", function () {

        if (input.value === "" || verificarEspacio.test(input.value)) {
            alert("Debe introducir algún valor y que no contenga espacios");
        } else {
            var newElement = document.createElement("li");
            newElement.textContent = input.value;

            if (elementosLista.length > 0) {
                let i = 0;
                let encontrado = false;
                while (i < elementosLista.length && encontrado == false) {
                    if (newElement.textContent == elementosLista[i].textContent) {
                        encontrado = true;
                        alert("Ya existe un elemento con el mismo valor");
                    }
                    i++
                }

                if (encontrado == false) {
                    newElement.textContent = input.value;
                    lista.appendChild(newElement);
                    contadorLista += 1;
                }
            } else {
                newElement.textContent = input.value;
                lista.appendChild(newElement);
                contadorLista = 1;
            }
            contador.innerHTML = contadorLista;
        }
        input.value = "";
    });

    /*lista.addEventListener("click", function(event) {
        if(event.target.tagName.toLowerCase() == "li") {
            lista.removeChild(event.target);
            contadorLista -= 1;
            contador.innerHTML = contadorLista;
        }
  });*/

    lista.addEventListener("dblclick", function (event) {
        lista = document.getElementById("lista");
        if (event.target.tagName.toLowerCase() == "li") {
            newElement = document.createElement("input");
            newElement.value = event.target.textContent;
            lista.replaceChild(newElement, event.target);
        }

        newElement.addEventListener("keypress", function (event) {
            lista = document.getElementById("lista");
            if (event.code === "Enter") {
                let addElement = document.createElement("li");
                addElement.textContent = newElement.value;
                if(validarRepetidos(addElement)){
                    alert("Ya existe un elemento con el mismo contenido")
                } else {
                    if(!validarTexto(addElement)){
                        alert("Debe introducir algún valor y que no contenga espacios");
                    }else {
                        lista.replaceChild(addElement, newElement);
                    }
                }
            }
        });

        document.addEventListener("click", function edit (event) {
            lista = document.getElementById("lista");
            if (event.target.tagName.toLowerCase() != "input") {
                let addElement = document.createElement("li");
                addElement.textContent = newElement.value;
                if(validarRepetidos(addElement)){
                    alert("Ya existe un elemento con el mismo contenido")
                } else {
                    if(!validarTexto(addElement)){
                        alert("Debe introducir algún valor y que no contenga espacios");
                    }else {
                        lista.replaceChild(addElement, newElement);
                    }
                }
                document.removeEventListener("click", edit);
            }
        });
    });

    botonBuscar.addEventListener("click", function () {
        contadorLista = 0;
        listaBuscar = [];
        newElement = document.createElement("li");
        for (let i = 0; i < elementosLista.length; i++) {
            if (buscar.value == elementosLista[i].textContent) {
                newElement.textContent = elementosLista[i].textContent;
                listaBuscar.push(newElement);
                contadorLista += 1;
            }
            i++;
        }
        lista.innerHTML = "";
        for (let i = 0; i < listaBuscar.length; i++) {
            newElement.textContent = listaBuscar[i].textContent;
            lista.appendChild(newElement);
        }
        contador.innerHTML = contadorLista;
        buscar.value = "";
    });
});

function validarRepetidos(addElement) {
    let i = 0;
    let encontrado = false;
    var elementosLista = document.getElementsByTagName("LI");
    while (i < elementosLista.length && encontrado == false) {
        if (addElement.textContent == elementosLista[i].textContent) {
            encontrado = true;
        }
    i++
    }
    return encontrado;
}

function validarTexto(addElement){
    var verificarEspacio = /\s/;
    let validar = true;
    if (addElement.textContent === "" || verificarEspacio.test(addElement.textContent)) {
        validar = false;
    } 
    return validar;
}