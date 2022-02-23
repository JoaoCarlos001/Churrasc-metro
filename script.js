
//alert("fala jovem")

let inputAdultos = document.getElementById("adultos");
let inputCrianças = document.getElementById("criancas");
let inputDuraçao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");

function calcular() {
    
    let adultos = inputAdultos.value;
    let criancas = inputCrianças.value;

    let quantTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao) / 2 * criancas);
    let quantTotalCerveja = cervejaPP(duracao) * adultos;
    let quantTotalBebidas = bebidasPP(duracao) * adultos + (bebidasPP(duracao) / 2 * criancas);
    
    resultado.innerHTML = `<p>${quantTotalCarne / 1000}Kg de Carne</p>`
    resultado.innerHTML += `<p>${Math.ceil(quantTotalCerveja / 355)} Latas de Cerveja</p> `
    resultado.innerHTML += `<p>${Math.ceil(quantTotalBebidas / 1000)} Litros de Bebidas</p> `

    
}

function onOver(elemento){
    elemento.style.backgroundColor = "red";
}

function onOut(elemento){
    elemento.style.backgroundColor = " white";
}

function carnePP(duracao){
    if (duracao >= 6){
        return 2000;
    } else{
        return 1200;
    }
}

function cervejaPP(duracao){
    if (duracao >= 6){
        return 2000;
    } else{
        return 1200;
    }
}

function bebidasPP(duracao){
    if (duracao >= 6){
        return 1500;
    } else{
        return 1000;
    }
}