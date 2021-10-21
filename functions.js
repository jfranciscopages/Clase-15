/* 
let colors = ["rgb(11, 14, 80)",
    "rgb(80, 124, 45)",
    "rgb(45, 124, 111)",
    "rgb(111, 80, 100)",
    "rgb(100, 202, 127)",
    "rgb(127, 33, 45)"]
*/
let colors = [];

let numberOfSquares = 6;

let allSquares = document.querySelectorAll(".square");
let congratsSpan = document.getElementById("message");
let bodyColor = document.body.style.backgroundColor;
let botonReset = document.getElementById("reset");
let botonEasy = document.getElementById("easy");
let botonHard = document.getElementById("hard")

function changeColors(color){
    for(let i = 0; i < allSquares.length; i++) {
        allSquares[i].style.backgroundColor = color;
    }
}

function pickColor(){
    let numeroRandom = Math.floor(Math.random()*numberOfSquares)
    console.log(numeroRandom)
    return numeroRandom
}

function randomColor(){
    let r = Math.ceil(Math.random()*255)
    let g = Math.ceil(Math.random()*255)
    let b = Math.ceil(Math.random()*255)

    return "rgb("+r+", " +g+", " +b+")"
}

function generateRandomColors(lengthArray){
    for (let i = 0; i <= lengthArray; i++){
        colors[i] = randomColor()
    }
}

generateRandomColors(numberOfSquares)

// let pickedColor = colors[3] //7. creo la letiable pickedColor

let pickedColor = colors[pickColor()] //Asignale lo que devuelve la función pickColor a nuestra letiable pickedColor

let titleSpan = document.getElementById("colorDisplay")
titleSpan.textContent = pickedColor //le doy el valor al texto de colorDisplay

for (let i = 0; i < allSquares.length; i++){
    allSquares[i].style.backgroundColor = colors[i];
    allSquares[i].addEventListener("click", function(){
        let clickedColor = this.style.backgroundColor //para saber que color tenía el cuadrado que clickeamos
        console.log(clickedColor)
        if (clickedColor === pickedColor){ //comparo clicked y picked a ver si son el mismo
            document.querySelector("#message").style.color = "white;"
            document.querySelector("#message").textContent = "Correct!" //Si son el mismo color, primero mostremos el mensaje Correct! en nuestro span.
            document.querySelector("h1").style.backgroundColor = pickedColor //Le asignamos al h1 el background del color ganador
            changeColors(pickedColor)
        } else {
            this.style.backgroundColor = "#232323" // Si son distintos, le damos a ese cuadrado el background color del body,
            document.querySelector("#message").style.color = "white;"
            document.querySelector("#message").textContent = "Try Again"
        }
    })
}

botonReset.addEventListener("click", function(){
    botonReset.innerText = "New Colors"
    generateRandomColors(numberOfSquares)
    pickedColor = colors[pickColor()]
    titleSpan.textContent = pickedColor
    document.querySelector("#message").textContent = ""
    document.querySelector("h1").style.backgroundColor = "#232323"

    for (let i = 0; i < allSquares.length; i++){
        allSquares[i].style.backgroundColor = colors[i];
        allSquares[i].addEventListener("click", function(){
            let clickedColor = this.style.backgroundColor //para saber que color tenía el cuadrado que clickeamos
            console.log(clickedColor)
            if (clickedColor === pickedColor){ //comparo clicked y picked a ver si son el mismo
                document.querySelector("#message").style.color = "white;"
                document.querySelector("#message").textContent = "Correct!" //Si son el mismo color, primero mostremos el mensaje Correct! en nuestro span.
                document.querySelector("h1").style.backgroundColor = pickedColor //Le asignamos al h1 el background del color ganador
                changeColors(pickedColor)
                botonReset.innerText = "Play Again?"
            } else {
                this.style.backgroundColor = "#232323" // Si son distintos, le damos a ese cuadrado el background color del body,
                document.querySelector("#message").style.color = "white;"
                document.querySelector("#message").textContent = "Try Again"
            }
        })
    }

})

botonEasy.addEventListener("click", function(){
    botonEasy.className = "selected";
    botonHard.className = "";
    numberOfSquares = 3;
    generateRandomColors(numberOfSquares);
    pickedColor = colors[pickColor()] //elejimos el ganador
    titleSpan.textContent = pickedColor //lo mostramos en el titulo
    document.querySelector("#message").textContent = ""
    document.querySelector("h1").style.backgroundColor = "#232323"

    for (let i = 3; i < allSquares.length; i++){ //oculta cuadrados
        allSquares[i].style.display = "none"
    }

    for (let i = 0; i < allSquares.length; i++){
        allSquares[i].style.backgroundColor = colors[i];
        allSquares[i].addEventListener("click", function(){
            let clickedColor = this.style.backgroundColor //para saber que color tenía el cuadrado que clickeamos
            console.log(clickedColor)
            if (clickedColor === pickedColor){ //comparo clicked y picked a ver si son el mismo
                document.querySelector("#message").style.color = "white;"
                document.querySelector("#message").textContent = "Correct!" //Si son el mismo color, primero mostremos el mensaje Correct! en nuestro span.
                document.querySelector("h1").style.backgroundColor = pickedColor //Le asignamos al h1 el background del color ganador
                changeColors(pickedColor)
                botonReset.innerText = "Play Again?"
            } else {
                this.style.backgroundColor = "#232323" // Si son distintos, le damos a ese cuadrado el background color del body,
                document.querySelector("#message").style.color = "white;"
                document.querySelector("#message").textContent = "Try Again"
            }
        })
    }



})

botonHard.addEventListener("click", function(){
    botonEasy.className = "";
    botonHard.className = "selected";
    numberOfSquares = 6;
    generateRandomColors(numberOfSquares);
    pickedColor = colors[pickColor()] //elejimos el ganador
    titleSpan.textContent = pickedColor //lo mostramos en el titulo
    document.querySelector("#message").textContent = ""
    document.querySelector("h1").style.backgroundColor = "#232323"

    for (let i = 0; i < allSquares.length; i++){ //oculta cuadrados
        allSquares[i].style.display = "block"
    }

    for (let i = 0; i < allSquares.length; i++){
        allSquares[i].style.backgroundColor = colors[i];
        allSquares[i].addEventListener("click", function(){
            let clickedColor = this.style.backgroundColor //para saber que color tenía el cuadrado que clickeamos
            console.log(clickedColor)
            if (clickedColor === pickedColor){ //comparo clicked y picked a ver si son el mismo
                document.querySelector("#message").style.color = "white;"
                document.querySelector("#message").textContent = "Correct!" //Si son el mismo color, primero mostremos el mensaje Correct! en nuestro span.
                document.querySelector("h1").style.backgroundColor = pickedColor //Le asignamos al h1 el background del color ganador
                changeColors(pickedColor)
                botonReset.innerText = "Play Again?"
            } else {
                this.style.backgroundColor = "#232323" // Si son distintos, le damos a ese cuadrado el background color del body,
                document.querySelector("#message").style.color = "white;"
                document.querySelector("#message").textContent = "Try Again"
            }
        })
    }

})