var boton = document.getElementById("boton");

boton.addEventListener("click",function(){
    let randomRed= Math.floor(Math.random() * (255+1-0) + 0);
    let randomGreen= Math.floor(Math.random() * (255+1-0) + 0);
    let randomBlue= Math.floor(Math.random() * (255+1-0) + 0);
    let randomA= Math.floor(Math.random() * (255+1-0) + 0);
    document.body.style.backgroundColor = `rgba(${randomRed},${randomGreen},${randomBlue},${randomA})`;
});