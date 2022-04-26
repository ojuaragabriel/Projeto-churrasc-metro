// Carne - 400gr por pessoa + de 6 horas - 650
// Cerveja - 1200 ml por pessoa + 6 horas - 2000 ml
// Refrigerante/água - 1000 ml por pessoa + 6 horas 1500ml

// Crianças valem por 0,5 



let inputAdultos = document.getHelementById("adultos"); //Alerta de erro
let inputCriancas = document.getHelementById("criancas");
let inputDuração = document.getHelementById("duracao");
 
let resultado = document.getElementById("resultado");

function calcular() {
    console.log("Calculando...");

    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuração.value;


    let qdtTotalCarne = carnePP(duração) * adultos + (carnePP(adultos) / 2 * criancas);
    let qdtTotalCerveja = cervejaPP(duração) * adultos ;
    let qdtTotalBebidas = bebidasPP(duração) * adultos + (bebidasPP(adultos) / 2 * criancas);


    resultado.innerHTML =  `<p>${qdtTotalCarne}g de Carne</p>`
    resultado.innerHTML += `<p>${qdtTotalCerveja}ml de Cerveja</p>`
    resultado.innerHTML += `<p>${qdtTotalBebidas}ml de Bebidas</p>`
 }

function carnePP(duracao) {
    if (duracao >= 6){
        return 650;
    } else { 
         return 400;
    }
}
function cervejaPP(duracao) {
    if (duracao >= 6){
        return 2000;
    } else { 
         return 1200;
    }
}
function bebidasjaPP(duracao) {
    if (duracao >= 6){
        return 1500;
    } else { 
         return 1000;
    }
}
