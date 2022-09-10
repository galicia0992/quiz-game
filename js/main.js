import { paises } from "./API.js";

const start = document.getElementById("start")
const tribia = document.getElementById("tribia")
const main = document.getElementById("main")
const reStart = document.getElementById("reStart")

//event listeners
start.addEventListener("click", inicio)


//contador 
let count = 0
//consumo de la api
async function mostrarPaises(){
        const paisesMostrar =  await paises()
        //guardia paises aleatorios dependiendo de los numeros que salgan
        let arrNumAle = []
        let paisesAle = []
        let numAle = [1, 2, 3]
        for(let i = 1; i <= 4; i++){
            arrNumAle.push(Math.round(Math.random() * (paisesMostrar.length - 1)))
        }
        arrNumAle.map(item =>{
            paisesAle.push(paisesMostrar[item])
        })
        let numRandom = numAle.sort(() =>{
            return Math.random() - 0.5 
            })
        let numRandomF = numRandom[0]
            
        const preguntaCapital = `<div class="card d-flex flex-column justify-content-center align-items-center animate__animated animate__bounceInLeft">
            <div class="mundoContainer">
              <img src="/undraw_adventure_4hum 1.svg" alt="" class="mundoImg">
            </div>
            <p class="cQ">Country Quizz</p>
            <p id="pregunta" class="pregunta">${paisesAle[numRandomF].capital} es la capital de</p>
            <div id="preguntas"></div>
          </div>`
          
        const preguntaLenguaje = `<div class="card d-flex flex-column justify-content-center align-items-center animate__animated animate__bounceInLeft">
            <div class="mundoContainer">
              <img src="/undraw_adventure_4hum 1.svg" alt="" class="mundoImg">
            </div>
            <p class="cQ">Country Quizz</p>
            <p id="pregunta" class="pregunta">que lenguaje se habla en ${paisesAle[numRandomF].name.common}</p>
            <div id="preguntas"></div>
          </div>`
          
        const preguntaBandera = `<div class="card d-flex flex-column justify-content-center align-items-center animate__animated animate__bounceInLeft">
          <div class="mundoContainer">
            <img src="/undraw_adventure_4hum 1.svg" alt="" class="mundoImg">
          </div>
          <p class="cQ">Country Quizz</p>
          <p id="pregunta" class="pregunta">A que pais pertenece esta bandera? <img src="${paisesAle[numRandomF].flags.png}" alt="" class="bandera"></p>
          <div id="preguntas"></div>
        </div>`
        const perdiste = `<div class="card d-flex flex-column justify-content-center align-items-center animate__animated animate__bounceInLeft">
        <div class="d-flex flex-column justify-content-center align-items-center mt-5">
          <p class="cQ">Country Quizz</p>
        <img src="/undraw_winners_ao2o 2.svg" alt="" class="imgWin">
        <p id="pregunta" class="results">results</p>
        <h1 id="pregunta" class="pregunta">you got <strong class="count">${count}</strong> correct answers</h1>
        </div>
        <button class="bubbly-button animate__animated animate__bounceInRight" onclick=location.reload()>Try Again</button>
      </div>`

      //selecciona las preguntas de manera aleatoria
        let arrPreguntas = [preguntaCapital, preguntaLenguaje, preguntaBandera]
        let preguntarBarajado = arrPreguntas.sort(() => {
            return Math.random() - 0.5 
            })
            main.innerHTML = preguntarBarajado[0]

     //pone los botones dependiendo del tipo de pregunta que haga
            paisesAle.map(item =>{
                console.log(item.languages)
                if(preguntarBarajado[0] == preguntaLenguaje){
                preguntas.innerHTML += `<button class="boton d-flex flex-row align-items-center" value=${Object.values(item.languages)}>${Object.values(item.languages)}</button>`
            }else{
                preguntas.innerHTML += `<button class="boton d-flex flex-row align-items-center" value="${item.name.common}">${item.name.common}</button>`
              }
            })
              
              
            const boton = document.querySelectorAll(".boton")
            boton.forEach(item2 =>{
                item2.classList.add("animate__animated", "animate__bounceInLeft")
                item2.addEventListener("click", funcBoton)
            })
            function funcBoton(e){
                const botonDis = document.querySelectorAll(".boton")
                if(e.target.value == paisesAle[numRandomF].name.common || e.target.value == Object.values(paisesAle[numRandomF].languages)){
                    e.target.classList.add("btnCorrecto")
                    e.target.classList.remove("boton")
                    count++
                    botonDis.forEach(item2 =>{
                        btnDisable(item2)
                        if(item2.className != "btnCorrecto"){
                            item2.classList.add("btnError")
                            item2.classList.remove("boton")
                        }
                    })   
                    setTimeout(() => {
                        mostrarPaises()
                    }, 800);
                }else{
                    setTimeout(() => {
                        main.innerHTML = perdiste
                    }, 2000);
                    console.log("respuesta incorrecta")
                    e.target.classList.remove("boton", "animate__bounceInLeft")
                    e.target.classList.add("animate__headShake", "btnError")
                    console.log(`obtuviste ${count} respuestas`)
                    
                    botonDis.forEach(item2 =>{
                        item2.disabled = true
                        if(e.target.value !== paisesAle[numRandomF].name.common || e.target.value !== Object.values(paisesAle[numRandomF].languages)){
                            if(item2.value == paisesAle[numRandomF].name.common || item2.value == Object.values(paisesAle[numRandomF].languages)){
                                item2.classList.add("btnCorrecto")
                            }
                        }
                    })
                    
                }
            }
        
}
function btnDisable(item){
    item.disabled = true
}

function inicio(){
    tribia.classList.add("animate__fadeOutRight")
    start.classList.add("animate__fadeOutLeft")
    mostrarPaises()
}

